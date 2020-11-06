import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Components from "./components/index";
import CustomViews from "./customViews/index";
import Extensions from "./extensions/index";
import ExtraComponents from "./extraComponents/index";
import InBuiltApps from "./inBuiltApps/index";
import SocialApps from "./socialApps/index";
import Main from "./main/index";
import Documents from "./documents/index";
import { NewsListStore } from "../context/NewsListContext";
import { NewsDetailStore } from "../context/NewsDetailContext";
import { CarCatalogListStore } from "../context/CarCatalogListContext";
import { MemberProfileStore } from "../context/MemberContext";
import { MemberListStore } from "../context/MemberListContext";
import { ProductStore } from "../context/ProductContext";
import { MotocarStore } from "../context/MotocarContext";
import { FilterStore } from "../context/FilterContext";

import asyncComponent from "util/asyncComponent";

//Дээгүүр гүйх цэнхэр зураас
const NewsDetail = asyncComponent(() => {
  return import("./moto/news/newsDetailPage");
});

const NewsForm = asyncComponent(() => {
  return import("./moto/news/newsFormPage");
});

const NewsList = asyncComponent(() => {
  return import("./moto/news/newsListPage");
});

const CarCatalogFirmList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogFirmListPage");
});

const CarCatalogMarkList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogMarkListPage");
});

const CarCatalogIndexList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogIndexListPage");
});

const CarCatalogEditionList = asyncComponent(() => {
  return import("./moto/carCatalog/carCatalogEditionListPage");
});

const CarCatalogDetail = asyncComponent(() => {
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

const ProductList = asyncComponent(() => {
  return import("./moto/product/productListPage");
});

const MotocarList = asyncComponent(() => {
  return import("./moto/motocar/motocarListPage");
});

const MotocarForm = asyncComponent(() => {
  return import("./moto/motocar/motocarFormPage");
});

const ToolFuelPage = asyncComponent(() => {
  return import("./moto/tool/toolFuelPage");
});

const HomeIndex = asyncComponent(() => {
  return import("./moto/home/home");
});
const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      {/*}
      ######  ######  ####### ######  #     #  #####  ####### 
      #     # #     # #     # #     # #     # #     #    #    
      #     # #     # #     # #     # #     # #          #    
      ######  ######  #     # #     # #     # #          #    
      #       #   #   #     # #     # #     # #          #    
      #       #    #  #     # #     # #     # #     #    #    
      #       #     # ####### ######   #####   #####     #    
      */}
      {/* <Route path={`${match.url}product/:productid`}>
        <MemberDetail />
      </Route> */}
      <Route path={["/product", "/products", "/productlist"]}>
        <ProductStore>
          <ProductList />
        </ProductStore>
      </Route>
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
        <NewsDetailStore>
          <NewsForm />
        </NewsDetailStore>
      </Route>
      <Route
        path={[
          "/news/:newsId",
          "/news/:newsId/detail",
          "/news/detail/:newsId",
          "/newslist/:newsId",
        ]}
      >
        <NewsDetailStore>
          <NewsDetail />
        </NewsDetailStore>
      </Route>
      <Route path={["/news", "/newslist"]}>
        <NewsListStore>
          <NewsDetailStore>
            <NewsList />
          </NewsDetailStore>
        </NewsListStore>
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
       #####     #    ######   #####     #    #######
      #     #   # #   #     # #     #   # #      #   
      #        #   #  #     # #        #   #     #   
      #       #     # ######  #       #     #    #   
      #       ####### #   #   #       #######    #   
      #     # #     # #    #  #     # #     #    #   
       #####  #     # #     #  #####  #     #    #   
      */}
      <Route path={["/carcatalog/edition/:carId", "/carcatalog/detail/:carId"]}>
        <CarCatalogListStore>
          <CarCatalogDetail />
        </CarCatalogListStore>
      </Route>
      <Route path={["/carcatalog/index/:indexId"]}>
        <CarCatalogListStore>
          <CarCatalogEditionList />
        </CarCatalogListStore>
      </Route>
      <Route path={["/carcatalog/mark/:markId"]}>
        <CarCatalogListStore>
          <CarCatalogIndexList />
        </CarCatalogListStore>
      </Route>
      <Route path={["/carcatalog/:firmId", "/carcatalog/firm/:firmId"]}>
        <CarCatalogListStore>
          <CarCatalogMarkList />
        </CarCatalogListStore>
      </Route>
      <Route path={["/carcatalog", "/carcataloglist"]}>
        <CarCatalogListStore>
          <CarCatalogFirmList />
        </CarCatalogListStore>
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
        <NewsListStore>
          <HomeIndex />
        </NewsListStore>
      </Route>
      <Route exact path="/">
        <NewsListStore>
          <HomeIndex />
        </NewsListStore>
      </Route>
    </Switch>
  </div>
);

export default App;
