export const schemaHeader = [
  //  #     # ####### #     # #     #
  //  ##   ## #       ##    # #     #
  //  # # # # #       # #   # #     #
  //  #  #  # #####   #  #  # #     #
  //  #     # #       #   # # #     #
  //  #     # #       #    ## #     #
  //  #     # ####### #     #  #####
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

export const schemaContent = [
  //  ######     #    #     # #     # ####### ######
  //  #     #   # #   ##    # ##    # #       #     #
  //  #     #  #   #  # #   # # #   # #       #     #
  //  ######  #     # #  #  # #  #  # #####   ######
  //  #     # ####### #   # # #   # # #       #   #
  //  #     # #     # #    ## #    ## #       #    #
  //  ######  #     # #     # #     # ####### #     #

  {
    component: "Carousel",
    autoplay: false,
    widgetCode: "Banner_01",
    children: [
      {
        component: "div",
        children: [
          {
            component: "div",
            style: {
              background:
                "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2) ), url(https://images.unsplash.com/photo-1584792095318-ddb688f67c1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "450px",
              display: "inline-block",
              width: "100%",
            },
            children: [
              {
                component: "div",
                style: {
                  fontSize: "28px",
                  fontWeight: "700",
                  margin: "100px 0 0 50px",
                  color: "#fff",
                  maxWidth: "350px",
                },
                text: "Сууц Өмчлөгчдийн Холбоо гэдэг нь..",
              },
              {
                component: "div",
                style: {
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                  margin: "30px 0 0 50px",
                  maxWidth: "450px",
                },
                text:
                  "Оршин суугчдын аятай тухтай, цэвэр, үзэмжтэй нөхцөлийг бүрдүүлэхийн төлөө дундын өмчлөлийн эд хөрөнгийн ашиглалт үйлчилгээг хариуцан ажилладгаас гадна үл хөдлөх хөрөнгийн зах зээлийн үнэ ханшийг тогтоодог.",
              },
            ],
          },
        ],
      },
      {
        component: "div",
        children: [
          {
            component: "div",
            style: {
              background:
                // "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2) ), url(https://images.unsplash.com/photo-1495245088094-68be8de6b55e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
                "url(https://images.unsplash.com/photo-1495245088094-68be8de6b55e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "450px",
              width: "100%",
              display: "inline-block",
            },
            children: [
              {
                component: "div",
                style: {
                  fontSize: "28px",
                  fontWeight: "700",
                  margin: "170px auto 0",
                  color: "#fff",
                  width: "40%",
                  textAlign: "center",
                },
                text: "Сууц Өмчлөгчдийн Холбоо гэдэг нь..",
              },
              {
                component: "div",
                style: {
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                  margin: "30px auto",
                  width: "60%",
                  textAlign: "center",
                },
                text:
                  "Нийтийн зориулалттай орон сууцны байшингийн дундын өмчлөлийн эд хөрөнгийг дундаа хамтран өмчлөх эрхийг хэрэгжүүлэх, ашиглалтын хэвийн байдлыг хангах, сууц өмчлөгчдийн эрх, ашиг сонирхлыг хамгаалах зорилго бүхий, хуулийн этгээдийн эрхгүй, заавал гишүүнчлэлтэй холбоог хэлдэг.",
              },
            ],
          },
        ],
      },
    ],
  },

  //  #           #####     #    ######  ######
  //  #    #     #     #   # #   #     # #     #
  //  #    #     #        #   #  #     # #     #
  //  #    #     #       #     # ######  #     #
  //  #######    #       ####### #   #   #     #
  //       #     #     # #     # #    #  #     #
  //       #      #####  #     # #     # ######
  {
    component: "Row",
    gutter: [8, 8],
    type: "flex",
    children: [
      {
        component: "Col",
        span: "6",
        children: [
          {
            component: "Card",
            // title: "Барилгынхаа бүх хэсгийг хянах",
            className: "gx-bg-success",
            style: { height: "100%" },
            children: [
              {
                component: "Image",
                src:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/monument.png",
              },
              {
                component: "div",
                className: "gx-mt-3 gx-fs-xxl gx-font-weight-bold",
                text: "Барилгынхаа бүх хэсгийг хянах",
              },
              {
                component: "div",
                className: "gx-mt-3",
                text:
                  "Цахилгаан шат, тоглоомын талбай, зогсоол зэрэг бүгдийг хянах боломжтой",
              },
            ],
          },
        ],
      },
      {
        component: "Col",
        span: "6",
        children: [
          {
            component: "Card",
            className: "gx-bg-warning",
            style: { height: "100%" },
            children: [
              {
                component: "Image",
                src:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/bus.png",
              },
              {
                component: "div",
                className: "gx-mt-3 gx-fs-xxl gx-font-weight-bold",
                text: "Хотхон доторх хөдөлгөөн",
              },
              {
                component: "div",
                className: "gx-mt-3",
                text:
                  "Гадна зогсоол болон дулаан гараашийн бүх хөдөлгөөнийг удирдах",
              },
            ],
          },
        ],
      },
      {
        component: "Col",
        span: "6",
        children: [
          {
            component: "Card",
            className: "gx-bg-grey",
            style: { height: "100%" },
            children: [
              {
                component: "Image",
                src:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/exam.png",
              },
              {
                component: "div",
                className: "gx-mt-3 gx-fs-xxl gx-font-weight-bold",
                text: "Оршин суугчдын зар, мэдээлэл",
              },
              {
                component: "div",
                className: "gx-mt-3",
                text:
                  "Танай гэрт хэрэг болсон ойр зуурын ажил үйлчилгээг мэдэгдэх зарын систем",
              },
            ],
          },
        ],
      },
      {
        component: "Col",
        span: "6",
        children: [
          {
            component: "Card",
            className: "gx-bg-grey",
            style: { height: "100%" },
            children: [
              {
                component: "Image",
                src:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/bench.png",
              },
              {
                component: "div",
                className: "gx-mt-3 gx-fs-xxl gx-font-weight-bold",
                text: "Парк, Сандал, Амрах хэсэг",
              },
              {
                component: "div",
                className: "gx-mt-3",
                text:
                  "Амрах гарын мэдээлэл, тэнд тавигдах дүрэм журмыг нэг дороос",
              },
            ],
          },
        ],
      },
    ],
  },

  //  ######     #    #     # #     # ####### ######
  //  #     #   # #   ##    # ##    # #       #     #
  //  #     #  #   #  # #   # # #   # #       #     #
  //  ######  #     # #  #  # #  #  # #####   ######
  //  #     # ####### #   # # #   # # #       #   #
  //  #     # #     # #    ## #    ## #       #    #
  //  ######  #     # #     # #     # ####### #     #
  {
    component: "Row",
    gutter: [0, 0],
    type: "flex",
    justify: "center",
    // align: "top",
    style: {
      // height: "450px",
      // width: "100%",
      // backgroundColor: "#222933",
      // marginBottom: "20px",
    },
    // className: " gx-px-5",
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
                    "СӨХ-ийн бүх ажлаа нэг дор амжуулна гэхээр үнэхээр таатай байна.",
                },
                {
                  component: "div",
                  className: "gx-mt-3",
                  text: "Хүндэтгэсэн,",
                },
                {
                  component: "div",
                  className: "gx-mt-1",
                  text: "оршин суугч Mayor Lisa F. Matt",
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
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            display: "inline-block",
          },
        },
      },
    ],
  },

  //  #     # ####### #     #  #####
  //  ##    # #       #  #  # #     #
  //  # #   # #       #  #  # #
  //  #  #  # #####   #  #  #  #####
  //  #   # # #       #  #  #       #
  //  #    ## #       #  #  # #     #
  //  #     # #######  ## ##   #####
  {
    component: "Row",
    // style: { minHeight: "450px" },
    className: "gx-d-flex",
    children: [
      {
        component: "Col",
        span: 9,
        children: {
          component: "div",
          style: {
            background:
              "url(http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/street-932082_1920-edit.jpg)",
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
                  text: "Манай байранд юу болов?",
                },
                {
                  component: "div",
                  style: { fontSize: "16px", fontWeight: "normal" },
                  className: "gx-mt-3",
                  text: "Бидний байр бид бүгдэд хамаатай",
                },
              ],
            },
          ],
        },
      },
      {
        component: "Col",
        span: 15,
        style: {
          height: "100%",
          display: "inline-block",
          // background: "yellow",
          padding: "100px 30px 100px 50px",
        },
        children: [
          {
            component: "div",
            style: { fontSize: "40px", fontWeight: "bold" },
            text: "Мэдээ, нийтлэл",
          },
          {
            component: "div",
            style: { fontSize: "17px", fontWeight: "bold" },
            text: "Бид бүгдийн сайн сайхан амьдралд нэмэр болох материалууд",
          },
          { component: "Divider", className: "gx-my-3" },
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
                          "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/stockholm-1824368_1920-150x150.jpg",
                      },
                    },
                    {
                      component: "Col",
                      span: 16,
                      children: [
                        {
                          component: "h3",
                          className: "gx-fs-xxl gx-font-weight-bold",
                          text: "Annual Water Quality Report (Gallery Post)",
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
                          className: "gx-fs-xxl gx-font-weight-bold",
                          text: "Waste Industries Garbage Pick Up: Embeds",
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
                          className: "gx-fs-xxl gx-font-weight-bold",
                          text:
                            "Traffic Pattern Changes (Testing A Pagination)",
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
    ],
  },

  //  #     # ####### #     #  #####      #####
  //  ##    # #       #  #  # #     #    #     #
  //  # #   # #       #  #  # #                #
  //  #  #  # #####   #  #  #  #####      #####
  //  #   # # #       #  #  #       #    #
  //  #    ## #       #  #  # #     #    #
  //  #     # #######  ## ##   #####     #######

  {
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
  },

  //####### ####### #     # #######    ######  ####### #     #
  //   #    #        #   #     #       #     # #     #  #   #
  //   #    #         # #      #       #     # #     #   # #
  //   #    #####      #       #       ######  #     #    #
  //   #    #         # #      #       #     # #     #   # #
  //   #    #        #   #     #       #     # #     #  #   #
  //   #    ####### #     #    #       ######  ####### #     #

  {
    component: "Row",
    className: "gx-mt-5",
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
              text: "Сайн дурынхан хэрэгтэй байна!",
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

  // {
  //   component: "Button",
  //   type: "primary",
  //   children: [{ component: "span", text: "Энд дараарай" }],
  // },
];

export const schemaFooter = [
  //  ####### ####### ####### ####### ####### ######
  //  #       #     # #     #    #    #       #     #
  //  #       #     # #     #    #    #       #     #
  //  #####   #     # #     #    #    #####   ######
  //  #       #     # #     #    #    #       #   #
  //  #       #     # #     #    #    #       #    #
  //  #       ####### #######    #    ####### #     #
  {
    component: "div",
    style: {
      padding: "1rem",
      backgroundColor: "#10354c",
      color: "#fff",
      // display: 'inline-block'
    },
    children: [
      {
        component: "Row",
        className: "gx-container",
        gutter: [0, 0],
        children: [
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 10,
            lg: 10,
            xl: 10,
            style: {
              top: "-10%",
              position: "relative",
            },
            children: [
              {
                component: "div",
                style: {
                  width: "100px",
                  position: "relative",
                  top: "-20%",
                  marginBottom: "1rem",
                },
                children: [
                  {
                    component: "img",
                    src:
                      "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/11/logo.png",
                    alt: "title",
                  },
                ],
              },
              {
                component: "div",
                style: {
                  position: "relative",
                  top: "-15%",
                },
                children: [
                  {
                    component: "h3",
                    className: "gx-text-white gx-mb-3",
                    text: "Frisco City Hall",
                  },
                  {
                    component: "div",
                    style: {
                      fontSize: "14px",
                      fontWeight: "200",
                      marginBottom: "5px !important",
                    },
                    children: [
                      {
                        component: "span",
                        text: "8353 Sierra Avenue",
                      },
                      {
                        component: "span",
                        className: "gx-ml-2",
                        text: "•",
                      },
                      {
                        component: "span",
                        text: "Frisco, CA 91335",
                      },
                    ],
                  },
                ],
              },
              {
                component: "div",
                className: "gx-d-flex",
                style: {
                  fontSize: "14px",
                  fontWeight: "200",
                },
                children: [
                  {
                    component: "p",
                    className: "gx-mr-2",
                    text: "Phone: (907) 350-7400",
                  },
                  {
                    component: "p",
                    className: "gx-mr-2",
                    text: "•",
                  },
                  {
                    component: "p",
                    text: "Monday – Thursday, 8:00 am – 6:00 pm",
                  },
                ],
              },
              {
                component: "div",
                children: [
                  {
                    component: "Search",
                    placeholder: "I am looking for",
                    enterButton: "Search",
                    size: "large",
                  },
                ],
              },
            ],
          },
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 14,
            lg: 14,
            xl: 14,
            className: "gx-mt-4",
            children: [
              {
                component: "Row",
                children: [
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 8,
                    xl: 8,
                    children: [
                      {
                        component: "h5",
                        className: "gx-text-white",
                        text: "Living Here",
                      },
                      {
                        component: "hr",
                        style: {
                          marginTop: "5px",
                          color: "#fff",
                          height: "2px",
                        },
                      },
                      {
                        component: "div",
                        children: [
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 8,
                    xl: 8,
                    children: [
                      {
                        component: "h5",
                        className: "gx-text-white",
                        text: "Living Here",
                      },
                      {
                        component: "hr",
                        style: {
                          marginTop: "5px",
                          color: "#fff",
                          height: "2px",
                        },
                      },
                      {
                        component: "div",
                        children: [
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 8,
                    xl: 8,
                    children: [
                      {
                        component: "h5",
                        className: "gx-text-white",
                        text: "Living Here",
                      },
                      {
                        component: "hr",
                        style: {
                          marginTop: "5px",
                          color: "#fff",
                          height: "2px",
                        },
                      },
                      {
                        component: "div",
                        children: [
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            children: [
                              {
                                component: "span",
                                style: {
                                  color: "#fff",
                                  fontWeight: "100",
                                  display: "block",
                                  marginBottom: "5px",
                                },
                                text: "Goverment",
                              },
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
        ],
      },
    ],
  },
];

//  ####### #     #  #####  ### ####### #######  #####  #     #
//  #       ##    # #     #  #     #    #       #     # #     #
//  #       # #   # #        #     #    #       #       #     #
//  #####   #  #  # #  ####  #     #    #####   #       #######
//  #       #   # # #     #  #     #    #       #       #     #
//  #       #    ## #     #  #     #    #       #     # #     #
//  ####### #     #  #####  ###    #    #######  #####  #     #

//   #####     #    ######  ####### #     #  #####  ####### #        #####
//  #     #   # #   #     # #     # #     # #     # #       #       #     #
//  #        #   #  #     # #     # #     # #       #       #             #
//  #       #     # ######  #     # #     #  #####  #####   #        #####
//  #       ####### #   #   #     # #     #       # #       #       #
//  #     # #     # #    #  #     # #     # #     # #       #       #
//   #####  #     # #     # #######  #####   #####  ####### ####### #######

export const engitechCarousel02 = [
  {
    component: "Carousel",
    className: "gx-mt-4",
    children: [
      {
        component: "div",
        children: [
          {
            component: "div",
            style: {
              backgroundImage:
                "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/slide1-home1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              /** Дэлгэцийн өргөнөөс хамаараад өндрийг тохируулав */
              height: window.innerWidth > 1280 ? "720px" : "360px",
            },
            children: [
              {
                component: "div",
                className: "gx-container",
                children: [
                  {
                    component: "div",
                    style:
                      window.innerWidth > 1280
                        ? {
                            width: "50%",
                            paddingTop: "8rem",
                          }
                        : {
                            width: "80%",
                            paddingTop: "3rem",
                          },
                    children: [
                      {
                        component: "span",
                        className: "gx-text-white",
                        style: {
                          fontSize: "24px",
                          fontWeight: "lighter",
                        },
                        text: "// Full cycle software development",
                      },
                      {
                        component: "h1",
                        style:
                          window.innerWidth > 1280
                            ? {
                                color: "#fff",
                                fontSize: "70px",
                                fontWeight: "bold",
                                marginBottom: "2rem",
                                position: "relative",
                              }
                            : {
                                color: "#fff",
                                fontSize: "40px",
                                fontWeight: "bold",
                                marginBottom: "1rem",
                                position: "relative",
                              },
                        text: "From idea to product",
                      },
                      {
                        component: "p",
                        style:
                          window.innerWidth > 1280
                            ? {
                                fontSize: "20px",
                                fontWeight: "lighter",
                                color: "#fff",
                                position: "relative",
                              }
                            : {
                                fontSize: "16px",
                                fontWeight: "lighter",
                                color: "#fff",
                                position: "relative",
                              },
                        text:
                          "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
                      },
                      {
                        component: "Link",
                        style: {
                          padding: "1rem 2rem",
                          backgroundColor: "#111",
                          color: "#fff",
                          top: "2rem",
                          position: "relative",
                        },
                        to: "#",
                        text: "Learn more",
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
        component: "div",
        children: [
          {
            component: "div",
            style: {
              backgroundImage:
                "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/slide1-home1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              /** Дэлгэцийн өргөнөөс хамаараад өндрийг тохируулав */
              height: window.innerWidth > 1280 ? "720px" : "360px",
            },
            children: [
              {
                component: "div",
                className: "gx-container",
                children: [
                  {
                    component: "div",
                    style:
                      window.innerWidth > 1280
                        ? {
                            width: "50%",
                            paddingTop: "8rem",
                          }
                        : {
                            width: "80%",
                            paddingTop: "3rem",
                          },
                    children: [
                      {
                        component: "span",
                        className: "gx-text-white",
                        style: {
                          fontSize: "24px",
                          fontWeight: "lighter",
                        },
                        text: "// Full cycle software development",
                      },
                      {
                        component: "h1",
                        style:
                          window.innerWidth > 1280
                            ? {
                                color: "#fff",
                                fontSize: "70px",
                                fontWeight: "bold",
                                marginBottom: "2rem",
                                position: "relative",
                              }
                            : {
                                color: "#fff",
                                fontSize: "40px",
                                fontWeight: "bold",
                                marginBottom: "1rem",
                                position: "relative",
                              },
                        text: "From idea to product",
                      },
                      {
                        component: "p",
                        style:
                          window.innerWidth > 1280
                            ? {
                                fontSize: "20px",
                                fontWeight: "lighter",
                                color: "#fff",
                                position: "relative",
                              }
                            : {
                                fontSize: "16px",
                                fontWeight: "lighter",
                                color: "#fff",
                                position: "relative",
                              },
                        text:
                          "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
                      },
                      {
                        component: "Link",
                        style: {
                          padding: "1rem 2rem",
                          backgroundColor: "#111",
                          color: "#fff",
                          top: "2rem",
                          position: "relative",
                        },
                        to: "#",
                        text: "Learn more",
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
        component: "div",
        children: [
          {
            component: "div",
            style: {
              backgroundImage:
                "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/slide1-home1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              /** Дэлгэцийн өргөнөөс хамаараад өндрийг тохируулав */
              height: window.innerWidth > 1280 ? "720px" : "360px",
            },
            children: [
              {
                component: "div",
                className: "gx-container",
                children: [
                  {
                    component: "div",
                    style:
                      window.innerWidth > 1280
                        ? {
                            width: "50%",
                            paddingTop: "8rem",
                          }
                        : {
                            width: "80%",
                            paddingTop: "3rem",
                          },
                    children: [
                      {
                        component: "span",
                        className: "gx-text-white",
                        style: {
                          fontSize: "24px",
                          fontWeight: "lighter",
                        },
                        text: "// Full cycle software development",
                      },
                      {
                        component: "h1",
                        style:
                          window.innerWidth > 1280
                            ? {
                                color: "#fff",
                                fontSize: "70px",
                                fontWeight: "bold",
                                marginBottom: "2rem",
                                position: "relative",
                              }
                            : {
                                color: "#fff",
                                fontSize: "40px",
                                fontWeight: "bold",
                                marginBottom: "1rem",
                                position: "relative",
                              },
                        text: "From idea to product",
                      },
                      {
                        component: "p",
                        style:
                          window.innerWidth > 1280
                            ? {
                                fontSize: "20px",
                                fontWeight: "lighter",
                                color: "#fff",
                                position: "relative",
                              }
                            : {
                                fontSize: "16px",
                                fontWeight: "lighter",
                                color: "#fff",
                                position: "relative",
                              },
                        text:
                          "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
                      },
                      {
                        component: "Link",
                        style: {
                          padding: "1rem 2rem",
                          backgroundColor: "#111",
                          color: "#fff",
                          top: "2rem",
                          position: "relative",
                        },
                        to: "#",
                        text: "Learn more",
                      },
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
];

//   #####     #    ######  ####### #     #  #####  ####### #        #####
//  #     #   # #   #     # #     # #     # #     # #       #       #     #
//  #        #   #  #     # #     # #     # #       #       #             #
//  #       #     # ######  #     # #     #  #####  #####   #        #####
//  #       ####### #   #   #     # #     #       # #       #             #
//  #     # #     # #    #  #     # #     # #     # #       #       #     #
//   #####  #     # #     # #######  #####   #####  ####### #######  #####
export const engitechCarousel03 = [
  {
    component: "div",
    className: "gx-container",
    children: [
      {
        component: "Carousel",
        autoplay: true,
        cellSpacing: 4,
        sliceWidth: 0.2,
        slidesToShow:
          window.innerWidth > 1280 ? 7 : window.innerWidth < 680 ? 2 : 5,
        children: [
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  ["0:hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    style: {},
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            children: [
              {
                component: "div",
                style: {
                  padding: "0 2rem",
                  margin: "3rem 0",
                  filter: "contrast(0%)",
                  opacity: 0.7,
                  [":hover"]: {
                    filter: "contrast(100%)",
                    opacity: 1,
                  },
                },
                children: [
                  {
                    component: "Link",
                    to: "#",
                    children: [
                      {
                        component: "img",
                        src:
                          "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/client2.svg",
                      },
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
];

//   #####     #    ######  ######   #####
//  #     #   # #   #     # #     # #     #
//  #        #   #  #     # #     #       #
//  #       #     # ######  #     #  #####
//  #       ####### #   #   #     # #
//  #     # #     # #    #  #     # #
//   #####  #     # #     # ######  #######
export const engitechCard02 = [
  {
    component: "Row",
    className: "gx-container gx-mt-4 gx-mb-4",
    children: [
      {
        component: "Col",
        sx: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        children: [
          {
            component: "div",
            children: [
              {
                component: "p",
                style: {
                  color: "#7141b1",
                  fontSize: "24px",
                  fontWeight: "lighter",
                },
                text: "// ABOUT COMPANY",
              },
              {
                component: "h1",
                style: {
                  fontSize: "36px",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                },
                text: "Your Partner for Software Innovation",
              },
              {
                component: "hr",
                style: { width: "30%" },
              },
              {
                component: "p",
                text:
                  "Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.",
              },
              {
                component: "Row",
                children: [
                  {
                    component: "Col",
                    span: 12,
                    children: [
                      {
                        component: "i",
                        style: { fontSize: "300%", color: "#7141b1" },
                        className: "icon icon-star",
                      },
                      {
                        component: "h2",
                        style: { testTransform: "capitalize" },
                        text: "experience",
                      },
                      {
                        component: "hr",
                        style: { width: "30%" },
                      },
                      {
                        component: "p",
                        text:
                          "Our great team of more than 1400 software experts.",
                      },
                    ],
                  },
                  {
                    component: "Col",
                    span: 12,
                    children: [
                      {
                        component: "i",
                        style: { fontSize: "300%", color: "#7141b1" },
                        className: "icon icon-team",
                      },
                      {
                        component: "h2",
                        style: { testTransform: "capitalize" },
                        text: "Quick support",
                      },
                      {
                        component: "hr",
                        style: { width: "30%" },
                      },
                      {
                        component: "p",
                        text:
                          "We’ll help you test bold new ideas while sharing your.",
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
        component: "Col",
        sx: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        children: [
          {
            component: "img",
            src:
              "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/02/image1-home1.png",
          },
          {
            component: "Link",
            style: {
              position: "relative",
              bottom: "10%",
              left: "10%",
              fontSize: "16px",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              color: "#43baff",
            },
            to: "#",
            children: [
              {
                component: "i",
                className: "icon icon-arrow-right",
              },
              {
                component: "span",
                className: "gx-ml-2",
                text: "Learn more about us",
              },
            ],
          },
        ],
      },
    ],
  },
];

//   #####     #    ######  ######   #####
//  #     #   # #   #     # #     # #     #
//  #        #   #  #     # #     #       #
//  #       #     # ######  #     #  #####
//  #       ####### #   #   #     #       #
//  #     # #     # #    #  #     # #     #
//   #####  #     # #     # ######   #####
export const engitechCard03 = [
  {
    component: "div",
    style: { backgroundColor: "#221F3C", padding: "120px 0" },
    children: [
      {
        component: "div",
        className: "gx-container",
        children: [
          {
            component: "div",
            className: "gx-text-center",
            children: [
              {
                component: "p",
                style: {
                  color: "#8E88B8",
                  fontSize: "16px",
                  fontWeight: "regular",
                  textTransform: "upperCase",
                },
                text: "// WHY CHOOSE US",
              },
              {
                component: "h1",
                style: {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "48px",
                  padding: "0 15%",
                },
                text: "Design the Concept of Your Business Idea Now",
              },
            ],
          },
          {
            component: "Row",
            children: [
              {
                component: "Col",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 6,
                children: [
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              fontWeight: 800,
                              fontSize: "100px",
                              color: "#fff",
                              opacity: 0.1,
                              top: 0,
                              left: "-11px",
                              lineHeight: "72px",
                            },
                            text: "01",
                          },
                          {
                            component: "h5",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Product Design",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              lineHeight: "1.8",
                            },
                            text:
                              "Our product design service lets you prototype, test and validate your ideas.",
                          },
                          {
                            component: "Link",
                            style: {
                              position: "relative",
                              // bottom: "10%",
                              fontSize: "20px",
                              textTransform: "uppercase",
                              display: "flex",
                              alignItems: "center",
                              color: "#43baff",
                            },
                            to: "#",
                            children: [
                              {
                                component: "i",
                                className: "icon icon-arrow-right",
                              },
                              {
                                component: "span",
                                className: "gx-ml-2",
                                text: "Learn more",
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              bottom: "-88px",
                              right: "-88px",
                              backgroundColor: "#332d5f",
                              width: "188px",
                              height: "188px",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  bottom: "104px",
                                  right: "115px",
                                  color: "#fff",
                                  fontSize: "32px",
                                },
                                className: "icon icon-data-display",
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
                component: "Col",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 6,
                children: [
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              fontWeight: 800,
                              fontSize: "100px",
                              color: "#fff",
                              opacity: 0.1,
                              top: 0,
                              left: "-11px",
                              lineHeight: "72px",
                            },
                            text: "01",
                          },
                          {
                            component: "h5",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Product Design",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              lineHeight: "1.8",
                            },
                            text:
                              "Our product design service lets you prototype, test and validate your ideas.",
                          },
                          {
                            component: "Link",
                            style: {
                              position: "relative",
                              // bottom: "10%",
                              fontSize: "20px",
                              textTransform: "uppercase",
                              display: "flex",
                              alignItems: "center",
                              color: "#43baff",
                            },
                            to: "#",
                            children: [
                              {
                                component: "i",
                                className: "icon icon-arrow-right",
                              },
                              {
                                component: "span",
                                className: "gx-ml-2",
                                text: "Learn more",
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              bottom: "-88px",
                              right: "-88px",
                              backgroundColor: "#332d5f",
                              width: "188px",
                              height: "188px",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  bottom: "104px",
                                  right: "115px",
                                  color: "#fff",
                                  fontSize: "32px",
                                },
                                className: "icon icon-data-display",
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
                component: "Col",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 6,
                children: [
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              fontWeight: 800,
                              fontSize: "100px",
                              color: "#fff",
                              opacity: 0.1,
                              top: 0,
                              left: "-11px",
                              lineHeight: "72px",
                            },
                            text: "01",
                          },
                          {
                            component: "h5",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Product Design",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              lineHeight: "1.8",
                            },
                            text:
                              "Our product design service lets you prototype, test and validate your ideas.",
                          },
                          {
                            component: "Link",
                            style: {
                              position: "relative",
                              // bottom: "10%",
                              fontSize: "20px",
                              textTransform: "uppercase",
                              display: "flex",
                              alignItems: "center",
                              color: "#43baff",
                            },
                            to: "#",
                            children: [
                              {
                                component: "i",
                                className: "icon icon-arrow-right",
                              },
                              {
                                component: "span",
                                className: "gx-ml-2",
                                text: "Learn more",
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              bottom: "-88px",
                              right: "-88px",
                              backgroundColor: "#332d5f",
                              width: "188px",
                              height: "188px",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  bottom: "104px",
                                  right: "115px",
                                  color: "#fff",
                                  fontSize: "32px",
                                },
                                className: "icon icon-data-display",
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
                component: "Col",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 6,
                children: [
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              fontWeight: 800,
                              fontSize: "100px",
                              color: "#fff",
                              opacity: 0.1,
                              top: 0,
                              left: "-11px",
                              lineHeight: "72px",
                            },
                            text: "01",
                          },
                          {
                            component: "h5",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Product Design",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              lineHeight: "1.8",
                            },
                            text:
                              "Our product design service lets you prototype, test and validate your ideas.",
                          },
                          {
                            component: "Link",
                            style: {
                              position: "relative",
                              // bottom: "10%",
                              fontSize: "20px",
                              textTransform: "uppercase",
                              display: "flex",
                              alignItems: "center",
                              color: "#43baff",
                            },
                            to: "#",
                            children: [
                              {
                                component: "i",
                                className: "icon icon-arrow-right",
                              },
                              {
                                component: "span",
                                className: "gx-ml-2",
                                text: "Learn more",
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              bottom: "-88px",
                              right: "-88px",
                              backgroundColor: "#332d5f",
                              width: "188px",
                              height: "188px",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  bottom: "104px",
                                  right: "115px",
                                  color: "#fff",
                                  fontSize: "32px",
                                },
                                className: "icon icon-data-display",
                              },
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
            component: "Row",
            children: [
              {
                component: "Col",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 12,
                children: [
                  {
                    component: "div",
                    style: {
                      backgroundImage:
                        "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/01/bg-counter-1.jpg)",
                      backgroundSize: "cover",
                      margin: "1rem",
                      padding: "3rem",
                    },
                    children: [
                      {
                        component: "h1",
                        style: {
                          color: "#fff",
                          fontSize: "48px",
                          fontWeight: "800",
                        },
                        text: "15+",
                      },
                      {
                        component: "h1",
                        style: {
                          color: "#fff",
                          fontSize: "36px",
                          fontWeight: "bold",
                        },
                        text: "Countries Worldwide",
                      },
                      {
                        component: "p",
                        style: {
                          color: "#fff",
                          fontSize: "20px",
                          lineHeight: "1.5",
                        },
                        text:
                          "To succeed, every software solution must be deeply integrated into the existing tech environment..",
                      },
                    ],
                  },
                ],
              },
              {
                component: "Col",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 12,
                children: [
                  {
                    component: "div",
                    style: {
                      backgroundImage:
                        "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/01/bg-counter-1.jpg)",
                      backgroundSize: "cover",
                      margin: "1rem",
                      padding: "3rem",
                    },
                    children: [
                      {
                        component: "h1",
                        style: {
                          color: "#fff",
                          fontSize: "48px",
                          fontWeight: "800",
                        },
                        text: "15+",
                      },
                      {
                        component: "h1",
                        style: {
                          color: "#fff",
                          fontSize: "36px",
                          fontWeight: "bold",
                        },
                        text: "Countries Worldwide",
                      },
                      {
                        component: "p",
                        style: {
                          color: "#fff",
                          fontSize: "20px",
                          lineHeight: "1.5",
                        },
                        text:
                          "To succeed, every software solution must be deeply integrated into the existing tech environment..",
                      },
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
];

//   #####     #    ######  ######     #
//  #     #   # #   #     # #     #    #    #
//  #        #   #  #     # #     #    #    #
//  #       #     # ######  #     #    #    #
//  #       ####### #   #   #     #    #######
//  #     # #     # #    #  #     #         #
//   #####  #     # #     # ######          #
export const engitechCard04 = [
  {
    component: "div",
    className: "gx-container gx-mt-4 gx-mb-4",
    children: [
      {
        component: "div",
        className:
          "gx-d-flex gx-align-items-center gx-justify-content-between gx-mb-4",
        children: [
          {
            component: "div",
            children: [
              {
                component: "Title",
                level: 5,
                className: "gx-text-transform-uppercase",
                style: {
                  color: "#7141b1",
                  margin: "0",
                },
                text: "// Our service",
              },
              {
                component: "Title",
                className: "gx-text-transform-capitalize gx-font-weight-bold",
                level: 1,
                style: {
                  color: "#111",
                  margin: "10px 0 0 0",
                  textTransform: "capitalize",
                  width: "60%",
                },
                text: "we offer a wide variaty of IT services",
              },
            ],
          },
          {
            component: "Link",
            to: "#",
            children: [
              {
                component: "Button",
                size: "large",
                type: "primary",
                style: {
                  borderRadius: "0px",
                  backgroundColor: "#43baff",
                  borderColor: "#43baff !important",
                },
                text: "ALL SERVICES",
              },
            ],
          },
        ],
      },
      {
        component: "Row",
        gutter: [8, 8, 8],
        children: [
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 12,
            lg: 8,
            xl: 8,
            style: {
              padding: "1rem",
            },
            children: [
              {
                component: "div",
                className:
                  "gx-d-flex gx-align-items-top gx-justify-content-left",
                children: [
                  {
                    component: "div",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-crm",
                        style: {
                          fontSize: "48px",
                          color: "#7141b1",
                        },
                      },
                    ],
                  },
                  {
                    component: "div",
                    className: "gx-ml-3",
                    children: [
                      {
                        component: "Title",
                        level: 3,
                        className:
                          "gx-font-weight-bold gx-text-transform-capitalize",
                        text: "Web development",
                      },
                      {
                        component: "Paragraph",
                        text:
                          "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 12,
            lg: 8,
            xl: 8,
            style: {
              padding: "1rem",
            },
            children: [
              {
                component: "div",
                className:
                  "gx-d-flex gx-align-items-top gx-justify-content-left",
                children: [
                  {
                    component: "div",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-crm",
                        style: {
                          fontSize: "48px",
                          color: "#7141b1",
                        },
                      },
                    ],
                  },
                  {
                    component: "div",
                    className: "gx-ml-3",
                    children: [
                      {
                        component: "Title",
                        level: 3,
                        className:
                          "gx-font-weight-bold gx-text-transform-capitalize",
                        text: "Web development",
                      },
                      {
                        component: "Paragraph",
                        text:
                          "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 12,
            lg: 8,
            xl: 8,
            style: {
              padding: "1rem",
            },
            children: [
              {
                component: "div",
                className:
                  "gx-d-flex gx-align-items-top gx-justify-content-left",
                children: [
                  {
                    component: "div",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-crm",
                        style: {
                          fontSize: "48px",
                          color: "#7141b1",
                        },
                      },
                    ],
                  },
                  {
                    component: "div",
                    className: "gx-ml-3",
                    children: [
                      {
                        component: "Title",
                        level: 3,
                        className:
                          "gx-font-weight-bold gx-text-transform-capitalize",
                        text: "Web development",
                      },
                      {
                        component: "Paragraph",
                        text:
                          "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 12,
            lg: 8,
            xl: 8,
            style: {
              padding: "1rem",
            },
            children: [
              {
                component: "div",
                className:
                  "gx-d-flex gx-align-items-top gx-justify-content-left",
                children: [
                  {
                    component: "div",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-crm",
                        style: {
                          fontSize: "48px",
                          color: "#7141b1",
                        },
                      },
                    ],
                  },
                  {
                    component: "div",
                    className: "gx-ml-3",
                    children: [
                      {
                        component: "Title",
                        level: 3,
                        className:
                          "gx-font-weight-bold gx-text-transform-capitalize",
                        text: "Web development",
                      },
                      {
                        component: "Paragraph",
                        text:
                          "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 12,
            lg: 8,
            xl: 8,
            style: {
              padding: "1rem",
            },
            children: [
              {
                component: "div",
                className:
                  "gx-d-flex gx-align-items-top gx-justify-content-left",
                children: [
                  {
                    component: "div",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-crm",
                        style: {
                          fontSize: "48px",
                          color: "#7141b1",
                        },
                      },
                    ],
                  },
                  {
                    component: "div",
                    className: "gx-ml-3",
                    children: [
                      {
                        component: "Title",
                        level: 3,
                        className:
                          "gx-font-weight-bold gx-text-transform-capitalize",
                        text: "Web development",
                      },
                      {
                        component: "Paragraph",
                        text:
                          "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "Col",
            xs: 24,
            sm: 24,
            md: 12,
            lg: 8,
            xl: 8,
            style: {
              padding: "1rem",
            },
            children: [
              {
                component: "div",
                className:
                  "gx-d-flex gx-align-items-top gx-justify-content-left",
                children: [
                  {
                    component: "div",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-crm",
                        style: {
                          fontSize: "48px",
                          color: "#7141b1",
                        },
                      },
                    ],
                  },
                  {
                    component: "div",
                    className: "gx-ml-3",
                    children: [
                      {
                        component: "Title",
                        level: 3,
                        className:
                          "gx-font-weight-bold gx-text-transform-capitalize",
                        text: "Web development",
                      },
                      {
                        component: "Paragraph",
                        text:
                          "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
                      },
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
];

//  ######     #    #     # #     # ####### ######      #####
//  #     #   # #   ##    # ##    # #       #     #    #     #
//  #     #  #   #  # #   # # #   # #       #     #          #
//  ######  #     # #  #  # #  #  # #####   ######      #####
//  #     # ####### #   # # #   # # #       #   #      #
//  #     # #     # #    ## #    ## #       #    #     #
//  ######  #     # #     # #     # ####### #     #    #######

export const engitechBanner02 = [
  {
    component: "div",
    className: "gx-container",
    style: {
      height: "256px",
    },
    children: [
      {
        component: "div",
        style: {
          backgroundImage:
            "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/02/bg-cta1-home1.jpg)",
          backgroundSize: "cover",
          height: "100%",
        },
        children: [
          {
            component: "div",
            className:
              "gx-d-flex gx-align-items-center gx-justify-content-between gx-mb-4",
            style: {
              padding: "2rem",
            },
            children: [
              {
                component: "div",
                children: [
                  {
                    component: "Title",
                    level: 5,
                    className: "gx-text-transform-uppercase",
                    style: {
                      color: "#fff",
                      margin: "0",
                    },
                    text: "// Our service",
                  },
                  {
                    component: "Title",
                    className:
                      "gx-text-transform-capitalize gx-font-weight-bold",
                    level: 1,
                    style: {
                      color: "#fff",
                      margin: "10px 0 0 0",
                      textTransform: "capitalize",
                      width: "100%",
                    },
                    text: "we offer a wide variaty of IT services",
                  },
                ],
              },
              {
                component: "Link",
                to: "#",
                children: [
                  {
                    component: "Button",
                    outlined: true,
                    size: "large",
                    type: "primary",
                    style: {
                      color: "#fff",
                      borderRadius: "0px",
                      backgroundColor: "none",
                      borderColor: "#fff !important",
                    },
                    text: "ALL SERVICES",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

//   #####     #    ######  ####### #     #  #####  #
//  #     #   # #   #     # #     # #     # #     # #    #
//  #        #   #  #     # #     # #     # #       #    #
//  #       #     # ######  #     # #     #  #####  #    #
//  #       ####### #   #   #     # #     #       # #######
//  #     # #     # #    #  #     # #     # #     #      #
//   #####  #     # #     # #######  #####   #####       #
export const engitechCarousel04 = [
  {
    component: "div",
    className: "gx-mt-4 gx-mb-4",
    children: [
      {
        component: "div",
        className:
          "gx-container gx-mb-4 gx-d-flex gx-jusitfy-content-between gx-align-items-center",
        children: [
          {
            component: "div",
            children: [
              {
                component: "Title",
                level: 5,
                className: "gx-text-transform-uppercase",
                style: {
                  color: "#7141b1",
                  margin: "0",
                },
                text: "// LATEST CASE STUDIES",
              },
              {
                component: "Title",
                className: "gx-text-transform-capitalize gx-font-weight-bold",
                level: 1,
                style: {
                  color: "#111",
                  margin: "10px 0 0 0",
                  textTransform: "capitalize",
                  width: "100%",
                },
                text: "Introduce Our Projects",
              },
            ],
          },
          {
            component: "Paragraph",
            style: {
              width: "80%",
            },
            text:
              "Software development outsourcing is just a tool to achieve business goals. But there is no way to get worthwhile results without cooperation and trust between a client company.",
          },
        ],
      },
      {
        component: "Carousel",
        autoplay: true,
        cellSpacing: 4,
        sliceWidth: 0.2,
        slidesToShow:
          window.innerWidth > 1280 ? 5 : window.innerWidth < 680 ? 1 : 3,
        children: [
          {
            component: "div",
            children: [
              {
                component: "Link",
                to: "#",
                children: [
                  {
                    component: "img",
                    style: {
                      width: "100%",
                      height: "auto",
                      marginBottom: "-150px",
                    },
                    src:
                      "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2019/11/project7-720x520.jpg",
                  },
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "h1",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Social media app",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              textTransform: "uppercase",
                            },
                            text: "design/technology",
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              top: "-88px",
                              right: "-88px",
                              width: "188px",
                              height: "188px",
                              backgroundColor: "#332d5f",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  top: "115px",
                                  right: "104px",
                                  color: "blue",
                                  fontSize: "32px",
                                },
                                className: "icon icon-arrow-right",
                              },
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
            component: "div",
            children: [
              {
                component: "Link",
                to: "#",
                children: [
                  {
                    component: "img",
                    style: {
                      width: "100%",
                      height: "auto",
                      marginBottom: "-150px",
                    },
                    src:
                      "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2019/11/project7-720x520.jpg",
                  },
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "h1",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Social media app",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              textTransform: "uppercase",
                            },
                            text: "design/technology",
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              top: "-88px",
                              right: "-88px",
                              width: "188px",
                              height: "188px",
                              backgroundColor: "#332d5f",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  top: "115px",
                                  right: "104px",
                                  color: "blue",
                                  fontSize: "32px",
                                },
                                className: "icon icon-arrow-right",
                              },
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
            component: "div",
            children: [
              {
                component: "Link",
                to: "#",
                children: [
                  {
                    component: "img",
                    style: {
                      width: "100%",
                      height: "auto",
                      marginBottom: "-150px",
                    },
                    src:
                      "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2019/11/project7-720x520.jpg",
                  },
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "h1",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Social media app",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              textTransform: "uppercase",
                            },
                            text: "design/technology",
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              top: "-88px",
                              right: "-88px",
                              width: "188px",
                              height: "188px",
                              backgroundColor: "#332d5f",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  top: "115px",
                                  right: "104px",
                                  color: "blue",
                                  fontSize: "32px",
                                },
                                className: "icon icon-arrow-right",
                              },
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
            component: "div",
            children: [
              {
                component: "Link",
                to: "#",
                children: [
                  {
                    component: "img",
                    style: {
                      width: "100%",
                      height: "auto",
                      marginBottom: "-150px",
                    },
                    src:
                      "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2019/11/project7-720x520.jpg",
                  },
                  {
                    component: "div",
                    style: {
                      border: "1px solid #46416B",
                      boxSizing: "border-box",
                      display: "block",
                      backgroundColor: "#262051",
                      // padding: "43px 30px 65px",
                      position: "inherit",
                      margin: "1rem",
                    },
                    children: [
                      {
                        component: "div",
                        style: {
                          overflow: "hidden",
                          position: "relative",
                          padding: "43px 30px 65px",
                          background: "#262051",
                          color: "#aeaacb",
                        },
                        children: [
                          {
                            component: "h1",
                            style: {
                              position: "relative",
                              color: "#fff",
                              fontSize: "32px",
                              marginBottom: "1rem",
                            },
                            text: "Social media app",
                          },
                          {
                            component: "p",
                            style: {
                              color: "#aeaacb",
                              fontSize: "16px",
                              textTransform: "uppercase",
                            },
                            text: "design/technology",
                          },
                          {
                            component: "div",
                            style: {
                              position: "absolute",
                              top: "-88px",
                              right: "-88px",
                              width: "188px",
                              height: "188px",
                              backgroundColor: "#332d5f",
                              ["-webkit-border-radius"]: "50%",
                              ["-webkit-transition"]: "all 0.3s linear",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  position: "absolute",
                                  top: "115px",
                                  right: "104px",
                                  color: "blue",
                                  fontSize: "32px",
                                },
                                className: "icon icon-arrow-right",
                              },
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
        ],
      },
    ],
  },
];

//  ######     #    #     # #     # ####### ######      #####
//  #     #   # #   ##    # ##    # #       #     #    #     #
//  #     #  #   #  # #   # # #   # #       #     #          #
//  ######  #     # #  #  # #  #  # #####   ######      #####
//  #     # ####### #   # # #   # # #       #   #            #
//  #     # #     # #    ## #    ## #       #    #     #     #
//  ######  #     # #     # #     # ####### #     #     #####
export const engitechBanner03 = [
  {
    component: "div",
    className: "gx-text-center",
    style: {
      // height: '256px'
    },
    children: [
      {
        component: "div",
        style: {
          backgroundImage:
            "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/02/bg-tech-home1.jpg)",
          backgroundSize: "cover",
          height: "100%",
        },
        children: [
          {
            component: "div",
            className: "gx-mb-4 gx-container",
            style: {
              padding: "7rem 0rem 3rem 0rem",
            },
            children: [
              {
                component: "div",
                className: "gx-mb-4",
                children: [
                  {
                    component: "Title",
                    level: 5,
                    className: "gx-text-transform-uppercase",
                    style: {
                      color: "#fff",
                      margin: "0",
                    },
                    text: "// Our service",
                  },
                  {
                    component: "Title",
                    className:
                      "gx-text-transform-capitalize gx-font-weight-bold",
                    level: 1,
                    style: {
                      color: "#fff",
                      margin: "10px 0 0 0",
                      textTransform: "capitalize",
                      width: "100%",
                    },
                    text: "we offer a wide variaty of IT services",
                  },
                ],
              },
              {
                component: "Row",
                className: "gx-container gx-text-center gx-mb-4",

                children: [
                  {
                    component: "Col",

                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 4,
                    xs: 4,
                    children: [
                      {
                        component: "div",
                        style: {
                          border: "0.1px solid #ffffff8a",
                          padding: "2rem 1rem",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "i",
                            className: "icon icon-crm",
                            style: {
                              fontSize: "32px",
                              color: "#fff",
                              fontWeight: "lighter",
                            },
                          },
                          {
                            component: "h6",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "18px",
                              color: "#fff",
                            },
                            text: "Web",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 4,
                    xs: 4,
                    children: [
                      {
                        component: "div",
                        style: {
                          border: "0.1px solid #ffffff8a",
                          padding: "2rem 1rem",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "i",
                            className: "icon icon-crm",
                            style: {
                              fontSize: "32px",
                              color: "#fff",
                              fontWeight: "lighter",
                            },
                          },
                          {
                            component: "h6",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "18px",
                              color: "#fff",
                            },
                            text: "Web",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 4,
                    xs: 4,
                    children: [
                      {
                        component: "div",
                        style: {
                          border: "0.1px solid #ffffff8a",
                          padding: "2rem 1rem",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "i",
                            className: "icon icon-crm",
                            style: {
                              fontSize: "32px",
                              color: "#fff",
                              fontWeight: "lighter",
                            },
                          },
                          {
                            component: "h6",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "18px",
                              color: "#fff",
                            },
                            text: "Web",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 4,
                    xs: 4,
                    children: [
                      {
                        component: "div",
                        style: {
                          border: "0.1px solid #ffffff8a",
                          padding: "2rem 1rem",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "i",
                            className: "icon icon-crm",
                            style: {
                              fontSize: "32px",
                              color: "#fff",
                              fontWeight: "lighter",
                            },
                          },
                          {
                            component: "h6",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "18px",
                              color: "#fff",
                            },
                            text: "Web",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 4,
                    xs: 4,
                    children: [
                      {
                        component: "div",
                        style: {
                          border: "0.1px solid #ffffff8a",
                          padding: "2rem 1rem",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "i",
                            className: "icon icon-crm",
                            style: {
                              fontSize: "32px",
                              color: "#fff",
                              fontWeight: "lighter",
                            },
                          },
                          {
                            component: "h6",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "18px",
                              color: "#fff",
                            },
                            text: "Web",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 8,
                    lg: 4,
                    xs: 4,
                    children: [
                      {
                        component: "div",
                        style: {
                          border: "0.1px solid #ffffff8a",
                          padding: "2rem 1rem",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "i",
                            className: "icon icon-crm",
                            style: {
                              fontSize: "32px",
                              color: "#fff",
                              fontWeight: "lighter",
                            },
                          },
                          {
                            component: "h6",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "18px",
                              color: "#fff",
                            },
                            text: "Web",
                          },
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
    ],
  },
];

//  ######     #    #     # #     # ####### ######     #######
//  #     #   # #   ##    # ##    # #       #     #    #
//  #     #  #   #  # #   # # #   # #       #     #    #
//  ######  #     # #  #  # #  #  # #####   ######     ######
//  #     # ####### #   # # #   # # #       #   #            #
//  #     # #     # #    ## #    ## #       #    #     #     #
//  ######  #     # #     # #     # ####### #     #     #####
export const engitechBanner05 = [
  {
    component: "div",
    className: "gx-text-center",
    style: {
      // height: '256px'
    },
    children: [
      {
        component: "div",
        style: {
          backgroundImage:
            "url(http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/01/bg-maps-dots.jpg)",
          backgroundSize: "cover",
          height: "100%",
        },
        children: [
          {
            component: "div",
            className: "gx-mb-4 gx-container",
            style: {
              padding: "7rem 0rem 5rem 0rem",
            },
            children: [
              {
                component: "div",
                className: "gx-text-center",
                style: { marginBottom: "5rem" },
                children: [
                  {
                    component: "Title",
                    level: 5,
                    className: "gx-text-transform-uppercase",
                    style: {
                      color: "#7141b1",
                      margin: "0",
                    },
                    text: "// Our service",
                  },
                  {
                    component: "Title",
                    className:
                      "gx-text-transform-capitalize gx-font-weight-bold",
                    level: 1,
                    style: {
                      color: "#111",
                      margin: "10px 0 0 0",
                      textTransform: "capitalize",
                    },
                    text: "We are Trusted 15+ Countries Worldwide",
                  },
                ],
              },
              {
                component: "Row",
                className: "gx-mb-4",
                gutter: [0, 0],
                children: [
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 12,
                    lg: 12,
                    xs: 12,

                    children: [
                      {
                        component: "div",
                        style: {
                          backgroundColor: "#fff",
                          padding: "1rem",
                          borderRadius: "15px",
                          filter: "drop-shadow(10px 10px 4px rgb(0 0 0 / 44%))",
                        },
                        children: [
                          {
                            component: "div",
                            className:
                              "gx-d-flex gx-align-items-center gx-justify-content-left",
                            children: [
                              {
                                component: "img",
                                src:
                                  "https://engitech.s3.amazonaws.com/images/testi1.png",
                                // width: "25px",
                                height: "auto",
                              },
                              {
                                component: "div",
                                style: {
                                  padding: "1rem",
                                },
                                children: [
                                  {
                                    component: "h2",
                                    text: "Mookle LTD,",
                                  },
                                  {
                                    component: "p",
                                    text: "Client of company",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            component: "p",
                            className: "gx-text-left gx-mt-3",
                            text:
                              "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    xs: 24,
                    sm: 24,
                    md: 12,
                    lg: 12,
                    xs: 12,

                    children: [
                      {
                        component: "div",
                        style: {
                          backgroundColor: "#fff",
                          padding: "1rem",
                          borderRadius: "15px",
                          filter: "drop-shadow(10px 10px 4px rgb(0 0 0 / 44%))",
                        },
                        children: [
                          {
                            component: "div",
                            className:
                              "gx-d-flex gx-align-items-center gx-justify-content-left",
                            children: [
                              {
                                component: "img",
                                src:
                                  "https://engitech.s3.amazonaws.com/images/testi1.png",
                                // width: "25px",
                                height: "auto",
                              },
                              {
                                component: "div",
                                style: {
                                  padding: "1rem",
                                },
                                children: [
                                  {
                                    component: "h2",
                                    text: "Mookle LTD,",
                                  },
                                  {
                                    component: "p",
                                    text: "Client of company",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            component: "p",
                            className: "gx-text-left gx-mt-3",
                            text:
                              "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
                          },
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
    ],
  },
];

//  ####### ####### ####### #######     #####
//  #       #     # #     #    #       #     #
//  #       #     # #     #    #             #
//  #####   #     # #     #    #        #####
//  #       #     # #     #    #       #
//  #       #     # #     #    #       #
//  #       ####### #######    #       #######
export const engitechFooter02 = [
  {
    component: "div",
    style: {
      backgroundColor: "#221F3C",
      padding: "120px 0 70px 0",
    },
    children: [
      {
        component: "div",
        className: "gx-container",
        children: [
          {
            component: "div",
            className: "gx-text-center",
            style: {
              marginBottom: "3rem",
            },
            children: [
              {
                component: "img",
                src:
                  "http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2019/12/logo-light.png",
              },
            ],
          },
          {
            component: "Row",
            children: [
              {
                component: "Col",
                xs: 24,
                sm: 24,
                md: 8,
                lg: 8,
                xl: 8,
                children: [
                  {
                    component: "div",
                    className: "gx-text-center",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-chart-composed",
                        style: {
                          color: "#43baff",
                          fontSize: "32px",
                        },
                      },
                      {
                        component: "h3",
                        style: {
                          color: "#fff",
                          fontSize: "22px",
                          marginTop: "1.3rem",
                          marginBottom: "1rem",
                          textTransform: "capitalize",
                        },
                        text: "411 univercity st, seattle USA",
                      },
                      {
                        component: "p",
                        style: {
                          color: "#AEAACB",
                          textTransform: "capitalize",
                        },
                        text: "Our address",
                      },
                    ],
                  },
                ],
              },
              {
                component: "Col",
                xs: 24,
                sm: 24,
                md: 8,
                lg: 8,
                xl: 8,
                children: [
                  {
                    component: "div",
                    className: "gx-text-center",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-chart-composed",
                        style: {
                          color: "#43baff",
                          fontSize: "32px",
                        },
                      },
                      {
                        component: "h3",
                        style: {
                          color: "#fff",
                          fontSize: "22px",
                          marginTop: "2rem",
                          marginBottom: "1rem",
                          textTransform: "capitalize",
                        },
                        text: "411 univercity st, seattle USA",
                      },
                      {
                        component: "p",
                        style: {
                          color: "#AEAACB",
                          textTransform: "capitalize",
                        },
                        text: "Our address",
                      },
                    ],
                  },
                ],
              },
              {
                component: "Col",
                xs: 24,
                sm: 24,
                md: 8,
                lg: 8,
                xl: 8,
                children: [
                  {
                    component: "div",
                    className: "gx-text-center",
                    children: [
                      {
                        component: "i",
                        className: "icon icon-chart-composed",
                        style: {
                          color: "#43baff",
                          fontSize: "32px",
                        },
                      },
                      {
                        component: "h3",
                        style: {
                          color: "#fff",
                          fontSize: "22px",
                          marginTop: "2rem",
                          marginBottom: "1rem",
                          textTransform: "capitalize",
                        },
                        text: "411 univercity st, seattle USA",
                      },
                      {
                        component: "p",
                        style: {
                          color: "#AEAACB",
                          textTransform: "capitalize",
                        },
                        text: "Our address",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: "div",
            className:
              "gx-text-center gx-d-flex gx-justify-content-center gx-align-items-center",
            children: [
              {
                component: "Link",
                to: "#",
                style: {
                  color: "#fff",
                  fontSize: "18px",
                  margin: "2rem",
                },
                text: "Home",
              },
              {
                component: "Link",
                to: "#",
                style: {
                  color: "#fff",
                  fontSize: "18px",
                  margin: "2rem",
                },
                text: "Home",
              },
              {
                component: "Link",
                to: "#",
                style: {
                  color: "#fff",
                  fontSize: "18px",
                  margin: "2rem",
                },
                text: "Home",
              },
              {
                component: "Link",
                to: "#",
                style: {
                  color: "#fff",
                  fontSize: "18px",
                  margin: "2rem",
                },
                text: "Home",
              },
              {
                component: "Link",
                to: "#",
                style: {
                  color: "#fff",
                  fontSize: "18px",
                  margin: "2rem",
                },
                text: "Home",
              },
            ],
          },
          {
            component: "p",
            className: "gx-text-center",
            style: {
              color: "#AEAACB",
            },
            text:
              "Copyright © 2020 Engitech by OceanThemes. All Rights Reserved.",
          },
          {
            component: "div",
            className:
              "gx-text-center gx-d-flex gx-justify-content-center gx-align-items-center",
            children: [
              {
                component: "Link",
                to: "#",
                style: {
                  backgroundColor: "#FFF",
                  width: "23px",
                  paddingTop: "3px",
                  margin: "5px",
                  borderRadius: "50% 50% 50% 50%",
                },
                children: [
                  {
                    component: "i",
                    style: {
                      color: "#43baff",
                      width: "1em",
                      height: "1em",
                    },
                    className: "icon icon-facebook",
                  },
                ],
              },
              {
                component: "Link",
                to: "#",
                style: {
                  backgroundColor: "#FFF",
                  width: "23px",
                  margin: "5px",
                  paddingTop: "3px",
                  borderRadius: "50% 50% 50% 50%",
                },
                children: [
                  {
                    component: "i",
                    style: {
                      color: "#43baff",
                      width: "1em",
                      height: "1em",
                    },
                    className: "icon icon-facebook",
                  },
                ],
              },
              {
                component: "Link",
                to: "#",
                style: {
                  backgroundColor: "#FFF",
                  width: "23px",
                  margin: "5px",
                  paddingTop: "3px",
                  borderRadius: "50% 50% 50% 50%",
                },
                children: [
                  {
                    component: "i",
                    style: {
                      color: "#43baff",
                      width: "1em",
                      height: "1em",
                    },
                    className: "icon icon-facebook",
                  },
                ],
              },
              {
                component: "Link",
                to: "#",
                style: {
                  backgroundColor: "#FFF",
                  width: "23px",
                  margin: "5px",
                  paddingTop: "3px",
                  borderRadius: "50% 50% 50% 50%",
                },
                children: [
                  {
                    component: "i",
                    style: {
                      color: "#43baff",
                      width: "1em",
                      height: "1em",
                    },
                    className: "icon icon-facebook",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
