import React, { useMemo } from "react";
import FlexBox from "../../components/FlexBox";
import Toolbar from "./components/Toolbar";
import ReviewsBlock from "./components/ReviewsBlock";
import ProductDetail from "./components/ProductDetail";
import useRWD from "../../hooks/useRWD";
import screenEnum from "../../constant/screenEnum";

function ProductDetailPage() {
  const { screen } = useRWD();
  const isMobileMode = useMemo(() => screen <= screenEnum.sm, [screen]);

  return (
    <FlexBox>
      <Toolbar />
      <ProductDetail />
      <ReviewsBlock isMobileMode={isMobileMode} />
    </FlexBox>
  );
}

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
