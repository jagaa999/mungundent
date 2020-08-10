import React, { useState } from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorjsConfig";
import { Html5Entities } from "html-entities";

import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const NewsEditor = (props) => {
  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох
  let myBody = htmlEntities.decode(props.newsBody) || "";
  myBody = myBody.split('"/storage').join('"https://www.moto.mn/storage');
  myBody = myBody.split('"../storage').join('"https://www.moto.mn/storage');

  let myOutputBody = {};
  if (myBody !== "") {
    if (myBody.indexOf('"blocks"') !== -1) {
      try {
        myOutputBody = JSON.parse(myBody);
      } catch (e) {
        myOutputBody = {};
      }
    } else {
      myOutputBody = {};
    }
  }

  const onChange = (e, data) => {
    // console.log("NewsEditor e", e);
    // console.log("NewsEditor Data", data);

    data.blocks.map((value, index) => {
      if (value.type === "paragraph") {
        const myFfff = value.data.text;
        // console.log("myFfffmyFfff", myFfff);
        // const dddd = e.sanitizer.clean(myFfff, sanitizerConfig);
        const dddd = myFfff.split('"').join("");
        // console.log("dddddddd", dddd);
        value.data.text = dddd;
      }
    });

    props.normFile(data);
  };

  return (
    <>
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        autofocus="true"
        placeholder="Нийтлэлээ оруулна уу."
        logLevel="VERBOSE"
        data={myOutputBody}
        onChange={onChange}
      />
    </>
  );
};

export default NewsEditor;
