import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LeftColumn from "./components/LeftColumn";
import Navbar from "./components/Navbar";
import RightColumn from "./components/RightColumn";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import KYC from "./pages/KYC";
import Auth from "./pages/Auth";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import ManageAdmin from "./pages/ManageAdmin";
import ServiceOrders from "./pages/ServiceOrders";
import ResetPassword from "./pages/ResetPassword";
import OTPValidation from "./pages/OTPValidation";
// import { getUser } from "./pages/CheckAuth";
import axios from "axios";
import VehicleData from "./components/VehicleData";
import AdminManagement from "./components/AdminManagement";
import OrderDetails from './components/OrderDetails';
import MarketingBanner from "./components/MarketingBanner";
import PushNotifications from "./components/PushNotifications";
import PromoCode from "./components/PromoCode";
import SubscriptionPlan from "./pages/SubscriptionPlan";
import ServiceManagement from "./components/ServiceManagement";
import Customers from "./pages/Customers";
import Setting from "./pages/Setting";

export const RecoveryContext = createContext();

function App() {

  const [user,setUser] = useState();
  const [isSuperAdmin,setSuperAdmin] = useState();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);


  console.log("user: ", user);

  const profiledata = JSON.parse(localStorage.getItem("profile"));

  console.log("profile: ",profiledata);

  const logindata = JSON.parse(localStorage.getItem("login"));



  // profiledata ? setUser(profiledata) : setUser(undefined)


  useEffect(() => {
    if (logindata) {
      const API = axios.create({
        baseURL: "https://service-provider-apis.onrender.com",
        withCredentials: true,
      });

      API?.post("/api/v1/superadmin/login/Web", {
        email: logindata.email,
        password: logindata.password,
      })
        .then((res) => {
          console.log("loginAPP: ", res);
          setShowNavbar(true); // Set to true after successful login
          setShowSidebar(true); // Set to true after successful login
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [logindata]);
  

  return (
    <BrowserRouter>

      <RecoveryContext.Provider value={{user,setUser,isSuperAdmin,setSuperAdmin,profiledata}}>
      <main className="flex w-[98.5vw]">
          <div className="relative">
            {showSidebar && <Sidebar />} {/* Show Sidebar based on condition */}
          </div>
          <div className="flex flex-col flex-1 relative">
            {showNavbar && <Navbar />} {/* Show Navbar based on condition */}

            <Routes>
              <Route path="/" element={profiledata ? <Navigate to="home"/> : <Navigate to="auth"/>}/>
              <Route path="/home" element={profiledata ? <Dashboard/> : <Navigate to="../auth"/>}/>
              <Route path="/auth" element={profiledata ? <Navigate to='../home/'/>:<Login/>}/>
              <Route path="/kyc" element={profiledata ? <KYC/>:<Navigate to="../auth"/>}/>
              <Route path="/manageAdmin" element={profiledata ? <ManageAdmin/>:<Navigate to="../auth"/>}/>
              <Route path="/customers" element={profiledata ? <Customers/>:<Navigate to="../auth"/>}/>
              <Route path="/setting" element={profiledata ? <Setting/>:<Navigate to="../auth"/>}/>
              <Route path='/reset' element={isSuperAdmin? <ResetPassword/> : ''} />
              <Route path='/otp' element={isSuperAdmin? <OTPValidation/> : ''} />
              <Route path="/vehicleData" element={<VehicleData />} />
              <Route path="/adminManagement" element={<AdminManagement />} />
              <Route path="/ServiceOrders" element={<ServiceOrders />} />
              <Route path="/order/:orderId" element={<OrderDetails/>} />
              <Route path="/MarketingBanner" element={<MarketingBanner />} />
              <Route path="/Notifications" element={<PushNotifications />} />
              <Route path="/PromoCode" element={<PromoCode />} />
              <Route path="/SubscriptionPlan" element={<SubscriptionPlan/>}/>
              <Route path="/ServiceManagement" element={<ServiceManagement /> } />
              <Route path="/ServerManagement" element={<ServerManagement />} />
            </Routes>

          </div>
        </main>
      </RecoveryContext.Provider>

    </BrowserRouter>
  );

  
}

export default App;
