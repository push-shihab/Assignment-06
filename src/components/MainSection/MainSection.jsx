import React from "react";
import ProductPricing from "../ProductTools/ProductPricing";
import GetStart from "../GetStart/GetStart";
import Pricing from "../Pricing/Pricing";

const MainSection = () => {
  return (
    <div>
      <ProductPricing></ProductPricing>
      <GetStart></GetStart>
      <Pricing></Pricing>
    </div>
  );
};

export default MainSection;
