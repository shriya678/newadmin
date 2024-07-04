import { useState, useEffect } from "react";
import BrandData from "./BrandData";
import axios from "axios";
import { Button } from "@tremor/react";

function VehicleData() {
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [newBrandName, setNewBrandName] = useState("");
  const [newBrandLogo, setNewBrandLogo] = useState("");
  const [deleteBrandName, setDeleteBrandName] = useState("");
  // const [deleteBrandLogo, setDeleteBrandLogo] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [brandDetail, setBrandDetail] = useState(false);
  const [currentBrand, setCurrentBrand] = useState(null);
  const [carBrandsWithLogos, setCarBrandsWithLogos] = useState([]);

  useEffect(() => {
    fetch(`https://service-provider-apis.onrender.com/api/v1/brand/getAll`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const initialData = data?.brands;
        setCarBrandsWithLogos(initialData);
      })
      .catch((error) => console.error(error));
  }, []);

  
  const closeAddPopup = () => {
    setAddPopupOpen(false);
    setNewBrandName("");
    setNewBrandLogo("");
  };

  const submitNewBrand = async () => {
    if (newBrandName && newBrandLogo) {
      try {
         await axios.post(
          "https://service-provider-apis.onrender.com/api/v1/brand/create",
          {
            name: newBrandName,
            logo: newBrandLogo,
            companyName: "Tata Motors",
          },
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.error("Error:", error.message);
      }
      closeAddPopup();
    } else {
      alert("Please enter both brand name and logo URL.");
    }
  };

  const submitDeleteBrand = async () => {
    if (deleteBrandName) {
      const brandId = (
        carBrandsWithLogos.find((car) => car.name === deleteBrandName) || {}
      )._id;
      if (brandId) {
        try {
           await axios.delete(
            `https://service-provider-apis.onrender.com/api/v1/brand/${brandId}`,
            {
              withCredentials: true,
            }
          );
        } catch (error) {
          console.error("Error:", error.message);
        }
        closeDeletePopup();
      } else {
        alert("Please enter valid brand name");
      }
    }
  };

  const handleBrand = (brand) => {
    setBrandDetail(true);
    setCurrentBrand(brand);
  };

  const backToBrandsPage = () => {
    setBrandDetail(false);
  };

  const closeDeletePopup = () => {
    setDeletePopupOpen(false);
    setDeleteBrandName("");
    // setDeleteBrandLogo("");
  };

  return (
    <>
      {!brandDetail ? (
        <div className="px-4 my-2 relative">
          <div className="flex justify-between my-2">
            <div>
              <p className="text-2xl font-semibold">Vehicle Brands</p>
            </div>

            <div>
              <select
                id="status"
                className="border border-gray-300 rounded-md px-2 py-1"
                onChange={(e) => console.log(e.target.value)}
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>

          <div className="flex justify-around">
            <input
              onChange={(e) => setSearchBrand(e.target.value)}
              placeholder="Search by brand name"
              className="max-w-xs block w-full rounded-md border-2 pl-2 py-1.5 outline-violet-700 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex justify-end">
            <div className="flex  md:flex-row items-center justify-center md:justify-end">
              <Button
                className="m-2 md:m-0 md:mr-2"
                onClick={() => setAddPopupOpen(true)}
                color="green"
              >
                Add Brand
              </Button>{" "}
              {isAddPopupOpen && (
                <div className="z-50 fixed top-0 left-[8%] w-full h-full flex items-center justify-center ">
                  <div className="bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Add a New Brand</h2>

                    <label htmlFor="newBrandName" className="block mb-2">
                      Brand Name:
                    </label>

                    <input
                      type="text"
                      id="newBrandName"
                      placeholder="Enter brand name"
                      value={newBrandName}
                      onChange={(e) => setNewBrandName(e.target.value)}
                      className="border p-2 mb-4 w-full"
                    />

                    <label htmlFor="newBrandLogo" className="block mb-2">
                      Brand Logo URL:
                    </label>

                    <input
                      type="text"
                      id="newBrandLogo"
                      placeholder="Enter brand logo URL"
                      value={newBrandLogo}
                      onChange={(e) => setNewBrandLogo(e.target.value)}
                      className="border p-2 mb-4 w-full"
                    />

                    <Button onClick={submitNewBrand} color="green">
                      Add
                    </Button>

                    <button
                      onClick={closeAddPopup}
                      className="ml-4 border p-2 rounded text-gray-600 hover:bg-gray-100"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
              <Button
                className="m-2 md:m-0"
                onClick={() => setDeletePopupOpen(true)}
                color="red"
              >
                Delete
              </Button>{" "}
              {/* Add margin only on small screens */}
              {isDeletePopupOpen && (
                <div className="z-50 fixed top-0 left-[8%] w-full h-full flex items-center justify-center ">
                  <div className="bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Delete a Brand</h2>

                    <label htmlFor="newBrandName" className="block mb-2">
                      Brand Name:
                    </label>

                    <input
                      type="text"
                      id="newBrandName"
                      placeholder="Enter brand name"
                      value={deleteBrandName}
                      onChange={(e) => setDeleteBrandName(e.target.value)}
                      className="border p-2 mb-4 w-full"
                    />

                    <Button onClick={submitDeleteBrand} color="red">
                      Delete
                    </Button>

                    <button
                      onClick={closeDeletePopup}
                      className="ml-4 border p-2 rounded text-gray-600 hover:bg-gray-100"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-6">
              {carBrandsWithLogos
                .filter((Brand) => {
                  const lowercaseSearchBrand = searchBrand.toLowerCase();
                  return lowercaseSearchBrand === ""
                    ? Brand
                    : Brand.name.toLowerCase().includes(lowercaseSearchBrand);
                })
                .map((brand, index) => (
                  <div
                    key={index}
                    className="text-center m-5 w-[15%] cursor-pointer hover:border-2 hover:scale-110 transform transition duration-300 ease-in-out hover:bg-indigo-100 rounded-md"
                    onClick={() => handleBrand(brand)}
                  >
                    <img src={brand.logo} alt="Random image" />
                    <h3>{brand.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <BrandData
          currentBrand={currentBrand}
          backToBrandsPage={backToBrandsPage}
        />
      )}
    </>
  );
}

export default VehicleData;
