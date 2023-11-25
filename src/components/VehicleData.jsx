import { useState, useEffect } from "react";
import BrandData from "./BrandData";
import axios from "axios";


function VehicleData(){

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
    const [newBrandName, setNewBrandName] = useState('');
    const [newBrandLogo, setNewBrandLogo] = useState('');
    const [deleteBrandName, setDeleteBrandName] = useState('');
    const [deleteBrandLogo, setDeleteBrandLogo] = useState('');
    const [searchBrand, setSearchBrand] = useState('');
    const [brandDetail, setBrandDetail] = useState(false);
    const [currentBrand, setCurrentBrand] = useState(null);

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


    const [carBrandsWithLogos, setCarBrandsWithLogos] = useState([]);

    const openPopup = () => {
        setPopupOpen(true);
    };
    
    const closePopup = () => {
        setPopupOpen(false);
        setNewBrandName('');
        setNewBrandLogo('');
    };

    const submitNewBrand = async () => {
        if (newBrandName && newBrandLogo) {
            try {
                const response1 = await axios.post(
                    "https://service-provider-apis.onrender.com/api/v1/brand/create",
                    {
                        name: newBrandName,
                        logo: newBrandLogo,
                        companyName: "Tata Motors"
                    },
                    {
                        withCredentials: true,
                    }
                );
                console.log(response1.data);
            } catch (error) {
                console.error("Error:", error.message);
            }
            closePopup();
        } else {
            alert('Please enter both brand name and logo URL.');
        }
    };

    const submitDeleteBrand = async () => {
        if (deleteBrandName) {
            const brandId = (carBrandsWithLogos.find(car => car.name === deleteBrandName          
                ) || {})._id;
                if(brandId){
            try {
                const response1 = await axios.delete(
                    `https://service-provider-apis.onrender.com/api/v1/brand/${brandId}`,
                    {
                        withCredentials: true,
                    }
                );
            } catch (error) {
                console.error("Error:", error.message);
            }
            closeDeletePopup();
        }else {
            alert('Please enter valid brand name');
        }
        } 
    };
    

    const handleBrand = (brand) => {
        setBrandDetail(true);
        setCurrentBrand(brand);
    }

    const goBack = () => {
        setBrandDetail(false);
    }

    const closeDeletePopup = () => {
        setDeletePopupOpen(false);
        setDeleteBrandName('');
        setDeleteBrandLogo('');
    }

    return (
        <>
            {!brandDetail ? <div className="px-4 my-2 relative">

                <div className="flex justify-between">
                    <div>
                        <p>Vehicle Brands</p>
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
                        placeholder="Search by name"
                        className="max-w-xs block w-full rounded-md border-2 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="flex justify-end">
                    <div className="flex">
                        <button onClick={() => setDeletePopupOpen(true)} className="px-2 py-1 cursor-pointer bg-emerald-300 mx-1 rounded hover:bg-emerald-400 transition-colors duration-300">Delete</button>
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

                                    {/* <label htmlFor="newBrandLogo" className="block mb-2">
                                        Brand Logo URL:
                                    </label>

                                    <input
                                        type="text"
                                        id="newBrandLogo"
                                        placeholder="Enter brand logo URL"
                                        onChange={(e) => setDeleteBrandLogo(e.target.value)}
                                        className="border p-2 mb-4 w-full"
                                    /> */}

                                    <button
                                        onClick={submitDeleteBrand}
                                        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                                    >
                                        Submit
                                    </button>

                                    <button
                                        onClick={closeDeletePopup}
                                        className="ml-4 border p-2 rounded text-gray-600 hover:bg-gray-100"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                        <button className="px-2 py-1 cursor-pointer bg-emerald-300 mx-1 rounded hover:bg-emerald-400 transition-colors duration-300" onClick={openPopup}>Add Brand</button>
                        {isPopupOpen && (
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

                                    <button
                                        onClick={submitNewBrand}
                                        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                                    >
                                        Submit
                                    </button>

                                    <button
                                        onClick={closePopup}
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
                    <div className='flex flex-wrap gap-6'>
                        {carBrandsWithLogos.filter((Brand) => {
                            return searchBrand.toLowerCase() === '' ? Brand : Brand.name.toLowerCase().includes(searchBrand)
                        }).map((brand, index) => (
                            <div key={index} className='text-center m-5 w-[15%] cursor-pointer hover:border-2 hover:scale-110 transform transition duration-300 ease-in-out hover:bg-indigo-100 rounded-md' onClick={() => handleBrand(brand)}>
                                <img src={brand.logo} alt="Random image" />
                                <h3>{brand.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div> : <BrandData currentBrand={currentBrand} goBack={goBack} />}
        </>
    )

}

export default VehicleData;