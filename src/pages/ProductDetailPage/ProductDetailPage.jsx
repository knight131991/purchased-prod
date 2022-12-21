import React from "react";
import FlexBox from "../../components/FlexBox";
import Toolbar from "./components/Toolbar";
import ReviewsBlock from "./components/ReviewsBlock";
import ProductDetail from "./components/ProductDetail";

function ProductDetailPage() {
  return (
    <FlexBox>
      <Toolbar />
      <ProductDetail />
      <ReviewsBlock />
    </FlexBox>
  );
}

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
