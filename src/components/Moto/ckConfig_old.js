import react from "react";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

// "@ckeditor/ckeditor5-build-classic": "^21.0.0",
// "@ckeditor/ckeditor5-code-block": "^21.0.0",
// "@ckeditor/ckeditor5-react": "^2.1.0",

export const ckConfig = {
  plugins: [CodeBlock],

  toolbar: [wwwwww
    "heading",
    "|",
    "bold",
    "italic",
    "|",
    "blockQuote",
    "|",
    "link",
    "|",
    "numberedList",
    "bulletedList",
    "|",
    "imageUpload",
    "|",
    "insertTable",
    "tableColumn",
    "tableRow",
    "mergeTableCells",
    "|",
    "mediaEmbed",
    "|",
    "codeBlock",
    // "|",
    // "undo",
    // "redo",
  ],

  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
      {
        model: "heading5",
        view: "h5",
        title: "Heading 5",
        class: "ck-heading_heading5",
      },
      {
        model: "heading6",
        view: "h6",
        title: "Heading 6",
        class: "ck-heading_heading6",
      },
    ],
  },
};
