import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import '../loading.css'
import Logo from '../asset/Logo.png';

export default function Login() {
  const { setUser, setSuperAdmin } = useContext(RecoveryContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [sucess,setSucess] = useState();
  const [loginError,setLoginError] = useState();
  const [loading,setLoading] = useState();

  // if email exist then go reset page
  function nagigateToOTP() {
    if (email) {

      const API = axios.create({
        baseURL:`${import.meta.env.VITE_BASE_URL}`,
         withCredentials: true,
       });

      API
        .post(
          "/api/v1/superadmin/forgotPassword/",
          {
            email: email,
          }
        )
        .then(() => {
          localStorage.setItem("resetEmail",email);
          setSuperAdmin(true);
          navigate("../otp");
        })
        .catch(()=>{
          console.log("Error: ",error);
          setError(true)});
      return;
    }
    return alert("Please enter your email");
  }


  function handleLogin() {

    if (email && password) {

      setLoading(true);
      setSucess(false);
      setLoginError(false);

      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });

      API?.post("/api/v1/superadmin/login/Web", {
        email: email,
        password: password,
      })

        .then((res) => {
          
          console.log("Login Res: ", res);

          toast.success("SucessFull");

          setSucess(true);
          setLoading(false);
          setLoginError(false);

          const pdata = res.data.admin;


          localStorage.setItem("profile", JSON.stringify({ pdata }));
          localStorage.setItem("login",JSON.stringify({email,password}));

         const profiledata = JSON.parse(localStorage.getItem("profile"));

          if (profiledata) {
            setUser(pdata);
            navigate("../");
          }
        })
        .catch((error) =>{
          toast.error("Login Error");
          setSucess(false);
          setLoading(false);
          setLoginError(true);
           console.log(error)
          });

      return;
    }
    return alert("Please enter your email");
  }
 

  return (
    <div className=" bg-white">

      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            
            <div className=" h-96 w-auto overflow-hidden">
              <img
                src={Logo}
                className="w-full h-full object-cover"
                alt="Sample image"
              />
              </div>

            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-center">
                  <div className="px-6 sm:px-0 max-w-sm">
                  </div>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0 text-4xl">Login</p>
                </div>

                <div className="mb-6">

                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="bg-gray-50 border border-green-500 text-gray-900 text-xl font-normal rounded-lg focus:ring-green-500 block w-full p-2.5"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="bg-gray-50 border border-green-500 text-gray-900 text-xl font-normal rounded-lg focus:ring-green-500 block w-full p-2.5"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-center items-center mb-6 mt-10">
                  <a
                    href="#"
                    onClick={() => nagigateToOTP()}
                    className=" text-green-500 text-lg"
                  >
                    Forgot password?
                  </a>
                </div>

                {error ? (
                    <div className="mt-2 text-lg text-center text-red-600" role="alert">
                      Sorry! You are not Authenticated Please Login
                    </div>
                  ) : (
                    ""
                  )}


                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="flex justify-center items-center w-full text-[28px] mt-6 rounded-full bg-green-300 font-medium text-white
                    hover:bg-emerald-600 py-2 transition-colors duration-300 hover:text-white"
                    onClick={handleLogin}
                    >
                    {loading ? <div className="loader flex items-center mr-2"></div> : null}
                    Login
                  </button>

                </div>
                
                
               

                {sucess ? <div className="mt-4 text-lg text-center text-gray-700"><h1>You Logged In Successfully</h1></div> 
                 : loginError ? <div className="mt-4 text-lg text-center text-red-500"><h1>Please Enter Valid Email And Password</h1></div> : ""}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
