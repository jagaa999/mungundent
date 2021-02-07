import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const CentralCard_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-my-5 gx-py-5 landing-boxed",
    children: {
      component: "Row",
      gutter: [8, 8],
      type: "flex",
      children: [],
    },
  };

  const mainChildrenComponent = {
    component: "Col",
    xl: 6,
    lg: 6,
    md: 12,
    sm: 12,
    xs: 24,
    children: [
      {
        component: "Card",
        style: { background: "POSITION_4", height: "100%" },
        children: [
          {
            component: "Image",
            src: "https://dev.veritech.mn/POSITION_1",
          },
          {
            component: "div",
            className: "gx-mt-3 gx-fs-xxl gx-font-weight-bold",
            text: "POSITION_2",
          },
          {
            component: "div",
            className: "gx-mt-3",
            text: "POSITION_3",
          },
        ],
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
    mainComponent.children.children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
