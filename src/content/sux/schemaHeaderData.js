export const schemaHeaderData = [
  {
    component: "Menu",
    mode: "horizontal",
    // theme: "dark",
    defaultSelectedKeys: ["home"],
    children: [
      {
        component: "MenuItem",

        key: "home",
        children: [
          {
            component: "Image",
            height: 16,
            width: 16,
            style: {
              top: "-2px",
            },
            className: "gx-mr-3",
            src:
              "https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg",
          },
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
          {
            component: "Image",
            height: 16,
            width: 16,
            style: {
              top: "-2px",
            },
            className: "gx-mr-3",
            src:
              "https://www.flaticon.com/svg/static/icons/svg/1946/1946412.svg",
          },
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
          {
            component: "Image",
            height: 16,
            width: 16,
            style: {
              top: "-2px",
            },
            className: "gx-mr-3",
            src:
              "https://www.flaticon.com/svg/static/icons/svg/1946/1946408.svg",
          },
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
          {
            component: "Image",
            height: 16,
            width: 16,
            style: {
              top: "-2px",
            },
            className: "gx-mr-3",
            src:
              "https://www.flaticon.com/svg/static/icons/svg/1946/1946412.svg",
          },
          {
            component: "span",
            text: "Асуулт хариулт?",
          },
        ],
      },
    ],
  },
];
