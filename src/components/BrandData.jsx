import { useState, useEffect } from "react";
import axios from "axios";
// import toast from "react-hot-toast";
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import { Button } from "@tremor/react";

function BrandData(props){

    const [isAddPopupOpen, setAddPopupOpen] = useState(false);
    const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
    const [newModelName, setNewModelName] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const [newModelFuelType, setNewModelFuelType] = useState('');
    const [carModel, setCarModel] = useState([]);
    const [deleteModelName, setDeleteModelName] = useState('');
    const [deleteModelFuelType, setDeleteModelFuelType] = useState('');
    const {name, logo, _id} = props.currentBrand;

    const closeAddPopup = () => {
        setAddPopupOpen(false);
        setNewModelName('');
        setNewModelFuelType('');
    }
    
    const submitDeleteModel = () =>{
        if (deleteModelName && deleteModelFuelType){
            const modelId = (carModel.find(car =>
                car.name === deleteModelName && car.fuelType === deleteModelFuelType          
                ) || {})._id;
            if(modelId){
                axios.delete(`https://service-provider-apis.onrender.com/api/v1/model/${modelId}`, {
                    withCredentials: true,
                })
                    .then(response => {
                    console.log(response.data);
                    })
                    .catch(error => {
                    console.error('Axios error:', error);
                    }); 
                closeDeletePopup();                 
            }
            else{
                alert('Please enter valid model name and fuel type.');
            }
        }
    };
    
    useEffect(() => {
        
        fetch(`https://service-provider-apis.onrender.com/api/v1/model/getAll`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
            }
            
            return response.json();
          })
          .then((data) => {
            const initialData = data?.models.filter(model => model.brandId === _id);
            setCarModel(initialData);
            
            console.log(initialData)
          })
          .catch((error) => console.error(error));
    });

    const submitNewModel = async () => {
        if (newModelName && newModelFuelType && _id) {
            try {
                const response1 = await axios.post(
                    "https://service-provider-apis.onrender.com/api/v1/model/create", 
                    {
                        name: newModelName,
                        fuelType: newModelFuelType,
                        bodyType: "hatchback",
                        photo: "logo",
                        brandId: _id,
                    },
                    {
                        withCredentials: true,
                    }
                );
            } catch (error) {
                console.error("Error:", error);
            }
            closeAddPopup();
        } else {
            alert('Please enter both model name and fuel type, and ensure brand ID is available.');
        }
    };

    const closeDeletePopup = () => {
        setDeletePopupOpen(false);
        setDeleteModelName('');
        setDeleteModelFuelType('');
    }
    

    return (
        <div className="px-4 my-2 relative">

            <div className="flex justify-between my-2">
                <div onClick={() => props.backToBrandsPage()}>
                    <ArrowCircleLeftIcon className="h-7 w-7 cursor-pointer hover:scale-110 transition-transform"></ArrowCircleLeftIcon>
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
                        onChange={(e) => setSearchModel(e.target.value)}
                        placeholder="Search by model name"
                        className="max-w-xs block w-full rounded-md border-2 pl-2 py-1.5 outline-violet-700 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <div className="flex">
                    <Button color="green" className="mr-2" onClick={() => setAddPopupOpen(true)}>Add</Button>
                    {isAddPopupOpen && (
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
                                    value={newModelName}
                                    onChange={(e) => setNewModelName(e.target.value)}
                                    className="border p-2 mb-4 w-full"
                                />

                                <label htmlFor="newBrandLogo" className="block mb-2">
                                    Add Fuel Types:
                                </label>

                                <input
                                    type="text"
                                    id="newBrandLogo"
                                    placeholder="Fuel type"
                                    value={newModelFuelType}
                                    onChange={(e) => setNewModelFuelType(e.target.value)}
                                    className="border p-2 mb-4 w-full"
                                />

                                <Button
                                    onClick={submitNewModel}
                                    color="green"
                                >
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
                    <Button onClick={() => setDeletePopupOpen(true)} color="red">Delete</Button>
                    {isDeletePopupOpen && (
                        <div className="z-50 fixed top-0 left-[8%] w-full h-full flex items-center justify-center ">
                            <div className="bg-white p-8 rounded shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Delete a Model</h2>

                                <label htmlFor="newBrandName" className="block mb-2">
                                    Enter Model Name:
                                </label>

                                <input
                                    type="text"
                                    id="newBrandName"
                                    placeholder="Enter model name"
                                    value={deleteModelName}
                                    onChange={(e) => setDeleteModelName(e.target.value)}
                                    className="border p-2 mb-4 w-full"
                                />

                                <label htmlFor="newBrandLogo" className="block mb-2">
                                    Add Fuel Type:
                                </label>

                                <input
                                    type="text"
                                    id="newBrandLogo"
                                    placeholder="Fuel type"
                                    value={deleteModelFuelType}
                                    onChange={(e) => setDeleteModelFuelType(e.target.value)}
                                    className="border p-2 mb-4 w-full"
                                />

                                <Button
                                    onClick={submitDeleteModel}
                                    color="red"
                                    >
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
                <div className='flex flex-wrap gap-6'>
                    {carModel.filter((model) => {
                        const lowercaseSearchModel = searchModel.toLowerCase();
                            return lowercaseSearchModel.toLowerCase() === '' ? model : model.name.toLowerCase().includes(lowercaseSearchModel)
                        }).map((model, index) => (
                            <div key={index} className='text-center m-5 w-[15%] cursor-pointer hover:border-2 hover:scale-110 transform transition duration-300 ease-in-out hover:bg-indigo-100 rounded-md'>
                            {/* <img src={model.photo} alt="Random image" /> */}
                            <h3>{model.name}</h3>
                            <p>{model.fuelType}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}

export default BrandData;