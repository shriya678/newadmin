import React from "react";
import CardItem from "./CardItem";
import BarChartComponent from "./BarChartComponent";
import TableComponent from "./TableComponent";
import SalesItem from "./SalesItem";

import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CurrencyRupeeIcon } from "@heroicons/react/outline";
import { CashIcon } from "@heroicons/react/outline";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <CardItem/>
      </div>
      <div className="flex flex-col lg:flex-row m-4 gap-2 justify-center w-full">
        <h1 className="text-2xl font-bold">Top 5 Services</h1>        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-2 w-full">
      <div className="bg-white m-2 ring w-60 h-28 rounded-lg flex items-center justify-center text-xl text-center">Service1</div>
      <div className="bg-white m-2 ring w-60 h-28 rounded-lg flex items-center justify-center text-xl text-center">Service2</div>
      <div className="bg-white m-2 ring w-60 h-28 rounded-lg flex items-center justify-center text-xl text-center">Service3</div>
      <div className="bg-white m-2 ring w-60 h-28 rounded-lg flex items-center justify-center text-xl text-center">Service4</div>
      <div className="bg-white m-2 ring w-60 h-28 rounded-lg flex items-center justify-center text-xl text-center">Service5</div>
      </div>
    </div>
  );
};

export default LeftColumn;
