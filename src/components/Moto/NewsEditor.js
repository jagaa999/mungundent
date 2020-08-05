import React, { useState } from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorjsConfig";

import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const NewsEditor = (props) => {
  const onChange = (e, data) => {
    console.log("NewsEditor e", e);
    console.log("NewsEditor Data", data);
    props.normFile(data);
  };

  return (
    <>
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        autofocus="true"
        placeholder="Нийтлэлээ оруулна уу."
        logLevel="VERBOSE"
        data={{}}
        onChange={onChange}
      />
    </>
  );
};

export default NewsEditor;
