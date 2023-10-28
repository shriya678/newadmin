import { SearchIcon } from "@heroicons/react/solid";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  TextInput,
  Button,
} from "@tremor/react";
import { SelectComponent } from "./SelectComponent";
import { useEffect, useState } from "react";
import axios from "axios";

// const data = [
//   {
//     name: "Abstract 3D",
//     stock: "32 in stock",
//     Avatar:<HomeIcon width={40}/>,
//     price: "$ 45.99",
//     status: "active",
//   },
//   {
//     name: "Iphone 9",
//     stock: "45 in stock",
//     Avatar:<SearchIcon width={40}/>,
//     price: "$ 45.99",
//     status: "active",
//   },
//   {
//     name: "Smart Watch",
//     stock: "24 in stock",
//     Avatar:<BellIcon width={40}/>,
//     price: "$ 20",
//     status: "active",
//   },
//   {
//     name: "Boat Headphone",
//     stock: "20 in stock",
//     Avatar:<ChartBarIcon width={40}/>,
//     price: "$ 29.66",
//     status: "active",
//   },

// ];

const AdminTableComponent = () => {

  const [data,setData] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNo,setPhone] = useState('');
  const [role,setRole] = useState('');
  const [editId,setEditID] = useState(-1);
  const [deleteId,setDeleteId] = useState(-1);


  useEffect(()=>{

    const API = axios.create({
      baseURL: "https://service-provider-apis.onrender.com",
      withCredentials: true,
    });

    API
    .get(
      "/api/v1/superadmin/",
    )
    .then((res) =>{
      console.log("res:", res.data.admins);
      setData(res.data.admins);
    }
     )
    .catch((error)=>console.log(error));
  },[])


  const handleEdit = (id)=>{

    const API = axios.create({
      baseURL: "https://service-provider-apis.onrender.com",
      withCredentials: true,
    });

    API.get(`/api/v1/superadmin/`+id)
    .then((res)=>{
      console.log(res);
      setName(res.data.admin.name)
      setEmail(res.data.admin.email)
      setPhone(res.data.admin.phoneNo)
      setRole(res.data.admin.role)
    })
    .catch((error)=>console.log(error))
    setEditID(id)
  }

  const handleDelete = (id)=>{
    
    setDeleteId(id)
  }
  
  const handleUpdate = () =>{

    const API = axios.create({
      baseURL: "https://service-provider-apis.onrender.com",
      withCredentials: true,
    });

    API.put(`/api/v1/superadmin/`+editId,
    {_id:editId,name,email,phoneNo,role})
    .then((res)=>{
      console.log(res);
      setEditID(false);
    })
    .catch((error)=>{
      console.log("eror: ",error)
      setEditID(false)
    })
  }


  return (
    <Card className="mt-4 dark:bg-tremor-background">

    <div className="sm:flex justify-between items-center">
    <Title>Product Sell</Title>
    <div className="py-2">
    <div className="sm:flex justify-between items-center">
        <TextInput className="dark:bg-tremor-background mr-4 mb-2" icon={SearchIcon} placeholder="Search..." />
        {/* <SelectComponent/> */}
        </div>

      </div>
    </div>


    <Table className="mt-5 dark:bg-tremor-background">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Phone No</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Update</TableHeaderCell> 
          <TableHeaderCell>Delete</TableHeaderCell> 
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((user,index) => (

          user._id === editId ? 

         <TableRow key={index}>

            <TableCell>
            {/* <input type="text"  value={name} onChange={e=>setName(e.target.value)} /> */}

            <TextInput type="text" value={name} onChange={e=>setName(e.target.value)} />

            </TableCell>

            <TableCell>
           <TextInput type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            </TableCell>

            <TableCell>
            <TextInput type="text" value={phoneNo} onChange={e=>setPhone(e.target.value)} />
            </TableCell>

            <TableCell>
            <TextInput type="text" value={role} onChange={e=>setRole(e.target.value)} />
            </TableCell>

            <TableCell>
            <Button style={{color:'#ffffff'}} onClick={handleUpdate}>Update</Button>
            </TableCell>

            <TableCell>
            <Button style={{color:'#ffffff'}} disabled>Delete</Button>
            </TableCell>

          </TableRow>
         

          :

          <TableRow key={index}>

          <div className="flex justify-start items-center">
          <TableCell>
          {user.Avatar}
          </TableCell>
          {user.name}
          </div>
           
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.phoneNo}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.role}</Text>
            </TableCell>
            <TableCell>
            <Button style={{color:'#ffffff'}} onClick={()=>handleEdit(user._id)}>Update Admin</Button>
            </TableCell>
            <TableCell>
            <Button style={{color:'#ffffff'}} onClick={()=>handleDelete(user._id)}>Delete Admin</Button>
            </TableCell>
          </TableRow>
          
        )
        )}
      </TableBody>
    </Table>
  </Card>
  )
  
};

export default AdminTableComponent;

export default AdminTableComponent;
