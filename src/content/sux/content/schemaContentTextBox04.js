export const schemaContentTextBox04 = {
  component: "div",
  className: "gx-my-5 gx-py-5",
  children: {
    component: "Row",
    children: [
      {
        component: "Col",
        span: 10,
        children: {
          component: "div",
          style: { border: "1px solid #d1d1d1", padding: "70px 40px" },
          children: [
            {
              component: "div",
              className: "gx-fs-xxl gx-font-weight-bold gx-text-uppercase",
              text: "Сайн дурынхныг урьж байна!",
            },
            { component: "Divider" },
            {
              component: "div",
              className: "gx-fs-lg gx-font-weight-bold",
              text: "Орчноо өөрсдөө өөрчилцгөөе!",
            },
            {
              component: "div",
              className: "gx-mt-4",
              text:
                "Volunteers are the heart of a community. Our volunteers are a valuable resource for our fast-growing, fast-paced city. Our city relies on our volunteers for everything from staffing special event, such as Freedom Fest and Merry Main Street, to assisting departments with daily activities, such as shelving library books, filing records or using GIS equipment.",
            },
            { component: "Divider", className: "gx-mt-4" },
            {
              component: "Button",
              type: "primary",
              className: "gx-mt-4",
              text: "Бүртгүүлэх",
            },
          ],
        },
      },
      {
        component: "Col",
        style: { overflow: "hidden" },
        span: 14,
        children: {
          component: "div",
          style: { position: "relative", height: "100%", width: "100%" },
          children: [
            {
              component: "div",
              style: { width: "70%", position: "absolute", top: 0, right: 0 },
              children: {
                component: "Image",

                src:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/dresden-3681378_1920-edit.jpg",
              },
            },
            {
              component: "div",
              style: {
                width: "63%",
                position: "absolute",
                bottom: 0,
                left: 0,
                borderTop: "15px solid #fff",
                borderRight: "15px solid #fff",
              },
              children: {
                component: "Image",

                src:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/bodyworn-794111_1920.jpg",
              },
            },
          ],
        },
      },
    ],
  },
};
