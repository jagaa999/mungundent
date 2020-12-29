import { schemaHeaderData } from "./schemaHeaderData";
import { schemaFooterData } from "./schemaFooterData";

import { schemaContentBanner01 } from "./content/schemaContentBanner01";
import { schemaContentCard4 } from "./content/schemaContentCard4";
import { schemaContentTextBox01 } from "./content/schemaContentTextBox01";
import { schemaContentLogin } from "./content/schemaContentLogin";
import { schemaContentTextBox02 } from "./content/schemaContentTextBox02";
import { schemaContentTextBox03 } from "./content/schemaContentTextBox03";
import { schemaContentTestimonial01 } from "./content/schemaContentTestimonial01";
import { schemaContentStatistic01 } from "./content/schemaContentStatistic01";
import { schemaContentLogos01 } from "./content/schemaContentLogos01";

export const schemaHeader = schemaHeaderData;

export const schemaContent = [
  schemaContentBanner01,

  schemaContentTextBox01, //СӨХ-ийн текст

  schemaContentLogin, //СӨХ болон Оршин суугч Login-дох

  schemaContentTextBox02, //СӨХ-ийн портал

  schemaContentTextBox03, //Бид юу хийдэг вэ?

  schemaContentCard4, //4 карт хэлбэртэй текст

  schemaContentTestimonial01, //Эмэгтэйн хэлж буй үг

  schemaContentStatistic01, //Тоонууд

  schemaContentLogos01, //Логонууд

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

  // {
  //   component: "Button",
  //   type: "primary",
  //   children: [{ component: "span", text: "Энд дараарай" }],
  // },
];

export const schemaFooter = schemaFooterData;
