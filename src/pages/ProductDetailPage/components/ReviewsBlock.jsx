import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import RatingComponent from "./RatingComponent";
import moment from "moment";
import { List } from "antd";


const renderItem = (item) => {
  return (
    <List.Item>
      <FlexBox row justify="space-between" flex>
        <FlexBox>
          <FlexBox row>
            {item?.author} <RatingComponent rating={item?.rating} />
          </FlexBox>
          {item?.descript}
          {item?.imgs}
        </FlexBox>
        {moment(item?.date).format("ll")}
      </FlexBox>
    </List.Item>
  );
};

function ReviewsBlock({ comments, commentNum, rating }) {
  return (
    <FlexBox>
      Reviews
      <RatingComponent commentNum={commentNum} rating={rating} />
      <List
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={renderItem}
      />
    </FlexBox>
  );
}

ReviewsBlock.defaultProps = {
  comments: [],
};
ReviewsBlock.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.objectOf(),
      rating: PropTypes.number,
      author: PropTypes.string,
      descript: PropTypes.string,
      imgs: PropTypes.arrayOf(PropTypes.node),
    })
  ),
};

export default ReviewsBlock;
