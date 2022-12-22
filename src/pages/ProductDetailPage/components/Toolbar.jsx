import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Empty, Popover } from "antd";

const Container = styled(FlexBox)`
  border-bottom: 1px gray solid;
  min-height: 40px;
`;

const IconContainer = styled.span`
  margin-right: 12px;
  font-size: 28px;
  cursor: pointer;
`;

const Icon = styled(ShoppingCartOutlined)`
  font-size: 24px;
`;

const PopoverContent = ({ selectedProds, onRemove }) =>
  selectedProds.length ? (
    selectedProds.map((item) => {
      const handleRemove = () => {
        onRemove(item?.id);
      };
      return (
        <FlexBox key={item?.id}>
          <FlexBox row>
            {item?.img}
            {item?.name}
          </FlexBox>
          <Button onClick={handleRemove}>Remove from cart</Button>
        </FlexBox>
      );
    })
  ) : (
    <Empty />
  );
function Toolbar({ selectedProds, onRemove }) {
  return (
    <Container row justify="flex-end">
      <Popover
        trigger="click"
        placement="bottomRight"
        content={
          <PopoverContent selectedProds={selectedProds} onRemove={onRemove} />
        }
      >
        <IconContainer>
          <Badge size="small" count={selectedProds.length}>
            <Icon />
          </Badge>
        </IconContainer>
      </Popover>
    </Container>
  );
}

Toolbar.defaultProps = {
  selectedProds: [],
  onRemove: () => {},
};

Toolbar.propTypes = {
  selectedProds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.node,
      name: PropTypes.string,
    })
  ),

  onRemove: PropTypes.func,
};

export default Toolbar;
