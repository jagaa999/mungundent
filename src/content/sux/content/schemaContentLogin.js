export const schemaContentLogin = {
  component: "div",
  children: [
    {
      component: "div",
      className: "gx-text-center gx-my-5",
      style: { fontSize: "29px", fontWeight: "bold" },
      text: "Нэвтэрч орох",
    },
    {
      component: "Row",
      gutter: [1],
      children: [
        {
          component: "Col",
          span: "12",
          children: {
            component: "div",
            className: "gx-p-4 gx-text-center",
            style: {
              backgroundColor: "#213b7c",
              borderRadius: "27px",
              minHeight: "150px",
              color: "#fff",
            },
            children: [
              {
                component: "Image",
                src:
                  // "https://www.flaticon.com/svg/static/icons/svg/554/554848.svg",
                  "https://www.flaticon.com/svg/static/icons/svg/554/554826.svg",
              },
              {
                component: "div",
                className: "gx-mb-3",
                style: { fontSize: "23px", fontWeight: "bold" },
                text: "Оршин суугч",
              },
              { component: "Divider", className: "gx-my-5" },
              {
                component: "div",
                className: "gx-my-4",
                text:
                  "Оршин суугч та системд нэвтрэн СӨХ-тэйгээ холбогдон, төлбөрөө төлөх, санал хүсэлтээ гаргах зэрэг хэрэгцээтэй үйлдлүүд хийгээрэй.",
              },
              {
                component: "Button",
                className: "gx-mt-4",
                text: "Нэвтрэх",
              },
            ],
          },
        },
        {
          component: "Col",
          span: "12",
          children: {
            component: "div",
            className: "gx-p-4 gx-text-center",
            style: {
              // backgroundColor: "#d1d1d1",
              minHeight: "150px",
              color: "#555",
            },
            children: [
              {
                component: "Image",
                src:
                  "https://www.flaticon.com/svg/static/icons/svg/554/554848.svg",
              },
              {
                component: "div",
                className: "gx-mb-3",
                style: { fontSize: "23px", fontWeight: "bold" },
                text: "СӨХ-ийн ажилтан",
              },
              { component: "Divider", className: "gx-my-5" },
              {
                component: "div",
                className: "gx-my-4",
                text:
                  "СӨХ-ийн ажилтан та системд нэвтрэн оршин суугчдын санал хүсэлт, төлбөрийн мэдээлэл зэрэг хэрэгцээт мэдээллүүдтэй ажиллаарай.",
              },
              {
                component: "Button",
                className: "gx-mt-4",
                text: "Нэвтрэх",
              },
            ],
          },
        },
      ],
    },
  ],
};
