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
    children: [
      {
        component: "MenuItem",

        key: "mail",
        text: "СӨХ",
      },
      {
        component: "MenuItem",

        key: "ddd",
        text: "Системийн тухай",
      },
      {
        component: "MenuItem",
        key: "faq",
        text: "Асуулт хариулт?",
      },
    ],
  },
];

//  #     # ####### #     # #######
//  #     # #     # ##   ## #
//  #     # #     # # # # # #
//  ####### #     # #  #  # #####
//  #     # #     # #     # #
//  #     # #     # #     # #
//  #     # ####### #     # #######

export var xminHome01 = [
  {
    component: "div",
    style: {
      lineHeight: 1.2,
      color: "#d7d7d7",
      fontFamily: "Raleway",
      fontSize: "16px",
      fontWeight: 500,
      backgroundColor: "#181818",
    },
    children: [
      {
        component: "div",
        className: "carousel gx-h-100-h gx-w-100 gx-p-relative",
        style: {
          position: "relative",
          backgroundColor: "red",
          overflow: "hidden",
          height: "90vh",
        },
        children: [
          {
            component: "Carousel",
            autoplay: true,
            infinite: true,
            children: [
              {
                component: "div",
                children: [
                  {
                    component: "div",
                    className: "gx-p-relative",
                    style: {
                      backgroundImage:
                        "url(http://theme.dsngrid.com/xmin/assets/img/project/project7/1.jpg)",
                      backgroundSize: "cover",
                      height: "90vh",
                      width: "100%",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-w-100 gx-h-100",
                        style: {
                          left: 0,
                          position: "relative",
                        },
                        children: [
                          {
                            component: "div",
                            className: "gx-p-relative gx-w-100 gx-h-100",
                            style: {
                              visibility: "inherit",
                              opacity: 1,
                              transform: "matrix(1, 0, 0, 1, 0, 0)",
                            },
                            children: [
                              {
                                component: "div",
                                className: "gx-w-100 gx-h-100",
                                children: [
                                  {
                                    component: "div",
                                    className:
                                      "gx-d-flex gx-align-items-center gx-justify-content-center  gx-h-100",
                                    children: [
                                      {
                                        component: "div",
                                        className:
                                          "gx-p-relative gx-text-center w-100",
                                        children: [
                                          {
                                            component: "div",
                                            style: {
                                              marginBottom: "30px",
                                              transform: "none",
                                              opacity: 1,
                                              visibility: "visible",
                                            },
                                            children: [
                                              {
                                                component: "span",
                                                className:
                                                  "gx-p-relative gx-text-transform-uppercase",
                                                style: {
                                                  backgroundColor: "#e82a2a",
                                                  padding: "5px 10px",
                                                  fontSize: "14px",
                                                  fontWeight: 500,
                                                  textTransform: "uppercase",
                                                  letterSpacing: "2px",
                                                },
                                                text: "product",
                                              },
                                            ],
                                          },
                                          {
                                            component: "h1",
                                            className: "gx-d-inline-block",
                                            style: {
                                              maxWidth: "750px",
                                              letterSpacing: "5px",
                                              fontSize: "50px",
                                              color: "#fff",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                style: {
                                                  color: "#fff",
                                                },
                                                text: "KEY VISUALS",
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
              },
              {
                component: "div",
                children: [
                  {
                    component: "div",
                    className: "gx-p-relative",
                    style: {
                      backgroundImage:
                        "url(http://theme.dsngrid.com/xmin/assets/img/project/project7/1.jpg)",
                      backgroundSize: "cover",
                      height: "90vh",
                      width: "100%",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-w-100 gx-h-100",
                        style: {
                          left: 0,
                          position: "relative",
                        },
                        children: [
                          {
                            component: "div",
                            className: "gx-p-relative gx-w-100 gx-h-100",
                            style: {
                              visibility: "inherit",
                              opacity: 1,
                              transform: "matrix(1, 0, 0, 1, 0, 0)",
                            },
                            children: [
                              {
                                component: "div",
                                className: "gx-w-100 gx-h-100",
                                children: [
                                  {
                                    component: "div",
                                    className:
                                      "gx-d-flex gx-align-items-center gx-justify-content-center  gx-h-100",
                                    children: [
                                      {
                                        component: "div",
                                        className:
                                          "gx-p-relative gx-text-center w-100",
                                        children: [
                                          {
                                            component: "div",
                                            style: {
                                              marginBottom: "30px",
                                              transform: "none",
                                              opacity: 1,
                                              visibility: "visible",
                                            },
                                            children: [
                                              {
                                                component: "span",
                                                className:
                                                  "gx-p-relative gx-text-transform-uppercase",
                                                style: {
                                                  backgroundColor: "#e82a2a",
                                                  padding: "5px 10px",
                                                  fontSize: "14px",
                                                  fontWeight: 500,
                                                  textTransform: "uppercase",
                                                  letterSpacing: "2px",
                                                },
                                                text: "product",
                                              },
                                            ],
                                          },
                                          {
                                            component: "h1",
                                            className: "gx-d-inline-block",
                                            style: {
                                              maxWidth: "750px",
                                              letterSpacing: "5px",
                                              fontSize: "50px",
                                              color: "#fff",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                style: {
                                                  color: "#fff",
                                                },
                                                text: "KEY VISUALS",
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
              },
              {
                component: "div",
                children: [
                  {
                    component: "div",
                    className: "gx-p-relative",
                    style: {
                      backgroundImage:
                        "url(http://theme.dsngrid.com/xmin/assets/img/project/project7/1.jpg)",
                      backgroundSize: "cover",
                      height: "90vh",
                      width: "100%",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-w-100 gx-h-100",
                        style: {
                          left: 0,
                          position: "relative",
                        },
                        children: [
                          {
                            component: "div",
                            className: "gx-p-relative gx-w-100 gx-h-100",
                            style: {
                              visibility: "inherit",
                              opacity: 1,
                              transform: "matrix(1, 0, 0, 1, 0, 0)",
                            },
                            children: [
                              {
                                component: "div",
                                className: "gx-w-100 gx-h-100",
                                children: [
                                  {
                                    component: "div",
                                    className:
                                      "gx-d-flex gx-align-items-center gx-justify-content-center gx-h-100",
                                    children: [
                                      {
                                        component: "div",
                                        className:
                                          "gx-p-relative gx-text-center w-100",
                                        children: [
                                          {
                                            component: "div",
                                            style: {
                                              marginBottom: "30px",
                                              transform: "none",
                                              opacity: 1,
                                              visibility: "visible",
                                            },
                                            children: [
                                              {
                                                component: "span",
                                                className:
                                                  "gx-p-relative gx-text-transform-uppercase",
                                                style: {
                                                  backgroundColor: "#e82a2a",
                                                  padding: "5px 10px",
                                                  fontSize: "14px",
                                                  fontWeight: 500,
                                                  textTransform: "uppercase",
                                                  letterSpacing: "2px",
                                                },
                                                text: "product",
                                              },
                                            ],
                                          },
                                          {
                                            component: "h1",
                                            className: "gx-d-inline-block",
                                            style: {
                                              maxWidth: "750px",
                                              letterSpacing: "5px",
                                              fontSize: "50px",
                                              color: "#fff",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                style: {
                                                  color: "#fff",
                                                },
                                                text: "KEY VISUALS",
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
              },
            ],
          },
        ],
      },
      {
        component: "div",
        className: "wrapper",
        children: [
          {
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
                                              padding: "4px 15px",
                                              width: "25%",
                                              textAlign: "center",
                                              color: "#111",
                                              backgroundColor: "#fff",
                                              textTransform: "capitalize",
                                              fontSize: "15px",
                                              fontWeight: 600,
                                              letterSpacing: 1.5,
                                            },
                                            text: "about us",
                                          },
                                          {
                                            component: "h1",
                                            style: {
                                              fontSize: "32px",
                                              color: "#fff",
                                            },
                                            text: "Hello we are DSN Grid",
                                          },
                                          {
                                            component: "hr",
                                            style: {
                                              width: "30%",
                                              backgroundColor: "#f13c46",
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
                                              "Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest. Blue money going forward, but deploy to production. C-suite.",
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
                                                      color: "#f13c46",
                                                      fontWeight: 400,
                                                      marginRight: "15px",
                                                    },
                                                    className:
                                                      "icon icon-check-circle-o",
                                                  },
                                                  {
                                                    component: "span",
                                                    text:
                                                      "Wretium in metus dolor vehicula",
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
                                                      color: "#f13c46",
                                                      fontWeight: 400,
                                                      marginRight: "15px",
                                                    },
                                                    className:
                                                      "icon icon-check-circle-o",
                                                  },
                                                  {
                                                    component: "span",
                                                    text:
                                                      "Wretium in metus dolor vehicula",
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
                                                      color: "#f13c46",
                                                      fontWeight: 400,
                                                      marginRight: "15px",
                                                    },
                                                    className:
                                                      "icon icon-check-circle-o",
                                                  },
                                                  {
                                                    component: "span",
                                                    text:
                                                      "Wretium in metus dolor vehicula",
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            style: {
                                              marginTop: "50px",
                                              padding: "5px",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                style: {
                                                  padding: "15px 45px",
                                                  cursor: "pointer",
                                                  border:
                                                    "1px solid rgba(112, 112, 112, 0.5)",
                                                  zIndex: 2,
                                                  backgroundColor: "#fff",
                                                  color: "#111",
                                                },
                                                text: "About us",
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
                                lg: 12,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      marginTop: "30px",
                                      height: "auto",
                                      position: "relative",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        className: "gx-d-flex gx-w-100",
                                        style: {
                                          position: "absolute",
                                          bottom:
                                            window.innerWidth < 991
                                              ? "30px"
                                              : "200px",
                                          height: "auto",
                                          paddingLeft: "40px",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            style: {
                                              border:
                                                "1px solid rgba(112, 112, 112, 0.5)",
                                              borderBottom: "3px solid #f13c46",
                                              padding: "40px",
                                              height: "max-content",
                                              zIndex: 2,
                                              textAlign: "center",
                                              backgroundColor: "#212121",
                                            },
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-text-center",
                                                children: [
                                                  {
                                                    component: "span",
                                                    style: {
                                                      fontSize: "42px",
                                                      fontWeight: 700,
                                                      color: "inherit",
                                                    },
                                                    text: "25",
                                                  },
                                                ],
                                              },
                                              {
                                                component: "div",
                                                style: {
                                                  width: "2px",
                                                  height: "25px",
                                                  backgroundColor: "#f13c46",
                                                  margin: "10px auto",
                                                },
                                              },
                                              {
                                                component: "div",
                                                className:
                                                  "gx-d-block gx-text-white",
                                                style: {
                                                  margin: 0,
                                                },
                                                children: [
                                                  {
                                                    component: "span",
                                                    text: "Years of",
                                                  },
                                                  {
                                                    component: "br",
                                                  },
                                                  {
                                                    component: "span",
                                                    text: "Experience",
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            className:
                                              "gx-d-md-none gx-d-sm-none gx-d-lg-block gx-d-flex gx-align-items-center",
                                            style: {
                                              paddingLeft: "25px",
                                            },
                                            children: [
                                              {
                                                component: "h3",
                                                style: {
                                                  color: "#fff",
                                                  fontWeight: 800,
                                                },
                                                text:
                                                  "we are one of the best web design company",
                                              },
                                            ],
                                          },
                                        ],
                                      },
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
                                              "http://theme.dsngrid.com/xmin/assets/img/about/1.jpg",
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
          },
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "service gx-p-relative",
                    style: {
                      marginBottom: window.innerWidth > 991 ? "120px" : "80px",
                    },
                    children: [
                      // ####### ### ####### #       #######
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #     #     #    #       #####
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #    ###    #    ####### #######
                      {
                        component: "div",
                        className: "gx-container gx-text-center",
                        style: {
                          paddingRight:
                            window.innerWidth < 991 ? "30px" : "80px",
                          paddingLeft:
                            window.innerWidth < 991 ? "30px" : "80px",
                          marginBottom:
                            window.innerWidth < 991 ? "50px" : "80px",
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
                            text: "what we do",
                          },
                          {
                            component: "h2",
                            style: {
                              color: "#fff",
                              fontSize: "32px",
                            },
                            children: [
                              {
                                component: "span",
                                style: {
                                  paddingBottom: "30px",
                                  borderBottom: "2px solid #f13c46",
                                },
                                text: "Our Services",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "div",
                        className: "gx-container",
                        children: [
                          //   #####
                          // #     #  ####   ####  #
                          //       # #    # #    # #
                          //   #####  #      #    # #
                          //       # #      #    # #
                          // #     # #    # #    # #
                          //   #####   ####   ####  ######
                          {
                            component: "Row",
                            children: [
                              {
                                component: "Col",
                                md: 8,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderBottom: "3px solid #f13c46",
                                      borderRadius: "2px",
                                      padding: "60px 30px",
                                      textAlign: "center",
                                      backgroundColor: "#212121",
                                      marginBottom: "30px",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          padding: "15px 20px",
                                          borderRadius: "5px",
                                          backgroundColor: "#111",
                                          display: "inline-block",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/services/art.svg",
                                            style: {
                                              verticalAlign: "middle",
                                              height: "auto",
                                              width: "35px",
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
                                              color: "#fff",
                                              marginTop: "30px",
                                            },
                                            text: "UX Design",
                                          },
                                          {
                                            component: "p",
                                            className: "gx-mt-3",
                                            text:
                                              "Te qui alii inermis vivendum, an decore libris eum. Te mel dico alia wisi, cu vitae noluisse phaedrum.",
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
                                    style: {
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderBottom: "3px solid #f13c46",
                                      borderRadius: "2px",
                                      padding: "60px 30px",
                                      textAlign: "center",
                                      backgroundColor: "#212121",
                                      marginBottom: "30px",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          padding: "15px 20px",
                                          borderRadius: "5px",
                                          backgroundColor: "#111",
                                          display: "inline-block",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/services/art.svg",
                                            style: {
                                              verticalAlign: "middle",
                                              height: "auto",
                                              width: "35px",
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
                                              color: "#fff",
                                              marginTop: "30px",
                                            },
                                            text: "UX Design",
                                          },
                                          {
                                            component: "p",
                                            className: "gx-mt-3",
                                            text:
                                              "Te qui alii inermis vivendum, an decore libris eum. Te mel dico alia wisi, cu vitae noluisse phaedrum.",
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
                                    style: {
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderBottom: "3px solid #f13c46",
                                      borderRadius: "2px",
                                      padding: "60px 30px",
                                      textAlign: "center",
                                      backgroundColor: "#212121",
                                      marginBottom: "30px",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          padding: "15px 20px",
                                          borderRadius: "5px",
                                          backgroundColor: "#111",
                                          display: "inline-block",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/services/art.svg",
                                            style: {
                                              verticalAlign: "middle",
                                              height: "auto",
                                              width: "35px",
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
                                              color: "#fff",
                                              marginTop: "30px",
                                            },
                                            text: "UX Design",
                                          },
                                          {
                                            component: "p",
                                            className: "gx-mt-3",
                                            text:
                                              "Te qui alii inermis vivendum, an decore libris eum. Te mel dico alia wisi, cu vitae noluisse phaedrum.",
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
          },
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "intro-about gx-p-relative",
                    style: {
                      marginBottom: window.innerWidth > 991 ? "120px" : "80px",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-container gx-text-center",
                        style: {
                          paddingRight:
                            window.innerWidth < 991 ? "30px" : "80px",
                          paddingLeft:
                            window.innerWidth < 991 ? "30px" : "80px",
                          marginBottom:
                            window.innerWidth < 991 ? "50px" : "80px",
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
                            text: "Looking for quality features",
                          },
                          {
                            component: "h2",
                            style: {
                              color: "#fff",
                              fontSize: "32px",
                            },
                            children: [
                              {
                                component: "span",
                                style: {
                                  paddingBottom: "30px",
                                  borderBottom: "2px solid #f13c46",
                                },
                                text: "Awesome portfolio",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "div",
                        className: "carousel gx-h-100-h gx-w-100 gx-p-relative",
                        style: {
                          position: "relative",
                          backgroundColor: "red",
                          overflow: "hidden",
                          height: "60vh",
                        },
                        children: [
                          //  #####     #    ######  ####### #     #  #####  ####### #         ###    #####
                          // #     #   # #   #     # #     # #     # #     # #       #        #   #  #     #
                          // #        #   #  #     # #     # #     # #       #       #       #     # #
                          // #       #     # ######  #     # #     #  #####  #####   #       #     # ######
                          // #       ####### #   #   #     # #     #       # #       #       #     # #     #
                          // #     # #     # #    #  #     # #     # #     # #       #        #   #  #     #
                          //   #####  #     # #     # #######  #####   #####  ####### #######   ###    #####
                          {
                            component: "Carousel",
                            autoplay: true,
                            infinite: true,
                            children: [
                              {
                                component: "div",
                                children: [
                                  {
                                    component: "div",
                                    className: "gx-p-relative",
                                    style: {
                                      backgroundImage:
                                        "url(http://theme.dsngrid.com/xmin/assets/img/project/project7/1.jpg)",
                                      backgroundSize: "cover",
                                      height: "60vh",
                                      width: "100%",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        className: "gx-w-100 gx-h-100",
                                        style: {
                                          left: 0,
                                          position: "relative",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className:
                                              "gx-p-relative gx-w-100 gx-h-100",
                                            style: {
                                              visibility: "inherit",
                                              opacity: 1,
                                              transform:
                                                "matrix(1, 0, 0, 1, 0, 0)",
                                            },
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-w-100 gx-h-100",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                        children: [
                                                          {
                                                            component: "h1",
                                                            className:
                                                              "gx-d-inline-block",
                                                            style: {
                                                              maxWidth: "750px",
                                                              letterSpacing:
                                                                "5px",
                                                              fontSize: "25px",
                                                              color: "#fff",
                                                            },
                                                            children: [
                                                              {
                                                                component:
                                                                  "Link",
                                                                to: "#",
                                                                style: {
                                                                  color: "#fff",
                                                                },
                                                                text:
                                                                  "KEY VISUALS",
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            component: "div",
                                                            style: {
                                                              marginTop: "15px",
                                                              transform: "none",
                                                              opacity: 1,
                                                              visibility:
                                                                "visible",
                                                            },
                                                            children: [
                                                              {
                                                                component:
                                                                  "span",
                                                                className:
                                                                  "gx-p-relative gx-text-transform-uppercase",
                                                                style: {
                                                                  backgroundColor:
                                                                    "#e82a2a",
                                                                  padding:
                                                                    "5px 10px",
                                                                  fontSize:
                                                                    "14px",
                                                                  fontWeight: 500,
                                                                  textTransform:
                                                                    "uppercase",
                                                                  letterSpacing:
                                                                    "2px",
                                                                },
                                                                text: "product",
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
                              },
                              {
                                component: "div",
                                children: [
                                  {
                                    component: "div",
                                    className: "gx-p-relative",
                                    style: {
                                      backgroundImage:
                                        "url(http://theme.dsngrid.com/xmin/assets/img/project/project7/1.jpg)",
                                      backgroundSize: "cover",
                                      height: "60vh",
                                      width: "100%",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        className: "gx-w-100 gx-h-100",
                                        style: {
                                          left: 0,
                                          position: "relative",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className:
                                              "gx-p-relative gx-w-100 gx-h-100",
                                            style: {
                                              visibility: "inherit",
                                              opacity: 1,
                                              transform:
                                                "matrix(1, 0, 0, 1, 0, 0)",
                                            },
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-w-100 gx-h-100",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                        children: [
                                                          {
                                                            component: "h1",
                                                            className:
                                                              "gx-d-inline-block",
                                                            style: {
                                                              maxWidth: "750px",
                                                              letterSpacing:
                                                                "5px",
                                                              fontSize: "25px",
                                                              color: "#fff",
                                                            },
                                                            children: [
                                                              {
                                                                component:
                                                                  "Link",
                                                                to: "#",
                                                                style: {
                                                                  color: "#fff",
                                                                },
                                                                text:
                                                                  "KEY VISUALS",
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            component: "div",
                                                            style: {
                                                              marginTop: "15px",
                                                              transform: "none",
                                                              opacity: 1,
                                                              visibility:
                                                                "visible",
                                                            },
                                                            children: [
                                                              {
                                                                component:
                                                                  "span",
                                                                className:
                                                                  "gx-p-relative gx-text-transform-uppercase",
                                                                style: {
                                                                  backgroundColor:
                                                                    "#e82a2a",
                                                                  padding:
                                                                    "5px 10px",
                                                                  fontSize:
                                                                    "14px",
                                                                  fontWeight: 500,
                                                                  textTransform:
                                                                    "uppercase",
                                                                  letterSpacing:
                                                                    "2px",
                                                                },
                                                                text: "product",
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
                              },
                              {
                                component: "div",
                                children: [
                                  {
                                    component: "div",
                                    className: "gx-p-relative",
                                    style: {
                                      backgroundImage:
                                        "url(http://theme.dsngrid.com/xmin/assets/img/project/project7/1.jpg)",
                                      backgroundSize: "cover",
                                      height: "60vh",
                                      width: "100%",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        className: "gx-w-100 gx-h-100",
                                        style: {
                                          left: 0,
                                          position: "relative",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className:
                                              "gx-p-relative gx-w-100 gx-h-100",
                                            style: {
                                              visibility: "inherit",
                                              opacity: 1,
                                              transform:
                                                "matrix(1, 0, 0, 1, 0, 0)",
                                            },
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-w-100 gx-h-100",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                        children: [
                                                          {
                                                            component: "h1",
                                                            className:
                                                              "gx-d-inline-block",
                                                            style: {
                                                              maxWidth: "750px",
                                                              letterSpacing:
                                                                "5px",
                                                              fontSize: "25px",
                                                              color: "#fff",
                                                            },
                                                            children: [
                                                              {
                                                                component:
                                                                  "Link",
                                                                to: "#",
                                                                style: {
                                                                  color: "#fff",
                                                                },
                                                                text:
                                                                  "KEY VISUALS",
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            component: "div",
                                                            style: {
                                                              marginTop: "15px",
                                                              transform: "none",
                                                              opacity: 1,
                                                              visibility:
                                                                "visible",
                                                            },
                                                            children: [
                                                              {
                                                                component:
                                                                  "span",
                                                                className:
                                                                  "gx-p-relative gx-text-transform-uppercase",
                                                                style: {
                                                                  backgroundColor:
                                                                    "#e82a2a",
                                                                  padding:
                                                                    "5px 10px",
                                                                  fontSize:
                                                                    "14px",
                                                                  fontWeight: 500,
                                                                  textTransform:
                                                                    "uppercase",
                                                                  letterSpacing:
                                                                    "2px",
                                                                },
                                                                text: "product",
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
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "intro-about gx-p-relative",
                    style: {
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
                                              padding: "4px 15px",
                                              width: "25%",
                                              textAlign: "center",
                                              color: "#111",
                                              backgroundColor: "#fff",
                                              textTransform: "capitalize",
                                              fontSize: "15px",
                                              fontWeight: 600,
                                              letterSpacing: 1.5,
                                            },
                                            text: "about us",
                                          },
                                          {
                                            component: "h1",
                                            style: {
                                              fontSize: "32px",
                                              color: "#fff",
                                            },
                                            text: "Hello we are DSN Grid",
                                          },
                                          {
                                            component: "hr",
                                            style: {
                                              width: "30%",
                                              backgroundColor: "#f13c46",
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
                                              "Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest. Blue money going forward, but deploy to production. C-suite.",
                                          },
                                          {
                                            component: "div",
                                            style: {
                                              marginTop: "50px",
                                              padding: "5px",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                style: {
                                                  padding: "15px 45px",
                                                  cursor: "pointer",
                                                  border:
                                                    "1px solid rgba(112, 112, 112, 0.5)",
                                                  zIndex: 2,
                                                  backgroundColor: "#fff",
                                                  color: "#111",
                                                },
                                                text: "About us",
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
                                lg: 12,
                                children: [
                                  {
                                    component: "div",
                                    className:
                                      "carousel gx-h-100-h gx-w-100 gx-p-relative gx-container",
                                    style: {
                                      position: "relative",
                                      backgroundColor: "#f13c46",
                                      overflow: "hidden",
                                      marginTop: "30px",
                                    },
                                    children: [
                                      //  #####     #    ######  ####### #     #  #####  ####### #         ###    #####
                                      // #     #   # #   #     # #     # #     # #     # #       #        #   #  #     #
                                      // #        #   #  #     # #     # #     # #       #       #       #     # #
                                      // #       #     # ######  #     # #     #  #####  #####   #       #     # ######
                                      // #       ####### #   #   #     # #     #       # #       #       #     # #     #
                                      // #     # #     # #    #  #     # #     # #     # #       #        #   #  #     #
                                      //   #####  #     # #     # #######  #####   #####  ####### #######   ###    #####
                                      {
                                        component: "Carousel",
                                        autoplay: true,
                                        infinite: true,
                                        children: [
                                          {
                                            component: "div",
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-p-relative",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-w-100 gx-h-100",
                                                    style: {
                                                      left: 0,
                                                      position: "relative",
                                                    },
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-w-100 gx-h-100",
                                                        style: {
                                                          visibility: "inherit",
                                                          opacity: 1,
                                                          transform:
                                                            "matrix(1, 0, 0, 1, 0, 0)",
                                                        },
                                                        children: [
                                                          {
                                                            component: "div",
                                                            className:
                                                              "gx-w-100 gx-h-100",
                                                            children: [
                                                              {
                                                                component:
                                                                  "div",
                                                                className:
                                                                  "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                                children: [
                                                                  {
                                                                    component:
                                                                      "div",
                                                                    className:
                                                                      "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                                    style: {
                                                                      width:
                                                                        "518px",
                                                                    },
                                                                    children: [
                                                                      {
                                                                        component:
                                                                          "p",
                                                                        className:
                                                                          "gx-d-inline-block",
                                                                        style: {
                                                                          maxWidth:
                                                                            "980px",
                                                                          fontSize:
                                                                            "18px",
                                                                          fontWeight: 400,
                                                                          lineHeight: 1.6,
                                                                          color:
                                                                            "#fff",
                                                                        },
                                                                        text:
                                                                          '"I love the design, really reach details. It inspired me to learn more about web design. The code quality looks great as well. Can\'t wait to launch my site. Thanks design_grid for such an awesome one. Keep it up."',
                                                                      },
                                                                      //   ##   #    #   ##   #####   ##   #####
                                                                      //  #  #  #    #  #  #    #    #  #  #    #
                                                                      // #    # #    # #    #   #   #    # #    #
                                                                      // ###### #    # ######   #   ###### #####
                                                                      // #    #  #  #  #    #   #   #    # #   #
                                                                      // #    #   ##   #    #   #   #    # #    #
                                                                      {
                                                                        component:
                                                                          "div",
                                                                        className:
                                                                          "gx-d-flex gx-align-items-center gx-justify-content-left",
                                                                        style: {
                                                                          marginTop:
                                                                            "25px",
                                                                        },
                                                                        children: [
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            className:
                                                                              "gx-mr-3",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "img",
                                                                                src:
                                                                                  "http://theme.dsngrid.com/xmin/assets/img/avatar/1.jpg",
                                                                                style: {
                                                                                  width:
                                                                                    "40px",
                                                                                  height:
                                                                                    "40px",
                                                                                  borderRadius:
                                                                                    "50%",
                                                                                },
                                                                              },
                                                                            ],
                                                                          },
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  position:
                                                                                    "relative",
                                                                                  letterSpacing:
                                                                                    "2px",
                                                                                  fontSize:
                                                                                    "18px",
                                                                                  fontWeight: 400,
                                                                                },
                                                                                text:
                                                                                  "Vikinglivet",
                                                                              },
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  fontSize:
                                                                                    "14px",
                                                                                  color:
                                                                                    "#d7d7d7",
                                                                                },
                                                                                text:
                                                                                  "Founder & CEO, ABC",
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
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-p-relative",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-w-100 gx-h-100",
                                                    style: {
                                                      left: 0,
                                                      position: "relative",
                                                    },
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-w-100 gx-h-100",
                                                        style: {
                                                          visibility: "inherit",
                                                          opacity: 1,
                                                          transform:
                                                            "matrix(1, 0, 0, 1, 0, 0)",
                                                        },
                                                        children: [
                                                          {
                                                            component: "div",
                                                            className:
                                                              "gx-w-100 gx-h-100",
                                                            children: [
                                                              {
                                                                component:
                                                                  "div",
                                                                className:
                                                                  "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                                children: [
                                                                  {
                                                                    component:
                                                                      "div",
                                                                    className:
                                                                      "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                                    style: {
                                                                      width:
                                                                        "518px",
                                                                    },
                                                                    children: [
                                                                      {
                                                                        component:
                                                                          "p",
                                                                        className:
                                                                          "gx-d-inline-block",
                                                                        style: {
                                                                          maxWidth:
                                                                            "980px",
                                                                          fontSize:
                                                                            "18px",
                                                                          fontWeight: 400,
                                                                          lineHeight: 1.6,
                                                                          color:
                                                                            "#fff",
                                                                        },
                                                                        text:
                                                                          '"I love the design, really reach details. It inspired me to learn more about web design. The code quality looks great as well. Can\'t wait to launch my site. Thanks design_grid for such an awesome one. Keep it up."',
                                                                      },
                                                                      //   ##   #    #   ##   #####   ##   #####
                                                                      //  #  #  #    #  #  #    #    #  #  #    #
                                                                      // #    # #    # #    #   #   #    # #    #
                                                                      // ###### #    # ######   #   ###### #####
                                                                      // #    #  #  #  #    #   #   #    # #   #
                                                                      // #    #   ##   #    #   #   #    # #    #
                                                                      {
                                                                        component:
                                                                          "div",
                                                                        className:
                                                                          "gx-d-flex gx-align-items-center gx-justify-content-left",
                                                                        style: {
                                                                          marginTop:
                                                                            "25px",
                                                                        },
                                                                        children: [
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            className:
                                                                              "gx-mr-3",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "img",
                                                                                src:
                                                                                  "http://theme.dsngrid.com/xmin/assets/img/avatar/1.jpg",
                                                                                style: {
                                                                                  width:
                                                                                    "40px",
                                                                                  height:
                                                                                    "40px",
                                                                                  borderRadius:
                                                                                    "50%",
                                                                                },
                                                                              },
                                                                            ],
                                                                          },
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  position:
                                                                                    "relative",
                                                                                  letterSpacing:
                                                                                    "2px",
                                                                                  fontSize:
                                                                                    "18px",
                                                                                  fontWeight: 400,
                                                                                },
                                                                                text:
                                                                                  "Vikinglivet",
                                                                              },
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  fontSize:
                                                                                    "14px",
                                                                                  color:
                                                                                    "#d7d7d7",
                                                                                },
                                                                                text:
                                                                                  "Founder & CEO, ABC",
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
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-p-relative",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-w-100 gx-h-100",
                                                    style: {
                                                      left: 0,
                                                      position: "relative",
                                                    },
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-w-100 gx-h-100",
                                                        style: {
                                                          visibility: "inherit",
                                                          opacity: 1,
                                                          transform:
                                                            "matrix(1, 0, 0, 1, 0, 0)",
                                                        },
                                                        children: [
                                                          {
                                                            component: "div",
                                                            className:
                                                              "gx-w-100 gx-h-100",
                                                            children: [
                                                              {
                                                                component:
                                                                  "div",
                                                                className:
                                                                  "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                                children: [
                                                                  {
                                                                    component:
                                                                      "div",
                                                                    className:
                                                                      "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                                    style: {
                                                                      width:
                                                                        "518px",
                                                                    },
                                                                    children: [
                                                                      {
                                                                        component:
                                                                          "p",
                                                                        className:
                                                                          "gx-d-inline-block",
                                                                        style: {
                                                                          maxWidth:
                                                                            "980px",
                                                                          fontSize:
                                                                            "18px",
                                                                          fontWeight: 400,
                                                                          lineHeight: 1.6,
                                                                          color:
                                                                            "#fff",
                                                                        },
                                                                        text:
                                                                          '"I love the design, really reach details. It inspired me to learn more about web design. The code quality looks great as well. Can\'t wait to launch my site. Thanks design_grid for such an awesome one. Keep it up."',
                                                                      },
                                                                      //   ##   #    #   ##   #####   ##   #####
                                                                      //  #  #  #    #  #  #    #    #  #  #    #
                                                                      // #    # #    # #    #   #   #    # #    #
                                                                      // ###### #    # ######   #   ###### #####
                                                                      // #    #  #  #  #    #   #   #    # #   #
                                                                      // #    #   ##   #    #   #   #    # #    #
                                                                      {
                                                                        component:
                                                                          "div",
                                                                        className:
                                                                          "gx-d-flex gx-align-items-center gx-justify-content-left",
                                                                        style: {
                                                                          marginTop:
                                                                            "25px",
                                                                        },
                                                                        children: [
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            className:
                                                                              "gx-mr-3",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "img",
                                                                                src:
                                                                                  "http://theme.dsngrid.com/xmin/assets/img/avatar/1.jpg",
                                                                                style: {
                                                                                  width:
                                                                                    "40px",
                                                                                  height:
                                                                                    "40px",
                                                                                  borderRadius:
                                                                                    "50%",
                                                                                },
                                                                              },
                                                                            ],
                                                                          },
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  position:
                                                                                    "relative",
                                                                                  letterSpacing:
                                                                                    "2px",
                                                                                  fontSize:
                                                                                    "18px",
                                                                                  fontWeight: 400,
                                                                                },
                                                                                text:
                                                                                  "Vikinglivet",
                                                                              },
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  fontSize:
                                                                                    "14px",
                                                                                  color:
                                                                                    "#d7d7d7",
                                                                                },
                                                                                text:
                                                                                  "Founder & CEO, ABC",
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
              },
            ],
          },
          // ######  ####### #     #     #####  #######    #    #######
          // #     # #     #  #   #     #     # #         # #      #
          // #     # #     #   # #      #       #        #   #     #
          // ######  #     #    #        #####  #####   #     #    #
          // #     # #     #   # #            # #       #######    #
          // #     # #     #  #   #     #     # #       #     #    #
          // ######  ####### #     #     #####  ####### #     #    #
          {
            component: "div",
            style: {
              overflow: "hidden",
              position: "relative",
            },
            children: [
              {
                component: "div",
                style: {
                  paddingLeft: 0,
                  paddingRight: 0,
                  padding: 0,
                  width: "100%",
                  margin: 0,
                  marginRight: "auto",
                  marginLeft: "auto",
                },
                children: [
                  {
                    component: "div",
                    style: {
                      position: "relative",
                      overflow: "hidden",
                      height: "100vh",
                      willChange: "transform",
                      ["-webkit-transform"]: "rotateX(2deg)",
                      transform: "rotateX(2deg)",
                      ["-webkit-transform-origin"]: "bottom",
                      transformOrigin: "bottom",
                    },
                    children: [
                      {
                        component: "img",
                        style: {
                          width: "100%",
                          height: "100vh",
                          objectFit: "cover",
                          perspective: "1000px",
                          transform:
                            "translate(0%, 15.0124%) translate3d(0px, 0px, 0px) scale(1.19992, 1.19992)",
                        },
                        src:
                          "http://theme.dsngrid.com/xmin/assets/img/project/project3/1.jpg",
                        // srcset: 'http://theme.dsngrid.com/xmin/assets/img/project/project3/1.jpg 1800w, http://theme.dsngrid.com/xmin/assets/img/project/project3/1-sm.jpg 768w'
                      },
                    ],
                  },
                  {
                    component: "div",
                    style: {
                      backgroundColor: "rgba(241, 60, 70, 0.9)",
                      position: "absolute",
                      display: "-webkit-box",
                      display: "-ms-flexbox",
                      display: "flex",
                      ["-webkit-box-orient"]: "vertical",
                      ["-webkit-box-direction"]: "normal",
                      ["-ms-flex-flow"]: "column",
                      flexFlow: "column",
                      ["-webkit-box-pack"]: "center",
                      ["-ms-flex-pack"]: "center",
                      justifyContent: "center",
                      alignContent: "center",
                      ["-ms-flex-line-pack"]: "center",
                      height: "100%",
                      top: "40px",
                      right: window.innerWidth > 991 ? "100px" : "0",
                      width: window.innerWidth > 991 ? "600px" : "100%",
                      padding: "80px",
                    },
                    children: [
                      {
                        component: "h3",
                        style: {
                          color: "#fff",
                          position: "relative",
                          fontSize: "42px",
                          fontWeight: 500,
                          transition: "0.5s",
                          paddingBottom: "15px",
                          maxWidth: "850px",
                        },
                        children: [
                          {
                            component: "span",
                            text: " How is your",
                          },
                          {
                            component: "br",
                          },
                          {
                            component: "span",
                            text: "visual identity?",
                          },
                        ],
                      },
                      {
                        component: "p",
                        style: {
                          // marginTop: window.innerWidth < 768 ? '20px':'0',
                          paddingLeft: "20px",
                          borderLeft: "2px solid #fff",
                        },
                        text:
                          "A system that young people around the world with a club culture and techno enthusiasts feel identified. We generated a simple logo that is the basis for generating a geometric and liquid system.",
                      },
                      {
                        component: "div",
                        style: {
                          marginTop: "50px",
                          padding: "5px",
                        },
                        children: [
                          {
                            component: "Link",
                            to: "#",
                            style: {
                              padding: "15px 45px",
                              cursor: "pointer",
                              border: "1px solid rgba(112, 112, 112, 0.5)",
                              zIndex: 2,
                              backgroundColor: "#fff",
                              color: "#111",
                              textTransform: "uppercase",
                            },
                            text: "View More",
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
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "service gx-p-relative",
                    style: {
                      marginTop: window.innerWidth > 991 ? "120px" : "80px",
                      marginBottom: window.innerWidth > 991 ? "120px" : "80px",
                    },
                    children: [
                      // ####### ### ####### #       #######
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #     #     #    #       #####
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #    ###    #    ####### #######
                      {
                        component: "div",
                        className: "gx-container gx-text-center",
                        style: {
                          paddingRight:
                            window.innerWidth < 991 ? "30px" : "80px",
                          paddingLeft:
                            window.innerWidth < 991 ? "30px" : "80px",
                          marginBottom:
                            window.innerWidth < 991 ? "50px" : "80px",
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
                            text: "last post",
                          },
                          {
                            component: "h2",
                            style: {
                              color: "#fff",
                              fontSize: "32px",
                            },
                            children: [
                              {
                                component: "span",
                                style: {
                                  paddingBottom: "30px",
                                  borderBottom: "2px solid #f13c46",
                                },
                                text: "Latest and greatest post",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "div",
                        className: "gx-container",
                        children: [
                          //   #####
                          // #     #  ####   ####  #
                          //       # #    # #    # #
                          //   #####  #      #    # #
                          //       # #      #    # #
                          // #     # #    # #    # #
                          //   #####   ####   ####  ######
                          {
                            component: "Row",
                            children: [
                              ,
                              {
                                component: "Col",
                                md: 8,
                                sm: 24,
                                xs: 24,
                                lg: 8,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderRadius: "2px",
                                      backgroundColor: "#212121",
                                      marginBottom: "30px",
                                      width: "100%",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          padding:
                                            window.innerWidth < 991
                                              ? "30px 30px 50px"
                                              : "30px",
                                          borderRadius: "5px",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className:
                                              "gx-d-flex gx-justify-content-between",
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                className: "gx-text-white",
                                                text: "17th - March - 2020",
                                              },
                                              {
                                                component: "i",
                                                className: "icon icon-check",
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                className: "gx-text-red",
                                                text: "CREATIVE",
                                              },
                                            ],
                                          },
                                          {
                                            component: "h3",
                                            className: "gx-mt-4 gx-text-white",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            text:
                                              "Will you be attending Affiliate Summit Europe?",
                                          },
                                          {
                                            component: "p",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            text:
                                              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta pariatur ducimus quas eaque error sunt natus.",
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          position: "relative",
                                          backgroundColor: "#f13c46",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                        },
                                        children: [
                                          {
                                            component: "Link",
                                            style: {
                                              position: "relative",
                                              padding: "15px 30px",
                                              color: "#fff",
                                            },
                                            to: "#",
                                            text: "Read the story ",
                                          },
                                          {
                                            component: "i",
                                            style: {
                                              marginRight: "15px",
                                            },
                                            className: "icon icon-arrow-right",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              ,
                              {
                                component: "Col",
                                md: 8,
                                sm: 24,
                                xs: 24,
                                lg: 8,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderRadius: "2px",
                                      backgroundColor: "#212121",
                                      marginBottom: "30px",
                                      width: "100%",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          padding:
                                            window.innerWidth < 991
                                              ? "30px 30px 50px"
                                              : "30px",
                                          borderRadius: "5px",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className:
                                              "gx-d-flex gx-justify-content-between",
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                className: "gx-text-white",
                                                text: "17th - March - 2020",
                                              },
                                              {
                                                component: "i",
                                                className: "icon icon-check",
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                className: "gx-text-red",
                                                text: "CREATIVE",
                                              },
                                            ],
                                          },
                                          {
                                            component: "h3",
                                            className: "gx-mt-4 gx-text-white",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            text:
                                              "Will you be attending Affiliate Summit Europe?",
                                          },
                                          {
                                            component: "p",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            text:
                                              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta pariatur ducimus quas eaque error sunt natus.",
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          position: "relative",
                                          backgroundColor: "#f13c46",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                        },
                                        children: [
                                          {
                                            component: "Link",
                                            style: {
                                              position: "relative",
                                              padding: "15px 30px",
                                              color: "#fff",
                                            },
                                            to: "#",
                                            text: "Read the story ",
                                          },
                                          {
                                            component: "i",
                                            style: {
                                              marginRight: "15px",
                                            },
                                            className: "icon icon-arrow-right",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              ,
                              {
                                component: "Col",
                                md: 8,
                                sm: 24,
                                xs: 24,
                                lg: 8,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderRadius: "2px",
                                      backgroundColor: "#212121",
                                      marginBottom: "30px",
                                      width: "100%",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          padding:
                                            window.innerWidth < 991
                                              ? "30px 30px 50px"
                                              : "30px",
                                          borderRadius: "5px",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className:
                                              "gx-d-flex gx-justify-content-between",
                                            children: [
                                              {
                                                component: "Link",
                                                to: "#",
                                                className: "gx-text-white",
                                                text: "17th - March - 2020",
                                              },
                                              {
                                                component: "i",
                                                className: "icon icon-check",
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            children: [
                                              {
                                                component: "Link",
                                                className: "gx-text-red",
                                                text: "CREATIVE",
                                              },
                                            ],
                                          },
                                          {
                                            component: "h3",
                                            className: "gx-mt-4 gx-text-white",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            text:
                                              "Will you be attending Affiliate Summit Europe?",
                                          },
                                          {
                                            component: "p",
                                            style: {
                                              marginTop: "30px",
                                            },
                                            text:
                                              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta pariatur ducimus quas eaque error sunt natus.",
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          position: "relative",
                                          backgroundColor: "#f13c46",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                        },
                                        children: [
                                          {
                                            component: "Link",
                                            style: {
                                              position: "relative",
                                              padding: "15px 30px",
                                              color: "#fff",
                                            },
                                            to: "#",
                                            text: "Read the story ",
                                          },
                                          {
                                            component: "i",
                                            style: {
                                              marginRight: "15px",
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
            ],
          },
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "service gx-p-relative",
                    style: {
                      marginBottom: window.innerWidth > 991 ? "120px" : "80px",
                    },
                    children: [
                      // ####### ### ####### #       #######
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #     #     #    #       #####
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #    ###    #    ####### #######
                      {
                        component: "div",
                        className: "gx-container gx-text-center",
                        style: {
                          paddingRight:
                            window.innerWidth < 991 ? "30px" : "80px",
                          paddingLeft:
                            window.innerWidth < 991 ? "30px" : "80px",
                          marginBottom:
                            window.innerWidth < 991 ? "50px" : "80px",
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
                            text: "last post",
                          },
                          {
                            component: "h2",
                            style: {
                              color: "#fff",
                              fontSize: "32px",
                            },
                            children: [
                              {
                                component: "span",
                                style: {
                                  paddingBottom: "30px",
                                  borderBottom: "2px solid #f13c46",
                                },
                                text: "Latest and greatest post",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "div",
                        className: "gx-container",
                        children: [
                          //   #####
                          // #     #  ####   ####  #
                          //       # #    # #    # #
                          //   #####  #      #    # #
                          //       # #      #    # #
                          // #     # #    # #    # #
                          //   #####   ####   ####  ######
                          {
                            component: "Row",
                            children: [
                              {
                                component: "Col",
                                md: 6,
                                sm: 24,
                                xs: 24,
                                lg: 6,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      position: "relative",
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderBottom: "3px solid #f13c46",
                                      borderRadius: "2px",
                                      marginBottom: "15px",
                                      display: "flex",
                                      textAlign: "center",
                                      ["-webkit-box-align"]: "center",
                                      alignItems: "center",
                                      padding: "15px",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          width: "180px",
                                          margin: "auto",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            style: {
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                              opjectPosition: "center",
                                            },
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/logo/1.png",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "Col",
                                md: 6,
                                sm: 24,
                                xs: 24,
                                lg: 6,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      position: "relative",
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderBottom: "3px solid #f13c46",
                                      borderRadius: "2px",
                                      marginBottom: "15px",
                                      display: "flex",
                                      textAlign: "center",
                                      ["-webkit-box-align"]: "center",
                                      alignItems: "center",
                                      padding: "15px",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          width: "180px",
                                          margin: "auto",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            style: {
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                              opjectPosition: "center",
                                            },
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/logo/1.png",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "Col",
                                md: 6,
                                sm: 24,
                                xs: 24,
                                lg: 6,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      position: "relative",
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderBottom: "3px solid #f13c46",
                                      borderRadius: "2px",
                                      marginBottom: "15px",
                                      display: "flex",
                                      textAlign: "center",
                                      ["-webkit-box-align"]: "center",
                                      alignItems: "center",
                                      padding: "15px",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          width: "180px",
                                          margin: "auto",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            style: {
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                              opjectPosition: "center",
                                            },
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/logo/1.png",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "Col",
                                md: 6,
                                sm: 24,
                                xs: 24,
                                lg: 6,
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      position: "relative",
                                      border:
                                        "1px solid rgba(112, 112, 112, 0.5)",
                                      borderBottom: "3px solid #f13c46",
                                      borderRadius: "2px",
                                      display: "flex",
                                      marginBottom: "15px",
                                      textAlign: "center",
                                      ["-webkit-box-align"]: "center",
                                      alignItems: "center",
                                      padding: "15px",
                                    },
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          width: "180px",
                                          margin: "auto",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            style: {
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                              opjectPosition: "center",
                                            },
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/logo/1.png",
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
          },
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "service gx-p-relative",
                    style: {
                      // marginBottom:  window.innerWidth > 991 ? '120px':'80px'
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-text-center gx-w-100",
                        children: [
                          {
                            component: "p",
                            style: {
                              color: "#f13c46",
                            },
                            text: "WE ARE HIRING",
                          },
                          {
                            component: "div",
                            style: {
                              padding: "60px 15px",
                              fontSize:
                                window.innerWidth < 768 ? "42px" : "46px",
                              backgroundColor: "#f13c46",
                              width: "100%",
                            },
                            children: [
                              {
                                component: "Link",
                                style: {
                                  color: "#fff",
                                },
                                to: "#",
                                text: "CONTACT US",
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
            style: {
              padding: "60px",
            },
            children: [
              {
                component: "div",
                className: "gx-container",
                children: [
                  {
                    component: "Row",
                    gutter: [8, 8, 8],
                    children: [
                      {
                        component: "Col",
                        sm: 8,
                        children: [
                          {
                            component: "div",
                            className:
                              "gx-d-flex gx-align-items-center gx-justify-content-center ",
                            children: [
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
                                        className: "icon icon-facebook",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
                                        className: "icon icon-facebook",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
                                        className: "icon icon-facebook",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
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
                      {
                        component: "Col",
                        sm: 8,
                        children: [
                          {
                            component: "div",
                            className:
                              "gx-d-flex gx-align-items-center gx-justify-content-center gx-h-100 gx-text-center",
                            children: [
                              {
                                component: "Link",
                                style: {
                                  width: "90px",
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
                                      "http://theme.dsngrid.com/xmin/assets/img/logo.png",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "Col",
                        lg: 24,
                        className: "gx-mt-4 gx-mb-4 gx-text-center",
                        style: {
                          borderTop: "1px solid rgba(112, 112, 112, 0.5)",
                        },
                        children: [
                          {
                            component: "div",
                            className: "gx-text-center",
                            children: [
                              {
                                component: "ul",
                                style: {
                                  listStyle: "none",
                                  outline: "none",
                                  margin: 0,
                                  padding: "30px",
                                },
                                children: [
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "span",
                                style: {
                                  fontFamily: "sans-serif",
                                  letterSpacing: "2px",
                                },
                                text:
                                  "© 2020 Digital Agency Designed by DSN Grid",
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

//     #    ######  ####### #     # #######
//    # #   #     # #     # #     #    #
//   #   #  #     # #     # #     #    #
//  #     # ######  #     # #     #    #
//  ####### #     # #     # #     #    #
//  #     # #     # #     # #     #    #
//  #     # ######  #######  #####     #

export const xminAbout01 = [
  {
    component: "div",
    style: {
      lineHeight: 1.2,
      color: "#d7d7d7",
      fontFamily: "Raleway",
      fontSize: "16px",
      fontWeight: 500,
      backgroundColor: "#181818",
    },
    children: [
      {
        component: "Layout",
        children: [
          {
            component: "Content",
            style: {
              backgroundColor: "#212121",
            },
            children: [
              {
                component: "div",
                className: "gx-d-flex gx-align-items-center gx-h-100",
                children: [
                  {
                    component: "div",
                    className: "gx-ml-auto",
                    style: {
                      width:
                        window.innerWidth < 768
                          ? "100%"
                          : "calc(100% - 350px - 6vw)",
                      padding: "150px 30px",
                    },
                    children: [
                      {
                        component: "h2",
                        style: {
                          color: "#f13c46",
                          padding: "4px 15px",
                          marginBottom: "30px",
                          display: "inline-block",
                          letterSpacing: "1.5px",
                          backgroundColor: "#fff",
                        },
                        text: "We highly focus",
                      },
                      {
                        component: "div",
                        children: [
                          {
                            component: "h1",
                            style: {
                              color: "#fff",
                              fontFamily: "Cinzel",
                              marginBottom: 0,
                              fontSize: "62px",
                              fontWeight: 600,
                              lineHeight: 1.1,
                              letterSpacing: "4px",
                            },
                            text: "WE DIGITAL CREATIVE",
                          },
                          {
                            component: "span",
                            className: "gx-text-red",
                            style: {
                              fontFamily: "Cinzel",
                              fontSize: "62px",
                              fontWeight: 600,
                              lineHeight: 1.1,
                              letterSpacing: "4px",
                            },
                            text: "& AGENCY",
                          },
                        ],
                      },
                      {
                        component: "div",
                        style: {
                          marginTop: "50px",
                        },
                        children: [
                          {
                            component: "Link",
                            className: "gx-d-flex gx-align-items-center",
                            to: "#",
                            children: [
                              {
                                component: "div",
                                style: {
                                  width: "60px",
                                  height: "60px",
                                },
                                children: [
                                  {
                                    component: "img",
                                    className: "gx-h-100 gx-w-100",
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/scroll-icon.svg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                className: "gx-d-flex gx-align-items-center",
                                style: {
                                  position: "relative",
                                  paddingLeft: "70px",
                                  marginLeft: "10px",
                                  color: "#fff",
                                  textTransform: "uppercase",
                                  fontWeight: 500,
                                  letterSpacing: "2px",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      position: "absolute",
                                      left: 0,
                                      top: "30%",
                                      width: "60px",
                                      height: "1px",
                                      backgroundColor:
                                        "rgba(112, 112, 112, 0.5)",
                                    },
                                  },
                                  {
                                    component: "h6",
                                    style: {
                                      color: "#fff",
                                      fontSize: "20px",
                                      fontFamily: "sans-serif",
                                    },
                                    text: "EXPLORE",
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
                    className: "gx-h-100 gx-d-none gx-d-md-block ",
                    style: {
                      width: "calc(350px + 6vw)",
                      top: 0,
                      left: 0,
                      position: "absolute",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-h-100",
                        style: {
                          width: "calc(100% - 6vw)",
                          top: 0,
                          bottom: 0,
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
                              "http://theme.dsngrid.com/xmin/assets/img/contact.jpg",
                          },
                        ],
                      },
                      {
                        component: "div",
                        style: {
                          position: "absolute",
                          left: "100%",
                          bottom: "50%",
                          zIndex: 2,
                          transform: "rotate(-90deg) translateX(-50%)",
                          transformOrigin: "left bottom",
                          mixBlendMode: "difference",
                        },
                        children: [
                          {
                            component: "h3",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "5vw",
                              color: "#fff",
                              fontWeight: "bold",
                              marginBottom: "3vw",
                            },
                            text: "ABOUT",
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
        className: "wrapper",
        children: [
          {
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
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-container gx-text-center",
                        style: {
                          paddingRight:
                            window.innerWidth < 991 ? "30px" : "80px",
                          paddingLeft:
                            window.innerWidth < 991 ? "30px" : "80px",
                          marginBottom:
                            window.innerWidth < 991 ? "50px" : "80px",
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
                            text: "last post",
                          },
                          {
                            component: "h2",
                            style: {
                              color: "#fff",
                              fontSize: "32px",
                            },
                            children: [
                              {
                                component: "span",
                                style: {
                                  paddingBottom: "20px",
                                  borderBottom: "2px solid #f13c46",
                                },
                                text: "Digital solutions for your business",
                              },
                            ],
                          },
                          {
                            component: "p",
                            className: "gx-text-center",
                            style: {
                              marginTop: "50px",
                              marginLeft: "auto",
                              marginRight: "auto",
                              color: "#fff",
                              maxWidth: "940px",
                              fontFamily: '"Raleway", sans-serif',
                              letterSpacing: "1.2px",
                            },
                            text:
                              "We build digital experiences and brands that people fall in love with. When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable. We build digital experiences and brands that people fall in love with. When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable.",
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
            component: "Layout",
            children: [
              {
                component: "Content",
                style: {
                  // height: '75vh'
                },
                children: [
                  {
                    component: "div",
                    className: "gx-d-none gx-d-md-block",
                    style: {
                      bottom: 0,
                      position: "absolute",
                      left: 0,
                      width: "100%",
                      height: "50%",
                      backgroundColor: "#212121",
                    },
                  },
                  {
                    component: "div",
                    className: "gx-container",
                    children: [
                      {
                        component: "div",
                        style: {
                          height: "100%",
                          position: "relative",
                          overFlow: "hidden",
                          top: 0,
                          bottom: 0,
                        },
                        children: [
                          {
                            component: "div",
                            style: {
                              position: "relative",
                              overflow: "hidden",
                              willChange: "transform",
                              // ['-webkit-transform']: 'rotate(2deg)',
                              // transform: 'rotate(2deg)',
                              transformOrigin: "bottom",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  position: "absolute",
                                  backgroundColor: "#111",
                                  width: "100%",
                                  height: "100%",
                                  top: 0,
                                  bottom: 0,
                                  zIndex: 2,
                                  opacity: 0.5,
                                },
                              },
                              {
                                component: "img",
                                style: {
                                  height: "115%",
                                  perspective: "1000px",
                                  transform:
                                    "translate(0%, 0.7622%) translate3d(0px, 0px, 0px)",
                                  position: "relative",
                                  width: "100%",
                                  top: "-30%",
                                  pointerEvents: "none",
                                  objectFit: "cover",
                                  transformStyle: "preserve-3d",
                                  objectPosition: "center",
                                },
                                src:
                                  "http://theme.dsngrid.com/xmin/assets/img/about/2.jpg",
                              },
                            ],
                          },
                          {
                            component: "Link",
                            to: "#",
                            style: {
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              ["-webkit-transform"]: "translate(-50%, -50%)",
                              ["-ms-transform"]: "translate(-50%, -50%)",
                              transform: "translate(-50%, -50%)",
                            },
                            children: [
                              {
                                component: "i",
                                style: {
                                  fontSize: "24px",
                                },
                                className: "icon icon-menu-right gx-text-white",
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
            component: "Layout",
            children: [
              {
                component: "Content",
                style: {
                  backgroundColor: "#212121",
                },
                children: [
                  {
                    component: "div",
                    className: "intro-about gx-p-relative",
                    style: {
                      marginTop: window.innerWidth > 991 ? "120px" : "80px",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-container gx-text-left",
                        style: {
                          paddingRight:
                            window.innerWidth < 991 ? "30px" : "80px",
                          paddingLeft:
                            window.innerWidth < 991 ? "30px" : "80px",
                          marginBottom:
                            window.innerWidth < 991 ? "50px" : "80px",
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
                            text: "last post",
                          },
                          {
                            component: "h2",
                            style: {
                              color: "#fff",
                              fontSize: "32px",
                            },
                            children: [
                              {
                                component: "span",
                                style: {
                                  paddingBottom: "20px",
                                  borderBottom: "2px solid #f13c46",
                                },
                                text: "Digital solutions for your business",
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              marginTop: "70px",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  lineHeight: 1.2,
                                },
                                children: [
                                  {
                                    component: "div",
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          marginBottom: "30px",
                                          borderBottom:
                                            "1px solid rgba(112, 112, 112, 0.5)",
                                          paddingBottom: "30px",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className: "gx-d-flex",
                                            children: [
                                              {
                                                component: "h4",
                                                style: {
                                                  position: "relative",
                                                  letterSpacing: "2px",
                                                  fontSize: "26px",
                                                  marginRight: "50px",
                                                  color: "#fff",
                                                  fontWeight: 500,
                                                },
                                                text: "Web Design",
                                              },
                                              {
                                                component: "p",
                                                className: "gx-text-white",
                                                style: {
                                                  maxWidth: "400px",
                                                },
                                                text:
                                                  "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginBottom: "30px",
                                          borderBottom:
                                            "1px solid rgba(112, 112, 112, 0.5)",
                                          paddingBottom: "30px",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className: "gx-d-flex",
                                            children: [
                                              {
                                                component: "h4",
                                                style: {
                                                  position: "relative",
                                                  letterSpacing: "2px",
                                                  fontSize: "26px",
                                                  marginRight: "50px",
                                                  color: "#fff",
                                                  fontWeight: 500,
                                                },
                                                text: "Web Design",
                                              },
                                              {
                                                component: "p",
                                                className: "gx-text-white",
                                                style: {
                                                  maxWidth: "400px",
                                                },
                                                text:
                                                  "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginBottom: "30px",
                                          borderBottom:
                                            "1px solid rgba(112, 112, 112, 0.5)",
                                          paddingBottom: "30px",
                                        },
                                        children: [
                                          {
                                            component: "div",
                                            className: "gx-d-flex",
                                            children: [
                                              {
                                                component: "h4",
                                                style: {
                                                  position: "relative",
                                                  letterSpacing: "2px",
                                                  fontSize: "26px",
                                                  marginRight: "50px",
                                                  color: "#fff",
                                                  fontWeight: 500,
                                                },
                                                text: "Web Design",
                                              },
                                              {
                                                component: "p",
                                                className: "gx-text-white",
                                                style: {
                                                  maxWidth: "400px",
                                                },
                                                text:
                                                  "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
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
              },
            ],
          },
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "service gx-p-relative",
                    style: {
                      marginTop: window.innerWidth > 991 ? "120px" : "80px",
                      marginBottom: window.innerWidth > 991 ? "120px" : "80px",
                    },
                    children: [
                      // ####### ### ####### #       #######
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #     #     #    #       #####
                      //    #     #     #    #       #
                      //    #     #     #    #       #
                      //    #    ###    #    ####### #######
                      {
                        component: "div",
                        className: "gx-container gx-text-center",
                        style: {
                          paddingRight:
                            window.innerWidth < 991 ? "30px" : "80px",
                          paddingLeft:
                            window.innerWidth < 991 ? "30px" : "80px",
                          marginBottom:
                            window.innerWidth < 991 ? "50px" : "80px",
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
                            text: "last post",
                          },
                          {
                            component: "h2",
                            style: {
                              color: "#fff",
                              fontSize: "32px",
                            },
                            children: [
                              {
                                component: "span",
                                style: {
                                  paddingBottom: "30px",
                                  borderBottom: "2px solid #f13c46",
                                },
                                text: "Latest and greatest post",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "div",
                        className: "gx-container",
                        children: [
                          //   #####
                          // #     #  ####   ####  #
                          //       # #    # #    # #
                          //   #####  #      #    # #
                          //       # #      #    # #
                          // #     # #    # #    # #
                          //   #####   ####   ####  ######
                          {
                            component: "Row",
                            children: [
                              {
                                component: "Col",
                                md: 8,
                                sm: 24,
                                xs: 24,
                                lg: 8,
                                children: [
                                  {
                                    component: "div",
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          marginBottom: "30px",
                                          borderRadius: "3px",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/team/1.jpeg",
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          borderBottom:
                                            "1px solid rgba(112, 112, 112, 0.5)",
                                          paddingBottom: "30px",
                                        },
                                        children: [
                                          {
                                            component: "h4",
                                            style: {
                                              letterSpacing: "2px",
                                              fontSize: "25px",
                                              fontWeight: 500,
                                              color: "#fff",
                                              marginBottom: "0.5rem",
                                            },
                                            text: "Ahmed Shawky",
                                          },
                                          {
                                            component: "h5",
                                            style: {
                                              color: "#f13c46",
                                              fontFamily:
                                                '"Raleway", sans-serif',
                                              fontSize: "14px",
                                              letterSpacing: "2px",
                                              textTransform: "uppercase",
                                            },
                                            text: "Co founder",
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
                                sm: 24,
                                xs: 24,
                                lg: 8,
                                children: [
                                  {
                                    component: "div",
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          marginBottom: "30px",
                                          borderRadius: "3px",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/team/1.jpeg",
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          borderBottom:
                                            "1px solid rgba(112, 112, 112, 0.5)",
                                          paddingBottom: "30px",
                                        },
                                        children: [
                                          {
                                            component: "h4",
                                            style: {
                                              letterSpacing: "2px",
                                              fontSize: "25px",
                                              fontWeight: 500,
                                              color: "#fff",
                                              marginBottom: "0.5rem",
                                            },
                                            text: "Ahmed Shawky",
                                          },
                                          {
                                            component: "h5",
                                            style: {
                                              color: "#f13c46",
                                              fontFamily:
                                                '"Raleway", sans-serif',
                                              fontSize: "14px",
                                              letterSpacing: "2px",
                                              textTransform: "uppercase",
                                            },
                                            text: "Co founder",
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
                                sm: 24,
                                xs: 24,
                                lg: 8,
                                children: [
                                  {
                                    component: "div",
                                    children: [
                                      {
                                        component: "div",
                                        style: {
                                          marginBottom: "30px",
                                          borderRadius: "3px",
                                        },
                                        children: [
                                          {
                                            component: "img",
                                            src:
                                              "http://theme.dsngrid.com/xmin/assets/img/team/1.jpeg",
                                          },
                                        ],
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          borderBottom:
                                            "1px solid rgba(112, 112, 112, 0.5)",
                                          paddingBottom: "30px",
                                        },
                                        children: [
                                          {
                                            component: "h4",
                                            style: {
                                              letterSpacing: "2px",
                                              fontSize: "25px",
                                              fontWeight: 500,
                                              color: "#fff",
                                              marginBottom: "0.5rem",
                                            },
                                            text: "Ahmed Shawky",
                                          },
                                          {
                                            component: "h5",
                                            style: {
                                              color: "#f13c46",
                                              fontFamily:
                                                '"Raleway", sans-serif',
                                              fontSize: "14px",
                                              letterSpacing: "2px",
                                              textTransform: "uppercase",
                                            },
                                            text: "Co founder",
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
          },
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "intro-about gx-p-relative",
                    style: {
                      marginBottom: window.innerWidth > 991 ? "120px" : "80px",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-container",
                        children: [
                          {
                            component: "Row",
                            gutter: [24],
                            children: [
                              {
                                component: "Col",
                                lg: 24,
                                children: [
                                  {
                                    component: "div",
                                    className:
                                      "gx-h-100 gx-text-center gx-pr-4",
                                    children: [
                                      {
                                        component: "p",
                                        style: {
                                          display: "inline-block",
                                          padding: "4px 15px",
                                          color: "#111",
                                          backgroundColor: "#fff",
                                        },
                                        text: "last post",
                                      },
                                      {
                                        component: "h2",
                                        style: {
                                          color: "#fff",
                                          fontSize: "32px",
                                        },
                                        children: [
                                          {
                                            component: "span",
                                            style: {
                                              paddingBottom: "30px",
                                              borderBottom: "2px solid #f13c46",
                                            },
                                            text: "Latest and greatest post",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "Col",
                                lg: 24,
                                children: [
                                  {
                                    component: "div",
                                    className:
                                      "carousel gx-h-100-h gx-w-50 gx-p-relative gx-container",
                                    style: {
                                      position: "relative",
                                      backgroundColor: "#f13c46",
                                      overflow: "hidden",
                                      marginTop: "30px",
                                    },
                                    children: [
                                      //  #####     #    ######  ####### #     #  #####  ####### #         ###    #####
                                      // #     #   # #   #     # #     # #     # #     # #       #        #   #  #     #
                                      // #        #   #  #     # #     # #     # #       #       #       #     # #
                                      // #       #     # ######  #     # #     #  #####  #####   #       #     # ######
                                      // #       ####### #   #   #     # #     #       # #       #       #     # #     #
                                      // #     # #     # #    #  #     # #     # #     # #       #        #   #  #     #
                                      //   #####  #     # #     # #######  #####   #####  ####### #######   ###    #####
                                      {
                                        component: "Carousel",
                                        autoplay: true,
                                        infinite: true,
                                        children: [
                                          {
                                            component: "div",
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-p-relative",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-w-100 gx-h-100",
                                                    style: {
                                                      left: 0,
                                                      position: "relative",
                                                    },
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-w-100 gx-h-100",
                                                        style: {
                                                          visibility: "inherit",
                                                          opacity: 1,
                                                          transform:
                                                            "matrix(1, 0, 0, 1, 0, 0)",
                                                        },
                                                        children: [
                                                          {
                                                            component: "div",
                                                            className:
                                                              "gx-w-100 gx-h-100",
                                                            children: [
                                                              {
                                                                component:
                                                                  "div",
                                                                className:
                                                                  "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                                children: [
                                                                  {
                                                                    component:
                                                                      "div",
                                                                    className:
                                                                      "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                                    style: {
                                                                      width:
                                                                        "518px",
                                                                    },
                                                                    children: [
                                                                      {
                                                                        component:
                                                                          "p",
                                                                        className:
                                                                          "gx-d-inline-block",
                                                                        style: {
                                                                          maxWidth:
                                                                            "980px",
                                                                          fontSize:
                                                                            "18px",
                                                                          fontWeight: 400,
                                                                          lineHeight: 1.6,
                                                                          color:
                                                                            "#fff",
                                                                        },
                                                                        text:
                                                                          '"I love the design, really reach details. It inspired me to learn more about web design. The code quality looks great as well. Can\'t wait to launch my site. Thanks design_grid for such an awesome one. Keep it up."',
                                                                      },
                                                                      //   ##   #    #   ##   #####   ##   #####
                                                                      //  #  #  #    #  #  #    #    #  #  #    #
                                                                      // #    # #    # #    #   #   #    # #    #
                                                                      // ###### #    # ######   #   ###### #####
                                                                      // #    #  #  #  #    #   #   #    # #   #
                                                                      // #    #   ##   #    #   #   #    # #    #
                                                                      {
                                                                        component:
                                                                          "div",
                                                                        className:
                                                                          "gx-d-flex gx-align-items-center gx-justify-content-left",
                                                                        style: {
                                                                          marginTop:
                                                                            "25px",
                                                                        },
                                                                        children: [
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            className:
                                                                              "gx-mr-3",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "img",
                                                                                src:
                                                                                  "http://theme.dsngrid.com/xmin/assets/img/avatar/1.jpg",
                                                                                style: {
                                                                                  width:
                                                                                    "40px",
                                                                                  height:
                                                                                    "40px",
                                                                                  borderRadius:
                                                                                    "50%",
                                                                                },
                                                                              },
                                                                            ],
                                                                          },
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  position:
                                                                                    "relative",
                                                                                  letterSpacing:
                                                                                    "2px",
                                                                                  fontSize:
                                                                                    "18px",
                                                                                  fontWeight: 400,
                                                                                },
                                                                                text:
                                                                                  "Vikinglivet",
                                                                              },
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  fontSize:
                                                                                    "14px",
                                                                                  color:
                                                                                    "#d7d7d7",
                                                                                },
                                                                                text:
                                                                                  "Founder & CEO, ABC",
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
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-p-relative",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-w-100 gx-h-100",
                                                    style: {
                                                      left: 0,
                                                      position: "relative",
                                                    },
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-w-100 gx-h-100",
                                                        style: {
                                                          visibility: "inherit",
                                                          opacity: 1,
                                                          transform:
                                                            "matrix(1, 0, 0, 1, 0, 0)",
                                                        },
                                                        children: [
                                                          {
                                                            component: "div",
                                                            className:
                                                              "gx-w-100 gx-h-100",
                                                            children: [
                                                              {
                                                                component:
                                                                  "div",
                                                                className:
                                                                  "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                                children: [
                                                                  {
                                                                    component:
                                                                      "div",
                                                                    className:
                                                                      "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                                    style: {
                                                                      width:
                                                                        "518px",
                                                                    },
                                                                    children: [
                                                                      {
                                                                        component:
                                                                          "p",
                                                                        className:
                                                                          "gx-d-inline-block",
                                                                        style: {
                                                                          maxWidth:
                                                                            "980px",
                                                                          fontSize:
                                                                            "18px",
                                                                          fontWeight: 400,
                                                                          lineHeight: 1.6,
                                                                          color:
                                                                            "#fff",
                                                                        },
                                                                        text:
                                                                          '"I love the design, really reach details. It inspired me to learn more about web design. The code quality looks great as well. Can\'t wait to launch my site. Thanks design_grid for such an awesome one. Keep it up."',
                                                                      },
                                                                      //   ##   #    #   ##   #####   ##   #####
                                                                      //  #  #  #    #  #  #    #    #  #  #    #
                                                                      // #    # #    # #    #   #   #    # #    #
                                                                      // ###### #    # ######   #   ###### #####
                                                                      // #    #  #  #  #    #   #   #    # #   #
                                                                      // #    #   ##   #    #   #   #    # #    #
                                                                      {
                                                                        component:
                                                                          "div",
                                                                        className:
                                                                          "gx-d-flex gx-align-items-center gx-justify-content-left",
                                                                        style: {
                                                                          marginTop:
                                                                            "25px",
                                                                        },
                                                                        children: [
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            className:
                                                                              "gx-mr-3",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "img",
                                                                                src:
                                                                                  "http://theme.dsngrid.com/xmin/assets/img/avatar/1.jpg",
                                                                                style: {
                                                                                  width:
                                                                                    "40px",
                                                                                  height:
                                                                                    "40px",
                                                                                  borderRadius:
                                                                                    "50%",
                                                                                },
                                                                              },
                                                                            ],
                                                                          },
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  position:
                                                                                    "relative",
                                                                                  letterSpacing:
                                                                                    "2px",
                                                                                  fontSize:
                                                                                    "18px",
                                                                                  fontWeight: 400,
                                                                                },
                                                                                text:
                                                                                  "Vikinglivet",
                                                                              },
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  fontSize:
                                                                                    "14px",
                                                                                  color:
                                                                                    "#d7d7d7",
                                                                                },
                                                                                text:
                                                                                  "Founder & CEO, ABC",
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
                                              },
                                            ],
                                          },
                                          {
                                            component: "div",
                                            children: [
                                              {
                                                component: "div",
                                                className: "gx-p-relative",
                                                children: [
                                                  {
                                                    component: "div",
                                                    className:
                                                      "gx-w-100 gx-h-100",
                                                    style: {
                                                      left: 0,
                                                      position: "relative",
                                                    },
                                                    children: [
                                                      {
                                                        component: "div",
                                                        className:
                                                          "gx-p-relative gx-w-100 gx-h-100",
                                                        style: {
                                                          visibility: "inherit",
                                                          opacity: 1,
                                                          transform:
                                                            "matrix(1, 0, 0, 1, 0, 0)",
                                                        },
                                                        children: [
                                                          {
                                                            component: "div",
                                                            className:
                                                              "gx-w-100 gx-h-100",
                                                            children: [
                                                              {
                                                                component:
                                                                  "div",
                                                                className:
                                                                  "gx-d-flex gx-align-items-left gx-justify-content-left  gx-h-100",
                                                                children: [
                                                                  {
                                                                    component:
                                                                      "div",
                                                                    className:
                                                                      "gx-p-relative gx-text-left gx-ml-4 gx-mt-4 w-100",
                                                                    style: {
                                                                      width:
                                                                        "518px",
                                                                    },
                                                                    children: [
                                                                      {
                                                                        component:
                                                                          "p",
                                                                        className:
                                                                          "gx-d-inline-block",
                                                                        style: {
                                                                          maxWidth:
                                                                            "980px",
                                                                          fontSize:
                                                                            "18px",
                                                                          fontWeight: 400,
                                                                          lineHeight: 1.6,
                                                                          color:
                                                                            "#fff",
                                                                        },
                                                                        text:
                                                                          '"I love the design, really reach details. It inspired me to learn more about web design. The code quality looks great as well. Can\'t wait to launch my site. Thanks design_grid for such an awesome one. Keep it up."',
                                                                      },
                                                                      //   ##   #    #   ##   #####   ##   #####
                                                                      //  #  #  #    #  #  #    #    #  #  #    #
                                                                      // #    # #    # #    #   #   #    # #    #
                                                                      // ###### #    # ######   #   ###### #####
                                                                      // #    #  #  #  #    #   #   #    # #   #
                                                                      // #    #   ##   #    #   #   #    # #    #
                                                                      {
                                                                        component:
                                                                          "div",
                                                                        className:
                                                                          "gx-d-flex gx-align-items-center gx-justify-content-left",
                                                                        style: {
                                                                          marginTop:
                                                                            "25px",
                                                                        },
                                                                        children: [
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            className:
                                                                              "gx-mr-3",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "img",
                                                                                src:
                                                                                  "http://theme.dsngrid.com/xmin/assets/img/avatar/1.jpg",
                                                                                style: {
                                                                                  width:
                                                                                    "40px",
                                                                                  height:
                                                                                    "40px",
                                                                                  borderRadius:
                                                                                    "50%",
                                                                                },
                                                                              },
                                                                            ],
                                                                          },
                                                                          {
                                                                            component:
                                                                              "div",
                                                                            children: [
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  position:
                                                                                    "relative",
                                                                                  letterSpacing:
                                                                                    "2px",
                                                                                  fontSize:
                                                                                    "18px",
                                                                                  fontWeight: 400,
                                                                                },
                                                                                text:
                                                                                  "Vikinglivet",
                                                                              },
                                                                              {
                                                                                component:
                                                                                  "h5",
                                                                                style: {
                                                                                  fontSize:
                                                                                    "14px",
                                                                                  color:
                                                                                    "#d7d7d7",
                                                                                },
                                                                                text:
                                                                                  "Founder & CEO, ABC",
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
              },
            ],
          },
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                children: [
                  {
                    component: "div",
                    className: "service gx-p-relative",
                    style: {
                      // marginBottom:  window.innerWidth > 991 ? '120px':'80px'
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-text-center gx-w-100",
                        children: [
                          {
                            component: "p",
                            style: {
                              color: "#f13c46",
                            },
                            text: "WE ARE HIRING",
                          },
                          {
                            component: "div",
                            style: {
                              padding: "60px 15px",
                              fontSize:
                                window.innerWidth < 768 ? "42px" : "46px",
                              backgroundColor: "#f13c46",
                              width: "100%",
                            },
                            children: [
                              {
                                component: "Link",
                                style: {
                                  color: "#fff",
                                },
                                to: "#",
                                text: "CONTACT US",
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
            style: {
              padding: "60px",
            },
            children: [
              {
                component: "div",
                className: "gx-container",
                children: [
                  {
                    component: "Row",
                    gutter: [8, 8, 8],
                    children: [
                      {
                        component: "Col",
                        sm: 8,
                        children: [
                          {
                            component: "div",
                            className:
                              "gx-d-flex gx-align-items-center gx-justify-content-center ",
                            children: [
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
                                        className: "icon icon-facebook",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
                                        className: "icon icon-facebook",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
                                        className: "icon icon-facebook",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  boxSizing: "border-box",
                                  listStyle: "none",
                                  outine: "none",
                                  margin: 0,
                                  padding: 0,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      marginRight: "25px",
                                      marginTop: "5px",
                                      color: "#fff",
                                    },
                                    children: [
                                      {
                                        component: "i",
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
                      {
                        component: "Col",
                        sm: 8,
                        children: [
                          {
                            component: "div",
                            className:
                              "gx-d-flex gx-align-items-center gx-justify-content-center gx-h-100 gx-text-center",
                            children: [
                              {
                                component: "Link",
                                style: {
                                  width: "90px",
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
                                      "http://theme.dsngrid.com/xmin/assets/img/logo.png",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "Col",
                        lg: 24,
                        className: "gx-mt-4 gx-mb-4 gx-text-center",
                        style: {
                          borderTop: "1px solid rgba(112, 112, 112, 0.5)",
                        },
                        children: [
                          {
                            component: "div",
                            className: "gx-text-center",
                            children: [
                              {
                                component: "ul",
                                style: {
                                  listStyle: "none",
                                  outline: "none",
                                  margin: 0,
                                  padding: "30px",
                                },
                                children: [
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                  {
                                    component: "li",
                                    className:
                                      "gx-d-inline-block gx-overflow-hidden",
                                    children: [
                                      {
                                        component: "Link",
                                        to: "#",
                                        style: {
                                          color: "#fff",
                                          fontFamily: "sans-serif",
                                          display: "inline-block",
                                          letterSpacing: "2px",
                                          fontSize: "13px",
                                          fontWeight: 400,
                                        },
                                        text: "Home",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                component: "span",
                                style: {
                                  fontFamily: "sans-serif",
                                  letterSpacing: "2px",
                                },
                                text:
                                  "© 2020 Digital Agency Designed by DSN Grid",
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

export const xminPorfolio01 = [
  {
    component: "div",
    style: {
      lineHeight: 1.2,
      color: "#d7d7d7",
      fontFamily: "Raleway",
      fontSize: "16px",
      fontWeight: 500,
      backgroundColor: "#181818",
    },
    children: [
      {
        component: "Layout",
        children: [
          {
            component: "Content",
            style: {
              backgroundColor: "#212121",
            },
            children: [
              {
                component: "div",
                className: "gx-d-flex gx-align-items-center gx-h-100",
                children: [
                  {
                    component: "div",
                    className: "gx-ml-auto",
                    style: {
                      width:
                        window.innerWidth < 768
                          ? "100%"
                          : "calc(100% - 350px - 6vw)",
                      padding: "150px 30px",
                    },
                    children: [
                      {
                        component: "h2",
                        style: {
                          color: "#f13c46",
                          padding: "4px 15px",
                          marginBottom: "30px",
                          display: "inline-block",
                          letterSpacing: "1.5px",
                          backgroundColor: "#fff",
                        },
                        text: "We highly focus",
                      },
                      {
                        component: "div",
                        children: [
                          {
                            component: "h1",
                            style: {
                              color: "#fff",
                              fontFamily: "Cinzel",
                              marginBottom: 0,
                              fontSize: "62px",
                              fontWeight: 600,
                              lineHeight: 1.1,
                              letterSpacing: "4px",
                            },
                            text: "Let's",
                          },
                          {
                            component: "span",
                            className: "gx-text-red",
                            style: {
                              fontFamily: "Cinzel",
                              fontSize: "62px",
                              fontWeight: 600,
                              lineHeight: 1.1,
                              letterSpacing: "4px",
                            },
                            text: "Work Together",
                          },
                        ],
                      },
                      {
                        component: "div",
                        style: {
                          marginTop: "50px",
                        },
                        children: [
                          {
                            component: "Link",
                            className: "gx-d-flex gx-align-items-center",
                            to: "#",
                            children: [
                              {
                                component: "div",
                                style: {
                                  width: "60px",
                                  height: "60px",
                                },
                                children: [
                                  {
                                    component: "img",
                                    className: "gx-h-100 gx-w-100",
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/scroll-icon.svg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                className: "gx-d-flex gx-align-items-center",
                                style: {
                                  position: "relative",
                                  paddingLeft: "70px",
                                  marginLeft: "10px",
                                  color: "#fff",
                                  textTransform: "uppercase",
                                  fontWeight: 500,
                                  letterSpacing: "2px",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      position: "absolute",
                                      left: 0,
                                      top: "30%",
                                      width: "60px",
                                      height: "1px",
                                      backgroundColor:
                                        "rgba(112, 112, 112, 0.5)",
                                    },
                                  },
                                  {
                                    component: "h6",
                                    style: {
                                      color: "#fff",
                                      fontSize: "20px",
                                      fontFamily: "sans-serif",
                                    },
                                    text: "EXPLORE",
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
                    className: "gx-h-100 gx-d-none gx-d-md-block ",
                    style: {
                      width: "calc(350px + 6vw)",
                      top: 0,
                      left: 0,
                      position: "absolute",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-h-100",
                        style: {
                          width: "calc(100% - 6vw)",
                          top: 0,
                          bottom: 0,
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
                              "http://theme.dsngrid.com/xmin/assets/img/contact.jpg",
                          },
                        ],
                      },
                      {
                        component: "div",
                        style: {
                          position: "absolute",
                          left: "100%",
                          bottom: "50%",
                          zIndex: 2,
                          transform: "rotate(-90deg) translateX(-50%)",
                          transformOrigin: "left bottom",
                          mixBlendMode: "difference",
                        },
                        children: [
                          {
                            component: "h3",
                            style: {
                              textTransform: "uppercase",
                              fontSize: "5vw",
                              color: "#fff",
                              fontWeight: "bold",
                              marginBottom: "3vw",
                            },
                            text: "WORK",
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
        style: {
          backgroundColor: "#181818",
        },
        children: [
          {
            component: "Layout",
            children: [
              {
                component: "Content",
                style: {
                  marginTop: "120px",
                  marginBottom: "120px",
                },
                children: [
                  {
                    component: "div",
                    className: "gx-container",
                    children: [
                      {
                        component: "div",
                        style: {
                          visibility: "inherit",
                          opacity: "0.1",
                          transform: "translate3d(0px, -87.9291px, 0px)",
                          textAlign: "center",
                          left: 0,
                          position: "absolute",
                          width: "100%",
                          fontFamilty: '"Cinzel", serif',
                          fontSize: "10vw",
                          fontWeight: 600,
                          zIndex: 1,
                          textTransform: "uppercase",
                          pointerEvents: "none",
                          color: "transparent",
                          ["-webkit-text-stroke"]: "1px #fff",
                        },
                        text: "portpolio",
                      },
                      {
                        component: "div",
                        className: "gx-w-100",
                        style: {
                          marginRight: "auto",
                          marginLeft: "auto",
                          marginTop: "auto",
                          marginBottom: "120px",
                          zIndex: 2,
                        },
                        children: [
                          {
                            component: "div",
                            className: "gx-text-center",
                            children: [
                              {
                                component: "button",
                                style: {
                                  fontWeight: "bold",
                                  width: "auto",
                                  background: "none",
                                  border: "none",
                                  borderBottom: "solid 2px #f13c46",
                                  margin: "0 30px 0 0",
                                  padding: "0 5px 10px",
                                  fontSize: "14px",
                                  transition: "all 0.3s ease-in-out",
                                  letterSpacing: "2px",
                                  textTransform: "uppercase",
                                },
                                text: "All",
                              },
                              {
                                component: "button",
                                style: {
                                  fontWeight: "bold",
                                  width: "auto",
                                  background: "none",
                                  border: "none",
                                  margin: "0 30px 0 0",
                                  padding: "0 5px 10px",
                                  fontSize: "14px",
                                  transition: "all 0.3s ease-in-out",
                                  letterSpacing: "2px",
                                  textTransform: "uppercase",
                                },
                                text: "brand",
                              },
                              {
                                component: "button",
                                style: {
                                  fontWeight: "bold",
                                  width: "auto",
                                  background: "none",
                                  border: "none",
                                  margin: "0 30px 0 0",
                                  padding: "0 5px 10px",
                                  fontSize: "14px",
                                  transition: "all 0.3s ease-in-out",
                                  letterSpacing: "2px",
                                  textTransform: "uppercase",
                                },
                                text: "photography",
                              },
                              {
                                component: "button",
                                style: {
                                  fontWeight: "bold",
                                  width: "auto",
                                  background: "none",
                                  border: "none",
                                  margin: "0 30px 0 0",
                                  padding: "0 5px 10px",
                                  fontSize: "14px",
                                  transition: "all 0.3s ease-in-out",
                                  letterSpacing: "2px",
                                  textTransform: "uppercase",
                                },
                                text: "architecture",
                              },
                              {
                                component: "button",
                                style: {
                                  fontWeight: "bold",
                                  width: "auto",
                                  background: "none",
                                  border: "none",
                                  margin: "0 30px 0 0",
                                  padding: "0 5px 10px",
                                  fontSize: "14px",
                                  transition: "all 0.3s ease-in-out",
                                  letterSpacing: "2px",
                                  textTransform: "uppercase",
                                },
                                text: "video",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "Row",
                        style: {
                          position: "relative",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "Col",
                            md: 12,
                            sm: 24,
                            xs: 24,
                            style: {
                              // position: 'absolute',
                              // left: 0,
                              // top: 0,
                              display: "inline-block",
                              // paddingRight: '15px',
                              // paddingLeft: '15px',
                              height: "50vh",
                              width: "100%",
                              overflow: "hidden",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  position: "relative",
                                  height: "70vh",
                                  width: "100%",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      opacity: 0.4,
                                      position: "absolute",
                                      background: "#111",
                                      width: "100%",
                                      height: "100%",
                                      top: 0,
                                      left: 0,
                                      zIndex: 2,
                                    },
                                  },
                                  {
                                    component: "img",
                                    style: {
                                      objectFit: "cover",
                                      transition: "all 0.5s ease-in-out",
                                      width: "100%",
                                      height: "100%",
                                      objectPosition: "center",
                                    },
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/project/project1/1.jpg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  width: "calc(100% - 30px)",
                                  left: "15px",
                                  position: "absolute",
                                  bottom: 0,
                                  borderBottom: "3px solid #f13c46",
                                  borderRadius: "0 0 2px 2px",
                                  minHeight: "120px",
                                  padding: "30px",
                                  transition:
                                    "transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87), -webkit-transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87)",
                                  zIndex: 2,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      transition:
                                        "transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out",
                                    },
                                    to: "#",
                                    children: [
                                      {
                                        component: "h4",
                                        style: {
                                          letterSpacing: "2px",
                                          fontSize: "26px",
                                          fontWeight: 500,
                                          color: "#fff",
                                        },
                                        text: "Key visuals",
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginTop: "15px",
                                          fontSize: "16px",
                                          color: "#fff",
                                        },
                                        children: [
                                          {
                                            component: "span",
                                            style: {
                                              position: "relative",
                                              fontSize: "14px",
                                              fontWeight: 500,
                                              textTransform: "uppercase",
                                              color: "#fff",
                                              letterSpacing: "2px",
                                              backgroundColor: "#f13c46",
                                              padding: "5px 10px",
                                            },
                                            text: "Product",
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
                            md: 12,
                            sm: 24,
                            xs: 24,
                            style: {
                              // position: 'absolute',
                              // left: 0,
                              // top: 0,
                              display: "inline-block",
                              // paddingRight: '15px',
                              // paddingLeft: '15px',
                              marginBottom: "30px",
                              height: "50vh",
                              width: "100%",
                              overflow: "hidden",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  position: "relative",
                                  height: "70vh",
                                  width: "100%",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      opacity: 0.4,
                                      position: "absolute",
                                      background: "#111",
                                      width: "100%",
                                      height: "100%",
                                      top: 0,
                                      left: 0,
                                      zIndex: 2,
                                    },
                                  },
                                  {
                                    component: "img",
                                    style: {
                                      objectFit: "cover",
                                      transition: "all 0.5s ease-in-out",
                                      width: "100%",
                                      height: "100%",
                                      objectPosition: "center",
                                    },
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/project/project1/1.jpg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  width: "calc(100% - 30px)",
                                  left: "15px",
                                  position: "absolute",
                                  bottom: 0,
                                  borderBottom: "3px solid #f13c46",
                                  borderRadius: "0 0 2px 2px",
                                  minHeight: "120px",
                                  padding: "30px",
                                  transition:
                                    "transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87), -webkit-transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87)",
                                  zIndex: 2,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      transition:
                                        "transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out",
                                    },
                                    to: "#",
                                    children: [
                                      {
                                        component: "h4",
                                        style: {
                                          letterSpacing: "2px",
                                          fontSize: "26px",
                                          fontWeight: 500,
                                          color: "#fff",
                                        },
                                        text: "Key visuals",
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginTop: "15px",
                                          fontSize: "16px",
                                          color: "#fff",
                                        },
                                        children: [
                                          {
                                            component: "span",
                                            style: {
                                              position: "relative",
                                              fontSize: "14px",
                                              fontWeight: 500,
                                              textTransform: "uppercase",
                                              color: "#fff",
                                              letterSpacing: "2px",
                                              backgroundColor: "#f13c46",
                                              padding: "5px 10px",
                                            },
                                            text: "Product",
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
                            md: 12,
                            sm: 24,
                            xs: 24,
                            style: {
                              // position: 'absolute',
                              // left: 0,
                              // top: 0,
                              display: "inline-block",
                              marginBottom: "30px",
                              // paddingRight: '15px',
                              // paddingLeft: '15px',
                              height: "50vh",
                              width: "100%",
                              overflow: "hidden",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  position: "relative",
                                  height: "70vh",
                                  width: "100%",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      opacity: 0.4,
                                      position: "absolute",
                                      background: "#111",
                                      width: "100%",
                                      height: "100%",
                                      top: 0,
                                      left: 0,
                                      zIndex: 2,
                                    },
                                  },
                                  {
                                    component: "img",
                                    style: {
                                      objectFit: "cover",
                                      transition: "all 0.5s ease-in-out",
                                      width: "100%",
                                      height: "100%",
                                      objectPosition: "center",
                                    },
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/project/project1/1.jpg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  width: "calc(100% - 30px)",
                                  left: "15px",
                                  position: "absolute",
                                  bottom: 0,
                                  borderBottom: "3px solid #f13c46",
                                  borderRadius: "0 0 2px 2px",
                                  minHeight: "120px",
                                  padding: "30px",
                                  transition:
                                    "transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87), -webkit-transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87)",
                                  zIndex: 2,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      transition:
                                        "transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out",
                                    },
                                    to: "#",
                                    children: [
                                      {
                                        component: "h4",
                                        style: {
                                          letterSpacing: "2px",
                                          fontSize: "26px",
                                          fontWeight: 500,
                                          color: "#fff",
                                        },
                                        text: "Key visuals",
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginTop: "15px",
                                          fontSize: "16px",
                                          color: "#fff",
                                        },
                                        children: [
                                          {
                                            component: "span",
                                            style: {
                                              position: "relative",
                                              fontSize: "14px",
                                              fontWeight: 500,
                                              textTransform: "uppercase",
                                              color: "#fff",
                                              letterSpacing: "2px",
                                              backgroundColor: "#f13c46",
                                              padding: "5px 10px",
                                            },
                                            text: "Product",
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
                            md: 12,
                            sm: 24,
                            xs: 24,
                            style: {
                              // position: 'absolute',
                              // left: 0,
                              // top: 0,
                              display: "inline-block",
                              marginBottom: "30px",
                              // paddingRight: '15px',
                              // paddingLeft: '15px',
                              height: "50vh",
                              width: "100%",
                              overflow: "hidden",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  position: "relative",
                                  height: "70vh",
                                  width: "100%",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      opacity: 0.4,
                                      position: "absolute",
                                      background: "#111",
                                      width: "100%",
                                      height: "100%",
                                      top: 0,
                                      left: 0,
                                      zIndex: 2,
                                    },
                                  },
                                  {
                                    component: "img",
                                    style: {
                                      objectFit: "cover",
                                      transition: "all 0.5s ease-in-out",
                                      width: "100%",
                                      height: "100%",
                                      objectPosition: "center",
                                    },
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/project/project1/1.jpg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  width: "calc(100% - 30px)",
                                  left: "15px",
                                  position: "absolute",
                                  bottom: 0,
                                  borderBottom: "3px solid #f13c46",
                                  borderRadius: "0 0 2px 2px",
                                  minHeight: "120px",
                                  padding: "30px",
                                  transition:
                                    "transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87), -webkit-transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87)",
                                  zIndex: 2,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      transition:
                                        "transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out",
                                    },
                                    to: "#",
                                    children: [
                                      {
                                        component: "h4",
                                        style: {
                                          letterSpacing: "2px",
                                          fontSize: "26px",
                                          fontWeight: 500,
                                          color: "#fff",
                                        },
                                        text: "Key visuals",
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginTop: "15px",
                                          fontSize: "16px",
                                          color: "#fff",
                                        },
                                        children: [
                                          {
                                            component: "span",
                                            style: {
                                              position: "relative",
                                              fontSize: "14px",
                                              fontWeight: 500,
                                              textTransform: "uppercase",
                                              color: "#fff",
                                              letterSpacing: "2px",
                                              backgroundColor: "#f13c46",
                                              padding: "5px 10px",
                                            },
                                            text: "Product",
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
                            md: 12,
                            sm: 24,
                            xs: 24,
                            style: {
                              // position: 'absolute',
                              // left: 0,
                              // top: 0,
                              display: "inline-block",
                              marginBottom: "30px",
                              // paddingRight: '15px',
                              // paddingLeft: '15px',
                              height: "50vh",
                              width: "100%",
                              overflow: "hidden",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  position: "relative",
                                  height: "70vh",
                                  width: "100%",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      opacity: 0.4,
                                      position: "absolute",
                                      background: "#111",
                                      width: "100%",
                                      height: "100%",
                                      top: 0,
                                      left: 0,
                                      zIndex: 2,
                                    },
                                  },
                                  {
                                    component: "img",
                                    style: {
                                      objectFit: "cover",
                                      transition: "all 0.5s ease-in-out",
                                      width: "100%",
                                      height: "100%",
                                      objectPosition: "center",
                                    },
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/project/project1/1.jpg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  width: "calc(100% - 30px)",
                                  left: "15px",
                                  position: "absolute",
                                  bottom: 0,
                                  borderBottom: "3px solid #f13c46",
                                  borderRadius: "0 0 2px 2px",
                                  minHeight: "120px",
                                  padding: "30px",
                                  transition:
                                    "transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87), -webkit-transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87)",
                                  zIndex: 2,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      transition:
                                        "transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out",
                                    },
                                    to: "#",
                                    children: [
                                      {
                                        component: "h4",
                                        style: {
                                          letterSpacing: "2px",
                                          fontSize: "26px",
                                          fontWeight: 500,
                                          color: "#fff",
                                        },
                                        text: "Key visuals",
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginTop: "15px",
                                          fontSize: "16px",
                                          color: "#fff",
                                        },
                                        children: [
                                          {
                                            component: "span",
                                            style: {
                                              position: "relative",
                                              fontSize: "14px",
                                              fontWeight: 500,
                                              textTransform: "uppercase",
                                              color: "#fff",
                                              letterSpacing: "2px",
                                              backgroundColor: "#f13c46",
                                              padding: "5px 10px",
                                            },
                                            text: "Product",
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
                            md: 12,
                            sm: 24,
                            xs: 24,
                            style: {
                              // position: 'absolute',
                              // left: 0,
                              // top: 0,
                              display: "inline-block",
                              marginBottom: "30px",
                              // paddingRight: '15px',
                              // paddingLeft: '15px',
                              height: "50vh",
                              width: "100%",
                              overflow: "hidden",
                            },
                            children: [
                              {
                                component: "div",
                                style: {
                                  position: "relative",
                                  height: "70vh",
                                  width: "100%",
                                },
                                children: [
                                  {
                                    component: "div",
                                    style: {
                                      opacity: 0.4,
                                      position: "absolute",
                                      background: "#111",
                                      width: "100%",
                                      height: "100%",
                                      top: 0,
                                      left: 0,
                                      zIndex: 2,
                                    },
                                  },
                                  {
                                    component: "img",
                                    style: {
                                      objectFit: "cover",
                                      transition: "all 0.5s ease-in-out",
                                      width: "100%",
                                      height: "100%",
                                      objectPosition: "center",
                                    },
                                    src:
                                      "http://theme.dsngrid.com/xmin/assets/img/project/project1/1.jpg",
                                  },
                                ],
                              },
                              {
                                component: "div",
                                style: {
                                  width: "calc(100% - 30px)",
                                  left: "15px",
                                  position: "absolute",
                                  bottom: 0,
                                  borderBottom: "3px solid #f13c46",
                                  borderRadius: "0 0 2px 2px",
                                  minHeight: "120px",
                                  padding: "30px",
                                  transition:
                                    "transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87), -webkit-transform 0.5s cubic-bezier(0.08, 0.03, 0.22, 0.87)",
                                  zIndex: 2,
                                },
                                children: [
                                  {
                                    component: "Link",
                                    style: {
                                      transition:
                                        "transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out",
                                    },
                                    to: "#",
                                    children: [
                                      {
                                        component: "h4",
                                        style: {
                                          letterSpacing: "2px",
                                          fontSize: "26px",
                                          fontWeight: 500,
                                          color: "#fff",
                                        },
                                        text: "Key visuals",
                                      },
                                      {
                                        component: "div",
                                        style: {
                                          marginTop: "15px",
                                          fontSize: "16px",
                                          color: "#fff",
                                        },
                                        children: [
                                          {
                                            component: "span",
                                            style: {
                                              position: "relative",
                                              fontSize: "14px",
                                              fontWeight: 500,
                                              textTransform: "uppercase",
                                              color: "#fff",
                                              letterSpacing: "2px",
                                              backgroundColor: "#f13c46",
                                              padding: "5px 10px",
                                            },
                                            text: "Product",
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
          },
        ],
      },
      {
        component: "Layout",
        children: [
          {
            component: "Content",
            children: [
              {
                component: "div",
                className: "service gx-p-relative",
                style: {
                  // marginBottom:  window.innerWidth > 991 ? '120px':'80px'
                },
                children: [
                  {
                    component: "div",
                    className: "gx-text-center gx-w-100",
                    children: [
                      {
                        component: "p",
                        style: {
                          color: "#f13c46",
                        },
                        text: "WE ARE HIRING",
                      },
                      {
                        component: "div",
                        style: {
                          padding: "60px 15px",
                          fontSize: window.innerWidth < 768 ? "42px" : "46px",
                          backgroundColor: "#f13c46",
                          width: "100%",
                        },
                        children: [
                          {
                            component: "Link",
                            style: {
                              color: "#fff",
                            },
                            to: "#",
                            text: "CONTACT US",
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
        style: {
          padding: "60px",
        },
        children: [
          {
            component: "div",
            className: "gx-container",
            children: [
              {
                component: "Row",
                gutter: [8, 8, 8],
                children: [
                  {
                    component: "Col",
                    sm: 8,
                    children: [
                      {
                        component: "div",
                        className:
                          "gx-d-flex gx-align-items-center gx-justify-content-center ",
                        children: [
                          {
                            component: "div",
                            style: {
                              boxSizing: "border-box",
                              listStyle: "none",
                              outine: "none",
                              margin: 0,
                              padding: 0,
                            },
                            children: [
                              {
                                component: "Link",
                                style: {
                                  marginRight: "25px",
                                  marginTop: "5px",
                                  color: "#fff",
                                },
                                children: [
                                  {
                                    component: "i",
                                    className: "icon icon-facebook",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              boxSizing: "border-box",
                              listStyle: "none",
                              outine: "none",
                              margin: 0,
                              padding: 0,
                            },
                            children: [
                              {
                                component: "Link",
                                style: {
                                  marginRight: "25px",
                                  marginTop: "5px",
                                  color: "#fff",
                                },
                                children: [
                                  {
                                    component: "i",
                                    className: "icon icon-facebook",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              boxSizing: "border-box",
                              listStyle: "none",
                              outine: "none",
                              margin: 0,
                              padding: 0,
                            },
                            children: [
                              {
                                component: "Link",
                                style: {
                                  marginRight: "25px",
                                  marginTop: "5px",
                                  color: "#fff",
                                },
                                children: [
                                  {
                                    component: "i",
                                    className: "icon icon-facebook",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            component: "div",
                            style: {
                              boxSizing: "border-box",
                              listStyle: "none",
                              outine: "none",
                              margin: 0,
                              padding: 0,
                            },
                            children: [
                              {
                                component: "Link",
                                style: {
                                  marginRight: "25px",
                                  marginTop: "5px",
                                  color: "#fff",
                                },
                                children: [
                                  {
                                    component: "i",
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
                  {
                    component: "Col",
                    sm: 8,
                    children: [
                      {
                        component: "div",
                        className:
                          "gx-d-flex gx-align-items-center gx-justify-content-center gx-h-100 gx-text-center",
                        children: [
                          {
                            component: "Link",
                            style: {
                              width: "90px",
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
                                  "http://theme.dsngrid.com/xmin/assets/img/logo.png",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    component: "Col",
                    lg: 24,
                    className: "gx-mt-4 gx-mb-4 gx-text-center",
                    style: {
                      borderTop: "1px solid rgba(112, 112, 112, 0.5)",
                    },
                    children: [
                      {
                        component: "div",
                        className: "gx-text-center",
                        children: [
                          {
                            component: "ul",
                            style: {
                              listStyle: "none",
                              outline: "none",
                              margin: 0,
                              padding: "30px",
                            },
                            children: [
                              {
                                component: "li",
                                className:
                                  "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                children: [
                                  {
                                    component: "Link",
                                    to: "#",
                                    style: {
                                      color: "#fff",
                                      fontFamily: "sans-serif",
                                      display: "inline-block",
                                      letterSpacing: "2px",
                                      fontSize: "13px",
                                      fontWeight: 400,
                                    },
                                    text: "Home",
                                  },
                                ],
                              },
                              {
                                component: "li",
                                className:
                                  "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                children: [
                                  {
                                    component: "Link",
                                    to: "#",
                                    style: {
                                      color: "#fff",
                                      fontFamily: "sans-serif",
                                      display: "inline-block",
                                      letterSpacing: "2px",
                                      fontSize: "13px",
                                      fontWeight: 400,
                                    },
                                    text: "Home",
                                  },
                                ],
                              },
                              {
                                component: "li",
                                className:
                                  "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                children: [
                                  {
                                    component: "Link",
                                    to: "#",
                                    style: {
                                      color: "#fff",
                                      fontFamily: "sans-serif",
                                      display: "inline-block",
                                      letterSpacing: "2px",
                                      fontSize: "13px",
                                      fontWeight: 400,
                                    },
                                    text: "Home",
                                  },
                                ],
                              },
                              {
                                component: "li",
                                className:
                                  "gx-d-inline-block gx-overflow-hidden gx-mr-4",
                                children: [
                                  {
                                    component: "Link",
                                    to: "#",
                                    style: {
                                      color: "#fff",
                                      fontFamily: "sans-serif",
                                      display: "inline-block",
                                      letterSpacing: "2px",
                                      fontSize: "13px",
                                      fontWeight: 400,
                                    },
                                    text: "Home",
                                  },
                                ],
                              },
                              {
                                component: "li",
                                className:
                                  "gx-d-inline-block gx-overflow-hidden",
                                children: [
                                  {
                                    component: "Link",
                                    to: "#",
                                    style: {
                                      color: "#fff",
                                      fontFamily: "sans-serif",
                                      display: "inline-block",
                                      letterSpacing: "2px",
                                      fontSize: "13px",
                                      fontWeight: 400,
                                    },
                                    text: "Home",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            component: "span",
                            style: {
                              fontFamily: "sans-serif",
                              letterSpacing: "2px",
                            },
                            text: "© 2020 Digital Agency Designed by DSN Grid",
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
