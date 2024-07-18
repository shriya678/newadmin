import axios from "axios"
import { useEffect, useState } from "react";
import {  TableRow,  TableCell, Text } from "@tremor/react";
import { CogIcon } from "@heroicons/react/outline";
import PropTypes from 'prop-types';

export default function GetPlans({handleSubscriptionData, sendDataToParent }) {
  
 
// const [t, sett]=useState(false)
const [subscriptionDatas, setsubscriptionDatas]=useState("")
//   const [subcriptionData, setSubscriptionData] = useState([
//     { planName: 'Subscription Plan 1', subscriberNo: 1200, serviceType: 'Mechanic', startDate: '17-12-2023', endDate: '20-12-2023'},
//     { planName: 'Subscription Plan 2', subscriberNo: 1400, serviceType: 'Driver', startDate: '18-12-2023', endDate: '21-12-2023'},
//     { planName: 'Subscription Plan 3', subscriberNo: 1700, serviceType: 'Cleaner', startDate: '19-12-2023', endDate: '22-12-2023'},
//     { planName: 'Subscription Plan 4', subscriberNo: 1500, serviceType: 'Driver', startDate: '20-12-2023', endDate: '23-12-2023'},
//     { planName: 'Subscription Plan 5', subscriberNo: 1100, serviceType: 'Mechanic', startDate: '21-12-2023', endDate: '24-12-2023'},
// ]);



const [check, setcheck]=useState({

})
    useEffect(() => {
        const apicall=async()=>{
            const API =  axios.create({
                baseURL: `${import.meta.env.VITE_BASE_URL}`,
                withCredentials: true,
              });
            await API.get("api/v1/superadmin/subscription/getplans").then((res) => {
                setsubscriptionDatas(res.data.sbPlans)
                console.log(res.data.sbPlans)
            }).catch((err) => {
                console.log(err)
            })
        
        }
        apicall()
        }
    // get all plans
    ,[])

    // const handle=(e)=>{
    //   const {name}=e.target
    //   sett(!t)
    //   if(t===false){
    //     delete check[name]
    //     setcheck(...check)
    //   }
    //     console.log("clicked")
    // }

    
   const  handlecheck=async(e)=>{
    const {name, value, checked}=e.target
    console.log(name, value)
      await setcheck((previous)=>{
     
      const newState = { ...previous };

      
      if (checked) {
        newState[name] = value;
      } else {
        delete newState[name];
      }
      return newState;
      
     
    })
    
    
  }
  useEffect(() => {
    console.log("Updated file:", check);
  }, [check]);

  useEffect(() => {
    sendDataToParent(check);
  }, [check]);
  
  return (
    <>
     
      {subscriptionDatas?subscriptionDatas.map((data, i) => (
                                         
                                        <TableRow key={i}>
                                            <TableCell>
                                                <input type="checkbox" name={`check${i}`} value={data._id} onChange={handlecheck}  />
                                            </TableCell>

                                            <TableCell>
                                                <Text>{i + 1}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <p className="cursor-pointer" onClick={() => handleSubscriptionData(data)}>{data.title}</p>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.description}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.serviceType}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.price}</Text>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{data.category}</Text>
                                            </TableCell>

                                            <TableCell className="flex justify-center">
                                                <CogIcon className="w-5 h-5 cursor-pointer"></CogIcon>
                                            </TableCell>
                                        </TableRow>
                                        
                                      
                                        )
                                        ):<h1>no data</h1>
                                        
                                        }
    
        
    </>
  )
}

GetPlans.propTypes = {
  handleSubscriptionData: PropTypes.func.isRequired,
  sendDataToParent:PropTypes.func.isRequired,

};  