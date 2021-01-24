import { prepareBanner_001 } from "content/prepareBanner_001";

export const runRenderEngine = (myWidgetSetting, myWidgetData) => {
  console.log("myWidgetSetting", myWidgetSetting);
  console.log("myWidgetData", myWidgetData);

  let myJson = [];

  Object.keys(myWidgetData).map((item, index) => {
    if (item !== "id") {
      console.log("item", item);
      const myWidgetItemSetting = myWidgetSetting[item];
      const myWidgetItemData = myWidgetData[item];

      console.log(myWidgetItemSetting);
      console.log(myWidgetItemData);

      const widgetName = myWidgetItemSetting.dtltheme;
      const positionSetting = myWidgetItemSetting.children;

      switch (widgetName) {
        case "Banner_001":
          const itemJson = prepareBanner_001(positionSetting, myWidgetItemData);
          myJson.push(itemJson);
          break;
        case "TopMenu":
          // return <TopMenu />;
          break;

        default:
          break;
      }
    }
  });

  return myJson;
};
