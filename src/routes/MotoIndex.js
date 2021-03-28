import React, { useContext, lazy } from "react";
import { Route, Switch } from "react-router-dom";

// import { BackTop } from "antd";

import FilterContext from "context/FilterContext";

import Components from "./components/index";
import CustomViews from "./customViews/index";
import Extensions from "./extensions/index";
import ExtraComponents from "./extraComponents/index";
import InBuiltApps from "./inBuiltApps/index";
import SocialApps from "./socialApps/index";
import Main from "./main/index";
import Documents from "./documents/index";
import { NewsStore } from "../context/NewsContext";
import { CarcatalogStore } from "../context/CarcatalogContext";
import { PartcatalogStore } from "../context/PartcatalogContext";
import { MemberProfileStore } from "../context/MemberContext";
import { MemberListStore } from "../context/MemberListContext";
import { CompanyStore } from "../context/CompanyContext";
import { ProductStore } from "../context/ProductContext";
import { AuctionStore } from "../context/AuctionContext";
import { MotocarStore } from "../context/MotocarContext";
import { AutozarStore } from "../context/AutozarContext";
import { UniversalStore } from "../context/UniversalContext";
// import { FilterStore } from "../context/FilterContext";
import { LogsStore } from "../context/LogsContext";

import asyncComponent from "util/asyncComponent";

//Дээгүүр гүйх цэнхэр зураас
const NewsDetailPage = asyncComponent(() => {
  return import("./moto/news/newsDetailPage");
});

const NewsFormPage = asyncComponent(() => {
  return import("./moto/news/newsFormPage");
});

const NewsList = asyncComponent(() => {
  return import("./moto/news/newsListPage");
});

const UniversalListPage = asyncComponent(() => {
  return import("./moto/universal/universalListPage");
});

const UniversalDetailPage = asyncComponent(() => {
  return import("./moto/universal/universalDetailPage");
});

const CarcatalogFirmList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogFirmListPage");
});

const CarcatalogMarkList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogMarkListPage");
});

const CarcatalogIndexList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogIndexListPage");
});

const CarcatalogEditionList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogEditionListPage");
});

const CarcatalogDetail = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogDetailPage");
});

const MemberList = asyncComponent(() => {
  return import("./moto/member/memberListPage");
});

const MemberDetail = asyncComponent(() => {
  return import("./moto/member/memberDetailPage");
});

const MemberForm = asyncComponent(() => {
  return import("./moto/member/memberFormPage");
});

const CompanyList = asyncComponent(() => {
  return import("./moto/company/companyListPage");
});

const ProductDetail = asyncComponent(() => {
  return import("./moto/product/productDetailPage");
});

const ProductForm = asyncComponent(() => {
  return import("./moto/product/productFormPage");
});

const ProductList = asyncComponent(() => {
  return import("./moto/product/productListPage");
});

const AuctionDetail = asyncComponent(() => {
  return import("./moto/auction/auctionDetailPage");
});
const AuctionList = asyncComponent(() => {
  return import("./moto/auction/auctionListPage");
});

const MotocarList = asyncComponent(() => {
  return import("./moto/motocar/motocarListPage");
});

const MotocarForm = asyncComponent(() => {
  return import("./moto/motocar/motocarFormPage");
});

const AutozarDetail = asyncComponent(() => {
  return import("./moto/autozar/autozarDetailPage");
});
const AutozarList = asyncComponent(() => {
  return import("./moto/autozar/autozarListPage");
});

const AutozarForm = asyncComponent(() => {
  return import("./moto/autozar/autozarFormPage");
});

const ComparePage = asyncComponent(() => {
  return import("./moto/compare/comparePage");
});

const ToolFuelPage = asyncComponent(() => {
  return import("./moto/tool/toolFuelPage");
});
const ToolConverterPage = asyncComponent(() => {
  return import("./moto/tool/toolConverterPage");
});

const TopAuctionPage = asyncComponent(() => {
  return import("./moto/top/topAuctionPage");
});
const TopTirePage = asyncComponent(() => {
  return import("./moto/top/topTirePage");
});

const PrivacyPolicyPage = asyncComponent(() => {
  return import("../content/static/officialinfo/PrivacyPolicy");
});

const HomeIndex = asyncComponent(() => {
  return import("./moto/home/home");
});

const Page404 = asyncComponent(() => {
  return import("./moto/error/Page404");
});

const App = ({ match }) => {
  const filterContext = useContext(FilterContext);

  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        {/*}     
      #     # ####### #     #  #####  
      ##    # #       #  #  # #     # 
      # #   # #       #  #  # #       
      #  #  # #####   #  #  #  #####  
      #   # # #       #  #  #       # 
      #    ## #       #  #  # #     # 
      #     # #######  ## ##   #####  
      */}
        <Route
          path={[
            "/news/edit/:newsId",
            "/news/:newsId/edit",
            "/news/insert",
            "/news/add",
          ]}
        >
          <NewsStore>
            <NewsFormPage />
          </NewsStore>
        </Route>
        <Route
          path={[
            "/news/:newsId",
            "/news/:newsId/detail",
            "/news/detail/:newsId",
            "/newslist/:newsId",
          ]}
        >
          <NewsStore>
            <NewsDetailPage />
          </NewsStore>
        </Route>
        <Route path={["/news"]}>
          {/* <NewsStore>
            <NewsList />
          </NewsStore> */}
          <UniversalStore>
            <UniversalListPage />
          </UniversalStore>
        </Route>
        {/* 
      #     # ####### #     # ######  ####### ######  
      ##   ## #       ##   ## #     # #       #     # 
      # # # # #       # # # # #     # #       #     # 
      #  #  # #####   #  #  # ######  #####   ######  
      #     # #       #     # #     # #       #   #   
      #     # #       #     # #     # #       #    #  
      #     # ####### #     # ######  ####### #     # 
      */}
        <Route
          path={[
            "/member/edit/:memberId",
            "/member/:memberId/edit",
            "/member/insert",
            "/member/add",
          ]}
        >
          <MemberProfileStore>
            <MemberForm />
          </MemberProfileStore>
        </Route>
        <Route
          path={[
            "/member/:memberId",
            "/member/:memberId/detail",
            "/member/detail/:memberId",
            "/memberlist/:memberId",
          ]}
        >
          <MemberDetail />
        </Route>
        <Route path={["/member", "/memberlist"]}>
          <MemberListStore>
            <MemberList />
          </MemberListStore>
        </Route>

        {/*
        #     # ####### #     # ####### 
        #     # #     # ##   ## #       
        #     # #     # # # # # #       
        ####### #     # #  #  # #####   
        #     # #     # #     # #       
        #     # #     # #     # #       
        #     # ####### #     # ####### */}
        <Route exact path="/home">
          <HomeIndex />
        </Route>
        <Route exact path="/">
          <HomeIndex />
        </Route>

        {/*
        #     # #     # ### #     # ####### ######   #####     #    #       
        #     # ##    #  #  #     # #       #     # #     #   # #   #       
        #     # # #   #  #  #     # #       #     # #        #   #  #       
        #     # #  #  #  #  #     # #####   ######   #####  #     # #       
        #     # #   # #  #   #   #  #       #   #         # ####### #       
        #     # #    ##  #    # #   #       #    #  #     # #     # #       
         #####  #     # ###    #    ####### #     #  #####  #     # ####### */}
        <Route
          path={[
            "/engine",
            "/enginecatalog",
            "/enginelist",
            "/enginecataloglist",
          ]}
        >
          <PartcatalogStore>
            <UniversalStore>
              <UniversalListPage />
            </UniversalStore>
          </PartcatalogStore>
        </Route>
        {/* 
        #         ###   #       
        #    #   #   #  #    #  
        #    #  #     # #    #  
        #    #  #     # #    #  
        ####### #     # ####### 
              #   #   #       #  
              #    ###        #  */}
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

// Git-ээс хард татаж авах
// $ git fetch --all
// $ git reset --hard origin/master
// $ git pull
