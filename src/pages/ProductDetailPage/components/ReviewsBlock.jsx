import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import RatingComponent from "./RatingComponent";
import moment from "moment";
import { Button, List, notification } from "antd";
import styled from "styled-components";

const Container = styled(FlexBox)`
  padding: 0 16px 24px;
`;

const TitleBlock = styled.span`
  padding: 24px;
  ${(props) => props.isMobileMode && "padding-left:0;"}

  & > span {
    font-weight: bold;
    font-size: 18px;
  }
`;

const AuthorStr = styled.span`
  font-size: 16px;
`;

const ReviewTitle = styled.span`
  font-size: 28px;
`;

const renderItem = (item) => {
  return (
    <List.Item key={item?.id}>
      <FlexBox row justify="space-between" flex>
        <FlexBox gap={8}>
          <FlexBox row align="end" gap={12}>
            <AuthorStr>{item?.author}</AuthorStr>
            <RatingComponent rating={item?.rating} showCommentNum={false} />
          </FlexBox>
          {item?.descript}
          {item?.imgs}
        </FlexBox>
        {moment(item?.date).format("ll")}
      </FlexBox>
    </List.Item>
  );
};

const rendercommentList = (comments) => (
  <List
    itemLayout="horizontal"
    dataSource={comments}
    renderItem={(item) => renderItem(item)}
  />
);

function ReviewsBlock({ comments, commentNum, rating, isMobileMode }) {
  const [showNotify, setShowNotify] = useState(false);
  const openNotification = useCallback(() => {
    notification.open({
      message: <ReviewTitle>Reviews</ReviewTitle>,
      description: rendercommentList(comments),
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
    <Container gap={12}>
      <TitleBlock isMobileMode={isMobileMode}>
        <span>Reviews</span>
        <RatingComponent commentNum={commentNum} rating={rating} />
      </TitleBlock>
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
        rendercommentList(comments)
      )}
    </Container>
  );
}

ReviewsBlock.defaultProps = {
  comments: [],
};
ReviewsBlock.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.number,
      rating: PropTypes.number,
      author: PropTypes.string,
      descript: PropTypes.string,
      imgs: PropTypes.arrayOf(PropTypes.node),
    })
  ),
};

export default ReviewsBlock;
