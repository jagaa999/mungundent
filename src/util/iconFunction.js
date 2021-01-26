import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_kkwu2d1dqdl.js",
});

const iconFunction = (props) => <IconFont {...props} />;

export default iconFunction;
