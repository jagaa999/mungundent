import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import UniversalListType2 from "../../../components/Moto/UniversalListType2";
import UniversalListType3 from "../../../components/Moto/UniversalListType3";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";
import NewsContext from "../../../context/NewsContext";
import { prepareNewsListSettings } from "util/prepareSpecsNews";
import NewsFilterDrawer from "../../../components/Moto/Drawer/NewsFilterDrawer";
import { UniversalListMeta } from "util/prepareMeta";

const NewsListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);
  const newsContext = useContext(NewsContext);
  const OnlyMember = memberContext.OnlyMember;

  const renderSwitch = (cardtype) => {
    switch (cardtype) {
      case "typecard":
        return (
          <UniversalListType2
            myListContext={newsContext}
            myListContextLoading={newsContext.newsList.loading}
            myListContextList={newsContext.newsList}
            myListContextListList={newsContext.newsList.mainList}
            mySettings={prepareNewsListSettings}
            MyFilterDrawer={NewsFilterDrawer}
          />
        );
      case "typetable":
        return (
          <UniversalListType3
            myListContext={newsContext}
            myListContextLoading={newsContext.newsList.loading}
            myListContextList={newsContext.newsList}
            myListContextListList={newsContext.newsList.mainList}
            mySettings={prepareNewsListSettings}
            MyFilterDrawer={NewsFilterDrawer}
          />
        );
      default:
        return (
          <UniversalListType1
            myListContext={newsContext}
            myListContextLoading={newsContext.newsList.loading}
            myListContextList={newsContext.newsList}
            myListContextListList={newsContext.newsList.mainList}
            mySettings={prepareNewsListSettings}
            MyFilterDrawer={NewsFilterDrawer}
          />
        );
    }
  };

  // if (memberContext.state.isLogin) {
  return (
    <>
      {/* <OnlyMember> */}
      <UniversalListMeta meta={prepareNewsListSettings.meta} />
      {renderSwitch(filterContext.urlSetting.cardtype.cardtype)}
      {/* </OnlyMember> */}
    </>
  );
  // }
  // return <PleaseLogin />;
};

export default NewsListPage;
