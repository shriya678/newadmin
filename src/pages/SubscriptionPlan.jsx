import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Card, Button } from "@tremor/react";
import { useState } from "react";
import SubscriptionDetailPage from "./SubscriptionDetailPage";
import { CogIcon } from "@heroicons/react/outline";


function SubscriptionPlan() {

    const [isAddPopupOpen, setAddPopupOpen] = useState(false);
    const [currentSubscription, setCurrentSubscription] = useState(null);
    const [subcriptionData, setSubscriptionData] = useState([
        { planName: 'Subscription Plan 1', subscriberNo: 1200, serviceType: 'Mechanic', startDate: '17-12-2023', endDate: '20-12-2023'},
        { planName: 'Subscription Plan 2', subscriberNo: 1400, serviceType: 'Driver', startDate: '18-12-2023', endDate: '21-12-2023'},
        { planName: 'Subscription Plan 3', subscriberNo: 1700, serviceType: 'Cleaner', startDate: '19-12-2023', endDate: '22-12-2023'},
        { planName: 'Subscription Plan 4', subscriberNo: 1500, serviceType: 'Driver', startDate: '20-12-2023', endDate: '23-12-2023'},
        { planName: 'Subscription Plan 5', subscriberNo: 1100, serviceType: 'Mechanic', startDate: '21-12-2023', endDate: '24-12-2023'},
    ]);

    const [subscriptionDetail, setSubscriptionDetail] = useState(false);

    const handleSubscriptionData = (subsData) => {
        setSubscriptionDetail(true);
        // console.log(subsData);
        setCurrentSubscription(subsData);
    }

    const backToSubscriptionPage = () => {
        setSubscriptionDetail(false);
    }
    


    return (
        <>
            {!subscriptionDetail ? (
                <>
                    <div className="p-2 grid grid-cols-1 w-full">
                        <p className="text-center text-3xl font-semibold my-2">Subscription Plans</p>
                        <div className="sm:flex justify-between md:justify-end items-center">
                            <div className="py-2">
                                <div className="sm:flex justify-between items-center">
                                    <Button className="mr-4 mb-2" color="green" onClick={() => setAddPopupOpen(true)}>
                                        Add
                                    </Button>

                                    <Button className="mr-4 mb-2" color="red">
                                        Delete
                                    </Button>

                                    <Button className="mr-4 mb-2" color="orange">
                                        Modify
                                    </Button>

                                    <Button className="mr-4 mb-2" color="indigo">
                                        Import
                                    </Button>

                                    <Button className="mr-4 mb-2" color="yellow">
                                        Export
                                    </Button>
                                </div>
                            </div>

                        </div>

                        <Card className="dark:bg-tremor-background">
                            <Table className="dark:bg-tremor-background">
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell>S. No.</TableHeaderCell>
                                        <TableHeaderCell>Subscription Title</TableHeaderCell>
                                        <TableHeaderCell>No of Subscribers</TableHeaderCell>
                                        <TableHeaderCell>Service Type</TableHeaderCell>
                                        <TableHeaderCell>Start Date</TableHeaderCell>
                                        <TableHeaderCell>End Date</TableHeaderCell>
                                        <TableHeaderCell className="text-center">Permissions</TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {subcriptionData.map((data, i) => (
                                        <TableRow key={i}>

                                            <TableCell>
                                                <Text>{i + 1}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <p className="cursor-pointer" onClick={() => handleSubscriptionData(data)}>{data.planName}</p>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.subscriberNo}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.serviceType}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.startDate}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.endDate}</Text>
                                            </TableCell>

                                            <TableCell className="flex justify-center">
                                                <CogIcon className="w-5 h-5 cursor-pointer"></CogIcon>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                    {isAddPopupOpen && (
                        <>
                            <div className="absolute w-full inset-0 bg-black bg-opacity-40 z-50"></div>
                            <div className="bg-white w-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-md z-50">
                                <p className="text-2xl text-center py-3.5 font-bold mb-4 border-b-2 border-black">Add Subscription Plan</p>

                                <div className="px-12 pt-8">

                                    <div className="flex">

                                        <div className="w-1/2 px-2">
                                            <div className="flex items-center mb-2">
                                                <label htmlFor="" className="mr-2 text-xl">Name</label>
                                                <input
                                                    type="text"
                                                    id="newBrandName"
                                                    placeholder="Subscription Name"
                                                    // value={newModelName}
                                                    // onChange={(e) => setNewModelName(e.target.value)}
                                                    className="border-2 border-black rounded p-2 w-full"
                                                />
                                            </div>
                                            <div>
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={4}
                                                    placeholder="Description"
                                                    className="block w-full rounded-md border-2 border-black p-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>

                                        <div className="w-1/2 px-2 flex justify-between flex-col">
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Promo Codes"
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-full"
                                            />
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Marketing Banners"
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-full"
                                            />
                                            <input
                                                type="file"
                                                id="newBrandName"
                                                placeholder="Upload Image"
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-full"
                                            />
                                        </div>

                                    </div>

                                    <div className="flex mt-5">
                                        <div className="px-2 w-1/2">
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Services to Include"
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                        </div>
                                        <div className="px-2 w-1/2">
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Percentage Discount offered"
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6 mb-12">
                                        <Button color="green">Create</Button>
                                        <Button onClick={() => setAddPopupOpen(false)} color="gray" className="ml-4">Close</Button>
                                    </div>
                                </div>

                            </div>
                        </>
                    )}
                </>
            ) : (
                <SubscriptionDetailPage currentSubscription={currentSubscription} backToSubscriptionPage={backToSubscriptionPage} />
            )}
        </>
    );
}

export default SubscriptionPlan;