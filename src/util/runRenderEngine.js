import { isEmpty } from "lodash";
import { Banner_001 } from "../content/Banner_001";
import { TopMenu } from "../content/TopMenu";
import { Textbox_01 } from "../content/Textbox_01";
import { CentralBanner_001 } from "../content/CentralBanner_001";
import { CentralInfo_001 } from "../content/CentralInfo_001";
import { Articles_001 } from "../content/Articles_001";
import { Articles_002 } from "../content/Articles_002";
import { CentralCard_001 } from "../content/CentralCard_001";
import { Feedbacks_001 } from "../content/Feedbacks_001";
import { Statistics_001 } from "../content/Statistics_001";
import { Members_001 } from "../content/Members_001";
import { NewsBanner_001 } from "../content/NewsBanner_001";
import { News_001 } from "../content/News_001";

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
        case "TopMenu":
          itemJson = TopMenu(positionSetting, myWidgetItemData);
          break;
        case "Banner_001":
          itemJson = Banner_001(positionSetting, myWidgetItemData);
          break;
        case "textbox-01":
          itemJson = Textbox_01(positionSetting, myWidgetItemData);
          break;
        case "CentralBanner_001":
          itemJson = CentralBanner_001(positionSetting, myWidgetItemData);
          break;
        case "CentralInfo_001":
          itemJson = CentralInfo_001(positionSetting, myWidgetItemData);
          break;
        case "Articles_001":
          itemJson = Articles_001(positionSetting, myWidgetItemData);
          break;
        case "CentralCard_001":
          itemJson = CentralCard_001(positionSetting, myWidgetItemData);
          break;
        case "Feedbacks_001":
          itemJson = Feedbacks_001(positionSetting, myWidgetItemData);
          break;
        case "Statistics_001":
          itemJson = Statistics_001(positionSetting, myWidgetItemData);
          break;
        case "Members_001":
          itemJson = Members_001(positionSetting, myWidgetItemData);
          break;
        case "NewsBanner_001":
          itemJson = NewsBanner_001(positionSetting, myWidgetItemData);
          break;
        case "News_001":
          console.log(
            "News_001",
            positionSetting,
            "DATA-------",
            myWidgetItemData
          );
          itemJson = News_001(positionSetting, myWidgetItemData);
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
