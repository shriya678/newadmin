import { useState } from "react";


function AdminManagement(){

    const [admins, setAdmins] = useState([
        { id: 1, name: 'Admin 1', phone: '123-456-7890', email: 'admin1@example.com', permission: false },
        { id: 2, name: 'Admin 2', phone: '987-654-3210', email: 'admin2@example.com', permission: false },
    ]);

    const handleCheckboxChange = (id) => {
        setAdmins((prevAdmins) =>
          prevAdmins.map((admin) =>
            admin.id === id ? { ...admin, permission: !admin.permission } : admin
          )
        );
    };

    return (
        <div className="px-4">
            <h1 className="text-center text-2xl font-semibold">Admin Management</h1>
            <div className="flex justify-end">
                <div className="flex">
                    <p className="cursor-pointer mx-2">Add</p>
                    <p className="cursor-pointer mx-2">Modify</p>
                    <p className="cursor-pointer mx-2">Delete</p>
                </div>
            </div>
            <div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border-r-2 p-2">Admin Name</th>
                            <th className="border-r-2 p-2">Phone No</th>
                            <th className="border-r-2 p-2">Email</th>
                            <th className="border-r-2 p-2">Permission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin) => (
                            <tr key={admin.id}>
                                <td className="border-r-2 p-2">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={admin.permission}
                                            onChange={() => handleCheckboxChange(admin.id)}
                                            className="mr-2"
                                        />
                                        {admin.name}
                                    </label>
                                </td>
                                <td className="border-r-2 p-2 text-center">{admin.phone}</td>
                                <td className="border-r-2 p-2 text-center">{admin.email}</td>
                                <td className="border-r-2 p-2 text-center">{admin.permission ? 'Granted' : 'Not Granted'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default AdminManagement;