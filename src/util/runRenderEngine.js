import { Banner_001 } from "content/Banner_001";
import { TopMenu } from "content/TopMenu";
import { isEmpty } from "lodash";

export const runRenderEngine = (myWidgetSetting, myWidgetData) => {
  // console.log("myWidgetSetting", myWidgetSetting);
  // console.log("myWidgetData", myWidgetData);

  let myJson = [];

  Object.keys(myWidgetData).map((item, index) => {
    if (item !== "id") {
      // console.log("item", item);
      const myWidgetItemSetting = myWidgetSetting[item];
      const myWidgetItemData = myWidgetData[item];

      // console.log(myWidgetItemSetting);
      // console.log(myWidgetItemData);

      const widgetName = myWidgetItemSetting.dtltheme;
      const positionSetting = myWidgetItemSetting.children;

      let itemJson = {};
      switch (widgetName) {
        case "Banner_001":
          itemJson = Banner_001(positionSetting, myWidgetItemData);
          break;
        case "TopMenu":
          itemJson = TopMenu(positionSetting, myWidgetItemData);
          break;

        default:
          break;
      }

      if (!isEmpty(itemJson)) {
        myJson.push(itemJson);
      }
    }
  });

  return myJson;
};
