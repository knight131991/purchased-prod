import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import { Button, Form, Select } from "antd";
import RatingComponent from "./RatingComponent";
import styled from "styled-components";

const Container = styled(FlexBox)`
  padding: 12px 0;
`;
const ImgContainer = styled(({ isMobileMode, ...rest }) => (
  <FlexBox {...rest} />
))`
  width: ${(props) => (props.isMobileMode ? "100%" : "40%")};
`;

const InfoContainer = styled(({ isMobileMode, ...rest }) => (
  <FlexBox {...rest} />
))`
  width: ${(props) => (props.isMobileMode ? "100%" : "calc(60% - 24px)")};
  padding-left: ${(props) => (props.isMobileMode ? "0" : "24px")};
`;

const AddBtn = styled(({ isMobileMode, ...rest }) => <Button {...rest} />)`
  ${(props) => !props.isMobileMode && "max-width: 300px;"}
`;

const QtySelector = styled(Select)`
  max-width: 120px;
  min-width: 96px;
`;

const PriceContainer = styled(FlexBox)`
  font-weight: bold;
  font-size: 24px;
`;

function ProductDetail({
  title,
  rating,
  commentNum,
  price,
  img,
  onAdd,
  isMobileMode,
}) {
  const selectOpts = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map((item, id) => ({ value: id + 1, label: id + 1 })),
    []
  );

  const [qty, setQty] = useState(selectOpts[0]?.value || 1);

  return (
    <Container row wrap>
      <ImgContainer isMobileMode={isMobileMode}>
        <img src={img} alt="thumbnail" />
      </ImgContainer>
      <InfoContainer gap="20px" isMobileMode={isMobileMode}>
        <h2>{title}</h2>
        <RatingComponent rating={rating} commentNum={commentNum} />
        <PriceContainer>$ {price}</PriceContainer>
        <span>
          {"Qty : "}
          <QtySelector onChange={setQty} value={qty} options={selectOpts} />
        </span>
        <AddBtn
          onClick={() => onAdd(img, qty, title)}
          isMobileMode={isMobileMode}
        >
          Add to cart
        </AddBtn>
      </InfoContainer>
    </Container>
  );
}

ProductDetail.defaultProps = {
  img: undefined,
  price: undefined,
  rating: undefined,
  commentNum: 0,
  title: "",
  onAdd: () => {},
  isMobileMode: false,
};

ProductDetail.propTypes = {
  img: PropTypes.node,
  price: PropTypes.number,
  rating: PropTypes.number,
  commentNum: PropTypes.number,
  title: PropTypes.string,
  onAdd: PropTypes.func,
  isMobileMode: PropTypes.bool,
};

export default ProductDetail;
