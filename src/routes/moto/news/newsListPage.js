import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { prepareTitle } from "util/config";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import NewsListType1 from "../../../components/Moto/NewsListType1";
import NewsListType2 from "../../../components/Moto/NewsListType2";
import NewsListType3 from "../../../components/Moto/NewsListType3";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const NewsListPage = () => {
  // const newsListContext = useContext(NewsListContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  // filterContext.state.cardtype = "typecard, typelist";
  const MyHelmet = () => {
    return (
      <Helmet>
        <title>{prepareTitle(`Нийтлэл (${filterContext.totalcount})`)}</title>
        <meta property="fb:app_id" content="186294318100220" />
        <meta
          name="description"
          content="Автомашины ертөнцийн мэдээ нийтлэлүүд"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Нийтлэлүүд" />
        <meta
          property="og:description"
          content="Автомашины ертөнцийн мэдээ нийтлэлүүд"
        />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="mn_MN" />
      </Helmet>
    );
  };

  if (memberContext.state.isLogin) {
    if (filterContext.state.cardtype.cardtype === "typecard") {
      return (
        <>
          <MyHelmet />
          <NewsListType2 />
        </>
      );
    } else if (filterContext.state.cardtype.cardtype === "typetable") {
      return (
        <>
          <MyHelmet />
          <NewsListType3 />
        </>
      );
    } else {
      return (
        <>
          <MyHelmet />
          <NewsListType1 />
        </>
      );
    }
  }

  return <PleaseLogin />;
};

export default NewsListPage;
