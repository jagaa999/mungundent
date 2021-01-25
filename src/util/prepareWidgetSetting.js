function lastWord(words) {
  var n = words.split(".");
  return n[n.length - 1];
}

export const prepareWidgetSetting = (myRawData) => {
  const myRawArray = Object.values(
    myRawData.meta_process_param_attr_link_mobile
  );

  // console.log("myRawArray", myRawArray);

  let myParents = {};

  // let myParents = [];
  let myTempChilds = [];
  myRawArray.map((item, index) => {
    if (item.parentid === "" && item.dtltheme !== "" && item.isshow === "1") {
      const fff = {
        ...item,
        children: {},
      };
      const ggg = fff.parampath.toString().toLowerCase();
      myParents[ggg] = fff;
    }

    if (item.parentid !== "" && item.isshow === "1") myTempChilds.push(item);
  });

  // console.log("between myParents", myParents);

  Object.entries(myParents).map((parentItem, parentIndex) => {
    const field0 = parentItem[0];
    const field1 = parentItem[1];
    const parentid = field1.id;

    // console.log("field1", field1);
    // console.log("parentid", parentid);

    myTempChilds.map((childItem, childrenIndex) => {
      // console.log("childItem", childItem);

      if (parentid === childItem.parentid && childItem.themepositionno !== "") {
        const rrr = lastWord(childItem.parampath.toString().toLowerCase());
        // myParents[field0].children.push(childItem);
        myParents[field0].children[rrr] = childItem;
      }
    });
  });

  // console.log("myFfffParents", myParents);

  return myParents;
};

export const prepareWidgetData = (myData, mySetting) => {
  // console.log("myData", myData);
  const myRawData = Object.keys(myData).slice(1);
  // console.log("myRawData", myRawData);

  myRawData.map((field) => {
    const myWidget = myData[field];
    // console.log("myWidget", myWidget);

    const ddd = Object.keys(myWidget);
    ddd.map((widdd) => {
      const widgetField = myWidget[widdd];
      // console.log("widgetField", widgetField);
    });
  });

  return myRawData;
};
