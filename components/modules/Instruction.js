import React from "react";

const Instruction = () => {
  return (
    <div className="px-2  sm:px-4  md:px-8 lg:px-12 mt-12">
      <h1 className="text-red-500 font-bold text-xl">How to Order?</h1>
      <ul>
        <li className="my-2">Sign in (or create an account) and set your delivery address.</li>
        <li className="my-2">Choose the restaurant you want to order from.</li>
        <li className="my-2">Select your items and tap “Add to Cart”.</li>
        <li className="my-2">To place your order, select “View cart” or “Checkout”.</li>
        <li className="my-2">Review your order and tap “Place Order”...</li>
        <li className="my-2">Track your order progress.</li>
      </ul>
    </div>
  );
};

export default Instruction;
