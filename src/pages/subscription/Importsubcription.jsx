import { PropTypes } from 'prop-types';
import { useState,useEffect } from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx';
import "./import.css"
export default function Importsubcription({importdata, setimportdata}) {
    const [file, setFile]=useState("")
    const [data, setData] = useState({});
   
    const handleClick=()=>{
      setimportdata(false)
     }
    
    const handleFile=(e)=>{
        console.log(e)
        // const {name, value}=e.target
        const File=e.target.files[0]
        // console.log(name, value)
        // setFile(value)

        let fileTypes = [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "text/csv",
          ];
          if (File&&fileTypes.includes(File.type)) {
            setFile(File)
            readExcelFile(File);
              
          } else {
            alert("Please select a valid csv file");
            setFile(null)
          }
          
    }

    const handleFileSubmit = () => {
        
    
        console.log("Selected: ", File);
    
        if (File) {
         
       
            
         
          const API = axios.create({
            baseURL: `${import.meta.env.VITE_BASE_URL}`,
            withCredentials: true,
          });
          data.map((data) => {
            API.post(`/api/v1/superadmin/subscriptionplan/create` , data)
            .then((res) => {
              console.log("Bulk Response: ", res);
             
              setFile(null);
             
            })
            .catch((error) => {
              console.log("ServiceProvider Error: ", error);
              setFile(null);
            
            });
          });
          
          
        }
        
      };

      const readExcelFile = (file) => {
        console.log("mayank")
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          console.log("Roman",jsonData);
          
          const services=jsonData.map((data) =>(JSON.stringify(data)));
          console.log("Ben10", services);
          // const services=JSON.stringify(jsonData)
const Object=services.map((data)=>{
          const dataObject = JSON.parse(data);
          dataObject.servicesIncludes = JSON.parse(dataObject.servicesIncludes);
         return dataObject;
})
          
          // const t=services.replace(/\\/g, '')
          setData(Object);
          console.log("Me",Object); // Log the JSON data to inspect it
        };
        reader.readAsArrayBuffer(file);
      };



    useEffect(() => {
        console.log("Updated file:", file);
      }, [file]);
  return (
    <>    
          <div className={`${importdata? "visible":"invisible"} importdiv`}>
            <h2> Choose Subscription Plan CSV file Bulk upload</h2>
            <input
                      className="bg-gray-50 border border-gray-300 text-gray-900
                      sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                      block w-full p-2.5 "
                      id="file_input"
                      type="file"
                      required
                      onChange={handleFile}
            />
            
              <button className='submitbutton' onClick={handleFileSubmit}>Submit</button>
              <button className="cancelbutton" onClick={handleClick}>Cancel</button>
           
            
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
           
    </>
  )
}
Importsubcription.propTypes = {
  importdata:PropTypes.bool.isRequired,
  setimportdata:PropTypes.func.isRequired

};