import React from "react";

const CartProducts = ({
  selectedProducts,
  setSelectedProducts,
  checkout,
  setCheckout,
}) => {
  const handleCheckout = () => {
    setCheckout("checkout");
    setSelectedProducts([]);
  };
  const handleRemove = (id) => {
    const remove = selectedProducts.filter((product) => product.id !== id);
    setSelectedProducts(remove);
  };
  return checkout === "checkout" ? (
    <div className="flex justify-center items-center font-extrabold text-4xl col-span-full text-orange-600">
      Please select products to checkout
    </div>
  ) : (
    <>
      <div className="p-13 shadow-xl rounded-2xl col-span-full space-y-4">
        <h3 className="text-left font-bold text-2xl">Your Cart</h3>
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#ddd] flex justify-between p-5 rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-violet-600 rounded-full">
                {product.icon}
              </div>
              <div className="font-semibold flex flex-col items-start">
                <h3>{product.name}</h3>
                <span className="text-[#627382]">${product.price}</span>
              </div>
            </div>
            <button
              onClick={() => handleRemove(product.id)}
              className="text-[#FF3980] font-bold cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex justify-between">
          <div className="text-[#627382]">Total:</div>
          <div className="text-[#101727] font-bold">
            ${selectedProducts.reduce((acc, product) => product.price + acc, 0)}
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl"
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default CartProducts;
