import React from "react";
import logo from "../../src/assets/logo.png";

const Login = () => {
  return (
    <div className="max-w-screen-2xl h-screen bg-login-background bg-cover">
      <div className="w-2/5 mx-auto h-full shadow-2xl brightness-105 bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 mx-auto">
            <img src={logo} alt="" />
          </div>
          <div className="uppercase kode-mono font-extrabold">
            <h2>fairtarde made easy</h2>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <div>
            <h1 className="font-extrabold text-4xl kode-mono uppercase">
              Login
            </h1>
          </div>
          <div className="w-4/5">
            <div className="p-8">
              <input
                className="w-full rounded-lg"
                autocomplete="off"
                required="required"
                type="password"
                name="user[password]"
                id="user_password"
                placeholder="Email"
              />
            </div>
            <div className="px-8 pb-8">
              <input
                className="w-full rounded-lg"
                autocomplete="off"
                required="required"
                type="password"
                name="user[password]"
                id="user_password"
                placeholder="Password"
              />
            </div>

            <div className="w-full px-8 pb-4">
              <button
                className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey w-full"
                type="submit"
                name="commit"
                value="Sign Up"
                data-disable-with="Sign Up"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
