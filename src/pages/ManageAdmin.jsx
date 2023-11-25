import AdminTableComponent from "../components/AdminTableComponent";
import SignUp from "./SignUp";

const ManageAdmin = () =>
{

   return  (
    <div className="grid grid-cols-1 w-full">
    {/* <div className="col-span-2 p-4">
      <SignUp/>
    </div> */}

    <div className="w-full p-4">
      <AdminTableComponent/>
    </div>
  </div>
)
}

export default ManageAdmin;
