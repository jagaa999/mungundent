import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const News_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "Row",
    className: "gx-d-flex landing-boxed",
    children: [
      {
        component: "Col",
        span: 9,
        children: {
          component: "h1",
          text: "юм байхгүй",
        },
      },
      {
        component: "Col",
        span: 15,
        style: {
          height: "100%",
          display: "inline-block",
          padding: "100px 30px 100px 50px",
        },
        children: [
          {
            component: "div",
            style: { fontSize: "40px", fontWeight: "bold" },
            text: "POSITION_7",
          },
          {
            component: "div",
            style: { fontSize: "17px", fontWeight: "bold" },
            text: "Энд өгөгдөл ирээгүй!",
          },
          { component: "Divider", className: "gx-my-3" },
          {
            component: "div",
            // style: { background: "#b1b1b1" },
            children: [],
          },
        ],
      },
    ],
  };

  const mainChildrenComponent = {
    component: "div",
    style: {
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      paddingBottom: "30px",
      marginBottom: "30px",
    },
    children: {
      component: "Row",
      children: [
        {
          component: "Col",
          span: 8,
          children: {
            component: "Image",
            className: "gx-w-100",
            src: "https://dev.veritech.mn/POSITION_3",
          },
        },
        {
          component: "Col",
          span: 16,
          children: [
            {
              component: "h3",
              className: "gx-fs-xxl gx-font-weight-bold",
              text: "POSITION_1",
            },
            {
              component: "div",
              className: "gx-text-grey",
              text: "POSITION_4 • POSITION_5",
            },
            {
              component: "div",
              className: "",
              text: "POSITION_2",
            },
          ],
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
    mainComponent.children[1].children[3].children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
