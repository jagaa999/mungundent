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
};
