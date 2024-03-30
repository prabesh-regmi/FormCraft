import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FacebookRoundIcon, GoogleIcon } from "~/assets/Svg";
import LoginMethod from "~/components/common/login_method/LoginMethod";
import { postOauthLogin } from "~/services/handlers/RegisterHandler";
import Loading from "~/components/common/Loading";

const GOOGLE_CLIENT = import.meta.env.VITE_GOOGLE_CLIENT;
const FACEBOOK_CLIENT = import.meta.env.VITE_FACEBOOK_CLIENT;
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

export function GoogleLoginBtn({ setLoading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const oauthLogin = async (payload) => {
    setLoading(true);
    const user = await postOauthLogin(payload, dispatch);
    setLoading(false);
    if (user) {
      if (user.role === "user") {
        navigate(-1);
      } else {
        navigate("/admin/dashboard");
      }
    }
  };

  return (
    <LoginSocialGoogle
      client_id={`${GOOGLE_CLIENT}`}
      redirect_uri={`${FRONTEND_URL}/login`}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      onResolve={({ data }) => {
        if (data?.email?.length) {
          oauthLogin({ ...data, provider: "Google" });
        }
      }}
      onReject={() => {
        setLoading(false);
        toast.error("Cannot login. Please try again ! ");
      }}
      onLoginStart={() => setLoading(true)}
    >
      <LoginMethod icon={<GoogleIcon />}>
        <p>Log in with Google</p>
      </LoginMethod>
    </LoginSocialGoogle>
  );
}

export function FacebookLoginBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const oauthLogin = async (payload) => {
    setLoading(true);
    const response = await postOauthLogin(dispatch, payload);
    setLoading(false);
    if (response) {
      navigate("/");
    }
  };
  if (loading) return <Loading />;
  return (
    <LoginSocialFacebook
      appId={`${FACEBOOK_CLIENT}`}
      fieldsProfile="id,first_name,last_name,name,name_format,picture"
      redirect_uri={`${FRONTEND_URL}/login`}
      onResolve={({ data }) => {
        if (data?.email?.length) {
          oauthLogin({ ...data, provider: "Facebook" });
        }
      }}
      onReject={() => {
        toast.error("Cannot login. Please try again ! ");
      }}
    >
      <LoginMethod icon={<FacebookRoundIcon />}>
        <p>Log in with Facebook</p>
      </LoginMethod>
    </LoginSocialFacebook>
  );
}
