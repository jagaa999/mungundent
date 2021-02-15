import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// import { BackTop } from "antd";

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
import { MemberProfileStore } from "../context/MemberContext";
import { MemberListStore } from "../context/MemberListContext";
import { CompanyStore } from "../context/CompanyContext";
import { ProductStore } from "../context/ProductContext";
import { AuctionStore } from "../context/AuctionContext";
import { MotocarStore } from "../context/MotocarContext";
import { AutozarStore } from "../context/AutozarContext";
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

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      {/*}
         #    #     #  #####  ####### ### ####### #     # 
        # #   #     # #     #    #     #  #     # ##    # 
       #   #  #     # #          #     #  #     # # #   # 
      #     # #     # #          #     #  #     # #  #  # 
      ####### #     # #          #     #  #     # #   # # 
      #     # #     # #     #    #     #  #     # #    ## 
      #     #  #####   #####     #    ### ####### #     # 
      */}
      <Route
        path={[
          "/auction/:auctionId",
          "/auction/:auctionId/detail",
          "/auction/detail/:auctionId",
          "/auctionlist/:auctionId",
        ]}
      >
        <LogsStore>
          <AuctionStore>
            <AuctionDetail />
          </AuctionStore>
        </LogsStore>
      </Route>
      <Route path={["/auction", "/japan", "/auctionlist", "/japanlist"]}>
        <AuctionStore>
          <AuctionList />
        </AuctionStore>
      </Route>
      {/*}
      ######  ######  ####### ######  #     #  #####  ####### 
      #     # #     # #     # #     # #     # #     #    #    
      #     # #     # #     # #     # #     # #          #    
      ######  ######  #     # #     # #     # #          #    
      #       #   #   #     # #     # #     # #          #    
      #       #    #  #     # #     # #     # #     #    #    
      #       #     # ####### ######   #####   #####     #    
      */}
      <Route
        path={[
          "/product/:itemid",
          "/product/:itemid/detail",
          "/product/detail/:itemid",
          "/productlist/:itemid",
        ]}
      >
        <ProductStore>
          <ProductDetail />
        </ProductStore>
      </Route>
      <Route
        path={["/product", "/products", "/productlist", "/store", "/storelist"]}
      >
        <ProductStore>
          <ProductList />
        </ProductStore>
      </Route>
      {/*
         #    #     # ####### ####### #######    #    ######  
        # #   #     #    #    #     #      #    # #   #     # 
       #   #  #     #    #    #     #     #    #   #  #     # 
      #     # #     #    #    #     #    #    #     # ######  
      ####### #     #    #    #     #   #     ####### #   #   
      #     # #     #    #    #     #  #      #     # #    #  
      #     #  #####     #    ####### ####### #     # #     #  */}
      <Route
        path={[
          "/autozar/edit/:id",
          "/autozar/:id/edit",
          "/autozar/insert",
          "/autozar/add",
        ]}
      >
        <AutozarStore>
          <AutozarForm />
        </AutozarStore>
      </Route>
      <Route
        path={[
          "/autozar/:id",
          "/autozar/:id/detail",
          "/autozar/detail/:id",
          "/autozarlist/:id",
        ]}
      >
        <AutozarStore>
          <AutozarDetail />
        </AutozarStore>
      </Route>
      <Route path={["/autozar", "/autozarlist"]}>
        <AutozarStore>
          <AutozarList />
        </AutozarStore>
      </Route>
      {/*}

      {/*
      #     # ####### ####### #######  #####     #    ######  
      ##   ## #     #    #    #     # #     #   # #   #     # 
      # # # # #     #    #    #     # #        #   #  #     # 
      #  #  # #     #    #    #     # #       #     # ######  
      #     # #     #    #    #     # #       ####### #   #   
      #     # #     #    #    #     # #     # #     # #    #  
      #     # #######    #    #######  #####  #     # #     # 
      */}
      <Route
        path={[
          "/motocar/edit/:motocarId",
          "/motocar/:motocarId/edit",
          "/motocar/insert",
          "/motocar/add",
        ]}
      >
        <MotocarStore>
          <MotocarForm />
        </MotocarStore>
      </Route>
      <Route path={["/motocar", "/motocarlist"]}>
        <MotocarStore>
          <MotocarList />
        </MotocarStore>
      </Route>
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
      <Route path={["/news", "/newslist"]}>
        <NewsStore>
          <NewsList />
        </NewsStore>
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
       #####  ####### #     # ######     #    #     # #     # 
      #     # #     # ##   ## #     #   # #   ##    #  #   #  
      #       #     # # # # # #     #  #   #  # #   #   # #   
      #       #     # #  #  # ######  #     # #  #  #    #    
      #       #     # #     # #       ####### #   # #    #    
      #     # #     # #     # #       #     # #    ##    #    
       #####  ####### #     # #       #     # #     #    #    */}
      <Route path={["/company", "/companylist"]}>
        <CompanyStore>
          <CompanyList />
        </CompanyStore>
      </Route>
      {/*
       #####     #    ######   #####     #    #######
      #     #   # #   #     # #     #   # #      #   
      #        #   #  #     # #        #   #     #   
      #       #     # ######  #       #     #    #   
      #       ####### #   #   #       #######    #   
      #     # #     # #    #  #     # #     #    #   
       #####  #     # #     #  #####  #     #    #   
      */}
      <Route path={["/carcatalog/edition/:carId", "/carcatalog/detail/:carId"]}>
        <CarcatalogDetail />
      </Route>
      <Route path={["/carcatalog/index/:indexId"]}>
        <CarcatalogEditionList />
      </Route>
      <Route path={["/carcatalog/mark/:markId"]}>
        <CarcatalogIndexList />
      </Route>
      <Route path={["/carcatalog/:firmId", "/carcatalog/firm/:firmId"]}>
        <CarcatalogMarkList />
      </Route>
      <Route path={["/carcatalog", "/carcataloglist"]}>
        <CarcatalogFirmList />
      </Route>
      {/* 
       #####  ####### #     # ######     #    ######  ####### 
      #     # #     # ##   ## #     #   # #   #     # #       
      #       #     # # # # # #     #  #   #  #     # #       
      #       #     # #  #  # ######  #     # ######  #####   
      #       #     # #     # #       ####### #   #   #       
      #     # #     # #     # #       #     # #    #  #       
       #####  ####### #     # #       #     # #     # ####### */}
      <Route path={["/compare", "/itemcompare"]}>
        <ComparePage />
      </Route>
      {/*
      ####### ####### ####### #       
         #    #     # #     # #       
         #    #     # #     # #       
         #    #     # #     # #       
         #    #     # #     # #       
         #    #     # #     # #       
         #    ####### ####### ####### 
      */}
      <Route path={["/tool/fuel", "/tool/fuelcheck"]}>
        <ToolFuelPage />
      </Route>
      <Route path={["/tool/converter", "/tool/convert"]}>
        <ToolConverterPage />
      </Route>
      {/*
      ####### ####### ######  
          #    #     # #     # 
          #    #     # #     # 
          #    #     # ######  
          #    #     # #       
          #    #     # #       
          #    ####### #       
      */}
      <Route path={["/top/auction", "/top/auctionlist"]}>
        <TopAuctionPage />
      </Route>
      <Route path={["/top/tire", "/top/tirebrand"]}>
        <TopTirePage />
      </Route>
      {/* 
       #####  #######    #    ####### ###  #####  
      #     #    #      # #      #     #  #     # 
      #          #     #   #     #     #  #       
       #####     #    #     #    #     #  #       
            #    #    #######    #     #  #       
      #     #    #    #     #    #     #  #     # 
       #####     #    #     #    #    ###  #####  */}
      <Route path={["/static/privacy", "/static/privacypolicy"]}>
        <PrivacyPolicyPage />
      </Route>
      {/*
      ####### ####### #     # ####### ######  
      #     #    #    #     # #       #     # 
      #     #    #    #     # #       #     # 
      #     #    #    ####### #####   ######  
      #     #    #    #     # #       #   #   
      #     #    #    #     # #       #    #  
      #######    #    #     # ####### #     # 
      */}
      <Route path={`${match.url}main`} component={Main} />
      <Route path={`${match.url}components`} component={Components} />
      <Route path={`${match.url}custom-views`} component={CustomViews} />
      <Route path={`${match.url}extensions`} component={Extensions} />
      <Route
        path={`${match.url}extra-components`}
        component={ExtraComponents}
      />
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps} />
      <Route path={`${match.url}social-apps`} component={SocialApps} />
      <Route path={`${match.url}documents`} component={Documents} />
      {/*
      #     # ####### #     # ####### 
      #     # #     # ##   ## #       
      #     # #     # # # # # #       
      ####### #     # #  #  # #####   
      #     # #     # #     # #       
      #     # #     # #     # #       
      #     # ####### #     # ####### 
      */}
      <Route exact path="/home">
        <NewsStore>
          <HomeIndex />
        </NewsStore>
      </Route>
      <Route exact path="/">
        <NewsStore>
          <HomeIndex />
        </NewsStore>
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

export default App;

// Git-ээс хард татаж авах
// $ git fetch --all
// $ git reset --hard origin/master
// $ git pull
