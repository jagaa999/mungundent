import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
// import MemberContext from "../../../context/MemberContext";
// import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import UniversalListType2 from "../../../components/Moto/UniversalListType2";
import UniversalListType3 from "../../../components/Moto/UniversalListType3";
import AutozarContext from "../../../context/AutozarContext";
import { prepareAutozarSettings } from "util/prepareSpecsAutozar";
import AutozarFilterDrawer from "../../../components/Moto/Drawer/AutozarFilterDrawer";
import UniversalMeta from "util/prepareMeta";

const AutozarListPage = () => {
  const filterContext = useContext(FilterContext);
  // const memberContext = useContext(MemberContext);
  const autozarContext = useContext(AutozarContext);

  const renderSwitch = (cardtype) => {
    switch (cardtype) {
      case "typecard":
        return (
          <UniversalListType2
            myListContext={autozarContext}
            myListContextLoading={autozarContext.autozarList.loading}
            myListContextList={autozarContext.autozarList}
            myListContextListList={autozarContext.autozarList.autozarList}
            mySettings={prepareAutozarSettings}
            MyFilterDrawer={AutozarFilterDrawer}
          />
        );
      case "typetable":
        return (
          <UniversalListType3
            myListContext={autozarContext}
            myListContextLoading={autozarContext.autozarList.loading}
            myListContextList={autozarContext.autozarList}
            myListContextListList={autozarContext.autozarList.autozarList}
            mySettings={prepareAutozarSettings}
            MyFilterDrawer={AutozarFilterDrawer}
          />
        );
      default:
        return (
          <UniversalListType1
            myListContext={autozarContext}
            myListContextLoading={autozarContext.autozarList.loading}
            myListContextList={autozarContext.autozarList}
            myListContextListList={autozarContext.autozarList.autozarList}
            mySettings={prepareAutozarSettings}
            MyFilterDrawer={AutozarFilterDrawer}
          />
        );
    }
  };

  return (
    <>
      <UniversalMeta meta={prepareAutozarSettings.meta} />
      {renderSwitch(filterContext.state.cardtype.cardtype)}
    </>
  );
};

export default AutozarListPage;

// if (memberContext.state.isLogin) {
//   return <AutozarListType1 />;
// }
// return <PleaseLogin />;
