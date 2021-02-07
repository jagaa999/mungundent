import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const Textbox_01 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "Row",
    // widgetCode: "textbox-01",
    className: "landing-boxed",
    children: [
      {
        component: "Col",
        span: "16",
        offset: "4",
        className: "gx-mb-5",
        children: [],
      },
    ],
  };

  const mainChildrenComponent = {
    component: "div",
    children: [
      {
        component: "h3",
        className: "gx-my-4",
        text: "POSITION_1",
      },
      {
        component: "div",
        className: "gx-my-4",
        text: "POSITION_2",
      },
    ],
  };

  Object.values(myWidgetItemData).map((itemWidgetData, index) => {
    // console.log("ddddddddd", mainChildrenComponent);
    const myReadyChildrenItem = changePositionWithValue(
      itemWidgetData,
      mainChildrenComponent,
      positionSetting
    );

    // console.log("myReadyChildrenItem", myReadyChildrenItem);

    // mainComponent.children.push(mainChildrenComponent);
    mainComponent.children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
