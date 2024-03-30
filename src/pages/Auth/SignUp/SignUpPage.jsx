/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch, useSelector } from "react-redux";

import { SpinnerIcon } from "~/assets/Svg";
import { RegisterHandler } from "~/services/handlers/RegisterHandler";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((store) => store.login);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);

  const validatePasswordMatch = (value) => {
    const password = getValues("password");
    return value === password || "Passwords do not match";
  };
  const validatePhoneNumber = (value) =>
    isValidPhoneNumber(value) || "Invalid phone number";
  const redBorder = classnames("border border-red-600 bg-red-50");

  const OnSubmit = async (payload) => {
    setIsLoading(true);
    const registered = await RegisterHandler(dispatch, payload);
    if (registered) {
      navigate("/");
      reset();
    }
    setIsLoading(false);
  };
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
        <div className="w-full bg-white  rounded-lg shadow-xl  md:mt-0 sm:max-w-xl xl:p-0">
          <div className="p-6 space-y-3 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl uppercase text-center text-purple-800">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-7"
              onSubmit={handleSubmit(OnSubmit)}
            >
              <div className="w-full flex flex-col gap-3 sm:flex-row">
                <div className="basis-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.firstName ? redBorder : ""
                    }`}
                    placeholder="Enter you First Name"
                    {...register("firstName", {
                      required: "First Name cannot be empty",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm pt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="basis-1/2">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.lastName ? redBorder : ""
                    }`}
                    placeholder="Enter you Last Name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm pt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    errors.username ? redBorder : ""
                  }`}
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username cannot be empty",
                  })}
                />
                {errors.username && (
                  <p className="text-red-600 text-sm pt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
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
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    errors.email ? redBorder : ""
                  }`}
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email cannot be empty",
                  })}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm pt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number
                  <span className="text-red-600">*</span>
                </label>
                <PhoneInputWithCountry
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  defaultCountry="NP"
                  control={control}
                  rules={{
                    required: "Phone Number cannot be empty",
                    validate: validatePhoneNumber,
                  }}
                />
                {errors.phoneNumber && (
                  <p className="text-red-600 text-sm pt-1">
                    {errors.phoneNumber.message}
                  </p>
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
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.password ? redBorder : ""
                    }`}
                    placeholder="Enter your Password"
                    {...register("password", {
                      required: "Password cannot be empty",
                    })}
                  />

                  <div className="absolute right-0 flex justify-center items-center h-full mr-3">
                    {passwordShown ? (
                      <VisibilityOutlinedIcon
                        onClick={() => {
                          setPasswordShown(!passwordShown);
                        }}
                      />
                    ) : (
                      <VisibilityOffOutlinedIcon
                        onClick={() => {
                          setPasswordShown(!passwordShown);
                        }}
                      />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-600 text-sm pt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm Password
                  <span className="text-red-600">*</span>
                </label>
                <div className="relative flex w-full h-full">
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.confirmPassword ? redBorder : ""
                    }`}
                    placeholder="Re Enter you Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password cannot be empty",
                      validate: validatePasswordMatch,
                    })}
                  />

                  <div className="absolute right-0 flex justify-center items-center h-full mr-3">
                    {passwordShown ? (
                      <VisibilityOutlinedIcon
                        onClick={() => {
                          setPasswordShown(!passwordShown);
                        }}
                      />
                    ) : (
                      <VisibilityOffOutlinedIcon
                        onClick={() => {
                          setPasswordShown(!passwordShown);
                        }}
                      />
                    )}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm pt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    {...register("terms", {
                      required: "You must accept the terms and conditions",
                    })}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the Terms and Conditions
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full disabled:cursor-not-allowed text-white h-12 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn-primary"
              >
                {isLoading ? (
                  <div className="flex justify-center">
                    <SpinnerIcon className="w-8 animate-spin text-white" />
                  </div>
                ) : (
                  <span>Create an account</span>
                )}
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?
                <NavLink to="/login" className="text-blue-700 ml-1">
                  Login
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
