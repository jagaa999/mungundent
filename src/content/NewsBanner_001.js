import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const NewsBanner_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "Row",
    className: "gx-d-flex landing-boxed",
    children: [
      {
        component: "Col",
        span: 9,
        children: {
          component: "div",
          style: {
            background: "url(https://dev.veritech.mn/POSITION_3)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "100%",
            display: "inline-block",
            width: "100%",
          },

          children: [
            {
              component: "div",
              style: {
                border: "1px solid #fff",

                margin: "30px auto",
                width: "70%",
              },
              className: "gx-text-white gx-p-3",
              children: [
                {
                  component: "div",
                  style: { fontSize: "36px", fontWeight: "bold" },
                  text: "POSITION_1",
                },
                {
                  component: "div",
                  style: { fontSize: "16px", fontWeight: "normal" },
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
        span: 15,
        style: {
          height: "100%",
          display: "inline-block",
          // background: "yellow",
          padding: "100px 30px 100px 50px",
        },
        children: [
          {
            component: "div",
            style: { fontSize: "40px", fontWeight: "bold" },
            text: "Юм байхгүй",
          },
        ],
      },
    ],
  };

  const mainChildrenComponent = {};

  // console.log("myWidgetItemDatamyWidgetItemData", myWidgetItemData);
  // console.log("positionSettingpositionSetting", positionSetting);

  mainComponent = changePositionWithValue(
    myWidgetItemData[0],
    mainComponent,
    positionSetting
  );

  // Object.values(myWidgetItemData).map((itemWidgetData, index) => {
  //   const myReadyChildrenItem = changePositionWithValue(
  //     itemWidgetData,
  //     mainChildrenComponent,
  //     positionSetting
  //   );
  //   // mainComponent.children[3].children.push(myReadyChildrenItem);
  // });

  return mainComponent;
};
