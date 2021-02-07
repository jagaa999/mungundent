import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const Articles_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-my-5 gx-text-center gx-py-5 landing-boxed",
    style: { backgroundColor: "#f7f9fc", width: "100%" },
    children: [
      {
        component: "div",
        className: "gx-fs-sm gx-text-warning",
        text: "POSITION_1",
      },
      {
        component: "div",
        style: { fontSize: "40px", fontWeight: "bold" },
        text: "POSITION_2",
      },
      {
        component: "div",
        text: "Desc дата ирж байгаа ч Position дээр байхгүй.",
      },
    ],
  };

  // const mainChildrenComponent = {
  //   component: "div",
  //   children: [
  //     {
  //       component: "h3",
  //       className: "gx-my-4",
  //       text: "бөбы",
  //     },
  //   ],
  // };

  // console.log("myWidgetItemDatamyWidgetItemData", myWidgetItemData);
  // console.log("positionSettingpositionSetting", positionSetting);

  mainComponent = changePositionWithValue(
    myWidgetItemData[0],
    mainComponent,
    positionSetting
  );

  Object.values(myWidgetItemData).map((itemWidgetData, index) => {
    // const myReadyChildrenItem = changePositionWithValue(
    //   itemWidgetData,
    //   mainChildrenComponent,
    //   positionSetting
    // );
    // mainComponent.children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
