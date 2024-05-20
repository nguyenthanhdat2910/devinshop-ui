import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

const ProductDetailsPage = () => {
  return (
    <div
      style={{ padding: "0 120px", background: "#efefef", height: "1000px" }}
    >
      <h4>Trang chủ</h4>

      <ProductDetailsComponent />
    </div>
  );
};

export default ProductDetailsPage;
