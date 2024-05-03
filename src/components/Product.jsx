import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const AddToCart = () => {
    dispatch(add(post));
    toast.success("item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item removed from cart");
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full transition-transform transform hover:scale-105">
      <div className="p-3">
        <p className="text-lg font-semibold mb-1">{post.title}</p>
        <p className="text-gray-700 text-sm mb-2">{post.description}</p>
        <div className="w-full h-48 mb-2 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-900 font-semibold">${post.price}</p>
          <div>
            {cart.some((p) => p.id === post.id) ? (
              <button onClick={removeFromCart}>remove</button>
            ) : (
              <button onClick={AddToCart}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
