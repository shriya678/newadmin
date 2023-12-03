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
    Select,
    SelectItem,
  } from "@tremor/react";
  
  import { Switch } from "@headlessui/react";
  
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { CalculatorIcon } from "@heroicons/react/solid";
  import PermissionComponent from "../components/PermissionComponent";
  import AddAdminPage from "../components/AddAdminPage";
import AddCustomerPage from "../components/AddCustomerPage";
  
  
  const Customers = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [editId, setEditID] = useState(null);
  
    // const [sucess, setSucess] = useState();
    // const [loginError, setLoginError] = useState();
    // const [loading, setLoading] = useState();
  
    // const [enabled, setEnabled] = useState(false);
  
    const [permissionData,setPermissionData] = useState();
  
    const [addCustomer,setAddCustomer] = useState(false);
  
    const [isDeleteCheck,setIsDeleteCheck] = useState([]);
  
    const [modifyClick,setModifyClick] = useState(false);
  
    const [updateId,setUpdateId] = useState(null);
  
    
  
    // for fetching all
    useEffect(() => {
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
  
      API.get("/api/v1/superadmin/")
        .then((res) => {
          console.log("res:", res.data);
          setData(res.data.admins);
        })
        .catch((error) => console.log(error));
    }, []);
  
    const handleEdit = (id) => {
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
  
      API.get(`/api/v1/superadmin/` + id)
        .then((res) => {
          console.log(res);
          setPermissionData(res.data.admin);
  
          // setName(res.data.admin.name);
          setEmail(res.data.admin.email);
          setPhone(res.data.admin.phoneNo);
          setRole(res.data.admin.role);
        })
        .catch((error) => console.log(error));
      setEditID(id);
    };
  
  
    //  Delete Functionality
    const handleCheckbox = (e)=>{
      const{value,checked} = e.target;
      console.log("Deletevalue: ",value);
      if(checked){
        setIsDeleteCheck([...isDeleteCheck,value])
      }
      else{
        setIsDeleteCheck(isDeleteCheck.filter((deleteItem)=>deleteItem!==value))
      }
    }
  
    console.log("Delete: ",JSON.stringify(isDeleteCheck)); 
  

  
  
    const handleRadio = (id)=>{
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
  
      API.get(`/api/v1/superadmin/` + id)
        .then((res) => {
          console.log(res);
          // setPermissionData(res.data.admin);
  
          setName(res.data.admin.name);
          setEmail(res.data.admin.email);
          setPhone(res.data.admin.phoneNo);
          setRole(res.data.admin.role);
        })
        .catch((error) => console.log(error));
      setUpdateId(id);
    }
  
    console.log("Role: ",role);
  
    const updateRecord = ()=>{
  
      const API = axios.create({
            baseURL: `${import.meta.env.VITE_BASE_URL}`,
            withCredentials: true,
          });
      
          API.put(`/api/v1/superadmin/` + updateId, {
            _id: updateId,
            name,
            email,
            phoneNo,
            role,
          })
            .then((res) => {
              console.log("Update Rec: ",res);
              setUpdateId(false);
              location.reload();
            })
            .catch((error) => {
              console.log("eror: ", error);
              setUpdateId(false);
            });
  
    }
  
  
    const handleDelete = (id) => {
      
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
  
      console.log("Delete Id: ",id);
  
      API.delete(`/api/v1/superadmin/` +id)
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((error) => {
        
          console.log("eror: ", error);
          // setEditID(false)
        });
    };
  
  
    
  
    return (

    <div className="grid grid-cols-1 w-full p-4">

    <Card className="mt-4 dark:bg-tremor-background ">
  
    {addCustomer ? null :  <div className="sm:flex justify-between items-center">
      <Title>Customers</Title>
      <div className="py-2">
        <div className="sm:flex justify-between items-center">
        {updateId? <Button className="mr-4 mb-2" color="green" disabled>
            Add
          </Button>:
          <Button className="mr-4 mb-2" color="green" onClick={()=>setAddCustomer(true)}>
            Add
          </Button>}

          {/* {updateId ? 
            <Button className="mr-4 mb-2" color="green" onClick={()=>updateRecord()}>
            Update
          </Button>
          :
          <Button className="mr-4 mb-2" color="green" onClick={()=>setModifyClick(true)}>
            Modify
          </Button>} */}


          <Button className="mr-4 mb-2" color="green" onClick={()=>handleDelete(updateId)}>
            Delete
          </Button>

          <Button className="mr-4 mb-2" color="green" onClick={()=>handleDelete(updateId)}>
            Import
          </Button>

          <Button className="mr-4 mb-2" color="green" onClick={()=>handleDelete(updateId)}>
            Export
          </Button>


        {/* {updateId?  <Button className="mr-4 mb-2" color="green" disabled>
            Delete
          </Button>
          :
          <Button className="mr-4 mb-2" color="green" onClick={handleDelete}>
            Delete
          </Button>} */}
         
        </div>
      </div>

    </div>

  }


    {editId ? 

      permissionData? (<PermissionComponent permissionData={permissionData} editId={editId} handleEdit={()=>setEditID(null)}/>)  : <h1>Loading</h1>      

     :

    addCustomer ? (<AddCustomerPage setAddCustomer={()=>setAddCustomer(false)}/>) : 
     (
      <Table className="mt-5 dark:bg-tremor-background">
        <TableHead>
          <TableRow>
          {modifyClick?<TableHeaderCell>Choose Update</TableHeaderCell>:
          <TableHeaderCell>
           SelectDelete 
          </TableHeaderCell>
          }
            <TableHeaderCell>CustomerName</TableHeaderCell>
            <TableHeaderCell>PhoneNo</TableHeaderCell>
            <TableHeaderCell>Address</TableHeaderCell>
            <TableHeaderCell>Rating</TableHeaderCell>
            <TableHeaderCell>Total Orders</TableHeaderCell>
            <TableHeaderCell>Cancelled Orders</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((user, index) => 

            user._id === updateId ? 

            (
              <TableRow key={index}>

              <TableCell>
              <input type="radio" checked={true} />
              </TableCell>

              <TableCell>
                <TextInput
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </TableCell>

              <TableCell>
                <TextInput
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </TableCell>

              <TableCell>
                <TextInput
                  type="text"
                  value={phoneNo}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </TableCell>

              <TableCell>

              <Select
                  value={role}
                  onValueChange={setRole}
                  placeholder={role}
                >
                  <SelectItem value="admin" icon={CalculatorIcon}>
                    Admin
                  </SelectItem>
                  <SelectItem value="superAdmin" icon={CalculatorIcon}>
                    SuperAdmin
                  </SelectItem>
                </Select>

              </TableCell>

              <TableCell>
                <Button style={{ color: "#ffffff" }} disabled>
                  Permission
                </Button>
              </TableCell>

              <TableCell>
                <div className="sm:flex justify-between items-center">
                  <Switch
                    className={`${
                      user.permissionCheck ? "bg-blue-600" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        user.permissionCheck ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </TableCell>


            </TableRow>
            )

            :

          (  <TableRow key={index}>

            <TableCell>

            {modifyClick?

              <input type="radio" onClick={()=>handleRadio(user._id)}/>:

              <input type="checkbox" value={user._id} checked={user.isDeleteCheck} onChange={(e)=>handleCheckbox(e)} />

            }
            </TableCell>

              <TableCell>
                <Text> {user.name} </Text>
              </TableCell>

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
                <Button
                  className="mr-1 mb-2"
                  color="green"
                  onClick={() => {
                    handleEdit(user._id);
                  }}
                >
                  Permission
                </Button>
              </TableCell>

              <TableCell>
                <div className="sm:flex justify-between items-center">
                  <Switch
                    className={`${
                      user.permissionCheck ? " bg-green-500" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        user.permissionCheck ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </TableCell>


            </TableRow>
          )


          )} */}
        </TableBody>
      </Table>
    )
    }
  </Card>

        </div>


     
  
    )
    
  };
  
  
  export default Customers;