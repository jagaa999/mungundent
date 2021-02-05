import { changePositionWithValue } from "../util/changePositionWithValueWidget";

export const CentralBanner_001 = (positionSetting, myWidgetItemData) => {
  let mainComponent = {
    component: "div",
    className: "gx-my-5 gx-py-5 boxed",
    children: [
      {
        component: "div",
        className: "gx-text-center gx-my-5",
        style: { fontSize: "29px", fontWeight: "bold" },
        text: "Нэвтэрч орох",
      },
      {
        component: "Row",
        gutter: [1],
        children: [],
      },
      { component: "div", className: "gx-mb-5" },
    ],
  };

  const mainChildrenComponent = {
    component: "Col",
    span: "12",
    children: {
      component: "div",
      className: "gx-p-4 gx-text-center",
      style: {
        // float: "right",
        backgroundColor: "POSITION_6",
        borderRadius: "27px",
        minHeight: "150px",
        maxWidth: "300px",
        color: "#fff",
      },
      children: [
        {
          component: "Image",
          src: "https://dev.veritech.mn/POSITION_3",
        },
        {
          component: "div",
          className: "gx-mb-3",
          style: { fontSize: "23px", fontWeight: "bold" },
          text: "POSITION_1",
        },
        { component: "Divider", className: "gx-my-5" },
        {
          component: "div",
          className: "gx-my-4",
          text: "POSITION_2",
        },
        // Link to POSITION_5

        {
          component: "a",
          href: "POSITION_5",
          children: {
            component: "Button",
            className: "gx-mt-4",
            text: "POSITION_4",
          },
        },
      ],
    },
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
