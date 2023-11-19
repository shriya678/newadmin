import React, { useState } from 'react';
import Logo from '../asset/Logo.png';
import {
  ArrowUpIcon,
  PresentationChartBarIcon,
  LogoutIcon,
  TableIcon,
  BriefcaseIcon,
  UserIcon,
  CashIcon,
  TrendingUpIcon,
  QuestionMarkCircleIcon,
  TruckIcon,
  DatabaseIcon,
  UsersIcon,
  UserGroupIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  ReceiptTaxIcon,
  CurrencyRupeeIcon,
  SpeakerphoneIcon
} from "@heroicons/react/solid";

// import {
//   headset
// } from "@fortawesome/fontawesome-free/svgs/solid";

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";

const MarketingDropdown = () => {
  return (
    <div className = "bg-white">
        <NavLink to="/" className="items-center flex cursor-pointer ml-10 w-100">
        <h1 className="text-black mb-1">Banners</h1>
        </NavLink>

        <NavLink to="/" className="items-center flex cursor-pointer ml-10" activeClassName= "bg-gray-50">
        <h1 className="text-black mb-1">Push Notifications</h1>
        </NavLink>
        
        <NavLink to="/" className="items-center flex cursor-pointer ml-10" activeClassName= "bg-gray-50">
        <h1 className="text-black mb-1">PromoCode</h1>
        </NavLink>
    </div>
  );
};

const Sidebar = () => {

  const [marketingDropdownOpen, setMarketingDropdownOpen] = useState(false);

  const toggleMarketingDropdown = () => {
    setMarketingDropdownOpen(!marketingDropdownOpen);
  };

  return (
    <div className="bg-white w-14 sm:w-60 h-[300vh]">

    <div className="fixed left bg-emerald-400 h-17">
    <div className="items-center justify-start flex m-4 mr-16 gap-1 cursor-pointer">
      <img src={Logo} alt='logo' className='w-[40px] h-[40px] object-contain'/>
    {/* <PresentationChartBarIcon width={40} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" /> */}
    <h1 className="text-black-300 text-base ml-1 mb-1 text-xl items-center font-bold">Helpy Moto</h1>
    </div>
    </div>



      <div className="fixed pr-8 top-[80px]">

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Dashboard</h1>
        </NavLink>
      
        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <DatabaseIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Brands Database</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <UsersIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Customers</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <UserCircleIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Service Providers</h1>
        </NavLink>

        <NavLink to="ServiceOrders" className="items-center justify-start flex cursor-pointer">
        <ShoppingCartIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Service Orders</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <CurrencyRupeeIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Payment Reports</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Customer Support LO</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Service Management</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Subscription Plan</h1>
        </NavLink>

        <NavLink to="ManageAdmin" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Admin Management</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Server Monitoring</h1>
        </NavLink>

        <div className='relative'>
        <div className="items-center justify-start flex cursor-pointer" onClick={toggleMarketingDropdown}>
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className="text-black mb-1">Marketing Management</h1>
        </div>
        {marketingDropdownOpen && <MarketingDropdown />}

        </div>


        {/* <NavLink to="kyc" className="items-center justify-start flex cursor-pointer">
        <BriefcaseIcon
           width={40}
           className="p-2 mb-1"
        />
         <h1 className="mb-1">KYC</h1>
        </NavLink>


        <NavLink to="auth" className="items-center justify-start flex cursor-pointer">
        <UserIcon
          width={40}
          className="p-2 mb-1"
        />
        <h1 className="mb-1">Auth</h1>
        </NavLink>


        <NavLink to="manageAdmin" className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <CashIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-2">Manage Admin</h1>
        </NavLink>

        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <TrendingUpIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-2">Promote</h1>
        </div>

        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <QuestionMarkCircleIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-2">Help</h1>
        </div> */}

      </div>


      {/* <div className="fixed bottom-4 left-[-7px] sm:left-1">

      <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </a>
        <h1 className="text-gray-200 mb-4">Top</h1>
        </div>

        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <LogoutIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-4">SignOut</h1>
        </div>

      </div> */}
    </div>
  );
};

export default Sidebar;

