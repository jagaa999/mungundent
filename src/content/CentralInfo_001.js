import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const CentralInfo_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-my-5 gx-py-5 landing-boxed",
    children: {
      component: "Row",
      children: [
        {
          component: "Col",
          span: "12",
          children: [
            {
              component: "div",
              className: "gx-fs-sm gx-text-success",
              text: "POSITION_1",
            },
            {
              component: "h2",
              style: { fontSize: "40px", fontWeight: "bold" },
              className: "gx-my-3",
              text: "POSITION_2",
            },
            {
              component: "div",
              className: "gx-my-4",
              text:
                "СӨХ болон Оршин суугчдын хооронд хэд хэдэн чухал харилцаа явагддаг. Энэ харилцааг үр дүнтэй, хурдан, бүтээмжтэй байлгахад энэхүү систем тусална.",
            },
            {
              component: "div",
              className: "gx-my-4",
              children: [
                {
                  component: "div",
                  className: "gx-my-2 gx-d-flex gx-vertical-align-middle",
                  text: "POSITION_4",
                  // children: [
                  //   {
                  //     component: "Image",
                  //     width: 19,
                  //     className: "gx-mr-3",
                  //     src:
                  //       "https://www.flaticon.com/svg/static/icons/svg/716/716225.svg",
                  //   },
                  //   {
                  //     component: "span",
                  //   },
                  // ],
                },
              ],
            },
            // {
            //   component: "Button",
            //   className: "gx-border-2",
            //   type: "primary",
            //   text: "Үйлчилгээнүүдийг үзэх",
            // },
          ],
        },
        {
          component: "Col",
          span: "12",
          children: {
            component: "div",
            style: {
              background: "url(https://dev.veritech.mn/POSITION_5)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              display: "inline-block",
              borderRadius: "10px",
            },
          },
        },
      ],
    },
  };

  const mainChildrenComponent = {};

  mainComponent = changePositionWithValue(
    myWidgetItemData[0],
    mainComponent,
    positionSetting
  );

  // Object.values(myWidgetItemData).map((itemWidgetData, index) => {
  //   // console.log("itemWidgetDataitemWidgetData", itemWidgetData);
  //   const myReadyChildrenItem = changePositionWithValue(
  //     itemWidgetData,
  //     mainChildrenComponent,
  //     positionSetting
  //   );

  //   // console.log("myReadyChildrenItem", myReadyChildrenItem);
  //   // mainComponent.children.push(myReadyChildrenItem);
  // });

  return mainComponent;
};
