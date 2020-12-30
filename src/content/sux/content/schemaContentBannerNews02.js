export const schemaContentBannerNews02 = {
  component: "Row",
  // gutter: [0],
  // style: { minHeight: "450px" },
  children: [
    {
      component: "Col",
      span: 15,
      style: {
        paddingRight: "0",
      },

      children: {
        component: "div",
        style: {
          height: "100%",
          display: "inline-block",
          background: "#222933",
          padding: "100px 30px 100px 50px",
          color: "#fff",
        },

        children: [
          {
            component: "div",
            style: { fontSize: "40px", fontWeight: "bold" },
            text: "Юу болов?",
          },
          {
            component: "div",
            style: { fontSize: "17px", fontWeight: "bold" },
            text: "Байрныхаа эргэн тойрны сонин сайхныг мэдэцгээе",
          },
          {
            component: "Divider",
            className: "gx-my-3",
            style: { borderColor: "#555" },
          },
          {
            component: "div",
            // style: { background: "#b1b1b1" },
            children: [
              {
                component: "div",
                key: "d01",
                style: {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                  paddingBottom: "30px",
                  marginBottom: "30px",
                },
                children: {
                  component: "Row",
                  children: [
                    {
                      component: "Col",
                      span: 8,
                      children: {
                        component: "Image",
                        className: "gx-w-100",
                        src:
                          "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/sports-210661_1920-150x150.jpg",
                      },
                    },
                    {
                      component: "Col",
                      span: 16,
                      children: [
                        {
                          component: "h3",
                          className:
                            "gx-fs-xxl gx-font-weight-bold gx-text-white",
                          text: "Along Pines Run",
                        },
                        {
                          component: "div",
                          className: "gx-text-grey",
                          text: "meta texts",
                        },
                        {
                          component: "div",
                          className: "",
                          text:
                            "The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their public...",
                        },
                      ],
                    },
                  ],
                },
              },
              {
                component: "div",
                key: "d02",
                style: {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                  paddingBottom: "30px",
                  marginBottom: "30px",
                },
                children: {
                  component: "Row",
                  children: [
                    {
                      component: "Col",
                      span: 8,
                      children: {
                        component: "Image",
                        className: "gx-w-100",
                        src:
                          "http://dannci.wpmasters.org/citygov/wp-content/uploads/2017/03/corridor-1045441_1920-150x150.jpg",
                      },
                    },
                    {
                      component: "Col",
                      span: 16,
                      children: [
                        {
                          component: "h3",
                          className:
                            "gx-fs-xxl gx-font-weight-bold gx-text-white",
                          text: "Sport Games for Children",
                        },
                        {
                          component: "div",
                          className: "gx-text-grey",
                          text: "meta texts",
                        },
                        {
                          component: "div",
                          className: "",
                          text:
                            "A moderate incline runs towards the foot of Maybury Hill, and down this we clattered. Once the lightning had begun, it went on in as rapid...",
                        },
                      ],
                    },
                  ],
                },
              },
              {
                component: "div",
                key: "d03",
                style: {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                  paddingBottom: "30px",
                  marginBottom: "30px",
                },
                children: {
                  component: "Row",
                  children: [
                    {
                      component: "Col",
                      span: 8,
                      children: {
                        component: "Image",
                        className: "gx-w-100",
                        src:
                          "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/city-street-1082278_1920-150x150.jpg",
                      },
                    },
                    {
                      component: "Col",
                      span: 16,
                      children: [
                        {
                          component: "h3",
                          className:
                            "gx-fs-xxl gx-font-weight-bold gx-text-white",
                          text: "Touch A Truck",
                        },
                        {
                          component: "div",
                          className: "gx-text-grey",
                          text: "meta texts",
                        },
                        {
                          component: "div",
                          className: "",
                          text:
                            "The roundabout at South Lamar and Belk will become operational on Friday, August 17th. Though the roundabout will be functional and provide...",
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },

          {
            component: "Button",
            text: "Бусдыг нь унших",
          },
        ],
      },
    },
    {
      component: "Col",
      span: 9,
      style: {
        paddingLeft: "0",
      },

      children: {
        component: "div",
        style: {
          background:
            "url(http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/dresden-3681378_1920-edit.jpg)",
          backgroundPosition: "left center",
          backgroundSize: "cover",
          height: "100%",
          display: "inline-block",
          width: "100%",
        },

        children: [
          {
            component: "div",
            style: {
              border: "1px solid #fff",

              margin: "30px auto",
              width: "70%",
            },
            className: "gx-text-white gx-p-3",
            children: [
              {
                component: "div",
                style: { fontSize: "36px", fontWeight: "bold" },
                text:
                  "A vibrant city nestled against the San Bernardino Mountains.",
              },
              {
                component: "div",
                style: { fontSize: "16px", fontWeight: "normal" },
                className: "gx-mt-3",
                text: "Сонирхол татаж, анхаарал хандуулъя.",
              },
            ],
          },
        ],
      },
    },
  ],
};
