import React, { use } from "react";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const ProductCard = ({
  product,
  i,
  isSelected,
  setIsSelected,
  selectedProducts,
  setSelectedProducts,
}) => {
  const handleBuyButton = () => {
    const clicked = [...isSelected];
    clicked[i] = true;
    setIsSelected(clicked);
    setSelectedProducts([...selectedProducts, product]);
    toast("Succesfully added to the cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };
  return (
    <div className="text-left p-6 shadow-xl space-y-4 relative bg-violet-200 rounded-2xl">
      <span className="bg-red-300 rounded-4xl px-2.5 py-1 absolute top-4 right-4 flex gap-3">
        {product.tag}
      </span>
      <span className="border border-white p-2.5 rounded-full bg-violet-500">
        {product.icon}
      </span>
      <h3 className="font-bold text-2xl mt-4">{product.name}</h3>
      <p className="text-[#627382]">{product.description}</p>
      <span className="font-bold text-2xl">${product.price}</span>
      <span className="text-[#627382]">/{product.period}</span>
      <span className="flex flex-col justify-center gap-2 pt-2.5">
        {product.features.map((feature, index) => (
          <span key={index} className="flex items-center gap-2">
            <p className="text-green-600">
              <TiTick />
            </p>
            <p className="text-[#627382]">{feature}</p>
          </span>
        ))}
      </span>
      <button
        onClick={handleBuyButton}
        className={`${
          !isSelected[i]
            ? `cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 w-full text-white rounded-4xl font-bold`
            : `cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 w-full text-white rounded-4xl font-bold btn-disabled`
        }`}
      >
        {isSelected[i] ? `Purchased` : `Buy Now`}
      </button>
    </div>
  );
};

const Product = ({
  data,
  isSelected,
  setIsSelected,
  selectedProducts,
  setSelectedProducts,
}) => {
  const useData = use(data);
  return (
    <>
      {useData.map((product, i) => (
        <ProductCard
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          key={product.id}
          product={product}
          i={i}
        />
      ))}
    </>
  );
};

export default Product;
