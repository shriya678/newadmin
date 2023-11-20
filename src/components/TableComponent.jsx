// import { BellIcon, ChartBarIcon, ExternalLinkIcon, MailIcon, StatusOnlineIcon } from "@heroicons/react/outline";
import { HomeIcon, SearchIcon,ChartBarIcon,BellIcon,ExternalLinkIcon,MailIcon,StatusOnlineIcon, StatusOfflineIcon } from "@heroicons/react/solid";
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
  Badge,
  Flex,
  TextInput,
} from "@tremor/react";
import { SelectComponent } from "./SelectComponent";
import { useContext } from "react";
import { SelectBoxContext } from "../pages/Dashboard";

const data = [
  {
    name: "Pawan Kumar",
    typeOfService: "On-time",
    dateOfIssue: "22/07/2023",
    completionDate: "20/08/2023",
    status: "pending",
  },
  {
    name: "Chaman Lal",
    typeOfService: "Schedule",
    dateOfIssue: "16/08/2023",
    completionDate: "27/08/2023",
    status: "completed",
  },
  {
    name: "Somya Kriplani",
    typeOfService: "On-time",
    dateOfIssue: "02/09/2023",
    completionDate: "20/09/2023",
    status: "accepted",
  },
  {
    name: "Priya Desai",
    typeOfService: "Schedule",
    dateOfIssue: "22/08/2023",
    completionDate: "20/08/2023",
    status: "completed",
  },
];

const filterData = [...data];


const TableComponent = () => {

  const roleDB = ['completed','pending','accepted'];

  const serviceTypeDB = ['On-time','Schedule']

  const { selectService, selectStatus } = useContext(SelectBoxContext);

  const result = filterData.filter((user) => {
    // Check if both status and service type are selected
    if (selectStatus && selectService) {
      return user.status === selectStatus && user.typeOfService === selectService;
    }
    // Check if only status is selected
    else if (selectStatus) {
      return user.status === selectStatus;
    }
    // Check if only service type is selected
    else if (selectService) {
      return user.typeOfService === selectService;
    }
    return true;
  });


  // console.log("RoleDB: ",roleDB)

  return (
    <Card className="mt-4 dark:bg-tremor-background">

    <div className="sm:flex justify-between items-center">
    <Title>Order List</Title>
    <div className="py-2">
    <div className="sm:flex justify-between items-center">
        {/* <TextInput className="dark:bg-tremor-background mr-4 mb-2" icon={SearchIcon} placeholder="Search..." /> */}
        <SelectComponent roleDB={roleDB}/>
        <SelectComponent serviceTypeDB={serviceTypeDB}/>
        </div>

      </div>
    </div>


    <Table className="mt-5 dark:bg-tremor-background">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Type of Service</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Date of issue</TableHeaderCell>
          <TableHeaderCell>Completion Date</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {result.map((item) =>{

          return (
          <TableRow key={item.name}>

          <div className="flex justify-start items-center">
            <TableCell>{item.name}</TableCell>
          </div>
           
            <TableCell>
              <Text>{item.typeOfService}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.status}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.dateOfIssue}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.completionDate}</Text>
            </TableCell>
          </TableRow>
        )
        }
        )}
      </TableBody>
    </Table>
  </Card>
  )
  
};

export default TableComponent;