const functions = require("firebase-functions");
const axios = require("axios");
// const { stringify } = require("query-string");
const cors = require("cors")({
  origin: true,
  allowedHeaders: [
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Origin",
    "X-Requested-With",
    "Accept",
  ],
  methods: ["POST", "OPTIONS"],
  credentials: true,
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((req, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp();

const myUppercase = (string) => string.toUpperCase();

exports.addMessage = functions.https.onRequest((req, res) => {
  const text = req.query.text + "--dfdfdfd";
  //   const secretText = myUppercase(text);

  res.json({
    message: "great",
    dddd: text,
    // secretText,
  });
});

//  ####### #     # ####### #       #     # ######   #####
//  #       #     # #       #       ##   ## #     # #     #
//  #       #     # #       #       # # # # #     # #
//  #####   #     # #####   #       #  #  # ######  #  ####
//  #       #     # #       #       #     # #       #     #
//  #       #     # #       #       #     # #       #     #
//  #        #####  ####### ####### #     # #        #####
exports.carFuelMPG = functions.https.onRequest((req, res) => {
  // Google Cloud Function res.methods
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Content-Type", "Application/JSON");
  // CORS-enabled req.methods, res.methods
  cors(req, res, async () => {
    // your function body here - use the provided req and res from cors

    //   road
    //   achaa
    //   tire
    //   window
    //   light
    //   fuellight
    //   condition
    //   coldengine
    //   driving
    //   engineservice
    //   enginesensor
    //   engineoil
    //   winternormal
    //   highland

    // Би хэт түрэмгий яваад байгаа юм биш биз?
    // Би байнга түгжрэлд явж байна уу?
    // Нормальдаж зогсдог билүү?
    // Өвөл өглөө машинаа халаахын тулд асаалттай орхидог билүү?
    // Би сайн шатахуун хийж байна уу?
    // Дутуу шахаад байгаа юм биш биз?
    // Багаажинд маань хэрэггүй баахан ачаа байгаа юм биш биз?
    // Дугуй маань шалчгар яваад байна уу?
    // Хэт хүйтэнд мотор даараад байна уу?
    // Бараг явахгүй болохоор хайбрид машины маань батерей цэнэг сайн авахгүй байна уу?
    // Үргэлж дүүрэн хүнтэй явдаг билүү?
    // Тоормос маань зуурчихсан юм биш биз?
    // Шатахуун труп хаа нэгтээ дуслаад байгаа юм биш биз?
    // Моторт ямар нэгэн доголдол байна уу?
    // Машины компьютер буруу ажиллаад байгаа юм биш биз?
    // Агаар шүүгч бөглөрчихсөн юм биш биз?
    // Эйр кондишн буюу агааржуулагч байнга ажиллаад байна уу?
    // Цахилгаан их хэрэглэдэг ямар нэгэн юм байна уу?
    // Хол замд хэт хурдлаад байна уу?
    // Хол замд дан салхины өөдөөс явсан уу?
    // Хол замд дандаа өгсөөд байсан юм биш биз?

    const mySpecs = req.query;

    let myzaalt = Number(req.query.zaalt || 1);
    let myzaalt1 = myzaalt;

    //   console.log("mySpecs", mySpecs);

    Object.keys(mySpecs).map((spec, index) => {
      if (spec !== "zaalt") {
        myzaalt = myzaalt + (myzaalt * Number(mySpecs[spec])) / 100;
      }
    });

    let myPercent = (myzaalt * 100) / myzaalt1 - 100;

    let description =
      "Таны машины шатахуун зарцуулалт хэвийн байна. Санаа зовох зүйлгүй.";
    let rating = "Хэвийн";

    if (myPercent >= 61 && myPercent <= 120) {
      description =
        "Таны машины шатахуун зарцуулалт байж болох хэмжээнээс илүү зарцуулалттай байна. Машиныхаа техник үйлчилгээнд анхаараарай.";
      rating = "Анхаар!";
    } else if (myPercent > 120) {
      description =
        "Хэтэрхий их зарцуулалттай байна. Мэргэжлийн газарт хандаж оношлуулахыг зөвлөе.";
      rating = "Аюултай!!";
    }

    res.json({
      message: "Шатахуун зарцуулалтыг тооцоолж дууслаа",
      cool: mySpecs,
      zaalt: myzaalt.toFixed(2),
      more: myPercent.toFixed(1),
      description,
      rating,
    });
  });
});

//     #    #     #  #####  ####### ### ####### #     #
//    # #   #     # #     #    #     #  #     # ##    #
//   #   #  #     # #          #     #  #     # # #   #
//  #     # #     # #          #     #  #     # #  #  #
//  ####### #     # #          #     #  #     # #   # #
//  #     # #     # #     #    #     #  #     # #    ##
//  #     #  #####   #####     #    ### ####### #     #
exports.loadAuction = functions.https.onRequest((req, res) => {
  // Google Cloud Function res.methods
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Content-Type", "Application/JSON");
  // CORS-enabled req.methods, res.methods
  cors(req, res, () => {
    // your function body here - use the provided req and res from cors
    const myQuery = req.query;

    // console.log("req", req.query);

    const myParams1 = {
      code: "Lms7sw3_Cbna",
      // sql: `select * from main where marka_id='5' AND model_id='567' order by year desc limit 24`,
      ...myQuery,
    };

    // console.log("myParams1myParams1", myParams1);
    // const myParams = stringify(myParams1);

    // Object-ийг Query String болгоно.
    let myParams = "";
    for (var key in myParams1) {
      if (myParams !== "") {
        myParams += "&";
      }
      myParams += key + "=" + encodeURIComponent(myParams1[key]);
    }

    // console.log("myParamsmyParams", myParams);

    axios
      .get(
        "http://50.23.198.149/xml/json" + "?" + myParams,
        // .get(
        //   "http://50.23.198.149/xml/json?code=Lms7sw3_Cbna&sql=select * from main where marka_id='5' AND model_id='567' order by year desc limit 24",
        {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      )
      .then((response) => {
        // console.log("DDDDDDDDDDD", response);

        return res.json({
          message: "Амжилттай холбогдлоо",
          response: response.data,
        });
      })
      .catch((error) => {
        return res.json({
          message: "Алдаа гарлаа",
          error: error,
        });
        // console.log("EEEEEEE", error);
      });
  });
});
