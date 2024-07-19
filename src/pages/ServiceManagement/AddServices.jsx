import { useEffect, useState } from "react";
import Logo from "../../asset/Logo.png";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/solid";

const AddServiceManagement = ({ setAddPopupOpen }) => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    modelId: "",
    modelName: "",
    serviceIncluded: [
      {
        subDescription: "",
        subService: "",
      },
    ],
    description: "",
    category: "",
    price: "",
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleForm = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("subDescription")) {
      setFormData((prev) => {
        const newServiceIncluded = [...prev.serviceIncluded];
        newServiceIncluded[0] = {
          ...newServiceIncluded[0],
          subDescription: value,
        };
        return {
          ...prev,
          serviceIncluded: newServiceIncluded,
        };
      });
    } else if (name.startsWith("subService")) {
      setFormData((prev) => {
        const newServiceIncluded = [...prev.serviceIncluded];
        newServiceIncluded[0] = {
          ...newServiceIncluded[0],
          subService: value,
        };
        return {
          ...prev,
          serviceIncluded: newServiceIncluded,
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
const handleClose = () => {
  setAddPopupOpen(false)
}
  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  const handleAddService = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "serviceIncluded") {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }
    formDataToSend.append("image", image);

    try {
      const data = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
      const result = await data.post("/api/v1/service/create", formDataToSend);
      const { success, message } = result.data;
      if (success) {
        console.log("Added Successfully!");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full sm:p-4 dark:bg-tremor-background h-auto">
      <section>
        <div className="px-2 sm:px-6 h-full text-gray-800">
          <div className="flex justify-end items-end">
            <XCircleIcon
              className=" cursor-pointer"
              width={35}
              color="#00FF00"
              onClick={handleClose}
            />
          </div>
          <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold my-4 sm:my-8">
            Add Services
          </p>

          <form onSubmit={handleAddService}>
            <div className=" grid lg:grid-cols-2 sm:grid-cols-1">
              <div className="flex justify-center sm:h-48 md:h-72 lg:h-96 lg:w-full sm:w-full overflow-hidden mb-5">
                <img
                  src={Logo}
                  className="lg:w-full xl:w-[70%]"
                  alt="Sample image"
                />
              </div>

              <div>
                <div className="mb-6">
                  <input
                    onChange={handleForm}
                    name="name"
                    value={formData.name}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Service Name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={handleForm}
                    name="price"
                    value={formData.price}
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Price"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    onChange={handleForm}
                    name="description"
                    value={formData.description}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Description"
                    required
                  />
                </div>

                <div className="mb-6">
                  <div>
                    <label>Category:</label>
                    <select
                      name="category"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      value={formData.category}
                      onChange={handleForm}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Periodic Services">
                        Periodic Services
                      </option>
                      <option value="AcService And Repair">
                        AcService And Repair
                      </option>
                      <option value="Batteries">Batteries</option>
                      <option value="Tyres And Wheel Care">
                        Tyres And Wheel Care
                      </option>
                      <option value="Denting And Painting">
                        Denting And Painting
                      </option>
                      <option value="Detailing Services">
                        Detailing Services
                      </option>
                      <option value="Car Spa And Cleaning">
                        Car Spa And Cleaning
                      </option>
                      <option value="Car Inspections">Car Inspections</option>
                      <option value="Clutch And Body Parts">
                        Clutch And Body Parts
                      </option>
                      <option value="Windshield And Lights">
                        Windshield And Lights
                      </option>
                      <option value="Suspension And Fitments">
                        Suspension And Fitments
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    onChange={handleImageChange}
                    type="file"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    required
                  />
                </div>
              </div>
            </div>
            <div className=" grid lg:grid-cols-2 sm:grid-cols-1">
              <div className="mb-6 lg:mr-3">
                <input
                  onChange={handleForm}
                  name="modelId"
                  value={formData.modelId}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Model Id"
                  required
                />
              </div>

              <div className="mb-6 lg:ml-3">
                <input
                  onChange={handleForm}
                  name="modelName"
                  value={formData.modelName}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Model Name"
                  required
                />
              </div>
            </div>

            <div className=" grid lg:grid-cols-2 sm:grid-cols-1">
              <div className="mb-6 lg:mr-3">
                <input
                  onChange={handleForm}
                  name="subDescription"
                  value={formData.serviceIncluded[0].subDescription}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Sub Description"
                  required
                />
              </div>

              <div className="mb-6 lg:ml-3">
                <input
                  onChange={handleForm}
                  name="subService"
                  value={formData.serviceIncluded[0].subService}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Sub Service"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center lg:text-left mt-10 mb-10">
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-emerald-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddServiceManagement;