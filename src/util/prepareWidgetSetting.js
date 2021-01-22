import React from "react";

export const prepareWidgetSetting = (myRawData) => {
  const myRawArray = Object.values(
    myRawData.meta_process_param_attr_link_mobile
  );

  console.log("myRawArray", myRawArray);

  let myParents = [];
  let myTempChilds = [];
  myRawArray.map((item, index) => {
    if (item.parentid === "" && item.dtltheme !== "" && item.isshow === "1")
      myParents.push(item);

    if (item.parentid !== "" && item.isshow === "1") myTempChilds.push(item);
  });
  console.log("myParents", myParents);
  console.log("myTempChilds", myTempChilds);

  myParents.map((item, index) => {
    const parentid = item.id;
    myTempChilds.map((item, index) => {});
  });

  return myRawArray;
};
