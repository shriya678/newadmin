import axios from "axios";

const handleDownloadFile  =()=>{
    // e.preventDefault();

    const fileName = `SubscriptionPlan_From_page.csv`;

    console.log("download File");
    const API = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      withCredentials: true,
    });
    API.get(
      `api/v1/superadmin/subscription/download`,
      {
        responseType: "blob",
      }
    )
      .then((res) => {
        const url = window.URL.createObjectURL(res.data);

        const link = document.createElement("a");
        link.href = url;
        // link.download = 'customer.csv';
        link.download = fileName;

        document.body.appendChild(link);

        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.log("Customer Error: ", error));
  }

  export {
    handleDownloadFile,
  }; 