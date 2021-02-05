import { changePositionWithValue } from "util/changePositionWithValueWidget";

export const Banner_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "Carousel",
    autoplay: false,
    widgetCode: "Banner_001",
    children: [],
  };

  const mainChildrenComponent = {
    component: "div",
    children: [
      {
        component: "div",
        style: {
          background:
            "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2) ), url(https://dev.veritech.mn/POSITION_3)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "450px",
          display: "inline-block",
          width: "100%",
        },
        children: [
          {
            component: "div",
            style: {
              fontSize: "28px",
              fontWeight: "700",
              margin: "100px 0 0 50px",
              color: "#fff",
              maxWidth: "350px",
            },
            text: "POSITION_1",
          },
          {
            component: "div",
            style: {
              color: "#fff",
              fontSize: "14px",
              fontWeight: "400",
              margin: "30px 0 0 50px",
              maxWidth: "450px",
            },
            text: "POSITION_2",
          },
        ],
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
