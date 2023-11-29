import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Card } from "@tremor/react";


function SubscriptionPlan() {



    return (
        <div className="p-3">

            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-semibold">Subscription Plans</h1>
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

            <div className="flex w-full items-center mb-4">
                <div className="flex w-[80%] items-center">
                    <div className="flex w-[40%] items-center">
                        <label htmlFor="" className="pr-1">Search</label>
                        <input
                            placeholder="Search Plans"
                            className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="flex w-[20%] justify-end">
                    <button className="px-2 py-1 cursor-pointer bg-emerald-300 mr-3 rounded hover:bg-emerald-500 transition-colors duration-300">Add</button>
                    <button className="px-2 py-1 cursor-pointer bg-red-300 rounded hover:bg-red-500 transition-colors duration-300">Delete</button>
                </div>
            </div>

            <div className="mb-4">
                <Card className="dark:bg-tremor-background">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>S No.</TableHeaderCell>
                                <TableHeaderCell>Description</TableHeaderCell>
                                <TableHeaderCell>Total no of Subscribers</TableHeaderCell>
                                <TableHeaderCell>Status</TableHeaderCell>
                                <TableHeaderCell>Action</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className="border-b-2 border-b-gray-300">
                                <TableCell>
                                    <Text>1</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Basic Plan (1Month)</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>1.5k</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Done</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Set</Text>
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b-2 border-b-gray-300">
                                <TableCell>
                                    <Text>2</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Premium Plan (1Month)</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>2.5k</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Not Done</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Set</Text>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>

            <div className="flex w-full">
                <Card className="flex dark:bg-tremor-background">
                    <div className="flex flex-col w-[70%]">
                        <h1>Basic Plan</h1>
                        <div className="border-2 border-gray-300 p-3 mt-1">
                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Name of Banner</label>
                                <input
                                    placeholder="Search by name"
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Service Category</label>
                                <input
                                    placeholder="Search by name"
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Promo Codes Deep Link or Copy Paste Option</label>
                                <input
                                    placeholder="Search by name"
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="mt-8">
                                <h1 className="font-semibold text-lg">T&C</h1>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic nulla dolorem mollitia debitis cumque assumenda ratione eaque similique quisquam iusto sed numquam pariatur amet repellendus consequatur, facilis eius vitae laboriosam veritatis incidunt eveniet!</p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-3">
                            <button className="px-2 py-1 cursor-pointer mr-4 bg-red-300 rounded hover:bg-red-500 transition-colors duration-300">Cancel</button>
                            <button className="px-2 py-1 cursor-pointer bg-green-300 rounded hover:bg-green-500 transition-colors duration-300">Save</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-[30%]">
                        <h1>Preview</h1>
                        <div className="flex flex-col items-center w-full h-full">
                            <div className="flex flex-col items-center p-3 mt-1 w-full h-[45%]">
                                <div className="border-2 border-gray-300 p-2 w-[60%] h-[70%] mb-1">
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <input
                                    id="push-everything"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="flex flex-col items-center p-3 mt-1 w-full h-[55%]">
                                <div className="border-2 border-gray-300 p-2 w-[40%] h-[90%] mb-1">
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

            <div className="flex justify-end mt-3">
                <button className="px-2 py-1 cursor-pointer bg-red-300 mx-1 rounded hover:bg-red-500 transition-colors duration-300">Live Support</button>
            </div>

        </div>
    );
}

export default SubscriptionPlan;