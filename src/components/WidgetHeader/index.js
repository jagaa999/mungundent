import React from "react";
import PropTypes from "prop-types";

const WidgetHeader = ({ title, extra, styleName }) => {
  return (
    <h2 className={`gx-entry-title gx-d-flex ${styleName}`}>
      <span className="">{title}</span>
      <span className="gx-text-primary gx-fs-sm gx-pointer gx-ml-auto ">
        {extra}
      </span>
    </h2>
  );
};

WidgetHeader.defaultProps = {
  styleName: "",
};

WidgetHeader.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
};

export default WidgetHeader;
