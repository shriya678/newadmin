import { Switch } from "@headlessui/react";
import { CalculatorIcon, XCircleIcon } from "@heroicons/react/solid";
import { Select, SelectItem } from "@tremor/react";
import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";

const AddAdminPage = ({ admin, setAddAdmin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [toggleCheck, setToggleCheck] = useState(false);

  //  for selectbox of selecting admin or superadmin
  const [value, setValue] = useState("");

  // console.log("Role: ",value);

  const [customerCheck, setCustomerCheck] = useState(false);
  const [serviceProviderCheck, setServiceProviderCheck] = useState(false);
  const [serviceOrderCheck, setServiceOrderCheck] = useState(false);

  const [customerPermission, setCustomerPermission] = useState({
    create: false,
    delete: false,
    modify: false,
  });

  const [serviceProviderPermission, setServiceProviderPermission] = useState({
    create: false,
    delete: false,
    modify: false,
  });

  const [serviceOrderPermission, setServiceOrderPermission] = useState({
    create: false,
    delete: false,
    modify: false,
  });

  const customerInputEvent = (event) => {
    const value = event.target.checked;
    const name = event.target.name;

    setCustomerPermission((pre) => {
      // console.log("PreValue: ",pre);

      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const serviceProviderInputEvent = (event) => {
    const value = event.target.checked;
    const name = event.target.name;

    setServiceProviderPermission((pre) => {
      // console.log("PreValue: ",pre);

      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const serviceOrderInputEvent = (event) => {
    const value = event.target.checked;
    const name = event.target.name;

    setServiceOrderPermission((pre) => {
      // console.log("PreValue: ",pre);

      return {
        ...pre,
        [name]: value,
      };
    });
  };

  // console.log("CustomerPermission: ", customerPermission);
  // console.log("ServicePermission: ", serviceProviderPermission);
  // console.log("ServiceOrderPermission: ", serviceOrderPermission);

  function handleSignUp() {
    if (email && password) {
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });

      console.log("toggle: ",toggleCheck);

      API.post("/api/v1/superadmin/", {
        name: name,
        email: email,
        password: password,
        phoneNo: phoneNumber,
        role: value,
        permissionCheck:toggleCheck,
        permissions:{
          customerCheck:customerCheck,
          customer:{
            create:customerPermission.create,
            delete:customerPermission.delete,
            modify:customerPermission.modify
          },
          serviceProviderCheck:serviceProviderCheck,
          serviceProvider:{
            create:serviceProviderPermission.create,
            delete:serviceProviderPermission.delete,
            modify:serviceProviderPermission.modify
          },
          serviceOrderCheck:serviceOrderCheck,
          serviceOrder:{
            create:serviceOrderPermission.create,
            delete:serviceOrderPermission.delete,
            modify:serviceOrderPermission.modify
          }

        }

      })
        .then((res) => {
          console.log(res.data);
          // location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
      return;
    }
    return alert("Please enter your email");
  }

  return (
    <div className="w-full p-4 dark:bg-tremor-background h-auto">
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex justify-end items-end">
            <XCircleIcon
              className=" cursor-pointer"
              width={35}
              color="#00FF00"
              onClick={() => setAddAdmin(false)}
            />
          </div>

          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center text-4xl font-semibold mx-4 mb-0">
              Create Admin Page
            </p>
          </div>

          {/* <form> */}
            <div className="grid grid-cols-2">
              {/* grid fist column */}
              <div>
                <div className="mb-6">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
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

                <div className="mb-6">
                  <Select
                    value={value}
                    onValueChange={setValue}
                    placeholder="Select Role"
                  >
                    <SelectItem value="admin" icon={CalculatorIcon}>
                      Admin
                    </SelectItem>
                    <SelectItem value="superAdmin" icon={CalculatorIcon}>
                      SuperAdmin
                    </SelectItem>
                  </Select>
                </div>

                <div className="mb-6">
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="PhoneNumber"
                  />
                </div>
                {/*  */}
              </div>

              {/* grid second column */}

              <div className=" h-80 w-full overflow-hidden">
                <img
                  src="../../public/companyLogo.jpeg"
                  className="w-full h-full object-fit"
                  alt="Sample image"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-evenly flex-row items-center ">
                <h1 className=" text-2xl font-medium mr-[-100px]">
                  Permission
                </h1>
                <Switch
                  onChange={setToggleCheck}
                  className={`${
                    toggleCheck ? " bg-green-500" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      toggleCheck ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>

              {toggleCheck ? (
                <div className="mt-5 flex justify-evenly items-center">
                  {/* first card for permission */}

                  <Card className=" ml-2 bg-transparent border rounded border-green-500 py-2">
                    <div className="flex justify-center items-center px-2">
                      <div className="flex justify-between align-middle">
                        <h1 className="mr-4">Customer</h1>
                        <Switch
                          onChange={setCustomerCheck}
                          className={`${
                            customerCheck ? " bg-green-500" : "bg-gray-200"
                          } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                          <span
                            className={`${
                              customerCheck ? "translate-x-6" : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                          />
                        </Switch>
                      </div>
                    </div>

                    <div className="grid grid-rows-3 gap-2 mt-5">
                      <div className="flex justify-center items-center gap-2">
                        <h4>Create</h4>
                        {customerCheck ? (
                          <input
                            type="checkbox"
                            name="create"
                            checked={customerPermission.create}
                            value={customerPermission.create}
                            onChange={customerInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(customerPermission.create = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h4>Delete</h4>
                        {customerCheck ? (
                          <input
                            type="checkbox"
                            name="delete"
                            checked={customerPermission.delete}
                            value={customerPermission.delete}
                            onChange={customerInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(customerPermission.delete = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h4>Modify</h4>

                        {customerCheck ? (
                          <input
                            type="checkbox"
                            name="modify"
                            checked={customerPermission.modify}
                            value={customerPermission.modify}
                            onChange={customerInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(customerPermission.modify = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                    </div>
                  </Card>

                  {/* Second Card for permission */}
                  <Card className=" bg-transparent border rounded border-green-500 py-2">
                    <div className="flex justify-center items-center ">
                      <div className="flex justify-evenly align-middle">
                        <h1 className="mr-4">Service Provider</h1>
                        <Switch
                          onChange={setServiceProviderCheck}
                          className={`${
                            serviceProviderCheck ? "bg-green-500" : "bg-gray-200"
                          } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                          <span
                            className={`${
                              serviceProviderCheck
                                ? "translate-x-6"
                                : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                          />
                        </Switch>
                      </div>
                    </div>

                    <div className="grid grid-rows-3 gap-2 mt-5">
                      <div className="flex justify-center items-center gap-2">
                        <h4>Create</h4>
                        {serviceProviderCheck ? (
                          <input
                            type="checkbox"
                            name="create"
                            checked={serviceProviderPermission.create}
                            value={serviceProviderPermission.create}
                            onChange={serviceProviderInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(serviceProviderPermission.create = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h4>Delete</h4>
                        {serviceProviderCheck ? (
                          <input
                            type="checkbox"
                            name="delete"
                            checked={serviceProviderPermission.delete}
                            value={serviceProviderPermission.delete}
                            onChange={serviceProviderInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(serviceProviderPermission.delete = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h4>Modify</h4>
                        {serviceProviderCheck ? (
                          <input
                            type="checkbox"
                            name="modify"
                            checked={serviceProviderPermission.modify}
                            value={serviceProviderPermission.modify}
                            onChange={serviceProviderInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(serviceProviderPermission.modify = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                    </div>
                  </Card>

                  {/* Third Card for permission */}
                  <Card className=" bg-transparent border rounded border-green-500 py-2 ">
                    <div className="flex justify-center items-center">
                      <div className="flex justify-between align-middle">
                        <h1 className="mr-4">Service Order</h1>
                        <Switch
                          onChange={setServiceOrderCheck}
                          className={`${
                            serviceOrderCheck ? " bg-green-500" : "bg-gray-200"
                          } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                          <span
                            className={`${
                              serviceOrderCheck
                                ? "translate-x-6"
                                : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                          />
                        </Switch>
                      </div>
                    </div>

                    <div className="grid grid-rows-3 gap-2 mt-5">
                      <div className="flex justify-center items-center gap-2 ">
                        <h4>Create</h4>
                        {serviceOrderCheck ? (
                          <input
                            type="checkbox"
                            name="create"
                            checked={serviceOrderPermission.create}
                            value={serviceOrderPermission.create}
                            onChange={serviceOrderInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(serviceOrderPermission.create = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h4>Delete</h4>
                        {serviceOrderCheck ? (
                          <input
                            type="checkbox"
                            name="delete"
                            checked={serviceOrderPermission.delete}
                            value={serviceOrderPermission.delete}
                            onChange={serviceOrderInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(serviceOrderPermission.delete = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h4>Modify</h4>
                        {serviceOrderCheck ? (
                          <input
                            type="checkbox"
                            name="modify"
                            checked={serviceOrderPermission.modify}
                            value={serviceOrderPermission.modify}
                            onChange={serviceOrderInputEvent}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value={(serviceOrderPermission.modify = false)}
                            checked={false}
                            disabled
                          />
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ) : null}
            </div>

            <div className="text-center lg:text-left mt-10">
              <button
                type="button"
                className="inline-block px-7 py-3 bg-green-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handleSignUp}
              >
                Create Admin
              </button>
            </div>
          {/* </form> */}
        </div>
      </section>
    </div>
  );
};

export default AddAdminPage;
