/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { loginHandler } from "~/services/handlers/LoginHandler";
import { SpinnerIcon } from "~/assets/Svg";
import Loading from "~/components/common/Loading";
import { FacebookLoginBtn, GoogleLoginBtn } from "./OAuth";

function LoginPage() {
  const [isLogging, setIsLogging] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const { isAuthenticated } = useSelector((store) => store.login);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);
  const handleToggle = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const OnSubmit = async (payload) => {
    setIsLogging(true);
    const user = await loginHandler(dispatch, payload);
    if (user) {
      reset();
      if (user.role === "user") {
        navigate(-1);
      } else {
        navigate("/admin/dashboard");
      }
    }
    setIsLogging(false);
  };
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl md:mt-0 xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 ">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-center text-gray-900 text-purple-800 uppercase md:text-2xl">
              Welcome back
            </h1>
            <div className="flex flex-col justify-between gap-3 login-with xs:flex-row xs:gap-2 ">
              <div className="flex-grow hidden">
                <GoogleLoginBtn setLoading={setIsLogging} />
              </div>
              <div className="flex-grow hidden">
                <FacebookLoginBtn setLoading={setIsLogging} />
              </div>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(OnSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-bodyText rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email cannot be empty",
                  })}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                  <span className="text-red-600">*</span>
                </label>
                <div className="relative flex w-full h-full">
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-bodyText rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your Password"
                    {...register("password", {
                      required: "Password cannot be empty",
                    })}
                    // className="z-10"
                  />

                  <div className="absolute right-0 flex items-center justify-center h-full mr-3">
                    {passwordShown ? (
                      <VisibilityOutlinedIcon onClick={handleToggle} />
                    ) : (
                      <VisibilityOffOutlinedIcon onClick={handleToggle} />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <p className="text-gray-500 ">Remember me</p>
                  </div>
                </div>
                <NavLink
                  className="text-sm font-medium text-primary-600 hover:underline"
                  to="/login"
                >
                  Forgot password?
                </NavLink>
              </div>
              <button
                type="submit"
                disabled={isLogging}
                className="w-full disabled:cursor-not-allowed text-white h-12 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn-primary"
              >
                {isLogging ? (
                  <div className="flex justify-center">
                    <SpinnerIcon className="w-8 text-white animate-spin" />
                  </div>
                ) : (
                  <span>Sign in</span>
                )}
              </button>
              <p className="text-sm font-light text-gray-500">
                Don&apos;t have an account yet?
                <NavLink
                  className="ml-1 text-sm font-medium text-blue-500 hover:underline hover:text-blue-700"
                  to="/register"
                >
                  SignUp
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      {isLogging && <Loading />}
    </section>
  );
}

export default LoginPage;
