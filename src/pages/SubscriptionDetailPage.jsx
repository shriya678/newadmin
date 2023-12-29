import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { Button, Card, DatePicker, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from "@tremor/react";


function SubscriptionDetailPage(props){

    const { currentSubscription, backToSubscriptionPage } = props;

    return (
        <>
            <div className="p-2 grid grid-cols-1 w-full">
                <div className="flex items-center my-4">
                    <div onClick={() => backToSubscriptionPage()} className="w-2/5">
                        <ArrowCircleLeftIcon className="h-7 w-7 cursor-pointer hover:scale-110 transition-transform"></ArrowCircleLeftIcon>
                    </div>

                    <div className="w-3/5 text-2xl font-semibold">
                        <p>{currentSubscription.planName}</p>
                    </div>
                </div>
                <Card className="dark:bg-tremor-background">

                    <div className="flex mb-3">
                        <div className="flex px-2 items-center w-1/2">
                            <label htmlFor="" className="mr-2 text-xl">Name</label>
                            <input
                                type="text"
                                id="subscriptionPlanName"
                                placeholder="Subscription Name"
                                value={currentSubscription.planName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-full"
                            />
                        </div>
                        <div className="px-2 flex justify-end w-1/2">
                            <div className="flex items-center w-2/5 mr-5">
                                <p className="mr-2">From</p>
                                <DatePicker></DatePicker>
                            </div>
                            <div className="flex items-center w-2/5">
                                <p className="mr-2">To</p>
                                <DatePicker></DatePicker>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 px-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={2}
                            placeholder="Description"
                            className="block w-full rounded-md border-2 border-black p-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>

                    <div className="flex gap-y-5 flex-wrap mb-4">
                        <div className="px-2 w-1/3">
                            <input
                                type="text"
                                id="services"
                                placeholder="Services to Include"
                                // value={newModelName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-4/5"
                            />
                        </div>
                        <div className="px-2 w-1/3">
                            <input
                                type="text"
                                id="discountPercent"
                                placeholder="Percentage Discount Offered"
                                // value={newModelName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-4/5"
                            />
                        </div>
                        <div className="px-2 w-1/3">
                            <input
                                type="text"
                                id="promoCode"
                                placeholder="Promo Codes"
                                // value={newModelName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-4/5"
                            />
                        </div>
                        <div className="px-2 w-1/3">
                            <input
                                type="text"
                                id="marketingBanner"
                                placeholder="Marketing Banners"
                                // value={newModelName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-4/5"
                            />
                        </div>
                        <div className="px-2 w-1/3">
                            <input
                                type="file"
                                id="files"
                                // placeholder="Services to Include"
                                // value={newModelName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-4/5"
                            />
                        </div>
                        <div className="px-2 w-1/3">
                            <input
                                type="text"
                                id="serviceType"
                                placeholder="Service type(Schedule/ontime)"
                                // value={newModelName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-4/5"
                            />
                        </div>
                    </div>

                    <div className="flex mb-10">
                        <div className="px-2 w-1/3">
                            <input
                                type="text"
                                id="serviceCat"
                                placeholder="Service cat(mech/cleaner/driver)"
                                // value={newModelName}
                                // onChange={(e) => setNewModelName(e.target.value)}
                                className="border-2 border-black rounded p-2 w-4/5"
                            />
                        </div>
                        <div className="px-2 flex items-center w-2/3">
                            <p className="mr-4">Push Settings</p>

                            <div className="flex items-center mr-4">
                                <input type="checkbox" name="" id="" className="mr-1" />
                                <label htmlFor="">Email</label>
                            </div>

                            <div className="flex items-center mr-4">
                                <input type="checkbox" name="" id="" className="mr-1" />
                                <label htmlFor="">Text</label>
                            </div>

                            <div className="flex items-center mr-4">
                                <input type="checkbox" name="" id="" className="mr-1" />
                                <label htmlFor="">In-App</label>
                            </div>

                            <div className="flex items-center mr-4">
                                <input type="checkbox" name="" id="" className="mr-1" />
                                <label htmlFor="">WhatsApp</label>
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-2xl">Customer List</p>
                            <Button color="orange">Export</Button>
                        </div>
                        <div>
                            <Table className="border-2 border-green-200 rounded-md">
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell>Name</TableHeaderCell>
                                        <TableHeaderCell>Phone Number</TableHeaderCell>
                                        <TableHeaderCell>Brand</TableHeaderCell>
                                        <TableHeaderCell>Model</TableHeaderCell>
                                        <TableHeaderCell>Fuel Type</TableHeaderCell>
                                        <TableHeaderCell>SP Type</TableHeaderCell>
                                        <TableHeaderCell>Date of Issue</TableHeaderCell>
                                        <TableHeaderCell>Completion Date</TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                {/* <TableBody>

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

                                            <TableCell>
                                                <Button color="green">Details</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                </TableBody> */}
                            </Table>
                        </div>
                    </div>

                </Card>
            </div>
        </>
    )

}

export default SubscriptionDetailPage;