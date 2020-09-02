module.exports = {
  footerText: "Copyright Moto.mn © 2020",

  prepareTitle: (myTitle) => {
    if (myTitle) {
      return myTitle.substring(0, 30) + " - Moto.mn";
    } else {
      return "Moto.mn - Car, Parts";
    }
  },
};
