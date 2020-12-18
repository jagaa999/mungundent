import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_b9yja3r9ywa.js",
});

const iconFunction = (props) => <IconFont {...props} />;

export default iconFunction;
