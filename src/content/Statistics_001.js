import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const Statistics_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-my-5, gx-py-5 landing-boxed",
    style: { backgroundColor: "#f1f1f1", borderRadius: "15px" },
    children: [
      {
        component: "div",
        className: "gx-text-center gx-my-5",
        style: { fontSize: "30px", fontWeight: "lighter", padding: "0 30%" },
        text: "POSITION_1",
      },
      {
        component: "Row",
        children: [],
      },
    ],
  };

  const mainChildrenComponent = {
    component: "Col",
    span: "6",
    className: "gx-mb-5 gx-text-center",
    children: [
      {
        component: "div",
        className: "gx-my-4 gx-text-warning",
        style: { fontSize: "50px", fontWeight: "lighter" },
        text: "POSITION_2",
      },
      {
        component: "div",
        style: { margin: "0 40%", borderBottom: "1px solid #d1d1d1" },
      },
      {
        component: "div",
        className: "gx-my-4",
        text: "POSITION_3",
      },
    ],
  };

  // console.log("myWidgetItemDatamyWidgetItemData", myWidgetItemData);
  // console.log("positionSettingpositionSetting", positionSetting);

  mainComponent = changePositionWithValue(
    myWidgetItemData[0],
    mainComponent,
    positionSetting
  );

  Object.values(myWidgetItemData).map((itemWidgetData, index) => {
    const myReadyChildrenItem = changePositionWithValue(
      itemWidgetData,
      mainChildrenComponent,
      positionSetting
    );
    mainComponent.children[1].children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
