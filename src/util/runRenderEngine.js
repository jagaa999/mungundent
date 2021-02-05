import { Banner_001 } from "../content/Banner_001";
import { TopMenu } from "../content/TopMenu";
import { Textbox_01 } from "../content/Textbox_01";
import { CentralBanner_001 } from "../content/CentralBanner_001";
import { CentralInfo_001 } from "../content/CentralInfo_001";
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
        case "textbox-01":
          itemJson = Textbox_01(positionSetting, myWidgetItemData);
          break;
        case "CentralBanner_001":
          itemJson = CentralBanner_001(positionSetting, myWidgetItemData);
          break;
        case "CentralInfo_001":
          console.log("CentralInfo_001", positionSetting, myWidgetItemData);
          itemJson = CentralInfo_001(positionSetting, myWidgetItemData);
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
