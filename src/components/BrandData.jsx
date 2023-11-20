import { useState } from "react";


function BrandData(props){

    const [isPopupOpen, setPopupOpen] = useState(false);
    const carBrands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const {name, logo} = props.currentBrand;

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    }

    return (
        <div className="px-4 relative">

            <div className="flex justify-between">
                <div onClick={() => props.goBack()}>
                    <p className="cursor-pointer">Back</p>
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

            <div className="flex justify-between">
                <div className="w-[10%] ml-5 border-2 bg-slate-200 text-center">
                    <p>{name}</p>
                    <img src={logo} alt="Brand Image" />
                </div>
                <div className="flex items-center w-[60%]">
                    <input
                        // onChange={(e) => setSearchBrand(e.target.value)}
                        placeholder="Search by name"
                        className="max-w-xs block w-full rounded-md border-2 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <div className="flex">
                    <p className="pr-2 cursor-pointer" onClick={openPopup}>Add</p>
                    <p>Delete</p>
                    {isPopupOpen && (
                        <div className="z-50 fixed top-0 left-[8%] w-full h-full flex items-center justify-center ">
                            <div className="bg-white p-8 rounded shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Add a New Model</h2>

                                <label htmlFor="newBrandName" className="block mb-2">
                                    Enter Model Name:
                                </label>

                                <input
                                    type="text"
                                    id="newBrandName"
                                    placeholder="Enter model name"
                                    // value={newBrandName}
                                    // onChange={(e) => setNewBrandName(e.target.value)}
                                    className="border p-2 mb-4 w-full"
                                />

                                <label htmlFor="newBrandLogo" className="block mb-2">
                                    Add Fuel Types:
                                </label>

                                <input
                                    type="text"
                                    id="newBrandLogo"
                                    placeholder="Fuel type"
                                    // value={newBrandLogo}
                                    // onChange={(e) => setNewBrandLogo(e.target.value)}
                                    className="border p-2 mb-4 w-full"
                                />

                                <button
                                    // onClick={submitNewBrand}
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
                    {carBrands.map((index) => (
                        <div key={index} className='text-center m-5 w-[28%] cursor-pointer hover:border-2 hover:scale-110 transform transition duration-300 ease-in-out hover:bg-indigo-100 rounded-md'>
                            {/* <img src={brand.logo} alt="Random image" /> */}
                            <h3>Model Name</h3>
                            <p>Fuel Type</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}

export default BrandData;