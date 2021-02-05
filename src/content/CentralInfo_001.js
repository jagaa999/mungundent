import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const CentralInfo_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-my-5 gx-py-5 boxed",
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
              text: "Бидний тухай",
            },
            {
              component: "h2",
              style: { fontSize: "40px", fontWeight: "bold" },
              className: "gx-my-3",
              text: "СӨХ-ийн портал",
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
                  children: [
                    {
                      component: "Image",
                      width: 19,
                      className: "gx-mr-3",
                      src:
                        "https://www.flaticon.com/svg/static/icons/svg/716/716225.svg",
                    },
                    {
                      component: "span",
                      text: "СӨХ-д санал хүсэлт өгөх",
                    },
                  ],
                },
                {
                  component: "div",
                  className: "gx-my-2 gx-d-flex gx-vertical-align-middle",
                  children: [
                    {
                      component: "Image",
                      width: 19,
                      className: "gx-mr-3",
                      src:
                        "https://www.flaticon.com/svg/static/icons/svg/716/716225.svg",
                    },
                    {
                      component: "span",
                      text: "СӨХ-ийн тухай мэдээлэл авах",
                    },
                  ],
                },
                {
                  component: "div",
                  className: "gx-my-2 gx-d-flex gx-vertical-align-middle",
                  children: [
                    {
                      component: "Image",
                      width: 19,
                      className: "gx-mr-3",
                      src:
                        "https://www.flaticon.com/svg/static/icons/svg/716/716225.svg",
                    },
                    {
                      component: "span",
                      text: "СӨХ-ийн хурал зөвлөгөөнд оролцох",
                    },
                  ],
                },
                {
                  component: "div",
                  className: "gx-my-2 gx-d-flex gx-vertical-align-middle",
                  children: [
                    {
                      component: "Image",
                      width: 19,
                      className: "gx-mr-3",
                      src:
                        "https://www.flaticon.com/svg/static/icons/svg/716/716225.svg",
                    },
                    {
                      component: "span",
                      text: "Online community зохион байгуулах",
                    },
                  ],
                },
                {
                  component: "div",
                  className: "gx-my-2 gx-d-flex gx-vertical-align-middle",
                  children: [
                    {
                      component: "Image",
                      width: 19,
                      className: "gx-mr-3",
                      src:
                        "https://www.flaticon.com/svg/static/icons/svg/716/716225.svg",
                    },
                    {
                      component: "span",
                      text: "СӨХ-ийн тайлан, зөвлөмжийг үзэх",
                    },
                  ],
                },
                {
                  component: "div",
                  className: "gx-my-2 gx-d-flex gx-vertical-align-middle",
                  children: [
                    {
                      component: "Image",
                      width: 19,
                      className: "gx-mr-3",
                      src:
                        "https://www.flaticon.com/svg/static/icons/svg/716/716225.svg",
                    },
                    {
                      component: "span",
                      text: "СӨХ-ийн төлбөр төлөх",
                    },
                  ],
                },
              ],
            },
            {
              component: "Button",
              className: "gx-border-2",
              type: "primary",
              text: "Үйлчилгээнүүдийг үзэх",
            },
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

  Object.values(myWidgetItemData).map((itemWidgetData, index) => {
    // console.log("ddddddddd", mainChildrenComponent);
    const myReadyChildrenItem = changePositionWithValue(
      itemWidgetData,
      mainChildrenComponent,
      positionSetting
    );

    // console.log("myReadyChildrenItem", myReadyChildrenItem);

    // mainComponent.children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
