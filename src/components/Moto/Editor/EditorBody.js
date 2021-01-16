import React from "react";

import { Html5Entities } from "html-entities";
import Output from "editorjs-react-renderer";
import { isEmpty } from "lodash";

const EditorBlock = ({ myBody }) => {
  if (isEmpty(myBody)) return null;

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  let myBodyReady = htmlEntities.decode(myBody) || "";
  myBodyReady = myBodyReady
    .split('"/storage')
    .join('"https://www.moto.mn/storage');
  myBodyReady = myBodyReady
    .split('"../storage')
    .join('"https://www.moto.mn/storage');

  let myOutputBody = "";

  if (myBodyReady !== "") {
    if (myBodyReady.indexOf('"blocks"') !== -1) {
      const editorConfig = {
        codeBox: {
          disableDefaultStyle: true,
        },
        header: {
          disableDefaultStyle: true,
        },
        paragraph: {
          disableDefaultStyle: true,
        },
        image: {
          disableDefaultStyle: true,
        },
        embed: {
          disableDefaultStyle: true,
        },
        list: {
          disableDefaultStyle: true,
        },
        checklist: {
          disableDefaultStyle: true,
        },
        table: {
          disableDefaultStyle: true,
        },
        quote: {
          disableDefaultStyle: true,
        },
        warning: {
          disableDefaultStyle: true,
        },
        delimiter: {
          disableDefaultStyle: true,
        },
      };

      try {
        myOutputBody = (
          <Output data={JSON.parse(myBodyReady)} config={editorConfig} />
        );
      } catch (e) {
        myOutputBody = "";
      }
    } else {
      myOutputBody = (
        <span
          className="news-body"
          dangerouslySetInnerHTML={{
            __html: myBodyReady,
          }}
        ></span>
      );
    }
  }

  return myOutputBody;
};

export default EditorBlock;
