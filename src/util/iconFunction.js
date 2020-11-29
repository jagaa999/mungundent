import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2091278_qe4kt3n5k9.js",
});

const iconFunction = (props) => <IconFont {...props} />;

export default iconFunction;
