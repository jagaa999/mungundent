import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_iy4fp43q35p.js",
});

const iconFunction = (props) => <IconFont {...props} />;

export default iconFunction;
