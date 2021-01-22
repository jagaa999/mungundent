import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import CompanyContext from "../../../context/CompanyContext";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const CompanyListPage = () => {
  const filterContext = useContext(FilterContext);
  const companyContext = useContext(CompanyContext);

  if (filterContext.state.cardtype.cardtype === "typecard") {
    return (
      <UniversalListType1
        myListContext={companyContext}
        myListContextLoading={companyContext.companyList.loading}
        myListContextList={companyContext.companyList}
        myListContextListList={companyContext.companyList.companyList}
      />
    );
  } else if (filterContext.state.cardtype.cardtype === "typetable") {
    return (
      <UniversalListType1
        myListContext={companyContext}
        myListContextLoading={companyContext.companyList.loading}
        myListContextList={companyContext.companyList}
      />
    );
  } else {
    return (
      <UniversalListType1
        myListContext={companyContext}
        myListContextLoading={companyContext.companyList.loading}
        myListContextListList={companyContext.companyList.companyList}
      />
    );
  }

  return <PleaseLogin />;
};

export default CompanyListPage;
