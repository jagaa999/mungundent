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
            title: "СӨХ-ны тухай",
            link: "/widget",
            parentid: "",
          },
          {
            id: "102",
            title: "Систем",
            link: "/widget",
            parentid: "",
          },
          {
            id: "103",
            title: "Асуулт?",
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
            title: "Сууц Өмчлөгчдийн Холбоо гэдэг нь..",
            description:
              "Оршин суугчдын аятай тухтай, цэвэр, үзэмжтэй нөхцөлийг бүрдүүлэхийн төлөө дундын өмчлөлийн эд хөрөнгийн ашиглалт үйлчилгээг хариуцан ажилладгаас гадна үл хөдлөх хөрөнгийн зах зээлийн үнэ ханшийг тогтоодог.",
            backphoto:
              "https://images.unsplash.com/photo-1584792095318-ddb688f67c1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            style: {
              height: "720px",
              color: "#fff",
              textAlign: "left",
              background: "#364d79",
              padding: "7% 13%",
              fontSize: "22px",
            },
          },
          {
            title: "Сууц өмчлөгчдийн холбоо гэдэг нь..",
            description:
              "Нийтийн зориулалттай орон сууцны байшингийн дундын өмчлөлийн эд хөрөнгийг дундаа хамтран өмчлөх эрхийг хэрэгжүүлэх, ашиглалтын хэвийн байдлыг хангах, сууц өмчлөгчдийн эрх, ашиг сонирхлыг хамгаалах зорилго бүхий, хуулийн этгээдийн эрхгүй, заавал гишүүнчлэлтэй холбоог хэлдэг.",
            backphoto:
              "https://images.unsplash.com/photo-1495245088094-68be8de6b55e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            style: {
              height: "720px",
              color: "#fff",
              textAlign: "left",
              background: "#364d79",
              padding: "7% 13%",
              fontSize: "22px",
            },
          },
          {
            title: "СӨХ-ийн эзэд..",
            description:
              "Орон сууцны байшинд хоёр буюу түүнээс дээш өрх сууц өмчлөгч болсон тохиолдолд СӨХ-той болох хэрэгцээ үүсдэг бөгөөд зэрэгцэн орших барилгын сууц өмчлөгчид нэгдэн нэг СӨХ байгуулж болдог.",
            backphoto:
              "https://images.unsplash.com/photo-1495122255346-a63176da9893?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            style: {
              height: "720px",
              color: "#fff",
              textAlign: "center",
              background: "#364d79",
              padding: "7% 13%",
              fontSize: "22px",
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
            title: "Барилгынхаа бүх хэсгийг хянах",
            description:
              "Цахилгаан шат, тоглоомын талбай, зогсоол зэрэг бүгдийг хянах боломжтой.",
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
            title: "Хотхон доторх хөдөлгөөн",
            description:
              "Гадна зогсоол болон дулаан гараашийн бүх хөдөлгөөнийг удирдах",
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
            title: "Оршин суугчдын зар, мэдээлэл",
            description:
              "Танай гэрт хэрэг болсон ойр зуурын ажил үйлчилгээг мэдэгдэх зарын систем",
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
            title: "Парк, Сандал, Амрах хэсэг",
            description:
              "Амрах гарын мэдээлэл, тэнд тавигдах дүрэм журмыг нэг дороос",
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
                height: "450px",
                backgroundColor: "#222933",
                // overflow: "hidden",
                marginBottom: "20px",
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
      sectioncode: "02",
      widgetcode: "WidgetBanner02",
      widgetconfigs: {
        position1: "title",
        position2: "titleProps",
        position3: "backgroundProps",
        position4: "container",
      },
      data: {
        total: 1,
        rows: [
          {
            title:
              "A vibrant city nestled against the San Bernardino Mountains.",
            titleProps: {
              style: {
                border: "1px solid #fff",
                fontSize: "40px",
                fontWeight: "bold",
                left: "50%",
                top: "30%",
                padding: "1rem",
                width: "350px",
                position: "relative",
              },
              className: "gx-text-white",
            },
            backgroundProps: {
              style: {
                backgroundColor: "#fff",
                backgroundImage:
                  "url(http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/street-932082_1920-edit.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top left",
                height: "768px",
                backgroundAttachment: "scroll",
              },
              className: "",
            },
            container: {
              style: {},
            },
          },
        ],
      },
    },

    {
      sectioncode: "01",
      widgetcode: "WidgetList01",
      widgetconfigs: {
        position1: "title",
        position2: "description",
        position3: "list",
        position4: "moreFrom",
        position5: "listProps",
        position6: "mainProps",
      },
      data: {
        total: 1,
        rows: [
          {
            title: "Town Highlights",
            description: "Find out what’s going on & stay up to date.",
            list: [
              {
                cover:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/stockholm-1824368_1920-150x150.jpg",
                title: "Annual Water Quality Report (Gallery Post)",
                date: "AUGUST 14, 2018",
                type: "TOWN NEWS",
                description:
                  "The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their public",
                link:
                  "http://dannci.wpmasters.org/citygov/blog/2018/08/14/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
              },
              {
                cover:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/stockholm-1824368_1920-150x150.jpg",
                title: "Annual Water Quality Report (Gallery Post)",
                date: "AUGUST 14, 2018",
                type: "TOWN NEWS",
                description:
                  "The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their public",
                link:
                  "http://dannci.wpmasters.org/citygov/blog/2018/08/14/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
              },
              {
                cover:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/stockholm-1824368_1920-150x150.jpg",
                title: "Annual Water Quality Report (Gallery Post)",
                date: "AUGUST 14, 2018",
                type: "TOWN NEWS",
                description:
                  "The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their public",
                link:
                  "http://dannci.wpmasters.org/citygov/blog/2018/08/14/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
              },
            ],
            moreFrom: "http://dannci.wpmasters.org/citygov/#",
            listProps: {
              justify: "left",
              gutter: [0, 0],
              style: {
                backgroundColor: "#fff",
                color: "#111",
                margin: "0 !important",
                position: "relative",
              },
              className: "gx-ml-4",
            },
            mainProps: {
              style: {
                margin: "3rem 5rem",
              },
            },
          },
        ],
      },
    },
    {
      sectioncode: "02",
      widgetcode: "WidgetBanner03",
      widgetconfigs: {
        position1: "title",
        position2: "titleProps",
        position3: "backgroundProps",
        position4: "container",
      },
      data: {
        total: 1,
        rows: [
          {
            title:
              "A vibrant city nestled against the San Bernardino Mountains.",
            titleProps: {
              style: {
                border: "1px solid #fff",
                fontSize: "40px",
                fontWeight: "bold",
                left: "20%",
                top: "30%",
                padding: "1rem",
                width: "350px",
                position: "relative",
              },
              className: "gx-text-white",
            },
            backgroundProps: {
              style: {
                backgroundColor: "#fff",
                backgroundImage:
                  "url(http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/dresden-3681378_1920-edit.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top right",
                height: "768px",
                backgroundAttachment: "scroll",
              },
              className: "",
            },
            container: {
              style: {},
            },
          },
        ],
      },
    },
    {
      sectioncode: "01",
      widgetcode: "WidgetList02",
      widgetconfigs: {
        position1: "title",
        position2: "description",
        position3: "list",
        position4: "moreFrom",
        position5: "listProps",
        position6: "mainProps",
      },
      data: {
        total: 1,
        rows: [
          {
            title: "What's Happening",
            description: "Join the fun in our city!",
            list: [
              {
                cover:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/sports-210661_1920-150x150.jpg",
                title: "Along Pines Run",
                date: "11 Aug",
                time: "9:00 am - 5:00 pm",
                location: "Baker Hall",
                link:
                  "http://dannci.wpmasters.org/citygov/blog/2018/08/14/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
              },
              {
                cover:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/football-2391697_1920-150x150.jpg",
                title: "Sport Games for Children",
                date: "11 Aug",
                time: "9:00 am - 5:00 pm",
                location: "Baker Hall",
                description:
                  "The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their public",
                link:
                  "http://dannci.wpmasters.org/citygov/blog/2018/08/14/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
              },
              {
                cover:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/police-224426_1920-150x150.jpg",
                title: "Touch A Truck",
                date: "11 Aug",
                time: "9:00 am - 5:00 pm",
                location: "Baker Hall",
                description:
                  "The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their public",
                link:
                  "http://dannci.wpmasters.org/citygov/blog/2018/08/14/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
              },
              {
                cover:
                  "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/arches-1850730_1920-1-150x150.jpg",
                title: "Heritage 10th Anniversary",
                date: "11 Aug",
                time: "9:00 am - 5:00 pm",
                location: "Baker Hall",
                description:
                  "The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their public",
                link:
                  "http://dannci.wpmasters.org/citygov/blog/2018/08/14/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
              },
            ],
            moreFrom: "http://dannci.wpmasters.org/citygov/#",
            listProps: {
              justify: "left",
              gutter: [0, 0],
              style: {
                backgroundColor: "#222933",
                color: "#fff",
                margin: "0 !important",
                position: "relative",
              },
              className: "gx-ml-4",
            },
            mainProps: {
              style: {
                backgroundColor: "#222933",
                padding: "5rem 7rem",
                left: "0%",
                position: "relative",
              },
            },
          },
        ],
      },
    },

    {
      sectioncode: "01",
      widgetcode: "WidgetCard01",
      widgetconfigs: {
        position1: "title",
        position2: "highlight",
        position3: "description1",
        position4: "image1",
        position5: "image2",
        position6: "link",
        position7: "mainProps",
        position8: "description2",
        position9: "leftProps",
        position10: "rightProps",
      },
      data: {
        total: 1,
        rows: [
          {
            title: "Become a Volunteer!",
            highlight: "And make a difference!",
            description1:
              "Volunteers are the heart of a community. Our volunteers are a valuable resource for our fast-growing, fast-paced city.",
            description2:
              "Our city relies on our volunteers for everything from staffing special event, such as Freedom Fest and Merry Main Street, to assisting departments with daily activities, such as shelving library books, filing records or using GIS equipment.",
            link: "http://dannci.wpmasters.org/citygov/#",
            image1:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/bodyworn-794111_1920.jpg",
            image2:
              "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/09/dresden-3681378_1920-edit.jpg",
            mainProps: {
              style: {
                padding: "5% 7%",
              },
            },
            leftProps: {
              style: {
                padding: "60px",
                margin: "20px 120px 20px 20px",
                border: "1px solid rgba(12,12,12,.12)",
                width: "40vh",
              },
              span: 10,
            },
            rightProps: {
              span: 10,
              style: {
                width: "350px",
                position: "relative",
                textAlign: "right",
                verticalAlign: "middle",
                display: "inlince-block",
              },
              // className: "gx-d-flex gx-align-content-center gx-flex-wrap"
            },
          },
        ],
      },
    },

    {
      sectioncode: "01",
      widgetcode: "WidgetFooter01",
      widgetconfigs: {
        position1: "logo",
        position2: "main",
        position3: "links",
        position4: "logoProps",
        position5: "mainProps",
        position6: "linkProps",
        position7: "containerProps",
      },
      data: {
        total: 1,
        rows: [
          {
            logo: {
              alt: "alt title",
              src:
                "http://dannci.wpmasters.org/citygov/wp-content/uploads/2018/11/logo.png",
            },
            main: {
              title: "Frisco City Hall",
              state: "8353 Sierra Avenue",
              address: "Frisco, CA 91335",
              phone: "Phone: (907) 350-7400",
              timetable: "Monday – Thursday, 8:00 am – 6:00 pm",
            },
            links: [
              {
                title: "Living Here",
                links: [
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                ],
              },
              {
                title: "Useful Links",
                links: [
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                ],
              },
              {
                title: "Quick Links",
                links: [
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                  {
                    to: "",
                    title: "Government",
                  },
                ],
              },
            ],
            logoProps: {
              style: {
                width: "100px",
                position: "relative",
                top: "-20%",
                marginBottom: "1rem",
              },
            },
            mainProps: {
              xs: 24,
              sm: 24,
              md: 10,
              lg: 10,
              xl: 10,
              style: {
                top: "-10%",
                position: "relative",
              },
            },
            linkProps: {
              xs: 24,
              sm: 24,
              md: 14,
              lg: 14,
              xl: 14,
              className: "gx-mt-4",
            },
            containerProps: {
              gutter: [0, 0],
              style: {
                padding: "1rem",
                backgroundColor: "#10354c",
                color: "#fff",
                // display: 'inline-block'
              },
              className: "",
            },
          },
        ],
      },
    },
  ],
};
