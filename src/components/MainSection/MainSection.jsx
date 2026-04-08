import React from "react";
import ProductPricing from "../ProductTools/ProductPricing";
import GetStart from "../GetStart/GetStart";
import Pricing from "../Pricing/Pricing";
import Trial from "../Trial/Trial";

const MainSection = () => {
  return (
    <div>
      <ProductPricing></ProductPricing>
      <GetStart></GetStart>
      <Pricing></Pricing>
      <Trial></Trial>
    </div>
  );
};

export default MainSection;
