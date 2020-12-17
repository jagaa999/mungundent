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
    autoplay: true,
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
