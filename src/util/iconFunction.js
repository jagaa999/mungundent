import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_dnd8m04xq5.js",
});

const iconFunction = (props) => <IconFont {...props} />;

export default iconFunction;
