import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const Members_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-text-center gx-my-5 gx-py-5 landing-boxed",
    children: [
      {
        component: "Image",
        className: "gx-my-3",
        width: 32,
        src: "https://www.flaticon.com/svg/static/icons/svg/2017/2017723.svg",
      },
      {
        component: "div",
        className: "gx-mb-5",
        text: "POSITION_1",
      },
      {
        component: "div",
        style: { fontSize: "40px", fontWeight: "lighter", padding: "0 20%" },
        text: "POSITION_2",
      },
      {
        component: "Row",
        className: "gx-d-flex gx-my-5",
        gutter: [5],
        children: [],
      },
    ],
  };

  const mainChildrenComponent = {
    component: "Col",
    span: "6",
    children: {
      component: "div",
      style: {
        height: "100%",
        width: "100%",
        backgroundColor: "POSITION_4",
        borderRadius: "20px",
      },
      children: [
        {
          component: "Image",
          style: {
            padding: "40px",
          },
          src: "https://dev.veritech.mn/POSITION_3",
        },
      ],
    },
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
    mainComponent.children[3].children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
