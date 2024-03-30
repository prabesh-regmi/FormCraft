import React from "react";

function LoginMethod({ icon, children }) {
  return (
    <div className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 btn-primary hover:cursor-pointer">
      <div className="flex w-full gap-1 justify-center items-center">
        <div>{icon}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LoginMethod;
