import React, { useState } from 'react';
import Logo from '../asset/Logo.png';
import {
  ArrowUpIcon,
  PresentationChartBarIcon,
  LogoutIcon,
  TableIcon,
  MenuIcon,
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
        <NavLink to="/MarketingBanner" className="items-center flex cursor-pointer ml-10 w-100">
        <h1 className="text-black mb-1">Banners</h1>
        </NavLink>

        <NavLink to="/Notifications" className="items-center flex cursor-pointer ml-10" activeClassName= "bg-gray-50">
        <h1 className="text-black mb-1">Push Notifications</h1>
        </NavLink>
        
        <NavLink to="/PromoCode" className="items-center flex cursor-pointer ml-10" activeClassName= "bg-gray-50">
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

    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => {
      if(window.innerWidth < 450){
        return;
      }
      setIsCollapsed(!isCollapsed);
    };

  return (
    <div className={`sticky top-0 bg-white w-${isCollapsed ? '14' : '60'} h-screen transition-all duration-300 ease-in-out`}>
      <div className={` bg-emerald-400 h-17 py-[0.1px] ${isCollapsed ? 'w-14' : 'w-60'} transition-all duration-300 ease-in-out`} onClick={toggleCollapse}>
        <div className="items-center justify-start flex m-4 gap-1 cursor-pointer">
        {isCollapsed && (<MenuIcon className="w-6 h-10 text-white" />)}
          <img src={Logo} alt='logo' className={`w-[40px] h-[40px] object-contain ${isCollapsed ? 'hidden' : 'block'}`} />
          <h1 className={`text-black-300 text-base ml-1 mb-1 text-xl items-center font-bold ${isCollapsed ? 'hidden' : 'block'} `}>Helpy Moto</h1>
          <MenuIcon className={`ml-3 w-6 h-6 text-white ${isCollapsed ? 'hidden' : 'block'}`}/>
        </div>
      </div>



      <div className={`  bg-white ${isCollapsed ? 'pr-4' : 'pr-7'} top-[74px] h-full ${isCollapsed ? 'bg-white pr-0' : ''}`}>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"/>
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</h1>
        </NavLink>
      
        <NavLink to="VehicleData" className="items-center justify-start flex cursor-pointer">
        <DatabaseIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Brands Database</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <UsersIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Customers</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <UserCircleIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Service Providers</h1>
        </NavLink>

        <NavLink to="ServiceOrders" className="items-center justify-start flex cursor-pointer">
        <ShoppingCartIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Service Orders</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <CurrencyRupeeIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Payment Reports</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Customer Support LO</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Service Management</h1>
        </NavLink>

        <NavLink to="/SubscriptionPlan" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Subscription Plan</h1>
        </NavLink>

        <NavLink to="ManageAdmin" className="items-center justify-start flex cursor-pointer">
        <TableIcon
          width={40}
          className="p-2 mb-1 text-black"
        />
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Admin Management</h1>
        </NavLink>

        <NavLink to="/" className="items-center justify-start flex cursor-pointer">
        <TableIcon width={40} className="p-2 mb-1 text-black"/>
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Server Monitoring</h1>
        </NavLink>

        <div className='relative'>
        <div className="items-center justify-start flex cursor-pointer" onClick={toggleMarketingDropdown}>
        <TableIcon width={40} className="p-2 mb-1 text-black"/>
        <h1 className={`text-black mb-1 ${isCollapsed ? 'hidden' : 'block'}`}>Marketing Management</h1>
        </div>
        {marketingDropdownOpen && <MarketingDropdown />}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;