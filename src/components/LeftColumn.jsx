import  { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./CardItem";

const LeftColumn = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://service-provider-apis.onrender.com/api/v1/admin/getTop5Services",
          {
            withCredentials: true,
          }
        );
        setServices(response1.data?.services);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <CardItem />
      </div>
      <div className="flex flex-col lg:flex-row m-4 gap-2 justify-center w-full">
        <h1 className="text-2xl font-bold">Top 5 Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-2 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white m-2 ring ring-green-400 w-60 h-28 rounded-lg flex items-center justify-center text-xl text-center focus:outline-none">
            {service.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftColumn;
