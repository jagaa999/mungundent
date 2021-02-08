import React from "react";
import KpiFilterSelect from "./KpiFilterSelect";
import KpiFilterRadio from "./KpiFilterRadio";
import myFilterData from "util/specData/productFilterData.json";

const KpiFilter = ({ kpiFilterList }) => {
  // console.log("kpiFilterList", kpiFilterList);

  return (
    <>
      {Object.values(kpiFilterList.kpiFilterList?.kpiindicator || {}).map(
        (item, index) => {
          console.log("item", item);
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
          if (myFilterData[item.code]?.type || "" === "radio") {
            console.log("item.code", item.code, "RADIO");
            return <KpiFilterRadio key={index} kpiFilterItem={item} />;
          }

          return <KpiFilterSelect key={index} kpiFilterItem={item} />;
        }
      )}
    </>
  );
};

export default KpiFilter;
