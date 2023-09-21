import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-md py-5 px-20">
      <h1 className="text-3xl font-bold">Amajhon</h1>
      <div className="flex gap-5 font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </div>
  );
};

export default Header;
