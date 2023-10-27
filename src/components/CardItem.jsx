import React from "react";
import { Badge, BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";
import { ShoppingBagIcon } from "@heroicons/react/outline";

const CardItem = ({CardTitle,CardData,FluctuateData,BadgeColor,BadgeIcon,DeltaValue}) => {
  return (
    <Card className="w-xs dark:bg-tremor-background" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Badge className=" px-10 py-10 rounded-tremor-full " color={BadgeColor}>
          {BadgeIcon}
        </Badge> 

        <Flex flexDirection="col">
        <Text className="mt-8">{CardTitle}</Text>
        <Metric className="dark:text-slate-950">{CardData}</Metric>
        
         <BadgeDelta  deltaType={DeltaValue}>{FluctuateData}</BadgeDelta>
         <Text>This Month</Text>  
        </Flex>
      </Flex>
      {/* <Metric>$ 34,743</Metric> */}
    </Card>
  );
};

export default CardItem;