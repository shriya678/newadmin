import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Card, TextInput } from "@tremor/react";
import React, { useState, useContext } from "react";
import { RecoveryContext } from "../App";
import { LogoutIcon } from "@heroicons/react/outline";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { profiledata } = useContext(RecoveryContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const handleLogout = ()=>{
    localStorage.removeItem("profile");
    localStorage.removeItem("login")
    navigate('../auth');
    location.reload();
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    if(menu){
      setMenu(!menu);
    }
  };

  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2 bg-black"
    >
      <h1 className="font-bold text-white">
        Hi, {profiledata ? profiledata.pdata.name : "Your Name"} !
      </h1>
      <div className="py-2">
        <UserCircleIcon
        width={40}
        className="text-green-300"
        onClick={toggleDropdown}
        />

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 top-12 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <Link to={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
            <Link to={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
            <div onClick={handleLogout} className="block px-4 py-2 cursor-pointer text-sm text-red-600 hover:bg-red-100">Sign Out</div>
          </div>
        </div>
      )}
        {/* <Card className=" cursor-pointer" onClick={handleLogout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>

        </Card> */}

        {/* <TextInput className="dark:bg-tremor-background" icon={SearchIcon} placeholder="Search..." /> */}
      </div>
    </div>
  );
};

export default Navbar;
