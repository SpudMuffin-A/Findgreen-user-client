import React from "react";
import { Link } from "react-router-dom";
import ImageLight from "../assets/img/login-findgreen.png";
import ResetPasswordForm from "../components/Forms/ResetPasswordForm";
function ResetPassword() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          aria-hidden="true"
          className="object-cover w-full h-screen dark:hidden"
          src={ImageLight}
          alt="Office"
        />
      </div>
      <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <h3 className="text-xl">
            <h1 className="mb-4 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Reset Password.
          </h1>
          </h3>
          <ResetPasswordForm />
        </div>
      </main>
    </div>
  );
}

export default ResetPassword;