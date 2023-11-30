import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../asset/Logo.png";

const OTPValidation = () => {

  const resetToken = localStorage.getItem("resetEmail");
  console.log(resetToken);

    const [otp,setOTP] = useState();

    const [sucess,setSucess] = useState(false);
    const [error,setError] = useState(false);

    const navigate = useNavigate();

    function verifyOTP() {
      console.log(otp);

        if (otp) {
            // const OTP = Math.floor(Math.random() * 9000 + 1000);
            // console.log(OTP);
            // setOTP(OTP);

            const API = axios.create({
              baseURL:`${import.meta.env.VITE_BASE_URL}`,
               withCredentials: true,
             });
          
             API.post(
                `/api/v1/superadmin/verifyToken/${otp}`,
              )
              .then((res)=>{
                console.log('OTP Res: ',res);
                setSucess(true);
                setError(false);
                navigate('../reset')}
                )
              .catch((error)=>{
                setError(true);
                setSucess(false);
                console.log('OTP Error: ',error);
               
              });
            return;
          }
          return alert("Please enter OTP");
    
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
                      src={Logo}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  htmlFor="token"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Enter OTP
                </label>
                <input
                  type="text"
                  name="token"
                  id="token"
                  onChange={(e)=>setOTP(e.target.value)}
                  placeholder={`Enter OTP send on Email ${resetToken}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 block w-full p-2.5 "
                  required=""
                ></input>
              </div>

            
            </form>
            <button
              onClick={() => verifyOTP()}
              className=" w-full mt-10 flex justify-center  text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Verify OTP
            </button>

          </div>

          {sucess ? <div className=" mt-5 text-green-500"><h1>OTP Verified Sucessfully</h1></div>: 
          "" }

          {error ? <div className=" mt-5 text-red-500"><h1>Please enter correct OTP</h1></div> : ""}
          
        </div>
      </section>
    </div>
  )
}

export default OTPValidation