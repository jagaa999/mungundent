export const changePositionWithValue = (
  itemWidgetData,
  mainChildrenComponent,
  positionSetting
) => {
  // console.log("itemWidgetData", itemWidgetData);
  // console.log("positionSetting", positionSetting);

  let myMappingArray = [];
  Object.keys(positionSetting).map((item, index) => {
    const myFieldName = item;
    const myPositionName = "POSITION_" + positionSetting[item].themepositionno;

    const myValue = itemWidgetData[myFieldName];

    myMappingArray.push({ [myPositionName]: myValue });
  });

  // console.log("myMappingArray", myMappingArray);
  // console.log("mainChildrenComponent", mainChildrenComponent);

  let myJSON = JSON.stringify(mainChildrenComponent);

  myMappingArray.map((item, index) => {
    // console.log("item key", item);
    const myKey = Object.keys(item)[0]?.toString();
    const myValue = item[Object.keys(item)[0]]?.toString();
    // console.log("item key", myKey);
    // console.log("item value", myValue);

    // console.log("before myJSON", myJSON);
    myJSON = myJSON.replaceAll(myKey, myValue);
    // console.log("after myJSON", myJSON);
  });

  myJSON = JSON.parse(myJSON);

  return myJSON;
};
