import { SearchIcon } from "@heroicons/react/solid";
import { Card, TextInput } from "@tremor/react";
import React, { useContext } from "react";
import { RecoveryContext } from "../App";
import { LogoutIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { profiledata } = useContext(RecoveryContext);
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("profile");
    localStorage.removeItem("login")
    navigate('../auth');
    location.reload();
  }

  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="font-bold text-black-300">
        Hi,{profiledata ? profiledata.pdata.name : "Your Name"}
      </h1>
      <div className="py-2">
        <Card className=" cursor-pointer" onClick={handleLogout}>
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

        </Card>

        {/* <TextInput className="dark:bg-tremor-background" icon={SearchIcon} placeholder="Search..." /> */}
      </div>
    </div>
  );
};

export default Navbar;
