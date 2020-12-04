export const configHome001 = {
  portalpagecode: "001",
  layoutcode: "LandingPage01", //5 section-тэй
  portalpagename: "Portal 001",
  detailconfigs: [
    {
      sectioncode: "01",
      widgetcode: "WidgetMenu01",
      widgetconfigs: {
        position1: "title",
        position2: "link",
      },
      data: {
        total: 3,
        rows: [
          {
            id: "101",
            title: "Request 311",
            link: "/",
            parentid: "",
          },
          {
            id: "102",
            title: "Administration",
            link: "/admin",
            parentid: "",
          },
          {
            id: "103",
            title: "How do I..",
            link: "/howdoi",
            parentid: "",
          },
        ],
      },
    },
    {
      sectionCode: "01",
      widgetcode: "WidgetCarousel01",
      widgetconfigs: {
        position1: "title",
        position2: "description",
        position3: "backphoto",
      },
      data: {
        total: 10,
        rows: [
          {
            title: "A vibrant city nestled against the Mountains.",
            description:
              "Drawn by clean air and mythical light, visitors come to experience traditions, fine art, great cuisine and natural beauty of the landscape.",
            backphoto:
              "https://media-exp1.licdn.com/dms/image/C4E1BAQFL2EtHrlva6A/company-background_10000/0?e=2159024400&v=beta&t=5Zlfb2tA558GUxmPtTHYtcgr9RQAo1u7zkAdQMKZ8W8",
            style: {
              height: "360px",
              color: "#fff",
              textAlign: "left",
              background: "#364d79",
              padding: "7% 13%",
            },
          },
          {
            title: "Far away from the every day!",
            description:
              "Beautiful neighborhoods, extraordinary schools, great restaurants and a rich cultural history make our city an ideal place to call home.",
            backphoto:
              "https://d374nmyjid5pr9.cloudfront.net/styles/property_listing/s3/garden-city_preview.jpg?itok=Ll5ckVeT",
            style: {
              height: "360px",
              color: "#fff",
              textAlign: "center",
              background: "#364d79",
              padding: "7% 13%",
            },
          },
        ],
      },
    },

    {
      sectionCode: "01",
      widgetcode: "WidgetCard07",
      widgetconfigs: {
        position1: "title",
        position2: "description",
        position3: "icon",
        position4: "colprops",
        position5: "link",
        position6: "cardprops",
      },
      data: {
        total: 4,
        rows: [
          {
            title: "Departments & Facility Hours",
            description:
              "Access City’s service offerings and check hours for all facilities.",
            icon:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/monument.png",
            colprops: { span: 6 },
            cardprops: {
              className: "gx-bg-success",
              style: { height: "100%" },
            },
            link: "/department",
          },
          {
            title: "Traffic, Transit & Parking",
            description:
              "Traffic and road closure news and local traffic conditions",
            icon:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/bus.png",
            colprops: { span: 6 },
            cardprops: {
              className: "gx-bg-warning",
              style: { height: "100%" },
            },
            link: "/buses",
          },
          {
            title: "Employment & Job Listings",
            description:
              "The City employment opportunities & position descriptions are listed here.",
            icon:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/exam.png",
            colprops: { span: 6 },
            cardprops: {
              className: "gx-bg-success",
              style: { height: "100%" },
            },
            link: "/job",
          },
          {
            title: "Parks, Fields & Recreation",
            description:
              "Information on the parks, their locations, and the amenities they offer.",
            icon:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/bench.png",
            colprops: { span: 6 },
            cardprops: { className: "gx-bg-grey", style: { height: "100%" } },
            link: "/park",
          },
        ],
      },
    },

    {
      sectionCode: "01",
      widgetcode: "WidgetBanner07",
      widgetconfigs: {
        position1: "title",
        position2: "description",
        position3: "photo",
        position4: "bannerprops",
        position5: "leftprops",
        position6: "rightprops",
      },
      data: {
        total: 1,
        rows: [
          {
            title:
              "Thank you for allowing me to serve as your mayor. Together, let's keep the momentum going.",
            description: "Best regards, Mayor Lisa F. Matt",
            photo:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/11/mayor-5b.jpg",
            bannerprops: {
              style: {
                height: "350px",
                backgroundColor: "#222933",
                overflow: "hidden",
              },
              className: " gx-px-5",
            },
            leftprops: {
              className: "gx-text-white gx-p-3 gx-mt-5",
              style: {
                border: "1px solid #fff",
              },
            },
            rightprops: {},
          },
        ],
      },
    },

    {
      sectionCode: "01",
      widgetcode: "WidgetBanner07",
      widgetconfigs: {
        position1: "title",
        position2: "description",
        position3: "photo",
        position4: "bannerprops",
        position5: "leftprops",
        position6: "rightprops",
      },
      data: {
        total: 1,
        rows: [
          {
            title:
              "Thank you for allowing me to serve as your mayor. Together, let's keep the momentum going.",
            description: "Best regards, Mayor Lisa F. Matt",
            photo:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/11/mayor-5b.jpg",
            bannerprops: {
              style: {
                height: "350px",
                backgroundColor: "#222933",
                overflow: "hidden",
              },
              className: " gx-px-5",
            },
            leftprops: {
              className: "gx-text-white gx-p-3 gx-mt-5",
              style: {
                border: "1px solid #fff",
              },
            },
            rightprops: {},
          },
        ],
      },
    },
  ],
};
