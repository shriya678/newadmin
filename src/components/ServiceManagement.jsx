import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Button
} from "@tremor/react";
import { AddServiceForm } from "./ServiceManagementForm/AddServiceForm"; 
import { useState } from "react";

function ServiceManagement(){
    const [visible,setVisible]=useState(true)
    const AddServiceform=()=>{
    setVisible(false)

    }

    return (
        <div className= {`p-2 grid grid-cols-1 w-full`}>
            <AddServiceForm visible={visible}/>
            <p className="text-center text-3xl font-semibold my-2">Services</p>
            <div className="sm:flex justify-between md:justify-end items-center">
                <div className="py-2">
                    <div className="sm:flex justify-between items-center">
                        <Button onClick={AddServiceform} className="mr-4 mb-2" color="green">
                            Add Services
                        </Button>

                        <Button className="mr-4 mb-2" color="red">
                            Delete Services
                        </Button>

                        <Button className="mr-4 mb-2" color="indigo">
                            Import
                        </Button>

                        <Button className="mr-4 mb-2" color="orange">
                            Export
                        </Button>
                    </div>
                </div>

            </div>

            <Card className="dark:bg-tremor-background">
                <Table className="dark:bg-tremor-background">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Select Service</TableHeaderCell>
                            <TableHeaderCell>Service Name</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                            <TableHeaderCell>T&C</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>
                                <input type="checkbox" />
                            </TableCell>

                            <TableCell>
                                <Text>Car Wash</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Rs. 5000</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Lorem ipsum dolor sit amet.</Text>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <input type="checkbox" />
                            </TableCell>

                            <TableCell>
                                <Text>AC Repair</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Rs. 4500</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Lorem ipsum dolor sit amet.</Text>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <input type="checkbox" />
                            </TableCell>

                            <TableCell>
                                <Text>Diagnosis</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Rs. 10000</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Lorem ipsum dolor sit amet.</Text>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <input type="checkbox" />
                            </TableCell>

                            <TableCell>
                                <Text>Engine Repair</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Rs. 7000</Text>
                            </TableCell>

                            <TableCell>
                                <Text>Lorem ipsum dolor sit amet.</Text>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </Card>
        </div>
    )

}

export default ServiceManagement;