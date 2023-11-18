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
        <CardItem
        />
        {/* <CardItem
          CardTitle={"Orders"}
          CardData={'$2.4k'}
          FluctuateData={'-2'}
          color={"text-fuchsia-600"}
          BadgeColor={"fuchsia"}
          BadgeIcon={<ShoppingCartIcon width={50} />}
          DeltaValue={'decrease'}
        />
        <CardItem
          CardTitle={"Balance"}
          CardData={'$2.4k'}
          FluctuateData={'-2'}
          color={"text-blue-600"}
          BadgeColor={"blue"}
          BadgeIcon={<CashIcon width={50} />}
          DeltaValue={'decrease'}
        />
        <CardItem
          CardTitle={"Total Sales"}
          CardData={'$89k'}
          FluctuateData={'+11'}
          color={"text-pink-600"}
          BadgeColor={"pink"}
          BadgeIcon={<ShoppingBagIcon width={50} />}
          DeltaValue={'increase'}
        /> */}
      </div>
      
    </div>
  );
};

export default LeftColumn;
