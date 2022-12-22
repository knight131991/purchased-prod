import React, { useMemo } from "react";
import FlexBox from "../../components/FlexBox";
import Toolbar from "./components/Toolbar";
import ReviewsBlock from "./components/ReviewsBlock";
import ProductDetail from "./components/ProductDetail";
import useRWD from "../../hooks/useRWD";
import screenEnum from "../../constant/screenEnum";
import switchMain from "../../imgs/switch_main.webp";

function ProductDetailPage() {
  const { screen } = useRWD();
  const isMobileMode = useMemo(() => screen <= screenEnum.sm, [screen]);

  return (
    <FlexBox>
      <Toolbar />
      <ProductDetail
        img={switchMain}
        isMobileMode={isMobileMode}
        commentNum={123}
        rating={4}
        price={300}
        title="Nitendo Switch w/Neon Blue & Neon Red Joy-Con + 12 Month individual Membership Nintendo Switch Online + Carrying Case"
      />
      <ReviewsBlock isMobileMode={isMobileMode} />
    </FlexBox>
  );
}

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
