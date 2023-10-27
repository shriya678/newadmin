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
import ResetPassword from "./pages/ResetPassword";
// import { getUser } from "./pages/CheckAuth";
import axios from "axios";


export const RecoveryContext = createContext();

function App() {

  const [user,setUser] = useState();
  const [isSuperAdmin,setSuperAdmin] = useState();


  console.log("user: ", user);

  const profiledata = JSON.parse(localStorage.getItem("profile"));

  console.log("profile: ",profiledata);

  const logindata = JSON.parse(localStorage.getItem("login"));

  console.log("login: ",logindata.email);

  // profiledata ? setUser(profiledata) : setUser(undefined)

  // if(profiledata){
  //   setUser(profiledata);
  // }

  useEffect(()=>{
    const API = axios.create({
             baseURL: "http://localhost:8000",
             withCredentials: true,
           });
    
           API?.post("/api/v1/superadmin/login/Web", {
             email: logindata.email,
             password: logindata.password,
           }).then((res)=>{
            console.log("loginAPP: ",res);
           }).catch((error)=>{
            console.log("error: ",error);
           })
  },[logindata.email, logindata.password])


  // function handleLogin() {
  //   if (email && password) {
  //     const API = axios.create({
  //       baseURL: "http://localhost:8000",
  //       withCredentials: true,
  //     });

  //     API?.post("/api/v1/superadmin/login/Web", {
  //       email: email,
  //       password: password,
  //     })

  //       .then((res) => {
        
  //         console.log("Login Res: ", res);

  //         const pdata = res.data.admin;

  //         localStorage.setItem("profile", JSON.stringify({ pdata }));

  //       //  const profiledata = JSON.parse(localStorage.getItem("profile"));
  //       })
  //       .catch((error) => console.log(error));
  //     return;
  //   }
  //   return alert("Please enter your email");
  // }
  

  return (
    <BrowserRouter>

      <RecoveryContext.Provider value={{user,setUser,isSuperAdmin,setSuperAdmin}}>
        <main className="flex">
          <Sidebar />
          <div className="flex flex-col flex-1 relative">
            <Navbar />

            <Routes>
        <Route path="/" element={profiledata ? <Navigate to="home"/> : <Navigate to="auth"/>}/>
        <Route path="/home" element={profiledata ? <Dashboard/> : <Navigate to="../auth"/>}/>
        <Route path="/auth" element={profiledata ? <Navigate to='../home/'/>:<Login/>}/>
        <Route path="/kyc" element={profiledata ? <KYC/>:<Navigate to="../auth"/>}/>
        <Route path="/manageAdmin" element={profiledata ? <ManageAdmin/>:<Navigate to="../auth"/>}/>
        <Route path='/reset' element={isSuperAdmin? <ResetPassword/> : ''} />
            </Routes>
          </div>
        </main>
      </RecoveryContext.Provider>

    </BrowserRouter>
  );

  
}

export default App;
