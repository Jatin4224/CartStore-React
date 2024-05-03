import toast from "react-hot-toast";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove } from "../redux/Slices/CartSlice";
const Navbar = () => {
  const dispatch = useDispatch();

  const removefromcart = ({ post }) => {
    dispatch(remove(post.id));
    toast.error("items removed");
  };

  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZF3xkwvAV4qJEjJaSiXsy9zjh0f4NNYbHw&s"
              className="w-20"
              alt="Logo"
            />
          </NavLink>

          <div className="flex space-x-4">
            <NavLink
              to="/"
              className="border-b-2 border-white"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className="border-b-2 border-white"
              className="hover:text-gray-300 transition duration-300 flex items-center"
            >
              <span>Cart</span>
              <LuShoppingCart className="ml-1" onClick={removefromcart} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
