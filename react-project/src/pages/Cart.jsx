import { useContext } from "react";
import { CartContext } from "../context/Cart";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="flex justify-between p-2 border-b">
              <span>{item.title} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
