import { Switch } from "@headlessui/react";
import { CalculatorIcon, XCircleIcon } from "@heroicons/react/solid";
import { Select, SelectItem } from "@tremor/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { CustomerContext } from "../pages/Customers";
import Logo from "../asset/Logo.png"

const AddCustomerPage = ({ addCustomer, setAddCustomer }) => {

  const {setSucess,sucess} = useContext(CustomerContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, seFirsttName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();

  const [message,setMessage] = useState();


  function handleSignUp() {

    if (email) {
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });

      API.post("/api/v1/admin/createUser", {
        firstName: firstName,
        lastName:lastName,
        email: email,
        password:password,
        phoneNo: phoneNumber,
        address:address

      })
        .then((res) => {
          // console.log(res.data);
          setSucess(!sucess);
          setMessage(
            <div className='text-center text-lg text-green-500'> Customer Created Sucessfully</div>
          )
        })
        .catch((error) => {
          console.log(error);
          setMessage(
            <div className='text-center text-lg text-red-500'>Something Went Wrong Admin Not Created!</div>
          )
        });
      return;
    }
    return alert("Please enter your email");
  }

  return (
    <div className="w-full p-4 dark:bg-tremor-background h-auto">
      <section className="">
        <div className="px-6 h-full text-gray-800">
          <div className="flex justify-end items-end">
            <XCircleIcon
              className=" cursor-pointer"
              width={35}
              color="#00FF00"
              onClick={() => setAddCustomer(false)}
            />
          </div>

          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center text-4xl font-semibold mx-4 mb-0">
              Create Customer Page
            </p>
          </div>

          <form>
            <div className=" grid lg:grid-cols-2 sm:grid-cols-1">
              {/* grid fist column */}

              <div className=" h-96 w-full overflow-hidden">
                <img
                  src={Logo}
                  className="w-full h-full object-fit"
                  alt="Sample image"
                />
              </div> */


              {/* grid second column */}

              <div className="w-1/2">
                <div className="mb-6">
                  <input
                    onChange={(e) => seFirsttName(e.target.value)}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="firstName"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="lastName"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    required
                  />
                </div>

                {/* <div className="mb-6">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    required
                  />
                </div> */}

                <div className="mb-6">
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="PhoneNumber"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Address"
                    required
                  />
                </div>
                
              </div>

              <div className="text-center lg:text-left mt-10">
                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-green-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleSignUp}
                >
                  Create Customer
                </button>
              </div>

            </div>
             

           

            <div className="text-center lg:text-left mt-10 mb-10">
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-emerald-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handleSignUp}
              >
                Create Customer
              </button>
            </div>
          </form>

          {/* for displaying message */}
          {message}
        </div>
      </section>
    </div>
  );
};

export default AddCustomerPage;