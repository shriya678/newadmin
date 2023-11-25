import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Card } from "@tremor/react";


function PromoCode() {


    return (
        <div className="p-3">

            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-semibold">Promo Codes</h1>
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
                            placeholder="Search by name"
                            className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="w-60%">
                        {/* <Datepickertofrom /> */}
                        <div className="form-group sm:flex sm:justify-start lg:justify-between xl:justify-start">
                            <div className="flex justify-between mr-3 ">
                                <label className="mr-2">Start Date<span className="astriccolor">*</span></label>
                                <input type="date" className="form-control border-rounded" name="startdate" placeholder="mm/dd/yyyy" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }} />
                            </div>
                            <div className="flex justify-between">
                                <label className="mr-2">End Date<span className="astriccolor">*</span></label>
                                <input type="date" className="form-control border-rounded" name="enddate" placeholder="mm/dd/yyyy" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }} />
                            </div>
                        </div>
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
                                <TableHeaderCell>Code</TableHeaderCell>
                                <TableHeaderCell>Code Type</TableHeaderCell>
                                <TableHeaderCell>Date Added</TableHeaderCell>
                                <TableHeaderCell>Date Start</TableHeaderCell>
                                <TableHeaderCell>Date End</TableHeaderCell>
                                <TableHeaderCell>Total no of Redeems</TableHeaderCell>
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
                                    <Text>FLAT50</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Public</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>24.11.23</Text>
                                </TableCell>
                                <TableCell>
                                    <Text></Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Permanent</Text>
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
                                    <Text>NEW50</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Members</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>24.11.23</Text>
                                </TableCell>
                                <TableCell>
                                    <Text></Text>
                                </TableCell>
                                <TableCell>
                                    <Text>Permanent</Text>
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
                        <h1>Promo Code Banner</h1>
                        <div className="border-2 border-gray-300 p-3 mt-1">
                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Name of Promo</label>
                                <input
                                    placeholder="Search by name"
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Promo Discount</label>
                                <input
                                    placeholder="Search by name"
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                                <div className="flex ml-5">
                                    <div className="flex items-center mr-3">
                                        <input
                                            id="discount"
                                            name="discount"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="discount"
                                            name="discount"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>Value</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-7">Promo Validity</label>
                                <div className="flex items-center mr-5">
                                    <input
                                        id="promo-validity"
                                        name="promo-validity"
                                        type="radio"
                                        className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <div className="form-group sm:flex sm:justify-start lg:justify-between xl:justify-start">
                                        <div className="flex justify-between mr-3 ">
                                            <label className="mr-2">Start Date<span className="astriccolor">*</span></label>
                                            <input type="date" className="form-control border-rounded" name="startdate" placeholder="mm/dd/yyyy" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }} />
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="mr-2">End Date<span className="astriccolor">*</span></label>
                                            <input type="date" className="form-control border-rounded" name="enddate" placeholder="mm/dd/yyyy" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="promo-validity"
                                        name="promo-validity"
                                        type="radio"
                                        className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <p>Permanent</p>
                                </div>
                            </div>

                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Promo Banner Image</label>
                                <input
                                    type="file"
                                    placeholder="Search by name"
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Promo Codes Deep Link or Copy Paste Option</label>
                                <input
                                    placeholder="Search by name"
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="flex mb-4 items-center">
                                <label htmlFor="" className="mr-3">Description</label>
                                <input
                                    placeholder=""
                                    className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div className="flex mb-4 justify-start">
                                <div className="flex mr-8">
                                    <label htmlFor="" className="mr-3">No of Redeems</label>
                                    <input
                                        placeholder="Search by name"
                                        className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>

                                <div className="flex">
                                    <label htmlFor="" className="mr-3">Min Order Value</label>
                                    <input
                                        placeholder="Search by name"
                                        className="max-w-xs block w-full rounded-md border-2 pl-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex mb-4 w-full">
                                <div className="flex items-center w-1/2">
                                    <p className="mr-4">Code Type</p>
                                    <div className="flex items-center mr-4">
                                        <input
                                            id="code-type"
                                            name="code-type"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>Public</p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="code-type"
                                            name="code-type"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>Members</p>
                                    </div>
                                </div>

                                <div className="flex items-center w-1/2">
                                    <p className="mr-4">User Type</p>
                                    <div className="flex items-center mr-4">
                                        <input
                                            id="user-type"
                                            name="user-type"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>All</p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="user-type"
                                            name="user-type"
                                            type="radio"
                                            className="h-4 w-4 mr-1 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <p>First Time/New</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h1 className="font-semibold text-lg">T&C</h1>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic nulla dolorem mollitia debitis cumque assumenda ratione eaque similique quisquam iusto sed numquam pariatur amet repellendus consequatur, facilis eius vitae laboriosam veritatis incidunt eveniet!</p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-3">
                            <button className="px-2 py-1 cursor-pointer mr-4 bg-red-300 rounded hover:bg-red-500 transition-colors duration-300">Cancel</button>
                            <button className="px-2 py-1 cursor-pointer bg-indigo-300 rounded hover:bg-indigo-400 transition-colors duration-300">Save</button>
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

export default PromoCode;