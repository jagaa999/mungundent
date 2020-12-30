export const schemaFooterData = [
  {
    component: "Footer",
    className: "gx-mt-5",
    style: { backgroundColor: "#213b7c", color: "#fff" },
    children: {
      component: "div",
      style: {
        padding: "1rem",
      },
      children: [
        {
          component: "Row",
          children: [
            {
              component: "Col",
              span: 12,
              children: [
                {
                  component: "div",
                  className: "gx-mb-4",
                  text: "СӨХ-ийн портал систем",
                },
                { component: "Button", text: "СӨХ-өө бүртгүүлэх" },
                { component: "Button", text: "Мэдээлэл авах" },
              ],
            },
            {
              component: "Col",
              span: 12,
              children: [
                {
                  component: "Row",
                  children: [
                    {
                      component: "Col",
                      span: 12,
                      children: [
                        {
                          component: "div",
                          className: "gx-mb-4",
                          style: { fontSize: "120%", fontWeight: "bold" },
                          text: "Статик цэс",
                        },
                        {
                          component: "ul",
                          style: { lineHeight: "180%" },
                          children: [
                            { component: "li", text: "dfd sfds" },
                            { component: "li", text: "dfd sfds" },
                            { component: "li", text: "dfd sfds" },
                          ],
                        },
                      ],
                    },
                    {
                      component: "Col",
                      span: 12,
                      children: [
                        {
                          component: "div",
                          className: "gx-mb-4",
                          style: { fontSize: "120%", fontWeight: "bold" },
                          text: "Хэрэгцээт мэдээлэл",
                        },
                        {
                          component: "ul",
                          style: { lineHeight: "180%" },
                          children: [
                            { component: "li", text: "dfd sfds" },
                            { component: "li", text: "dfd sfds" },
                            { component: "li", text: "dfd sfds" },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          component: "Divider",
          className: "gx-my-4",
          style: { borderColor: "grey" },
        },
        {
          component: "div",
          className: "gx-my-4",
          text:
            "© 2020 Veritech ERP - СӨХ-ийн портал. All Rights Reserved. Interactive Group LLC",
        },
      ],
    },
  },
];
