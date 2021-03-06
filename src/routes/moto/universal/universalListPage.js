import React, { useContext, lazy } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import UniversalListType2 from "../../../components/Moto/UniversalListType2";
import UniversalListType3 from "../../../components/Moto/UniversalListType3";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";
import UniversalContext from "../../../context/UniversalContext";
import { prepareNewsListSettings } from "util/specData/prepareSpecsNews";
import { prepareEngineListSettings } from "util/specData/prepareSpecsEngine";
import NewsFilterDrawer from "../../../components/Moto/Drawer/NewsFilterDrawer";
import UniversalFilterDrawer from "../../../components/Moto/Drawer/UniversalFilterDrawer";
import { UniversalListMeta } from "util/prepareMeta";
import UniversalFilter from "../../../components/Moto/Drawer/UniversalFilter";

const UniversalListPage = () => {
  const filterContext = useContext(FilterContext);
  const universalContext = useContext(UniversalContext);
  // const memberContext = useContext(MemberContext);
  // const OnlyMember = memberContext.OnlyMember;

  let myUniversalListSetting = {
    pagetitle: "Тодорхойгүй",
    menu: "Unknow",
    sortFields: [{}],
    meta: { title: "Тодорхойгүй" },
  };

  switch (filterContext.urlSetting.menu) {
    case "engine":
      myUniversalListSetting = prepareEngineListSettings;
      break;

    default:
      break;
  }

  const renderSwitch = (cardtype) => {
    switch (cardtype) {
      case "typecard":
        return (
          <UniversalListType2
            myListContext={universalContext}
            myListContextLoading={universalContext.universalList.loading}
            myListContextList={universalContext.universalList}
            myListContextListList={universalContext.universalList.mainList}
            mySettings={myUniversalListSetting}
            MyFilter={UniversalFilter}
            MyFilterDrawer={UniversalFilterDrawer}
          />
        );
      case "typetable":
        return (
          <UniversalListType3
            myListContext={universalContext}
            myListContextLoading={universalContext.universalList.loading}
            myListContextList={universalContext.universalList}
            myListContextListList={universalContext.universalList.mainList}
            mySettings={myUniversalListSetting}
            MyFilterDrawer={UniversalFilterDrawer}
          />
        );
      default:
        return (
          <UniversalListType1
            myListContext={universalContext}
            myListContextLoading={universalContext.universalList.loading}
            myListContextList={universalContext.universalList}
            myListContextListList={universalContext.universalList.mainList}
            mySettings={myUniversalListSetting}
            MyFilterDrawer={UniversalFilterDrawer}
          />
        );
    }
  };

  // if (memberContext.state.isLogin) {
  return (
    <>
      {/* <OnlyMember> */}
      <UniversalListMeta meta={myUniversalListSetting.meta} />
      {renderSwitch(filterContext.urlSetting.cardtype.cardtype)}
      {/* </OnlyMember> */}
    </>
  );
  // }
  // return <PleaseLogin />;
};

export default UniversalListPage;
