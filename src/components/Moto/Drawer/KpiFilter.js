import React from "react";
import KpiFilterSelect from "./KpiFilterSelect";

const KpiFilter = ({ kpiFilterList }) => {
  // console.log("kpiFilterList", kpiFilterList);

  return (
    <>
      {Object.values(kpiFilterList.kpiFilterList?.kpiindicator || {}).map(
        (item, index) => {
          // console.log("item", item);
          // code: "MotoTireSizeWidth"
          // id: "16102833420031"
          // kpiindicatorvalue: {0: {…}, 1: {…}, 2: {…}}
          // lookupmetadataid: "1591877897010671"
          // name: "Дугуйн width"
          // showtype: ""
          // templateid: "16102833259511"

          return <KpiFilterSelect key={index} kpiFilterItem={item} />;
        }
      )}
    </>
  );
};

export default KpiFilter;
