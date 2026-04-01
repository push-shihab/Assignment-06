import React from "react";

const CartProducts = ({ selectedProducts, setSelectedProducts }) => {
  return (
    <>
      <div className="p-13 shadow-2xl col-span-full">
        <h3 className="text-left">Your Cart</h3>
        {selectedProducts.map((product) => (
          <div key={product.id} className="bg-[#ddd] flex justify-between p-5">
            <div>
              <div>{product.icon}</div>
              <div>
                <h3>{product.name}</h3>
                <span>{product.price}</span>
              </div>
            </div>
            <button>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartProducts;
