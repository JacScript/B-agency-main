import React from "react";
import logo from "../../src/assets/logo.png";
import { FcGoogle } from "react-icons/fc";

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

                <div className="px-8 flex items-center justify-center relative ">
                  <div className="w-full mt-1 h-[1px] bg-slate-500"></div>
                  <p className="absolute bg-white px-2 font-bold">or</p>
                  </div> 

                   <div className="w-full px-8 py-4">
                  <button
                    className="bg-neutralDGrey shadow-2xl text-brandPrimary py-2 px-4 transition-all duration-300 rounded hover:bg-brandPrimary hover:text-white w-full flex items-center justify-center"
                    type="submit"
                    name="commit"
                    value="Sign Up"
                    data-disable-with="Sign Up"
                  >
                   <span className="mr-4"> <FcGoogle /></span>
                    <span>Log in with Google</span>
                  </button>
                </div>  
                 
                 <div className="text-xs">
                   <p className="text-center "><a className="cursor-pointer text-brandPrimary" href="">Forget your password?</a></p>

                   <p className="text-center py-2"><a className="cursor-pointer text-brandPrimary" href="">Not registered yet? Sign up</a></p>

                   <p className="text-center"><a className="cursor-pointer text-brandPrimary" href="">Didn't receive confirmation instructions?</a></p>
                 </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
