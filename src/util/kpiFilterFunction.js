import React, { useContext, useEffect } from "react";
import myFilterData from "util/specData/productFilterData.json";

export const checkKpiCar = (carDrawer, carDetail, kpiFilterItem) => {
  if (carDrawer.onlyThisCar) {
    //Зөвхөн тухайн машинд гэдэг нь чагттай байна. Иймээс myDefault-ийг тухайн машины үзүүлэлтээр солино.
    const myFilterSetting = myFilterData[kpiFilterItem.code];
    let carExactSpec = "";
    switch (kpiFilterItem.code) {
      case "MotoTireSizeDiameter":
        carExactSpec = `R${carDetail.tire2frontdiameter}`;
        console.log("carExactSpec MotoTireSizeDiameter", carExactSpec);
        break;

      default:
        carExactSpec = carDetail[myFilterSetting?.carDetailMapField || ""];
        break;
    }

    let myReturnValue = null;

    Object.values(kpiFilterItem.kpiindicatorvalue).map((item, index) => {
      if (item.code === carExactSpec) {
        myReturnValue = JSON.stringify({
          indicator_id: item.indicatorid,
          value: item.id,
        });
      }
    });

    if (myReturnValue !== null) return myReturnValue;
  }

  return null;
};
