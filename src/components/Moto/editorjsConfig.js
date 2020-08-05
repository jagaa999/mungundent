import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import axios from "axios";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByFile(file) {
          console.log("Editor руу илгээгдэхээр орж ирсэн файл: ", file);
          const myFile = file;
          const formData = new FormData();
          formData.append("upload_preset", "moto-member");
          formData.append("file", myFile);

          return axios
            .post(
              "https://api.cloudinary.com/v1_1/motomn/image/upload",
              formData
            )
            .then((res) => {
              console.log("EditorJS дотор Cloudinary хариу ирэв.", res);
              const originalFileURL =
                "https://res.cloudinary.com/motomn/image/upload/";
              const thumbnailFileURL =
                "https://res.cloudinary.com/motomn/image/upload/c_thumb,w_200,g_face/";
              const myThumbnailFileURL = res.data.secure_url
                .split(originalFileURL)
                .join(thumbnailFileURL);
              return {
                success: 1,
                file: {
                  ...res.data,
                  url: res.data.secure_url,
                },
              };
            })
            .catch((err) => console.log("error", err));
        },
      },
    },
  },
  raw: Raw,
  // header: {
  //   class: Header,
  //   inlineToolbar: true,
  // },
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  // simpleImage: SimpleImage,
};
