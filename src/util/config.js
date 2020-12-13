module.exports = {
  footerText: "Copyright Moto.mn © 2020",

  prepareTitle: (myTitle) => {
    if (myTitle) {
      return myTitle.substring(0, 30) + " - Moto.mn";
    } else {
      return "Moto.mn - Car, Parts";
    }
  },

  defaultSrc: (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg";
  },

  prepareImageSrc: (mySrc) => {
    // console.log("FFFFFFFFFFFFF", mySrc);
    // storage/uploads/content/autozar/1587535124048720/2020/04/picture_1587535463.jpg
    if (mySrc.slice(0, 8) === "storage/") {
      return `https://cloudapi.moto.mn/${mySrc}`;
    }

    if (mySrc === "") {
      return "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg";
    }

    return mySrc;
  },

  formStandardLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 17 },
    },
  },

  formCompactLayout: {
    labelCol: {
      xs: { span: 0 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 17 },
    },
  },
};
