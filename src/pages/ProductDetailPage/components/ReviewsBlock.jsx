import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import RatingComponent from "./RatingComponent";
import moment from "moment";
import { Button, List, notification } from "antd";

const renderItem = (item, showCommentNum) => {
  return (
    <List.Item key={item?.id}>
      <FlexBox row justify="space-between" flex>
        <FlexBox>
          <FlexBox row>
            {item?.author}
            <RatingComponent
              rating={item?.rating}
              showCommentNum={showCommentNum}
            />
          </FlexBox>
          {item?.descript}
          {item?.imgs}
        </FlexBox>
        {moment(item?.date).format("ll")}
      </FlexBox>
    </List.Item>
  );
};

const rendercommentList = (comments, showCommentNum) => (
  <List
    itemLayout="horizontal"
    dataSource={comments}
    renderItem={(item) => renderItem(item, showCommentNum)}
  />
);

function ReviewsBlock({ comments, commentNum, rating, isMobileMode }) {
  const [showNotify, setShowNotify] = useState(false);
  const openNotification = useCallback(() => {
    notification.open({
      message: "Reviews",
      description: rendercommentList(comments, false),
      placement: "bottom",
      duration: 0,
      onClose: () => setShowNotify(false),
      className: "reviewsBlock__notify",
    });
  }, [comments]);

  useEffect(() => {
    notification.config({
      bottom: 0,
    });
  }, []);

  useEffect(() => {
    setShowNotify(false);
    notification.destroy();
  }, [isMobileMode]);

  return (
    <>
      <FlexBox>
        Reviews
        <RatingComponent commentNum={commentNum} rating={rating} />
        {isMobileMode ? (
          <Button
            type="text"
            disabled={showNotify}
            onClick={() => {
              setShowNotify(true);
              openNotification();
            }}
          >
            See more reviews
          </Button>
        ) : (
          rendercommentList(comments, true)
        )}
      </FlexBox>
    </>
  );
}

ReviewsBlock.defaultProps = {
  comments: [
    {
      date: 2132135156,
      rating: 3,
      author: "tzu.chieh.lin",
      descript: " PropTypes.string",
    },
    {
      date: 2132135156,
      rating: 3,
      author: "tzu.chieh.lin",
      descript: " PropTypes.string",
    },
    {
      date: 2132135156,
      rating: 3,
      author: "tzu.chieh.lin",
      descript: " PropTypes.string",
    },
  ],
};
ReviewsBlock.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.object,
      rating: PropTypes.number,
      author: PropTypes.string,
      descript: PropTypes.string,
      imgs: PropTypes.arrayOf(PropTypes.node),
    })
  ),
};

export default ReviewsBlock;
