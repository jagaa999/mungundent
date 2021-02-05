import { changePositionWithValue } from "util/changePositionWithValueWidget";

export const TopMenu = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "Header",
    widgetCode: "TopMenu",
    style: {
      height: "48px",
      flexWrap: "nowrap",
      margin: "0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
      backgroundColor: "#213b7c",
      color: "#fbfbfb",
    },
    children: [
      {
        component: "div",
        children: [
          {
            component: "img",
            style: {
              width: "auto",
              height: "28px",
              filter: "brightness(0) invert(1)",
            },
            src: "https://www.flaticon.com/svg/static/icons/svg/31/31611.svg",
          },
        ],
      },
      {
        component: "Menu",
        mode: "horizontal",
        className: "gx-text-white gx-ml-5",
        style: {},
        defaultSelectedKeys: ["home"],
        children: [
          // {
          //   component: "MenuItem",
          //   key: "home",
          //   children: [
          //     {
          //       component: "span",
          //       text: "Нүүр",
          //     },
          //   ],
          // },
          // {
          //   component: "MenuItem",
          //   key: "mail",
          //   children: [
          //     {
          //       component: "span",
          //       text: "СӨХ",
          //     },
          //   ],
          // },
          // {
          //   component: "MenuItem",
          //   key: "about",
          //   children: [
          //     {
          //       component: "span",
          //       text: "Системийн тухай",
          //     },
          //   ],
          // },
          // {
          //   component: "MenuItem",
          //   key: "faq",
          //   children: [
          //     {
          //       component: "span",
          //       text: "Асуулт хариулт?",
          //     },
          //   ],
          // },
        ],
      },
      {
        component: "div",
        text: "Нэвтрэх",
        style: { marginLeft: "auto" },
      },
    ],
  };

  const mainChildrenComponent = {
    component: "MenuItem",
    key: "POSITION_1",
    children: [
      {
        component: "span",
        text: "POSITION_1",
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
    mainComponent.children[1].children.push(myReadyChildrenItem);
  });

  return mainComponent;
};
