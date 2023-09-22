import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-2 font-semibold ">
        <NavLink
          to="/dashboard"
          className="py-2 px-4 border border-gray-700 rounded-md focus:bg-gray-700 focus:text-white"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/profile"
          className="py-2 px-4 border border-gray-700 rounded-md"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/editProfile"
          className="py-2 px-4 border border-gray-700 rounded-md"
        >
          Edit Profile
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
