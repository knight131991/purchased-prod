import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import { Rate } from "antd";

function RatingComponent({ rating, commentNum, showCommentNum }) {
  return (
    <FlexBox row align='center' gap='15px'>
      <Rate disabled value={rating} />
      {showCommentNum && `(${commentNum})`}
    </FlexBox>
  );
}

RatingComponent.defaultProps = {
  rating: 0,
  commentNum: 0,
  showCommentNum: true,
};

RatingComponent.propTypes = {
  rating: PropTypes.number,
  commentNum: PropTypes.number,
  showCommentNum: PropTypes.bool,
};

export default RatingComponent;
