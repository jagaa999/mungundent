import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import AutozarListType3 from "../../../components/Moto/AutozarListType3";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import UniversalListType2 from "../../../components/Moto/UniversalListType2";
import AutozarContext from "../../../context/AutozarContext";
import { prepareAutozarSettings } from "util/prepareSpecs";
import AutozarFilterDrawer from "../../../components/Moto/Drawer/AutozarFilterDrawer";

const AutozarListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);
  const autozarContext = useContext(AutozarContext);

  if (filterContext.state.cardtype.cardtype === "typecard") {
    // return <AutozarListType2 />;
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
  } else if (filterContext.state.cardtype.cardtype === "typetable") {
    return <AutozarListType3 />;
  } else {
    // return <AutozarListType1 />;
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

  // if (memberContext.state.isLogin) {
  //   return <AutozarListType1 />;
  // }

  return <PleaseLogin />;
};

export default AutozarListPage;
