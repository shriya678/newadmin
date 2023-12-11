import { Card, Button } from "@tremor/react";
import { Switch } from "@headlessui/react";
import { EyeIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';
import SimpleProgressBar from "./SimpleProgressBar";
import { Circle } from "rc-progress";
import MultiColorProgressBar from "./MultiColorProgressBar";
import fb from '../asset/facebook.png';
import { useState } from "react";


function ServerManagement(){

    const [arr, setArr] = useState([
        {
            user: true,
            banner: false,
            promoCode: true,
            pushNotification: false
        },
        {
            user: false,
            banner: true,
            promoCode: false,
            pushNotification: true
        },
        {
            user: true,
            banner: false,
            promoCode: true,
            pushNotification: false
        },
        {
            user: false,
            banner: true,
            promoCode: false,
            pushNotification: true
        },
    ]);

    const segments = [
        { color: 'lightgreen', percentage: 50 },
        { color: 'indigo', percentage: 27 },
        { color: 'orange', percentage: 23 },
    ];

    const handleCard = (i) => {
        const index = arr.findIndex((a, ind) => ind === i);
        if (index !== -1) {
            setArr((prevArr) => {
                const newArr = [...prevArr];
                newArr[index] = { ...newArr[index], user: !newArr[index].user };
                return newArr;
            });
        }
    }

    const handleBanner = (i) => {
        const index = arr.findIndex((a, ind) => ind === i);
        if (index !== -1) {
            setArr((prevArr) => {
                const newArr = [...prevArr];
                newArr[index] = { ...newArr[index], banner: !newArr[index].banner };
                return newArr;
            });
        }
    }

    const handlePromo = (i) => {
        const index = arr.findIndex((a, ind) => ind === i);
        if (index !== -1) {
            setArr((prevArr) => {
                const newArr = [...prevArr];
                newArr[index] = { ...newArr[index], promoCode: !newArr[index].promoCode };
                return newArr;
            });
        }
    }

    const handleNotification = (i) => {
        const index = arr.findIndex((a, ind) => ind === i);
        if (index !== -1) {
            setArr((prevArr) => {
                const newArr = [...prevArr];
                newArr[index] = { ...newArr[index], pushNotification: !newArr[index].pushNotification };
                return newArr;
            });
        }
    }


    return (
        <div className="p-2 sm:p-3 grid grid-cols-1 w-full">

            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-semibold">Server Status</h1>
                <div>
                    <select
                        id="status"
                        className="border border-gray-300 rounded-md px-2 py-1"
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <option value="offline">Offline</option>
                        <option value="online">Online</option>
                    </select>
                </div>
            </div>

            <div className="mb-4 flex flex-col lg:flex-row w-full">

                <Card className="dark:bg-tremor-background bg-orange-100 p-2.5 sm:p-5 mb-4 lg:mb-0 sm:mr-5 lg:w-[70%]">
                    <div className="sm:w-[45%]">
                        <p className="font-semibold">Welcome back John Wick</p>
                        <p className="text-sm text-justify lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo, animi iure quos tempore cum.</p>
                    </div>

                    <div className="hidden sm:block w-[45%]">
                        {/* <img src="" alt="Random image" /> */}
                    </div>
                </Card>

                <Card className="dark:bg-tremor-background p-2.5 sm:p-5 lg:w-[30%]">
                    <div className="flex w-full items-center mb-3 sm:mb-5 lg:mb-3">
                        <div className="bg-orange-100 text-center py-2 w-[18%] sm:w-[10%] lg:w-[18%] mr-2 rounded-xl">
                            B5
                        </div>
                        <div className="w-[50%]">
                            <p>Loads</p>
                            <p className="text-xs">Online Participant</p>
                        </div>
                        <div className="w-[30%]">
                            <SimpleProgressBar color={'yellow'} completed={70} />
                        </div>
                    </div>
                    <div className="flex w-full items-center">
                        <div className="bg-indigo-100 text-center py-2 mr-2 w-[18%] sm:w-[10%] lg:w-[18%] rounded-xl">
                            <h3>G2</h3>
                        </div>
                        <div className="w-[50%]">
                            <p>Requests</p>
                            <p className="text-xs">Offline Participant</p>
                        </div>
                        <div className="w-[30%]">
                            <SimpleProgressBar color={'indigo'} completed={60} />
                        </div>
                    </div>
                </Card>

            </div>

            <div className="mb-10 flex flex-col lg:flex-row w-full">

                <div className="flex flex-wrap xl:flex-nowrap sm:justify-between gap-4 mb-4 xl:mb-0 sm:gap-8 lg:mr-5 lg:w-[60%] xl:w-[70%]">
                    <Card className="sm:w-[46%]">
                        <div className="flex justify-center bg-indigo-100 py-4 rounded-[10px] w-[30%] sm:w-[40%] xl:w-[35%]">
                            <EyeIcon className="w-4 h-4"></EyeIcon>
                        </div>
                        <h3 className="mt-6">CPU</h3>
                        <p className="flex items-center text-xl text-indigo-900">4.8% <ArrowUpIcon className="inline w-5 h-5" /></p>
                        <p className="text-xs mt-1">Avg +65%</p>
                        <div className="mt-11">
                            <SimpleProgressBar color={'indigo'} completed={'70'} />
                        </div>
                    </Card>
                    <Card className="sm:w-[46%]">
                        <div className="flex justify-center bg-orange-100 py-4 rounded-[10px] w-[30%] sm:w-[40%] xl:w-[35%]">
                            <EyeIcon className="w-4 h-4"></EyeIcon>
                        </div>
                        <h3 className="mt-6">RAM</h3>
                        <p className="flex items-center text-xl text-orange-900">4.2% <ArrowDownIcon className="inline w-5 h-5" /></p>
                        <p className="text-xs mt-1">Avg +85%</p>
                        <div className="mt-11">
                            <SimpleProgressBar color={'orange'} completed={'80'} />
                        </div>
                    </Card>
                    <Card className="sm:w-[46%]">
                        <div className="flex justify-center bg-indigo-100 py-4 rounded-[10px] w-[30%] sm:w-[40%] xl:w-[35%]">
                            <EyeIcon className="w-4 h-4"></EyeIcon>
                        </div>
                        <h3 className="mt-6">DISK</h3>
                        <p className="flex items-center text-xl text-indigo-900">5.8GB <ArrowUpIcon className="inline w-5 h-5" /></p>
                        <p className="text-xs mt-1">Avg +36%</p>
                        <div className="mt-11">
                            <SimpleProgressBar color={'indigo'} completed={'30'} />
                        </div>
                    </Card>
                    <Card className="sm:w-[46%]">
                        <div className="flex justify-center bg-orange-100 py-4 rounded-[10px] w-[30%] sm:w-[40%] xl:w-[35%]">
                            <EyeIcon className="w-4 h-4"></EyeIcon>
                        </div>
                        <h3 className="mt-6">SERVICES</h3>
                        <p className="flex items-center text-xl text-orange-900">3.5KB <ArrowDownIcon className="inline w-5 h-5" /></p>
                        <p className="text-xs mt-1">Avg +48%</p>
                        <div className="mt-11">
                            <SimpleProgressBar color={'orange'} completed={'45'} />
                        </div>
                    </Card>
                </div>

                <div className="lg:w-[40%] xl:w-[30%] xl:flex xl:flex-col xl:justify-between">
                    <Card className="flex items-center mb-4 w-full p-2.5 sm:p-5 bg-orange-400">
                        <div className="relative w-[20%] sm:w-[10%] lg:w-[20%] xl:w-[18%] mr-2 sm:mr-4">
                            <Circle
                                percent={75}
                                strokeColor={'red'}
                                strokeWidth={8}
                                trailWidth={8}
                                trailColor="lightgray"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white">75</p>
                        </div>

                        <div className="w-[28%] sm:w-[25%] border-r-2 mr-2 sm:mr-4">
                            <p className="text-white">Storage Usage</p>
                        </div>

                        <div className="w-[40%] sm:ml-5 lg:ml-0">
                            <p className="text-white">594875625</p>
                            <p className="text-white">Online Users</p>
                        </div>
                    </Card>
                    <Card className="flex flex-col sm:flex-row sm:items-center p-2.5 sm:p-5 w-full">
                        <div className="relative w-[20%] mr-4">
                            <MultiColorProgressBar segments={segments} />
                        </div>

                        <div className="w-[80%]">
                            <p className="flex items-center text-orange-500 text-sm"><span className="w-2 h-2 rounded-xl mt-[2px] bg-orange-300 mr-1.5"></span>Total Processes: 61 <ArrowUpIcon className="inline ml-0.5 w-3 h-3" /></p>
                            <p className="flex items-center text-indigo-500 text-sm"><span className="w-2 h-2 rounded-xl mt-[2px] bg-indigo-300 mr-1.5"></span>Total Threands: 993 <ArrowDownIcon className="inline ml-0.5 w-3 h-3" /></p>
                            <p className="flex items-center text-green-500 text-sm"><span className="w-2 h-2 rounded-xl mt-[2px] bg-green-300 mr-1.5"></span>Total Handles: 26957 <ArrowUpIcon className="inline ml-0.5 w-3 h-3" /></p>
                        </div>
                    </Card>
                </div>

            </div>

            <div className="flex flex-col w-full">
                
                <div className="flex justify-between mb-2 w-full">
                    <p className="text-lg sm:text-2xl font-semibold">Third Party Apps</p>
                    <Button className="mb-2" color="green">Add</Button>
                </div>

                <div className="flex flex-wrap xl:flex-nowrap sm:justify-between w-full gap-4 sm:gap-10 overflow-x-auto">
                    {arr.map((ele, i) => (
                        <Card key={i} className="p-4 px-5 relative sm:w-[45%]">
                            <div onClick={() => handleCard(i)} className="sm:flex justify-between absolute right-1.5 top-1.5 items-center">
                                <Switch
                                    className={`${ele.user ? " bg-green-500" : "bg-gray-200"
                                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                                >
                                    <span
                                        className={`${ele.user ? "translate-x-6" : "translate-x-1"
                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                    />
                                </Switch>
                            </div>
                            <div className="flex justify-center my-10 mb-14">
                                <img src={fb} alt="" className="w-[18%]" />
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="flex justify-between mb-2.5">
                                    <p>Banners</p>
                                    <div onClick={() => handleBanner(i)} className="sm:flex justify-between items-center">
                                        <Switch
                                            className={`${ele.banner ? " bg-green-500" : "bg-gray-200"
                                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span
                                                className={`${ele.banner ? "translate-x-6" : "translate-x-1"
                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2.5">
                                    <p>Promo Codes</p>
                                    <div onClick={() => handlePromo(i)} className="sm:flex justify-between items-center">
                                        <Switch
                                            className={`${ele.promoCode ? " bg-green-500" : "bg-gray-200"
                                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span
                                                className={`${ele.promoCode ? "translate-x-6" : "translate-x-1"
                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p>Push Notifications</p>
                                    <div onClick={() => handleNotification(i)} className="sm:flex justify-between items-center">
                                        <Switch
                                            className={`${ele.pushNotification ? " bg-green-500" : "bg-gray-200"
                                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span
                                                className={`${ele.pushNotification ? "translate-x-6" : "translate-x-1"
                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>



            <div className="fixed bottom-0 right-0 flex justify-end mt-3">
                <button className="px-2 py-1 cursor-pointer bg-red-300 mx-1 rounded hover:bg-red-500 transition-colors duration-300">Live Support</button>
            </div>

        </div>
    )

}

export default ServerManagement;