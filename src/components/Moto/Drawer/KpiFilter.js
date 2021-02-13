import React from "react";
import KpiFilterSelect from "./KpiFilterSelect";
import KpiFilterRadio from "./KpiFilterRadio";
import KpiFilterRadioButton1 from "./KpiFilterRadioButton1";
import KpiFilterRadioButton2 from "./KpiFilterRadioButton2";
import KpiFilterCheckbox from "./KpiFilterCheckbox";
import KpiFilterCheckboxLimit from "./KpiFilterCheckboxLimit";
import KpiFilterCheckboxScroll from "./KpiFilterCheckboxScroll";
import myFilterData from "util/specData/productFilterData.json";

const KpiFilter = ({ kpiFilterList }) => {
  // console.log("kpiFilterList", kpiFilterList);
  const myFilterList = Object.values(
    kpiFilterList.kpiFilterList?.kpiindicator || []
  );

  //productFilterData.json дотор байгаа дарааллаар Filter-үүдийн дарааллыг тавьж өгнө.

  return (
    <>
      {myFilterList.map((item, index) => {
        // console.log("item", item);
        // code: "MotoTireSizeWidth"
        // id: "16102833420031"
        // kpiindicatorvalue: {0: {…}, 1: {…}, 2: {…}}
        // lookupmetadataid: "1591877897010671"
        // name: "Дугуйн width"
        // showtype: ""
        // templateid: "16102833259511"

        // myFilterData;
        // console.log(myFilterData[item.code]);
        // console.log(myFilterData[item.code]?.type);
        if ((myFilterData[item.code]?.type || "") === "radio") {
          return <KpiFilterRadio key={index} kpiFilterItem={item} />;
        }

        if ((myFilterData[item.code]?.type || "") === "radiobutton1") {
          return <KpiFilterRadioButton1 key={index} kpiFilterItem={item} />;
        }

        if ((myFilterData[item.code]?.type || "") === "radiobutton2") {
          return <KpiFilterRadioButton2 key={index} kpiFilterItem={item} />;
        }

        if ((myFilterData[item.code]?.type || "") === "checkbox") {
          return <KpiFilterCheckbox key={index} kpiFilterItem={item} />;
        }

        if ((myFilterData[item.code]?.type || "") === "checkboxlimit") {
          return <KpiFilterCheckboxLimit key={index} kpiFilterItem={item} />;
        }

        if ((myFilterData[item.code]?.type || "") === "checkboxscroll") {
          return <KpiFilterCheckboxScroll key={index} kpiFilterItem={item} />;
        }

        return <KpiFilterSelect key={index} kpiFilterItem={item} />;
      })}
    </>
  );
};

export default KpiFilter;
