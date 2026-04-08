import React, { Suspense, useState } from "react";
import Product from "./Product";
import { BallTriangle } from "react-loader-spinner";
import CartProducts from "./CartProducts";

const ProductPricing = () => {
  const productData = async () => {
    const fetchData = await fetch("products.json");
    const res = await fetchData.json();
    return res;
  };
  const data = productData();

  const [isSelected, setIsSelected] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [checkout, setCheckout] = useState("no-checkout");
  const [active, setActive] = useState("product");
  const handleProductsClick = () => {
    setActive("product");
  };
  const handleCartClick = () => {
    setActive("cart");
  };
  return (
    <div className="container mx-auto text-center py-30 space-y-10">
      <div className="space-y-5">
        <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleProductsClick}
            className={`${active === "product" && `px-4 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl`}
            cursor-pointer`}
          >
            Products
          </button>
          <button
            onClick={handleCartClick}
            className={`${active === "cart" && `px-4 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl `}
            cursor-pointer`}
          >
            Cart ({selectedProducts.length})
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {active === "product" ? (
          <Suspense
            fallback={
              <div className="col-span-full justify-self-center">
                <BallTriangle color="#4F39F6"></BallTriangle>
              </div>
            }
          >
            <Product
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              data={data}
            ></Product>
          </Suspense>
        ) : (
          <CartProducts
            checkout={checkout}
            setCheckout={setCheckout}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          ></CartProducts>
        )}
      </div>
    </div>
  );
};

export default ProductPricing;
