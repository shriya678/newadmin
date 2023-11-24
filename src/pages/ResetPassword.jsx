import React, { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { setPage } = useContext(RecoveryContext);

  const superEmail = localStorage.getItem("resetEmail");

  
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();
  const [sucess,setSucess] = useState(false);
  const [error,setError] = useState();

  const navigate = useNavigate();

  function changePassword() {

    if (password && confirmPassword) {
        // const OTP = Math.floor(Math.random() * 9000 + 1000);
        // console.log(OTP);
        // setOTP(OTP);

        const API = axios.create({
          baseURL:`${import.meta.env.VITE_BASE_URL}`,
           withCredentials: true,
         });

          API.post(
            `/api/v1/superadmin/resetPassword`,
            {
              email:superEmail,
              password:password,
              confirmPassword:confirmPassword
            }
          )
          .then((res)=>{
            console.log("Reset Res: ",res);
            setSucess(true);
            navigate('../auth')})
          .catch((error)=>{
            console.log('Reset Error: ',error);
            setError(true);
          });
        return;
      }
      return alert("Please enter Details");

  }

  return (
    <div>
      <section className="bg-gray-50 w-screen ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-3xl  dark:border-gray-700 sm:p-8">


          <div
                    style={{
                      height: 150,
                      width: 150,
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "10px 10px 5px lightGreen",
                      marginLeft:"40%"
                    }}
                  >
                    <img
                      src="../../public/companyLogo.jpeg"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-green-500 md:text-2xl">
              Change Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              
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
              className="w-full  text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Reset passwod
            </button>

          </div>

          {sucess && <div className=" mt-5 text-green-500"><h1>Password has been sucessfully reset</h1></div>}

          {error && <div className=" mt-5 text-red-500"><h1>someting went wrong</h1></div>}
          
        </div>
      </section>
    </div>
  );
}



