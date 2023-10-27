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
    email: "pawan@gmail.com",
    Avatar:<HomeIcon width={40}/>,
    price: "$ 45.99",
    role: "driver",
    status: "active",
  },
  {
    name: "Chaman Lal",
    email: "chaman@gmail.com",
    Avatar:<SearchIcon width={40}/>,
    price: "$ 45.99",
    role: "mechanic",
    status: "active",
  },
  {
    name: "Somya Kriplani",
    email: "somya@gmail.com",
    Avatar:<BellIcon width={40}/>,
    price: "$ 20",
    role:"cleaner",
    status: "inactive",
  },
  {
    name: "Priya Desai",
    email: "priya@gmail.com",
    Avatar:<ChartBarIcon width={40}/>,
    price: "$ 29.66",
    role:"driver",
    status: "inactive",
  },
];

const filterData = [...data];


const TableComponent = () => {

  const roleDB = ['driver','cleaner','mechanic','all'];

  const { selectRole } = useContext(SelectBoxContext);

  // console.log("SelectBat: ",selectRole);

  const result = selectRole==='all' ? data :selectRole==undefined ? data : filterData.filter((user)=>user.role === selectRole);
  console.log("result: ",result);


  // console.log("RoleDB: ",roleDB)

  return (
    <Card className="mt-4 dark:bg-tremor-background">

    <div className="sm:flex justify-between items-center">
    <Title>Product List</Title>
    <div className="py-2">
    <div className="sm:flex justify-between items-center">
        <TextInput className="dark:bg-tremor-background mr-4 mb-2" icon={SearchIcon} placeholder="Search..." />

        <SelectComponent roleDB={roleDB}/>
        </div>

      </div>
    </div>


    <Table className="mt-5 dark:bg-tremor-background">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Earning</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {result.map((item) =>{

          return (
          <TableRow key={item.name}>

          <div className="flex justify-start items-center">
          <TableCell>
          {item.Avatar}
          </TableCell>
          {item.name}
          </div>
           
            <TableCell>
              <Text>{item.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.price}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.role}</Text>
            </TableCell>
            <TableCell>
              <Badge color={item.status==='active' ? "emerald" :"red"} icon={ item.status==='active' ? StatusOnlineIcon:StatusOfflineIcon}>
                {item.status}
              </Badge>
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
