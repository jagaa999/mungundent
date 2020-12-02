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
      sectioncode: "01",
      widgetcode: "Banner02",
      widgetconfigs: {
        position1: "title",
        position2: "description",
        position3: "photo",
      },
      data: {
        total: 4,
        rows: [
          { title: "009", description: "description 009", photo: "" },
          { title: "009", description: "description 009", photo: "" },
          { title: "009", description: "description 009", photo: "" },
        ],
      },
    },
  ],
};

export const configHome = [
  {
    layoutName: "LandingPage01", //5 section-тэй

    // sectionCode: {
    // code: "2",
    // widgetCode: "Banner101",
    // }

    pageSize: 4,
    widgetDtl: [
      {
        positionCode: "1",
        fieldPath: "photo",
      },
      {
        positionCode: "2",
        fieldPath: "title",
      },
      {
        positionCode: "3",
        fieldPath: "description",
      },
      {
        positionCode: "4",
        fieldPath: "buttontext",
      },
    ],
    result: [
      { total: 8 },
      {
        rows: [
          {
            photo:
              "https://i.pinimg.com/originals/a6/8e/4b/a68e4bd0885a7d1de90a2c265ebc8131.jpg",
            avatar:
              "https://www.noiseguard.com.au/wp-content/uploads/2017/10/IMG_3502.png",
            title: "Гарчиг 01",
            description: "2021 онд шинээр гарна",
            buttontext: "Үзэх",
          },
          {
            photo:
              "https://images.unsplash.com/photo-1506111583091-becfd4bfa05d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
            avatar:
              "https://img1.looper.com/img/gallery/the-complicated-terminator-franchise-timeline-explained/intro-1595349245.jpg",
            title: "Гарчиг 02",
            description: "Европийн шилдэг автомашин",
            buttontext: "Унших",
          },
          {
            photo:
              "https://images.unsplash.com/photo-1497334426377-e0794ccee290?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1064&q=80",
            avatar:
              "https://api.time.com/wp-content/uploads/2014/12/godfather-ii.jpeg",
            title: "Гарчиг 03",
            description: "Солонгост эхний өдрөө 20,000 ширхэг захиалга авав",
            buttontext: "Захиалах",
          },
          {
            photo:
              "https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/9cc7bcde7bfe47ebb5d67cd63ce87ade.jpg",
            avatar:
              "https://www.thehindubusinessline.com/migration_catalog/article22386513.ece/ALTERNATES/LANDSCAPE_1200/ksh",
            title: "Гарчиг 04",
            description: "7 хүний тав тухтай аялал",
            buttontext: "Туршилтын жолоодлого",
          },
        ],
      },
    ],
  },
];
