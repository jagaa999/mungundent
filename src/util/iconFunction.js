import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_5uzjph4jn3j.js",
});

const iconFunction = (props) => <IconFont {...props} />;

export default iconFunction;
