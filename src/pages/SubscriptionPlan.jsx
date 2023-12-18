import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Card, Button } from "@tremor/react";
import { useState } from "react";


function SubscriptionPlan() {

    const [isAddPopupOpen, setAddPopupOpen] = useState(false);
    const [subcriptionData, setSubscriptionData] = useState([
        { planName: 'Subscription Plan 1', brandName: 'BMW', modelName: 'BMW R8', customer: 'Customer 1'},
        { planName: 'Subscription Plan 2', brandName: 'TATA', modelName: 'TATA Hexa', customer: 'Customer 2'},
        { planName: 'Subscription Plan 3', brandName: 'Toyota', modelName: 'Fortuner', customer: 'Customer 3'},
        { planName: 'Subscription Plan 4', brandName: 'Ford', modelName: 'Ford Ecosport', customer: 'Customer 4'},
        { planName: 'Subscription Plan 5', brandName: 'Maruti', modelName: 'Suzuki', customer: 'Customer 5'},
    ]);


    return (
        <>
            <div className="p-2 grid grid-cols-1 w-full">
                <p className="text-center text-3xl font-semibold my-2">Subscription Plan</p>
                <div className="sm:flex justify-between md:justify-end items-center">
                    <div className="py-2">
                        <div className="sm:flex justify-between items-center">
                            <Button className="mr-4 mb-2" color="green" onClick={() => setAddPopupOpen(true)}>
                                Add Subscription Plan
                            </Button>

                            <Button className="mr-4 mb-2" color="red">
                                Delete Subscription Plan
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
                                <TableHeaderCell>Select</TableHeaderCell>
                                <TableHeaderCell>S. No.</TableHeaderCell>
                                <TableHeaderCell>Subscription Plan Name</TableHeaderCell>
                                <TableHeaderCell>Brand Name</TableHeaderCell>
                                <TableHeaderCell>Model Name</TableHeaderCell>
                                <TableHeaderCell>Customer</TableHeaderCell>
                                <TableHeaderCell>Details</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {subcriptionData.map((data, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <input type="checkbox" />
                                    </TableCell>

                                    <TableCell>
                                        <Text>{i + 1}</Text>
                                    </TableCell>

                                    <TableCell>
                                        <Text>{data.planName}</Text>
                                    </TableCell>

                                    <TableCell>
                                        <Text>{data.brandName}</Text>
                                    </TableCell>

                                    <TableCell>
                                        <Text>{data.modelName}</Text>
                                    </TableCell>

                                    <TableCell>
                                        <Text>{data.customer}</Text>
                                    </TableCell>

                                    <TableCell>
                                        <Button color="green">Details</Button>
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
                        <p className="text-2xl text-center py-3.5 font-bold mb-4 border-b-2 border-black">Subscription Plan Name</p>

                        <div className="px-12 pt-8">

                            <div className="flex justify-between mb-6">
                                <select
                                    id="user-type"
                                    className="border border-gray-300 rounded-md text-center w-2/5"
                                // onChange={(e) => console.log(e.target.value)}
                                >
                                    <option value="null">--Select--</option>
                                    <option value="online">Banner 1</option>
                                    <option value="offline">Banner 2</option>
                                    <option value="offline">Banner 3</option>
                                </select>
                                <input
                                    type="text"
                                    id="newBrandName"
                                    placeholder="Percentage Discount Offered"
                                    // value={newModelName}
                                    // onChange={(e) => setNewModelName(e.target.value)}
                                    className="border p-2 w-2/5"
                                />
                            </div>

                            <div className="flex justify-between mb-6">
                                <select
                                    id="user-type"
                                    className="border border-gray-300 rounded-md text-center w-2/5"
                                // onChange={(e) => console.log(e.target.value)}
                                >
                                    <option value="null">--Select--</option>
                                    <option value="online">Banner 1</option>
                                    <option value="offline">Banner 2</option>
                                    <option value="offline">Banner 3</option>
                                </select>
                                <input
                                    type="text"
                                    id="newBrandName"
                                    placeholder="Percentage Discount Offered"
                                    // value={newModelName}
                                    // onChange={(e) => setNewModelName(e.target.value)}
                                    className="border p-2 w-2/5"
                                />
                            </div>

                            <div className="flex justify-between mb-6">
                                <select
                                    id="user-type"
                                    className="border border-gray-300 rounded-md text-center w-2/5"
                                // onChange={(e) => console.log(e.target.value)}
                                >
                                    <option value="null">--Select--</option>
                                    <option value="online">Banner 1</option>
                                    <option value="offline">Banner 2</option>
                                    <option value="offline">Banner 3</option>
                                </select>
                                <input
                                    type="text"
                                    id="newBrandName"
                                    placeholder="Percentage Discount Offered"
                                    // value={newModelName}
                                    // onChange={(e) => setNewModelName(e.target.value)}
                                    className="border p-2 w-2/5"
                                />
                            </div>

                            <div className="flex justify-between mb-12">
                                <select
                                    id="user-type"
                                    className="border border-gray-300 rounded-md text-center w-2/5"
                                // onChange={(e) => console.log(e.target.value)}
                                >
                                    <option value="null">--Select--</option>
                                    <option value="online">Banner 1</option>
                                    <option value="offline">Banner 2</option>
                                    <option value="offline">Banner 3</option>
                                </select>
                                <input
                                    type="text"
                                    id="newBrandName"
                                    placeholder="Percentage Discount Offered"
                                    // value={newModelName}
                                    // onChange={(e) => setNewModelName(e.target.value)}
                                    className="border p-2 w-2/5"
                                />
                            </div>

                            <div className="flex mb-12">
                                <Button color="green">Add</Button>
                                <Button onClick={() => setAddPopupOpen(false)} color="gray" className="ml-4">Close</Button>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </>
    );
}

export default SubscriptionPlan;