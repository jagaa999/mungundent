export const schemaContentTestimonial01 = {
  component: "Row",
  gutter: [0, 0],
  type: "flex",
  justify: "center",
  children: [
    {
      component: "Col",
      span: 12,
      style: { paddingRight: "0" },
      children: {
        component: "div",
        style: {
          backgroundColor: "#222933",
          height: "100%",
          width: "100%",
          display: "inline-block",
        },
        children: [
          {
            component: "div",
            className: "gx-text-white gx-p-5 gx-mx-auto gx-mt-5",
            style: {
              border: "1px solid #fff",
              width: "80%",
              marginBottom: "155px",
            },
            children: [
              {
                component: "div",
                className: "gx-fs-xxl gx-font-weight-bold",
                text:
                  "СӨХ-тэй холбоотой бүх ажлаа нэг дор амжуулна гэхээр үнэхээр таатай байна.",
              },
              {
                component: "div",
                className: "gx-mt-3",
                text: "Хүндэтгэсэн,",
              },
              {
                component: "div",
                className: "gx-mt-2",
                text: "оршин суугч эмэгтэй",
              },
            ],
          },
        ],
      },
    },
    {
      component: "Col",
      span: 12,
      style: { paddingLeft: "0" },
      children: {
        component: "div",
        style: {
          background:
            "url(http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/11/mayor-5b.jpg)",
          backgroundPosition: "left center",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          display: "inline-block",
        },
      },
    },
  ],
};
