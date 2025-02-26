import { Card, Title, BarChart, Flex } from "@tremor/react";
import { SelectComponent } from "./SelectComponent";
import { useState, useContext, useEffect } from "react";
import { SelectBoxContext } from "../pages/Dashboard";
import Datepickertofrom from "./DatePicker";
import { saveAs } from 'file-saver';


const chartdata1 = [
  {
    date: "2015",
    running: 167,
  },
  {
    date: "2016",
    running: 140,
  },
  {
    date: "2017",
    running: 100,
  },
  {
    date: "2018",
    running: 120,
  },
  {
    date: "2019",
    running: 132,
  },
  {
    date: "2020",
    running: 150,
  },
  {
    date: "2021",
    running: 200,
  },
  {
    date: "2022",
    running: 150,
  },
  {
    date: "2023",
    running: 140,
  },
  {
    date: "2024",
    running: 132,
  },
];

const chartdata2 = [
  {
    date: "Jan",
    running: 167,
  },
  {
    date: "Feb",
    running: 140,
  },
  {
    date: "Mar",
    running: 100,
  },
  {
    date: "Apr",
    running: 120,
  },
  {
    date: "May",
    running: 132,
  },
  {
    date: "June",
    running: 150,
  },
  {
    date: "July",
    running: 150,
  },
  {
    date: "Aug",
    running: 150,
  },
  {
    date: "Sep",
    running: 150,
  },
  {
    date: "Oct",
    running: 150,
  },
  {
    date: "Nov",
    running: 150,
  },
  {
    date: "Dec",
    running: 150,
  },
  
];

const chartdata31 = [
  {
    date: "2023-11-14",
    running: 167,
  },
  {
    date: "2023-11-15",
    running: 167,
  },
  {
    date: "2023-11-16",
    running: 167,
  },
  {
    date: "2023-11-17",
    running: 140,
  },
  {
    date: "2023-11-18",
    running: 100,
  },
  {
    date: "2023-11-19",
    running: 120,
  },
  {
    date: "2023-11-20",
    running: 120,
  },
  {
    date: "2023-11-21",
    running: 120,
  },
  {
    date: "2023-11-22",
    running: 120,
  },
  {
    date: "2023-11-23",
    running: 120,
  },
  {
    date: "2023-11-24",
    running: 120,
  },
  {
    date: "2023-11-25",
    running: 120,
  },
];

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const BarChartComponent = () => {
  const BarDB = ['Yearly', 'Monthly', 'Weekly'];
  const { selectBar } = useContext(SelectBoxContext);
  // const [dates, setDates] = useState([]);

  // const [exportData, setExportData] = useState([]);
  const convertToCSV = (chartData) => {
    const csvData = [];
    csvData.push(['Date', 'Value']);
    chartData.forEach((item) => {
      csvData.push([item.date, item.running]);
    });
    const csvContent = csvData.map((row) => row.join(',')).join('\n');
    return csvContent;
  };

  const handleExportClick = (id, data) => {
    const csvContent = convertToCSV(data);

    // Create a Blob and save the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `exported_data_${id}.csv`);
  };

  const [selectedDates, setSelectedDates] = useState({ startdate: '2023-11-15', enddate: '2023-11-25' });
  
  const handleDatesSelected = (dates) => {
    setSelectedDates(dates);
  };
  
  const chartdata3 = chartdata31.filter((data) => {
    if (selectedDates){
      return data.date >= selectedDates.startdate && data.date <= selectedDates.enddate;
    }
    return true;
  });
  
  const chartdata4 = chartdata31.filter((data) => {
    const last7Days = new Date();
      last7Days.setDate(last7Days.getDate() - 7);
      const formattedLast7Days = last7Days.toISOString().split('T')[0];
      return data.date >= formattedLast7Days && data.date < new Date().toISOString().split('T')[0];
    });

  return (
    <>
      <Flex>
        <Card>
          <Flex className="flex-col items-start sm:justify-between xl:flex-row">
          <Datepickertofrom onDatesSelected={handleDatesSelected} />
            <SelectComponent BarDB={BarDB} />
          </Flex>
          <div className="flex flex-col gap-2 w-full">
            <Card className="mt-4 flex-1 dark:bg-tremor-background">
              <Flex justifyContent="between" alignItems="center">
                <Title className="dark:text-slate-950">Revenue</Title>
                <button onClick={() => handleExportClick('Revenue', selectBar === "Yearly" ? chartdata1 : selectBar === "Monthly" ? chartdata2 : selectBar ==="Weekly" ? chartdata4 : chartdata3)}>Export</button>
              </Flex>
              <Flex>
                <BarChart
                  id="Revenue"
                  className="dark:bg-tremor-background h-72 mt-4 rounded-tremor-default"
                  data={selectBar === "Yearly" ? chartdata1 : selectBar === "Monthly" ? chartdata2 : selectBar ==="Weekly" ? chartdata4 : chartdata3}
                  index="date"
                  categories={["running"]}
                  colors={["green"]}
                  yAxisWidth={30}
                  customTooltip={customTooltip}
                />
              </Flex>
            </Card>

            {/* Second BarChart */}
            <Card className="mt-4 flex-1 dark:bg-tremor-background">
              <Flex justifyContent="between" alignItems="center">
                <Title className="dark:text-slate-950">Orders</Title>
                <button onClick={() => handleExportClick('Orders', selectBar === "Yearly" ? chartdata1 : selectBar === "Monthly" ? chartdata2 : selectBar ==="Weekly" ? chartdata4 : chartdata3)}>Export</button>
              </Flex>
              <Flex>
                <BarChart
                  id="Orders"
                  className="dark:bg-tremor-background h-72 mt-4 rounded-tremor-default"
                  data={selectBar === "Yearly" ? chartdata1 : selectBar === "Monthly" ? chartdata2 : selectBar ==="Weekly" ? chartdata4 : chartdata3}
                  index="date"
                  categories={["running"]}
                  colors={["emerald"]}
                  yAxisWidth={30}
                  customTooltip={customTooltip}
                />
              </Flex>
            </Card>
          </div>
        </Card>
      </Flex>
    </>
  );
};

export default BarChartComponent;