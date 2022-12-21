import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../../components/FlexBox";
import Toolbar from "./Toolbar";
import ReviewsBlock from "./ReviewsBlock";

function ProductDetailPage(props) {
  return (
    <FlexBox>
      <Toolbar />
      <ProductDetailPage />
      <ReviewsBlock />
    </FlexBox>
  );
}

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
