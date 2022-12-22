import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import { Button, Form, Select } from "antd";
import RatingComponent from "./RatingComponent";
import styled from "styled-components";

const Container = styled(FlexBox)`
  padding: 12px 0;
`;
const ImgContainer = styled(FlexBox)`
  width: ${(props) => (props.isMobileMode ? "100%" : "40%")};
`;

const InfoContainer = styled(FlexBox)`
  width: ${(props) => (props.isMobileMode ? "100%" : "calc(60% - 24px)")};
  padding-left: ${(props) => (props.isMobileMode ? "0" : "24px")};
`;

const AddBtn = styled(Button)`
  ${(props) => !props.isMobileMode && "max-width: 300px;"}
`;

const QtySelector = styled(Select)`
  max-width: 100px;
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
  return (
    <Container row wrap>
      <ImgContainer isMobileMode={isMobileMode}>
        <img src={img} alt="thumbnail" />
      </ImgContainer>
      <InfoContainer gap="20px" isMobileMode={isMobileMode}>
        <h2>{title}</h2>
        <RatingComponent rating={rating} commentNum={commentNum} />
        <PriceContainer>$ {price}</PriceContainer>
        <Form.Item label="Qty:">
          <QtySelector
            defaultValue={selectOpts[0].value}
            options={selectOpts}
          />
        </Form.Item>
        <AddBtn isMobileMode={isMobileMode}>Add to cart</AddBtn>
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
