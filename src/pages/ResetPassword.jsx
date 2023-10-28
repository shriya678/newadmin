import React, { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";
import axios from "axios";

export default function ResetPassword() {
  const { setPage } = useContext(RecoveryContext);

  const [token,setToken] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();

  function changePassword() {

    if (token && password && confirmPassword) {
        // const OTP = Math.floor(Math.random() * 9000 + 1000);
        // console.log(OTP);
        // setOTP(OTP);
  
        axios
          .post(
            `https://service-provider-apis.onrender.com/api/v1/superadmin/resetPassword/${token}`,
            
            {
              password:password,
              confirmPassword:confirmPassword
            }
          )
          .then(() => setPage("login"))
          .catch(console.log);
        return;
      }
      return alert("Please enter Details");

  }

  return (
    <div>
      <section className="bg-gray-50 w-screen ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Change Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  htmlFor="token"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Token
                </label>
                <input
                  type="text"
                  name="token"
                  id="token"
                  onChange={(e)=>setToken(e.target.value)}
                  placeholder="Enter Token"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                 Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                ></input>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                ></input>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                 
                </div>
                <div className="ml-3 text-sm">
                 
                </div>
              </div>
            </form>
            <button
              onClick={() => changePassword()}
              className="w-full  text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
