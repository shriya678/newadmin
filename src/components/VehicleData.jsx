import { useState, useEffect } from "react";
import BrandData from "./BrandData";


function VehicleData(){

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [newBrandName, setNewBrandName] = useState('');
    const [newBrandLogo, setNewBrandLogo] = useState('');
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


    const [carBrandsWithLogos, setCarBrandsWithLogos] = useState([
        // { name: 'Toyota', logo: 'https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png' },
        // { name: 'Ford', logo: 'https://www.carlogos.org/car-logos/ford-logo-2017-640.png' },
        // { name: 'Chevrolet', logo: 'https://www.carlogos.org/car-logos/chevrolet-logo.png' },
        // { name: 'Honda', logo: 'https://www.carlogos.org/car-logos/honda-logo.png' },
        // { name: 'BMW', logo: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
        // { name: 'Mercedes-Benz', logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
        // { name: 'Volkswagen', logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png' },
        // { name: 'Audi', logo: 'https://www.carlogos.org/car-logos/audi-logo.png' },
        // { name: 'Nissan', logo: 'https://www.carlogos.org/car-logos/nissan-logo.png' },
        // { name: 'Hyundai', logo: 'https://www.carlogos.org/car-logos/hyundai-logo.png' },
        // { name: 'Kia', logo: 'https://www.carlogos.org/car-logos/kia-logo.png' },
        // { name: 'Mazda', logo: 'https://www.carlogos.org/car-logos/mazda-logo.png' },
        // { name: 'Subaru', logo: 'https://www.carlogos.org/car-logos/subaru-logo.png' },
        // { name: 'Tesla', logo: 'https://www.carlogos.org/car-logos/tesla-logo.png' },
        // { name: 'Lexus', logo: 'https://www.carlogos.org/car-logos/lexus-logo.png' },
        // { name: 'Lamborghini', logo: 'https://www.carlogos.org/car-logos/lamborghini-logo.png' },
        // { name: 'Ferrari', logo: 'https://www.carlogos.org/car-logos/ferrari-logo.png' },
        // { name: 'Porsche', logo: 'https://www.carlogos.org/car-logos/porsche-logo.png' },
        // { name: 'Jaguar', logo: 'https://www.carlogos.org/car-logos/jaguar-logo.png' },
        // { name: 'Land Rover', logo: 'https://www.carlogos.org/car-logos/land-rover-logo.png' },
    ]);

    const openPopup = () => {
        setPopupOpen(true);
    };
    
    const closePopup = () => {
        setPopupOpen(false);
        setNewBrandName('');
        setNewBrandLogo('');
    };

    const submitNewBrand = () => {
        if (newBrandName && newBrandLogo) {
            setCarBrandsWithLogos((prevBrands) => [
                ...prevBrands,
                { name: newBrandName, logo: newBrandLogo },
            ]);
            closePopup();
        } 
        else {
            alert('Please enter both brand name and logo URL.');
        }
    };

    const handleBrand = (brand) => {
        setBrandDetail(true);
        setCurrentBrand(brand);
    }

    const goBack = () => {
        setBrandDetail(false);
    }

    return (
        <>
            {!brandDetail ? <div className="px-4 relative">

                <div className="flex justify-between">
                    <div>
                        <p>Vehicle Brands</p>
                    </div>

                    <div>
                        {/* <label htmlFor="status">Status: </label> */}
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
                        <p className="pr-2">Bulk Import</p>
                        <p className="cursor-pointer" onClick={openPopup}>Add a new Brand</p>
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
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
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
                                <img src="https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png" alt="Random image" />
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