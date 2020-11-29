export const portalMetaHome = {
  id: 123,
  title: "Home page",
  layoutcode: "001",
};

export const portalMetaNews = [
  {
    id: 456,
    title: "News page",
    layoutcode: "002",
  },
];

export const portalMetaHeader = [
  {
    sectioncode: "1",
    widgetcode: "Menu01",
    metatypeid: "dataview",
    metametaid: 456789,
    widgetdtl: [
      {
        positioncode: "1",
        fieldpath: "menuicon",
      },
      {
        positioncode: "2",
        fieldpath: "menuname",
      },
    ],
  },
];

export const portalMetaFooter = [
  {
    sectioncode: "1",
    widgetcode: "Footer01",
    metatypeid: "dataview",
    metametaid: 456789,
    widgetdtl: [
      {
        positioncode: "1",
        fieldPath: "menuicon",
      },
      {
        positionCode: "2",
        fieldPath: "menuname",
      },
    ],
  },
];

export const configHome = [
  {
    metaTypeId: "portal",
    metaMetaId: 789456,
  },

  {
    sectionCode: "1",
  },

  {
    sectionCode: "2",
    widgetCode: "Banner101",
    metaTypeId: "dataview",
    metaMetaId: 789456,
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

  {
    sectionCode: "3",
    widgetCode: "Slider01",
    metaTypeId: "process",
    metaMetaId: 789456,
    pageSize: 10,
    widgetDtl: [
      {
        positionCode: "1",
        fieldPath: "title",
      },
      {
        positionCode: "2",
        fieldPath: "description",
      },
      {
        positionCode: "3",
        fieldPath: "buttontext",
      },
    ],
    result: [
      { total: 8 },
      { aggregate_columns: {} },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
    ],
  },

  {
    widgetCode: "Intro01",
    metaTypeId: "dataview",
    metaMetaId: 789456,
    pageSize: 10,
    widgetDtl: [
      {
        positionCode: "1",
        fieldPath: "title",
      },
      {
        positionCode: "2",
        fieldPath: "description",
      },
      {
        positionCode: "3",
        fieldPath: "buttonText",
      },
    ],
  },

  {
    widgetCode: "CeoGreetings01",
    metaTypeId: "process",
    metaMetaId: 789456,
    pageSize: null,
    widgetDtl: [
      {
        positionCode: "1",
        fieldPath: "photo",
      },
      {
        positionCode: "2",
        fieldPath: "greetingtitle",
      },
      {
        positionCode: "3",
        fieldPath: "greetingbody",
      },
      {
        positionCode: "4",
        widgetCode: "CeoGreetings01-01",
        widgetDtl: [
          {
            positionCode: "1",
            fieldPath: "photo",
          },
          {
            positionCode: "2",
            fieldPath: "greetingtitle",
          },
          {
            positionCode: "3",
            fieldPath: "greetingbody",
          },
        ],
      },
    ],
    result: [
      {
        photo: "storage/uploads/process/emp-uugan.png",
        greetingtitle: "Та бүхний өдрийн мэнд хүргэе!!!",
        greetingbody: "Миний бие Ууганбаяр ...",
      },
    ],
  },
];

export const configNews = [
  {
    metaTypeId: "portal",
    metaMetaId: 789456,
  },
  {
    sectionCode: "3",
    widgetCode: "Slider01",
    metaTypeId: "process",
    metaMetaId: 789456,
    pageSize: 10,
    widgetDtl: [
      {
        positionCode: "1",
        fieldPath: "title",
      },
      {
        positionCode: "2",
        fieldPath: "description",
      },
      {
        positionCode: "3",
        fieldPath: "buttontext",
      },
    ],
    result: [
      { total: 8 },
      { aggregate_columns: {} },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
      {
        title: "fgbfdbdf",
        description: "fgbfdbdf",
        buttontext: "fgbfdbdf",
      },
    ],
  },
  {
    metaTypeId: "portal",
    metaMetaId: 258978,
  },
];
