import { Table, TableHead, TableRow, TableHeaderCell, TableBody,  Card, Button } from "@tremor/react";
import { useState } from "react";
import SubscriptionDetailPage from "../../pages/SubscriptionDetailPage";
// import { CogIcon } from "@heroicons/react/outline";
// import Add_Subscription from "./Add_Subscription";
import DeleteSubscription from "./Delete";
import GetPlans from "./getPlans";
import Add_Subscription from "./Add_Subscription";

function SubscriptionPlan() {

    const [isAddPopupOpen, setAddPopupOpen] = useState(false);
    const [deletePopup, setDeletePopupOpen]=useState(false)
    // const [checkBox, setcheckBox] = useState({
    //     check: false
    // })
    const [currentSubscription, setCurrentSubscription] = useState(null);
    // const [subcriptionData, setSubscriptionData] = useState([
    //     { planName: 'Subscription Plan 1', subscriberNo: 1200, serviceType: 'Mechanic', startDate: '17-12-2023', endDate: '20-12-2023'},
    //     { planName: 'Subscription Plan 2', subscriberNo: 1400, serviceType: 'Driver', startDate: '18-12-2023', endDate: '21-12-2023'},
    //     { planName: 'Subscription Plan 3', subscriberNo: 1700, serviceType: 'Cleaner', startDate: '19-12-2023', endDate: '22-12-2023'},
    //     { planName: 'Subscription Plan 4', subscriberNo: 1500, serviceType: 'Driver', startDate: '20-12-2023', endDate: '23-12-2023'},
    //     { planName: 'Subscription Plan 5', subscriberNo: 1100, serviceType: 'Mechanic', startDate: '21-12-2023', endDate: '24-12-2023'},
    // ]);

    const [subscriptionDetail, setSubscriptionDetail] = useState(false);

    const handleSubscriptionData = (subsData) => {
        setSubscriptionDetail(true);
        // console.log(subsData);
        setCurrentSubscription(subsData);
    }

    const backToSubscriptionPage = () => {
        setSubscriptionDetail(false);
    }
    
//    const handlecheck=()=>{
//         setcheckBox(
//            true
//         )
//    }

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

                                    <Button className="mr-4 mb-2" color="red" on onClick={()=>setDeletePopupOpen(true)}>
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

                                    {/* {subcriptionData.map((data, i) => (
                                        
                                        <TableRow key={i}>
                                            <TableCell>
                                                <input type="checkbox" name="check" value={checkBox} onClick={handlecheck}/>
                                            </TableCell>

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
                                    ))} */}
                                        <GetPlans handleSubscriptionData={handleSubscriptionData}/>
                                </TableBody>
                            </Table>
                        </Card>
                       
                        <DeleteSubscription isOpen={deletePopup} />
                    

                    </div>
                    {isAddPopupOpen && (
                        <>
                            <Add_Subscription setAddPopupOpen={setAddPopupOpen}/>
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