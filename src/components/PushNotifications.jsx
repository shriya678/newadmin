import { Card } from "@tremor/react";


function PushNotifications() {



    return (
        <div className="p-2 grid grid-cols-1 w-full">
            
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-semibold">Push Notifications</h1>
                <div>
                    <select
                        id="status"
                        className="border border-gray-300 rounded-md px-2 py-1"
                        // onChange={(e) => console.log(e.target.value)}
                    >
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>
            </div>

            <div className="flex sm:w-full">
                <Card className="flex flex-col lg:flex-row dark:bg-tremor-background">
                    <div className="flex flex-col lg:w-[70%]">

                        <div className="flex flex-col mb-4 justify-center w-full">
                            <label htmlFor="" className="mr-3 mb-1">User Type</label>
                            <div className="flex flex-col md:flex-row w-full">
                                <div className="w-full sm:w-1/2">
                                    <select
                                        id="user-type"
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full text-center"
                                    // onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option value="online">Customer</option>
                                        <option value="offline">Other</option>
                                    </select>
                                </div>
                                <div className="flex mt-1 sm:mt-1 sm:ml-5">
                                    <div className="flex items-center mr-3">
                                        <input
                                            id="discount"
                                            name="discount"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>Public</p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="discount"
                                            name="discount"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mb-4 justify-center w-full">
                            <label htmlFor="" className="mr-3 mb-1">Notification Type</label>
                            <div className="flex w-full">
                                <div className="w-full sm:w-1/2">
                                    <select
                                        id="user-type"
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full text-center"
                                    // onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option value="online">Promotion</option>
                                        <option value="offline">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mb-4 justify-center w-full">
                            <label htmlFor="" className="mr-3 mb-1">Notification Mode</label>
                            <div className="flex w-full">
                                <div className="w-full sm:w-1/2">
                                    <select
                                        id="user-type"
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full text-center"
                                    // onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option value="online">In-App</option>
                                        <option value="offline">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mb-4 justify-center w-full">
                            <label htmlFor="" className="mr-3 mb-1">Notification Region</label>
                            <div className="flex w-full">
                                <div className="w-full sm:w-1/2">
                                    <select
                                        id="user-type"
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full text-center"
                                    // onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option value="online">Delhi</option>
                                        <option value="offline">Mumbai</option>
                                        <option value="offline">Banglore</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mb-4 justify-center w-full">
                            <label htmlFor="" className="mr-3 mb-1">Select Banner to use</label>
                            <div className="flex w-full">
                                <div className="w-full sm:w-1/2">
                                    <select
                                        id="user-type"
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full text-center"
                                    // onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option value="online">Delhi</option>
                                        <option value="offline">Mumbai</option>
                                        <option value="offline">Banglore</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <label htmlFor="" className="mr-3">Notification Message</label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={10}
                                    className="block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between md:justify-end mt-2">
                            <button className="px-2 py-1 cursor-pointer mr-4 bg-red-300 rounded hover:bg-red-500 transition-colors duration-300">Cancel</button>
                            <button className="px-2 py-1 cursor-pointer bg-indigo-300 rounded hover:bg-indigo-400 transition-colors duration-300">Save</button>
                        </div>
                    </div>

                    <div className="flex flex-col mt-8 lg:mt-0 items-center md:items-start lg:items-center lg:w-[30%]">
                        <h1 className="font-semibold">Preview</h1>
                        <div className="flex flex-col md:flex-row lg:flex-col items-center w-full h-full">
                            <div className="flex flex-col items-center md:p-3 mt-1 w-full md:h-[100%] xl:h-[45%]">
                                <div className="border-2 border-gray-300 p-2 sm:w-[60%] md:w-[100%] xl:w-[70%] h-[125px] mb-1">
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <input
                                    id="push-everything"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="flex flex-col items-center md:p-3 mt-3 w-full md:h-[100%] xl:h-[55%]">
                                <div className="border-2 border-gray-300 p-2 w-[70%] xl:w-[40%] h-[200px] mb-1">
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <input
                                    id="push-everything"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="fixed bottom-0 right-0 flex justify-end mt-3">
                <button className="px-2 py-1 cursor-pointer bg-red-300 mx-1 rounded hover:bg-red-500 transition-colors duration-300">Live Support</button>
            </div>
            
        </div>
    );
}

export default PushNotifications;