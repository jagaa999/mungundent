import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const Feedbacks_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-my-5 gx-py-5 landing-boxed",
    children: {
      component: "Row",
      gutter: [0, 0],
      type: "flex",
      justify: "center",
      children: [
        {
          component: "Col",
          span: 12,
          style: { paddingRight: "0" },
          children: {
            component: "div",
            style: {
              backgroundColor: "POSITION_4",
              height: "100%",
              width: "100%",
              display: "inline-block",
            },
            children: [
              {
                component: "div",
                className: "gx-text-white gx-p-5 gx-mx-auto gx-mt-5",
                style: {
                  border: "1px solid #fff",
                  width: "80%",
                  marginBottom: "155px",
                },
                children: [
                  {
                    component: "div",
                    className: "gx-fs-xxl gx-font-weight-bold",
                    text: "POSITION_1",
                  },
                  {
                    component: "div",
                    className: "gx-mt-3",
                    text: "POSITION_2",
                  },
                ],
              },
            ],
          },
        },
        {
          component: "Col",
          span: 12,
          style: { paddingLeft: "0" },
          children: {
            component: "div",
            style: {
              background: "url(https://dev.veritech.mn/POSITION_3)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              display: "inline-block",
            },
          },
        },
      ],
    },
  };

  const mainChildrenComponent = {};

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
    // mainComponent.children.children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
