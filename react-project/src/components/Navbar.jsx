import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">E-Commerce</Link>
      <Link to="/cart">🛒 Cart ({cart.length})</Link>
    </nav>
  )
};

export default Navbar;