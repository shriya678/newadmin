import './delete.css';
import PropTypes from 'prop-types';
import axios from "axios";
import { useEffect, useState } from 'react'

export default function Deletesubscription(props) {
  
  const [data, setdata]=useState([])
  

  useEffect(()=>{
    console.log("mayank", props.dataFromChild)
    setdata(props.dataFromChild)
  },[props.dataFromChild])
  

  const submitDelete = ()=>{
    // const values=Object.values(data);
  // 
    console.log("rishabh",data)

    const API = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      withCredentials: true,
    });
    API.delete(`/api/v1/superadmin/subscriptionplan/bulkdelete`,{
      data:{array:[...data]}
    }
    )

      .then((res) => {
        console.log(res);
        setdata(null);
        // setSucess(true);
       
      })
      .catch((error) => {
      
        console.log("eror: ", error);
        // setEditID(false);
        

        setdata(null);
      });

    
    
  
  }
 
  const close=()=>{
    props.setIsOpen(false);
  }
  return (
    
        <div className={`${props.isOpen?"active":"nonactive"} position`}>
          <h2 className='deleteverification'>Are you Sure you want to delete ?</h2>
          <button className="buttonYES" onClick={submitDelete}>Yes</button>
          <button onClick={close} className='buttonNO'>No</button>
        </div>
   
    
  )
}
Deletesubscription.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dataFromChild: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};  
