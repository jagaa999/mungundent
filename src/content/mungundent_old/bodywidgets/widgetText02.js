export const widgetText02 = {
  component: "Layout",
  children: [
    {
      component: "Content",
      children: [
        {
          component: "div",
          className: "service gx-p-relative gx-mt-5",
          style: {
            marginBottom: window.innerWidth > 991 ? "120px" : "80px",
          },
          children: [
            //  ##### # ##### #      ######
            //    #   #   #   #      #
            //    #   #   #   #      #####
            //    #   #   #   #      #
            //    #   #   #   #      #
            //    #   #   #   ###### ######
            {
              component: "div",
              className: "gx-container gx-text-center",
              style: {
                paddingRight: window.innerWidth < 991 ? "30px" : "80px",
                paddingLeft: window.innerWidth < 991 ? "30px" : "80px",
                marginBottom: window.innerWidth < 991 ? "50px" : "80px",
              },
              children: [
                {
                  component: "p",
                  style: {
                    display: "inline-block",
                    padding: "4px 15px",
                    color: "#111",
                    backgroundColor: "#fff",
                  },
                  text: "Бидний сайн чаддаг зүйлс",
                },
                {
                  component: "h2",
                  style: {
                    // color: "#fff",
                    fontSize: "32px",
                    marginTop: "25px",
                  },
                  children: [
                    {
                      component: "span",
                      style: {
                        paddingBottom: "30px",
                        borderBottom: "2px solid #2cb2ae",
                      },
                      text: "Танд амлаж чадах бидний гол үйлчилгээ",
                    },
                  ],
                },
              ],
            },
            {
              component: "div",
              className: "gx-container",
              style: {
                marginTop: "120px",
              },
              children: [
                //   #####
                //  #     #  ####   ####  #
                //        # #    # #    # #
                //   #####  #      #    # #
                //        # #      #    # #
                //  #     # #    # #    # #
                //   #####   ####   ####  ######
                {
                  component: "Row",
                  type: "flex",

                  children: [
                    {
                      component: "Col",
                      md: 8,
                      children: [
                        {
                          component: "div",
                          className: "mungundent-card",
                          style: {
                            // border: "1px solid #d5d5d5",
                            borderBottom: "3px solid #2cb2ae",
                            borderRadius: "30px 30px 0 0",
                            padding: "60px 30px",
                            textAlign: "center",
                            marginBottom: "30px",
                            height: "100%",
                          },
                          children: [
                            {
                              component: "div",
                              children: [
                                {
                                  component: "img",
                                  src:
                                    "https://res.cloudinary.com/mungundent/image/upload/v1616503203/slide/dental-care_zf8amc.svg",

                                  style: {
                                    verticalAlign: "middle",
                                    height: "auto",
                                    width: "80px",
                                  },
                                },
                              ],
                            },
                            {
                              component: "div",
                              children: [
                                {
                                  component: "h4",
                                  style: {
                                    position: "relative",
                                    letterSpacing: "2px",
                                    fontSize: "26px",
                                    fontWeight: 500,
                                    marginTop: "70px",
                                  },
                                  text: "Үзлэг, хяналт",
                                },
                                {
                                  component: "p",
                                  className: "gx-mt-3",
                                  text:
                                    "Гэр бүлийн гишүүдийг тогтмол үзэж, хянаж, өвтгөж муутгахгүй байх нь бидний зорилго билээ.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      component: "Col",
                      md: 8,
                      children: [
                        {
                          component: "div",
                          className: "mungundent-card",
                          style: {
                            // border: "1px solid #d5d5d5",
                            borderBottom: "3px solid #2cb2ae",
                            borderRadius: "30px 30px 0 0",
                            padding: "60px 30px",
                            textAlign: "center",
                            marginBottom: "30px",
                            height: "100%",
                          },
                          children: [
                            {
                              component: "div",

                              children: [
                                {
                                  component: "img",
                                  src:
                                    "https://res.cloudinary.com/mungundent/image/upload/v1616503283/slide/tooth_u2i3gd.svg",
                                  style: {
                                    verticalAlign: "middle",
                                    height: "auto",
                                    width: "80px",
                                  },
                                },
                              ],
                            },
                            {
                              component: "div",
                              children: [
                                {
                                  component: "h4",
                                  style: {
                                    position: "relative",
                                    letterSpacing: "2px",
                                    fontSize: "26px",
                                    fontWeight: 500,
                                    marginTop: "70px",
                                  },
                                  text: "Циркон бүрээс",
                                },
                                {
                                  component: "p",
                                  className: "gx-mt-3",
                                  text:
                                    "Таны шүдийг циркон материалаар бүрж, танд цоо шинэ инээмсэглэлийг бэлэглэнэ.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      component: "Col",
                      md: 8,
                      children: [
                        {
                          component: "div",
                          className: "mungundent-card",
                          style: {
                            // border: "1px solid #d5d5d5",
                            borderBottom: "3px solid #2cb2ae",
                            borderRadius: "30px 30px 0 0",
                            padding: "60px 30px",
                            textAlign: "center",
                            marginBottom: "30px",
                            height: "100%",
                          },
                          children: [
                            {
                              component: "div",

                              children: [
                                {
                                  component: "img",
                                  src:
                                    "https://res.cloudinary.com/mungundent/image/upload/v1616503285/slide/implant_i1533l.svg",
                                  style: {
                                    verticalAlign: "middle",
                                    height: "auto",
                                    width: "80px",
                                  },
                                },
                              ],
                            },
                            {
                              component: "div",
                              children: [
                                {
                                  component: "h4",
                                  style: {
                                    position: "relative",
                                    letterSpacing: "2px",
                                    fontSize: "26px",
                                    fontWeight: 500,
                                    marginTop: "70px",
                                  },
                                  text: "Имплант шүд",
                                },
                                {
                                  component: "p",
                                  className: "gx-mt-3",
                                  text:
                                    "Эрүүний ясанд титан ёзоор суулгаж, танд цоо шинэ амьдралыг бэлэглэнэ",
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
  ],
};
