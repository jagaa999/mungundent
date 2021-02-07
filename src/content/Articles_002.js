import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const Articles_002 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "Row",
    className: "gx-d-flex landing-boxed",
    children: [],
  };
  const mainChildrenComponent = {
    component: "Col",
    span: "8",
    children: [
      {
        component: "div",
        className: "gx-m-0 gx-p-2 gx-pb-4",
        style: { height: "100%" },
        children: [
          {
            component: "div",
            style: {
              backgroundImage: "url(https://dev.veritech.mn/POSITION_1)",
              backgroundColor: "POSITION_2",
              backgroundPosition: "center center",
              backgroundSize: "30px 30px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
              padding: "32px",
              margin: "30px",
              borderRadius: "100%",
              color: "#fff",
            },
          },
          {
            component: "h4",
            className: "gx-font-weight-bold gx-mb-3",
            text: "POSITION_3",
          },
          {
            component: "div",
            text: "POSITION_4",
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
    mainComponent.children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
