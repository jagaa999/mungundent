export const schemaHeaderData = [
  {
    component: "Header",
    style: {
      height: "48px",
      flexWrap: "nowrap",
      margin: "0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
      backgroundColor: "#213b7c",
      color: "#fbfbfb",
    },
    children: [
      {
        component: "div",
        children: [
          {
            component: "img",
            style: {
              width: "auto",
              height: "28px",
              filter: "brightness(0) invert(1)",
            },
            src: "https://www.flaticon.com/svg/static/icons/svg/31/31611.svg",
          },
        ],
      },
      {
        component: "Menu",
        mode: "horizontal",
        className: "gx-text-white gx-ml-5",
        style: {},
        // theme: "dark",
        defaultSelectedKeys: ["home"],
        children: [
          {
            component: "MenuItem",

            key: "home",
            children: [
              // {
              //   component: "Image",
              //   height: 16,
              //   width: 16,
              //   style: {
              //     top: "-2px",
              //   },
              //   className: "gx-mr-2",
              //   src:
              //     "https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg",
              // },
              {
                component: "span",
                text: "Нүүр",
              },
            ],
          },
          {
            component: "MenuItem",

            key: "mail",
            children: [
              // {
              //   component: "Image",
              //   height: 12,
              //   width: 12,
              //   style: {
              //     top: "-2px",
              //     filter: "brightness(0) invert(1)",
              //     filter: "brightness(0) invert(1)",
              //   },
              //   className: "gx-mr-2",
              //   src:
              //     "https://www.flaticon.com/svg/static/icons/svg/1946/1946412.svg",
              // },
              {
                component: "span",
                text: "СӨХ",
              },
            ],
          },
          {
            component: "MenuItem",

            key: "about",
            children: [
              // {
              //   component: "Image",
              //   height: 12,
              //   width: 12,
              //   style: {
              //     top: "-2px",
              //     filter: "brightness(0) invert(1)",
              //   },
              //   className: "gx-mr-2",
              //   src:
              //     "https://www.flaticon.com/svg/static/icons/svg/1946/1946408.svg",
              // },
              {
                component: "span",
                text: "Системийн тухай",
              },
            ],
          },
          {
            component: "MenuItem",
            key: "faq",
            children: [
              // {
              //   component: "Image",
              //   height: 12,
              //   width: 12,
              //   style: {
              //     top: "-2px",
              //     filter: "brightness(0) invert(1)",
              //   },
              //   className: "gx-mr-2",
              //   src:
              //     "https://www.flaticon.com/svg/static/icons/svg/1946/1946412.svg",
              // },
              {
                component: "span",
                text: "Асуулт хариулт?",
              },
            ],
          },
        ],
      },

      {
        component: "div",
        text: "Нэвтрэх",
        style: { marginLeft: "auto" },
      },
    ],
  },
];
