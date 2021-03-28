export const widgetText01 = {
  component: "Layout",
  children: [
    {
      component: "Content",
      children: [
        {
          component: "div",
          className: "intro-about gx-p-relative",
          style: {
            marginTop: window.innerWidth > 991 ? "120px" : "80px",
            marginBottom: window.innerWidth > 991 ? "120px" : "80px",
          },
          children: [
            {
              component: "div",
              className: "gx-container",
              children: [
                {
                  component: "Row",
                  gutter: [12, 12],
                  children: [
                    {
                      component: "Col",
                      lg: 12,
                      children: [
                        {
                          component: "div",
                          className: "gx-h-100 gx-pr-4",
                          children: [
                            {
                              component: "div",
                              style: {
                                marginBottom: "50px",
                              },
                              children: [
                                {
                                  component: "p",
                                  style: {
                                    display: "inline-block",
                                    padding: "4px 15px",
                                    color: "#555",
                                    backgroundColor: "#fff",
                                  },
                                  text: "Бидний тухай",
                                },
                                {
                                  component: "h1",
                                  style: {
                                    fontSize: "32px",
                                  },
                                  text: "Биднийг МөнгөнДент гэдэг",
                                },
                                {
                                  component: "hr",
                                  style: {
                                    width: "30%",
                                    backgroundColor: "#2cb2ae",
                                    height: "3px",
                                  },
                                },
                              ],
                            },
                            {
                              component: "div",
                              className: "gx-p-relative",
                              children: [
                                {
                                  component: "p",
                                  text:
                                    "Одоогоос 8 жилийн өмнө Японд шүдний их эмчээр төгсөж, мэргэжил эзэмшсэн Мөнгөнзул эмч МөнгөнДент эмнэлгийг үүсгэж байгуулсан билээ.",
                                },
                                {
                                  component: "p",
                                  text:
                                    "Япон багшаас сурсан бүхний өөрийн эмнэлэгтээ хэрэгжүүлж, Япон стандартыг баримтлан ажиллах нь бидний үндсэн философи юм. Японд шүд хорхойтох тухай ойлголт байхгүй болсон, харин гажиг засал, шүдийг гоё сайхан болгох тухай яригддаг. Бид ч ийм болох боломжтой.",
                                },
                                {
                                  component: "ul",
                                  style: {
                                    boxSizing: "border-box",
                                    listStyle: "none",
                                    marginTop: "30px",
                                    padding: 0,
                                    transition: "none",
                                  },
                                  children: [
                                    {
                                      component: "li",
                                      style: {
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "20px",
                                      },
                                      children: [
                                        {
                                          component: "i",
                                          style: {
                                            color: "#2cb2ae",
                                            fontWeight: 400,
                                            marginRight: "15px",
                                          },
                                          className: "icon icon-check-circle-o",
                                        },
                                        {
                                          component: "span",
                                          text:
                                            "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
                                        },
                                      ],
                                    },
                                    {
                                      component: "li",
                                      style: {
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "20px",
                                      },
                                      children: [
                                        {
                                          component: "i",
                                          style: {
                                            color: "#2cb2ae",
                                            fontWeight: 400,
                                            marginRight: "15px",
                                          },
                                          className: "icon icon-check-circle-o",
                                        },
                                        {
                                          component: "span",
                                          text:
                                            "Гэр бүлийн бүх гишүүдийн шүд эрүүл, цагаан, өв тэгш байх нь бидний хувьд жинхэнэ аз жаргалд тооцогдоно.",
                                        },
                                      ],
                                    },
                                    {
                                      component: "li",
                                      style: {
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "20px",
                                      },
                                      children: [
                                        {
                                          component: "i",
                                          style: {
                                            color: "#2cb2ae",
                                            fontWeight: 400,
                                            marginRight: "15px",
                                          },
                                          className: "icon icon-check-circle-o",
                                        },
                                        {
                                          component: "span",
                                          text:
                                            "Бид зөвхөн Япон, Герман, Америкийн өндөр технологийн шүдний аппарат хэрэгсэл, түүхий эд материалыг сонгож хэрэглэдэг",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  component: "Button",
                                  style: {
                                    marginTop: "50px",
                                    // padding: "35px",
                                  },
                                  text: "Дэлгэрэнгүй",
                                  size: "large",
                                  disabled: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      component: "Col",
                      lg: 12,
                      children: [
                        {
                          component: "div",
                          style: {
                            marginTop: "30px",
                            height: "100%",
                            position: "relative",
                          },
                          children: [
                            {
                              component: "div",
                              style: {
                                height: "100%",
                                width: "100%",
                              },
                              children: [
                                {
                                  component: "img",
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  },
                                  src:
                                    "https://res.cloudinary.com/mungundent/image/upload/v1616501812/slide/photo_02_cjenes.jpg",
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
