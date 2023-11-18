import React from "react";
import { Card, Metric, Text, Flex, BadgeDelta, Grid } from "@tremor/react";

const categories = [
  {
    title: "Active Orders",
    metric: "12,699",
    metricPrev: "9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Pending Orders",
    metric: "4598",
    metricPrev: "4564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Completed Orders",
    metric: "1072",
    metricPrev: "856",
    delta: "25.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Cancelled Orders",
    metric: "4598",
    metricPrev: "$ 4564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Customers",
    metric: "12,699",
    metricPrev: "9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Categories",
    metric: "4598",
    metricPrev: "4564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Service Providers",
    metric: "1072",
    metricPrev: "856",
    delta: "25.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "PromoCodes",
    metric: "4598",
    metricPrev: "$ 4564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
];

export default function Example() {
    const customTextSizeClass = "text-size-2";
  return (
    <Grid numItemsSm={2} numItemsLg={4} className="ml-3 gap-4">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <Text className="text-xl mr-3 md-5">{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
        </Card>
      ))}
    </Grid>
    
  );
}
