import React, { useMemo } from "react";
import FlexBox from "../../components/FlexBox";
import Toolbar from "./components/Toolbar";
import ReviewsBlock from "./components/ReviewsBlock";
import ProductDetail from "./components/ProductDetail";
import useRWD from "../../hooks/useRWD";
import screenEnum from "../../constant/screenEnum";
import switchMain from "../../imgs/switch_main.webp";
import mockData from "../../constant/mockData.js";
import styled from "styled-components";

const Container = styled(FlexBox)`
  padding: 0 16px;
`;

function ProductDetailPage() {
  const { screen } = useRWD();
  const isMobileMode = useMemo(() => screen <= screenEnum.sm, [screen]);
  const { comments, prodName, price, totalComment, avgRating } = mockData;

  return (
    <FlexBox>
      <Toolbar />
      <Container>
        <ProductDetail
          img={switchMain}
          isMobileMode={isMobileMode}
          commentNum={totalComment}
          rating={avgRating}
          price={price}
          title={prodName}
        />
        <ReviewsBlock
          isMobileMode={isMobileMode}
          comments={comments}
          rating={avgRating}
          commentNum={totalComment}
        />
      </Container>
    </FlexBox>
  );
}

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
