import React from "react";
import SalesItem from "./SalesItem";
import WebAnalytics from "./WebAnalytics";
import ScoreList from "./ScoreList";
import TableComponent from "./TableComponent";
import BarChartComponent from "./BarChartComponent";

const RightColumn = () => {

  


  return (
    <div className="w-full p-2">

      {/* <SalesItem /> */}

      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <BarChartComponent />   
        <SalesItem />
      </div>

      <TableComponent />
      <WebAnalytics />
      <ScoreList />
    </div>
  );
};

export default RightColumn;