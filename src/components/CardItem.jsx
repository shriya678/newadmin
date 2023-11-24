import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, Metric, Text, Flex, BadgeDelta, Grid } from "@tremor/react";

export default function Example() {

  const [countArray, setCountArray] = useState([]);
  const [totalCount, setTotalCount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("https://service-provider-apis.onrender.com/api/v1/admin/getTotalOrders/", {
          withCredentials: true,
        });

        const response2 = await axios.get("https://service-provider-apis.onrender.com/api/v1/admin/getTotals", {
        withCredentials: true,
      });

        setCountArray(response1.data?.ordersCount);
        setTotalCount(response2.data?.totals);

      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  const { active, pending, completed, rejected } = countArray;
  const { users, serviceProviders } = totalCount;
  const categories = [
    {
      title: "Active Orders",
      metric: active,
      delta: "34.3%",
      deltaType: "moderateIncrease",
    },
    {
      title: "Pending Orders",
      metric: pending,
      delta: "10.9%",
      deltaType: "moderateDecrease",
    },
    {
      title: "Completed Orders",
      metric: completed,
      delta: "25.3%",
      deltaType: "moderateIncrease",
    },
    {
      title: "Cancelled Orders",
      metric: rejected,
      delta: "10.9%",
      deltaType: "moderateDecrease",
    },
    {
      title: "Customers",
      metric: users,
      delta: "34.3%",
      deltaType: "moderateIncrease",
    },
    {
      title: "Categories",
      metric: "4598",
      delta: "10.9%",
      deltaType: "moderateDecrease",
    },
    {
      title: "Service Providers",
      metric: serviceProviders,
      delta: "25.3%",
      deltaType: "moderateIncrease",
    },
    {
      title: "PromoCodes",
      metric: "4598",
      delta: "10.9%",
      deltaType: "moderateDecrease",
    },
  ];

    const customTextSizeClass = "text-size-2";
    
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="ml-3 gap-4 xl:grid-cols-4">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <Text className="text-xl mr-3 md-5">{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
            <Metric>{item.metric}</Metric>
            {/* <Text className="truncate">from {item.metricPrev}</Text> */}
          </Flex>
        </Card>
      ))}
    </Grid>
    
  );
}
