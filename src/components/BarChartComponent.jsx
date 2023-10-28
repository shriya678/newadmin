import { Card, Title, BarChart, Flex } from "@tremor/react";
import { SelectComponent } from "./SelectComponent";
import { useContext } from "react";
import { SelectBoxContext } from "../pages/Dashboard";

const chartdata1 = [
  {
    date: "2015",
    running: 167,
  },
  // ...
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

const chartdata3 = [
  {
    date: "Sun",
    running: 167,
  },
  // ...
  {
    date: "Monday",
    running: 140,
  },
  {
    date: "Tue",
    running: 100,
  },
  {
    date: "Wed",
    running: 120,
  },
  {
    date: "Thu",
    running: 120,
  },
  {
    date: "Fri",
    running: 120,
  },
  {
    date: "Sat",
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

  const BarDB = ['Yearly','Monthly','Weekly'];

  const { selectBar } = useContext(SelectBoxContext);

  console.log("SelectBat: ",selectBar);

  return (
    <>
      <Card className="mt-4 dark:bg-tremor-background">
      <Flex justifyContent="between" alignItems="center">
      <Title className=" dark:text-slate-950">Overview</Title>
      <SelectComponent BarDB={BarDB}/>
      </Flex>
        <BarChart
          className=" dark:bg-tremor-background h-72 mt-4 rounded-tremor-default"
          data={selectBar =="Yearly" ?  chartdata1 : selectBar == "Monthly" ? chartdata2 : chartdata3}
          index="date"
          categories={["running"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      </Card>
    </>
  );
};

export default BarChartComponent;

