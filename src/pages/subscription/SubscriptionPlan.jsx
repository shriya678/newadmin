import { Table, TableHead, TableRow, TableHeaderCell, TableBody,  Card, Button } from "@tremor/react";
import { useEffect, useState } from "react";
import SubscriptionDetailPage from "../../pages/SubscriptionDetailPage";
// import { CogIcon } from "@heroicons/react/outline";
// import Add_Subscription from "./Add_Subscription";
import DeleteSubscription from "./Delete";
import GetPlans from "./getPlans";
import Add_Subscription from "./Add_Subscription";
import { handleDownloadFile } from "./downloadsubscription";
import Importsubcription from "./importsubcription";
import './subscriptionPlan.css'

function SubscriptionPlan() {
    const [importdata, setimportdata]=useState(false)
    const [isAddPopupOpen, setAddPopupOpen] = useState(false);
    const [deletePopup, setDeletePopupOpen]=useState(false);
    const [dataFromChild, setDataFromChild] = useState(null);
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

const handleDataFromChild = (data) => {
    const dat=Object.values(data)
    setDataFromChild(dat);
    console.log("rishabh")
  };
useEffect(()=>{
    console.log("me",dataFromChild)
},[dataFromChild])
    return (
        <>
            {!subscriptionDetail ? (
                <>
                    <div className={`${deletePopup||importdata?"boxBackground":"boxback"} ` }></div>
                    <div className={` p-2 grid grid-cols-1 w-full`} >
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

                                    <Button  className="mr-4 mb-2" color="indigo"  onClick={()=>setimportdata(true)}>
                                        Import
                                    </Button>

                                    <Button onClick={handleDownloadFile} className="mr-4 mb-2" color="yellow">
                                        Export
                                    </Button>
                                </div>
                            </div>

                        </div>
                
                <Card className="dark:bg-tremor-background tabledata">
                            <Table className="dark:bg-tremor-background" >
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell></TableHeaderCell>
                                        <TableHeaderCell>S. No.</TableHeaderCell>
                                        <TableHeaderCell>Subscription Title</TableHeaderCell>
                                        <TableHeaderCell>Description</TableHeaderCell>
                                        <TableHeaderCell>Service Type</TableHeaderCell>
                                        <TableHeaderCell>Price</TableHeaderCell>
                                        <TableHeaderCell className="text-center">Permissions</TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >

                                    
                                        
                                         <GetPlans handleSubscriptionData={handleSubscriptionData}  sendDataToParent={handleDataFromChild}/>
                                    
                                        
                                </TableBody>
                            </Table>
                        </Card>
                       
                </div>
                      
                       
                        <DeleteSubscription isOpen={deletePopup} dataFromChild={dataFromChild} setIsOpen={setDeletePopupOpen} />
                    
                        <Importsubcription  importdata={importdata} setimportdata={setimportdata}/>
                    
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