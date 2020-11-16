import React from "react";
import moment from "moment";

export function calculateSpecialTax(auctionItem, isHybrid = false) {
  // console.log("ЭНИЙГ ХАРАА", auctionItem);
  const myEngine = auctionItem.ENG_V;
  const myYear = moment().year() - auctionItem.YEAR;

  // console.log("myYearmyYear", myYear);

  const mglFormula = {
    3: {
      1500: 750000,
      2500: 2300000,
      3500: 3050000,
      4500: 6850750,
      4501: 14210000,
    },
    6: {
      1500: 1600000,
      2500: 3200000,
      3500: 4000000,
      4500: 8000000,
      4501: 27200000,
    },
    9: {
      1500: 3350000,
      2500: 5000000,
      3500: 6700000,
      4500: 10850000,
      4501: 39150000,
    },
    10: {
      1500: 10000000,
      2500: 11700000,
      3500: 13350000,
      4500: 17500000,
      4501: 65975000,
    },
  };

  let myCol = 3;
  let myRow = 1500;

  switch (true) {
    case myYear <= 3:
      myCol = 3;
      break;
    case myYear >= 4 && myYear <= 6:
      myCol = 6;
      break;
    case myYear >= 7 && myYear <= 9:
      myCol = 9;
      break;
    case myYear >= 10:
      myCol = 10;
      break;
    default:
      myCol = 3;
      break;
  }

  // console.log("myCol myCol", myCol);

  switch (true) {
    case myEngine <= 1500:
      myRow = 1500;
      break;
    case myEngine >= 1501 && myEngine <= 2500:
      myRow = 2500;
      break;
    case myEngine >= 2501 && myEngine <= 3500:
      myRow = 3500;
      break;
    case myEngine >= 3501 && myEngine <= 4500:
      myRow = 4500;
      break;
    case myEngine >= 4501:
      myRow = 4501;
      break;
    default:
      myRow = 1500;
      break;
  }

  let mySpecialTax = mglFormula[myCol][myRow];

  if (isHybrid) mySpecialTax = mySpecialTax / 2;

  // console.log("mySpecialTax mySpecialTax", mySpecialTax);

  return mySpecialTax;
}

//              0-3 жил	4-6 жил	7-9 жил	10 ба түүнээс дээш жил
// 1	1500-доош	750,000	1,600,000	3,350,000	10,000,000
// 2	1501-2500	2,300,000	3,200,000	5,000,000	11,700,000
// 3	2501-3500	3,050,000	4,000,000	6,700,000	13,350,000
// 4	3501-4500	6,850,750	8,000,000	10,850,000	17,500,000
// 5	4501-дээш	14,210,000	27,200,000	39,150,000	65,975,000
