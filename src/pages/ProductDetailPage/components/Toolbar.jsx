import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/FlexBox";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Empty, Popover } from "antd";

const Container = styled(FlexBox)`
  border: 1px gray solid;
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
        <ShoppingCartOutlined />
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
    PropTypes.objectOf({
      id: PropTypes.number,
      img: PropTypes.node,
      name: PropTypes.string,
    })
  ),

  onRemove: PropTypes.func,
};

export default Toolbar;
