import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Button,
  } from "@tremor/react";
  import axios from "axios";
  import { useState, useEffect } from "react";
  import AddServiceManagement from "../pages/ServiceManagement/AddServices";
  
  function ServiceManagement() {
    const [AddPopupOpen, setAddPopupOpen] = useState(false);
    const [serviceData, setServiceData] = useState([]);
    const [isDeleteCheck, setIsDeleteCheck] = useState([]);
    const [deletePopup, setDeletePopup] = useState(false);
  
    const handleAddServices = () => {
      setAddPopupOpen(true);
    };
  
    useEffect(() => {
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
      API.get(`/api/v1/service/getAll`)
        .then((res) => {
          // console.log(res.data.services, "kaveri....");
          if (res) {
            setServiceData(res.data.services);
          } else {
            console.error("API response is not an array:");
            setServiceData([]);
          }
        })
        .catch((error) => {
          console.log("Service Error: ", error);
        });
    }, []);
  
    const handleCheckbox = (e) => {
      const { value, checked } = e.target;
      console.log("Deletevalue: ", value);
      if (checked) {
        setIsDeleteCheck([...isDeleteCheck, value]);
      } else {
        setIsDeleteCheck(
          isDeleteCheck.filter((deleteItem) => deleteItem !== value)
        );
      }
    };
  
    const handleDelete = () => {
      setDeletePopup(!deletePopup)
    }
  
    return (
      <div className="p-2 grid grid-cols-1 w-full">
        {AddPopupOpen ? (
          <AddServiceManagement setAddPopupOpen={setAddPopupOpen} />
        ) : (
          <>
            <p className="text-center text-3xl font-semibold my-2">Services</p>
            <div className="sm:flex justify-between md:justify-end items-center">
              <div className="py-2">
                <div className="sm:flex justify-between items-center">
                  <Button
                    className="mr-4 mb-2"
                    color="green"
                    onClick={handleAddServices}
                  >
                    Add
                  </Button>
  
                  <Button className="mr-4 mb-2" color="red" onClick={handleDelete}>
                    Delete
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
                    <TableHeaderCell>Description</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Image</TableHeaderCell>
                    <TableHeaderCell>Model Id</TableHeaderCell>
                    <TableHeaderCell>Model Name</TableHeaderCell>
                    <TableHeaderCell>Sub Services</TableHeaderCell>
                    {/* <TableHeaderCell>Id</TableHeaderCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {serviceData.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <input type="checkbox" onChange={(e) => handleCheckbox(e)}/>
                      </TableCell>
  
                      <TableCell>
                        <Text>{user.name}</Text>
                      </TableCell>
  
                      <TableCell>
                        <Text>{user.price}</Text>
                      </TableCell>
  
                      <TableCell>
                        <Text>{user.description}</Text>
                      </TableCell>
  
                      <TableCell>
                        <Text>{user.category}</Text>
                      </TableCell>
  
                      <TableCell>
                        <Text>
                          {" "}
                          {user.photo && (
                            <img
                              src={user.photo}
                              alt="Service"
                              width="50"
                              height="50"
                            />
                          )}
                        </Text>
                      </TableCell>
  
                      <TableCell>
                        <Text>{user.modelId}</Text>
                      </TableCell>
  
                      <TableCell>
                        <Text>{user.modelName}</Text>
                      </TableCell>
  
                      <TableCell>
                        {user.serviceIncluded.map((included,i) => (
                          <Text key={i}>
                            {included.subDescription}: {included.subService}:
                          </Text>
                        ))}
                      </TableCell>
  
                      {/* <TableCell>
                        {user.serviceIncluded.map((included) => (
                          <Text>
                            {included._id}
                          </Text>
                        ))}
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </>
        )}
      </div>
    );
  }
  
  export default ServiceManagement;