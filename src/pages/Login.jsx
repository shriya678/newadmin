import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser, setSuperAdmin } = useContext(RecoveryContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // console.log("User: ",setUser);

  function nagigateToReset() {
    if (email) {
      // const OTP = Math.floor(Math.random() * 9000 + 1000);
      // console.log(OTP);
      // setOTP(OTP);

      axios
        .post(
          "https://service-provider-apis.onrender.com/api/v1/superadmin/forgotPassword/",
          {
            email: email,
          }
        )
        .then(() => {
          //  setPage("reset")
          setSuperAdmin(true);
          navigate("../reset");
        })
        .catch(setError(true));
      return;
    }
    return alert("Please enter your email");
  }

  // axios.defaults.withCredentials = true;

  function handleLogin() {
    if (email && password) {
      const API = axios.create({
        baseURL: "http://localhost:8000",
        withCredentials: true,
      });

      API?.post("/api/v1/superadmin/login/Web", {
        email: email,
        password: password,
      })

        .then((res) => {
          // console.log(res.data)

          console.log("Login Res: ", res);

          // const loginToken = res.data.token;
          const pdata = res.data.admin;

          localStorage.setItem("profile", JSON.stringify({ pdata }));
          localStorage.setItem("login",JSON.stringify({email,password}));

         const profiledata = JSON.parse(localStorage.getItem("profile"));

          if (profiledata) {
            setUser(pdata);
            navigate("../home");
          }
        })
        .catch((error) => console.log(error));
      return;
    }
    return alert("Please enter your email");
  }

 

  //   console.log("User: ",setUser);

  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-center">
                  <div className="px-6 sm:px-0 max-w-sm">
                    <button
                      type="button"
                      className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    >
                      <svg
                        className="mr-2 -ml-1 w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                      >
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        ></path>
                      </svg>
                      Sign up with Google<div></div>
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-center items-center mb-6">
                  <a
                    href="#"
                    onClick={() => nagigateToReset()}
                    className="text-gray-800"
                  >
                    Forgot password?
                  </a>

                  {error ? (
                    <div className="mt-2 text-sm text-red-600" role="alert">
                      Sorry! You are not Authenticated Please Login
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
