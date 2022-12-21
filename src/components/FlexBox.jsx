import React from "react";
import PropTypes from "prop-types";

function FlexBox({
  flex,
  row,
  justify,
  align,
  style,
  wrap,
  gap,
  noShrink,
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        flexGrow: flex ? 1 : 0,
        justifyContent: justify,
        alignItems: align,
        gap,
        flexDirection: row ? "row" : "column",
        flexWrap: wrap ? "wrap" : "nowrap",
        flexShrink: noShrink ? "0" : "1",
        ...style,
      }}
      {...rest}
    />
  );
}

FlexBox.defaultProps = {
  flex: undefined,
  row: undefined,
  justify: undefined,
  align: undefined,
  style: undefined,
  wrap: undefined,
  gap: undefined,
  noShrink: undefined,
};

FlexBox.propTypes = {
  flex: PropTypes.bool,
  row: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.objectOf(PropTypes.any),
  wrap: PropTypes.bool,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  noShrink: PropTypes.bool,
};

export default FlexBox;
