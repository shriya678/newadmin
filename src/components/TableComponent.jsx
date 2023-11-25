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
import { useState, useEffect, useContext } from "react";
import { SelectBoxContext } from "../pages/Dashboard";
import Datepickertofrom from "./DatePicker";
import axios from "axios";


const TableComponent = () => {

  const roleDB = ['completed','pending','accepted'];

  const serviceTypeDB = ['onTime','Schedule']

  const { selectService, selectStatus } = useContext(SelectBoxContext);

  const [userData, setUserData] = useState([]);

  const result = userData.filter((user) => {
    // Check if both status and service type are selected
    if (selectStatus && selectService) {
      return user.status === selectStatus && user.scheduleOfService === selectService;
    }
    // Check if only status is selected
    else if (selectStatus) {
      return user.status === selectStatus;
    }
    // Check if only service type is selected
    else if (selectService) {
      return user.scheduleOfService === selectService;
    }
    return true;
  });

  const [selectedDates, setSelectedDates] = useState({ startdate: '2023-11-15', enddate: '2023-11-25' });

  const handleDatesSelected = (dates) => {
    setSelectedDates(dates);
  };
  console.log(selectedDates);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://service-provider-apis.onrender.com/api/v1/admin/getAllOrders/?status=&page=1&limit=30",
          {
            startDate: selectedDates.startdate,
            endDate: selectedDates.enddate
          },
          {
            withCredentials: true,
          }
        );
        let mechanicTickets = response.data?.orders.mechanicTickets;
        let driverTickets = response.data?.orders.driverTickets;
        let cleanerTickets = response.data?.orders.cleanerTickets;
        let allTickets = [...mechanicTickets, ...driverTickets, ...cleanerTickets];
        console.log(allTickets);
        setUserData(allTickets);
        console.log(userData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, [selectedDates]);

  return (
    <Card className="mt-4 dark:bg-tremor-background">

      <div className="sm:flex sm:flex-col sm:items-start justify-between items-center">
        <Title>Order List</Title>
        <div className="py-2 sm:w-full">
          <div className="sm:flex sm:flex-col justify-between items-center gap-4 xl:flex-row">
          <Datepickertofrom onDatesSelected={handleDatesSelected} />
            <div className="flex flex-col sm:flex-row sm:justify-start sm:w-full lg:justify-between xl:justify-end">
              <div className="mb-2 mr-2">
                <p className="ml-1 text-xs font-semibold text-gray-500">Status</p>
                <SelectComponent roleDB={roleDB} />
              </div>

              <div>
                <p className="ml-1 text-xs font-semibold text-gray-500">Service Type</p>
                <SelectComponent serviceTypeDB={serviceTypeDB} />
              </div>
            </div>
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
          {result.map((item) => {

            return (
              <TableRow key={item.name}>

                <div className="flex justify-start items-center">
                  <TableCell>{item.customer_name}</TableCell>
                </div>

                <TableCell>
                  <Text>{item.scheduleOfService}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.status}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.createdAt.slice(0, 10)}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.updatedAt.slice(0, 10)}</Text>
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