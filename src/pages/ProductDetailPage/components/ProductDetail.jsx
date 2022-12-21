import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import { Button, Form, Select } from "antd";
import RatingComponent from "./RatingComponent";

function ProductDetail({ title, rating, commentNum, price, img, onAdd }) {
  const selectOpts = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map((item, id) => ({ value: id + 1, label: id + 1 })),
    []
  );
  return (
    <FlexBox row>
      <FlexBox>{img}</FlexBox>
      <FlexBox>
        {title}
        <RatingComponent rating={rating} commentNum={commentNum}/>
        <FlexBox>$ {price}</FlexBox>
        <Form.Item label="Qty:">
          <Select defaultValue={selectOpts[0].value} options={selectOpts} />
        </Form.Item>
        <Button>Add to cart</Button>
      </FlexBox>
    </FlexBox>
  );
}

ProductDetail.defaultProps = {
  img: undefined,
  price: undefined,
  rating: undefined,
  commentNum: 0,
  title: "",
  onAdd: () => {},
};

ProductDetail.propTypes = {
  img: PropTypes.node,
  price: PropTypes.number,
  rating: PropTypes.number,
  commentNum: PropTypes.number,
  title: PropTypes.string,
  onAdd: PropTypes.func,
};

export default ProductDetail;
