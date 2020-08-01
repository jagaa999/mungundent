import React from "react";
import { Route, Switch } from "react-router-dom";

import Components from "./components/index";
import CustomViews from "./customViews/index";
import Extensions from "./extensions/index";
import ExtraComponents from "./extraComponents/index";
import InBuiltApps from "./inBuiltApps/index";
import SocialApps from "./socialApps/index";
import Main from "./main/index";
import Documents from "./documents/index";
import { NewsListStore, NewsDetailStore } from "../context/NewsContext";

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

const MemberDetail = asyncComponent(() => {
  return import("./moto/member/memberDetail");
});

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}news/edit/:newsId`}>
        <NewsDetailStore>
          <NewsForm />
        </NewsDetailStore>
      </Route>

      <Route path={`${match.url}news/:newsId`} exact>
        <NewsDetailStore>
          <NewsDetail />
        </NewsDetailStore>
      </Route>

      {/* {console.log("ХЭДЭ ДЭДЭЭДЭЭЭЭЭЭЭЭЭЭЭЭЭЭ")} */}

      <Route path={`${match.url}news/`}>
        <NewsListStore>
          <NewsList />
        </NewsListStore>
      </Route>

      <Route path={`${match.url}member/:memberid`}>
        <MemberDetail />
      </Route>

      <Route path={`${match.url}member`}>
        {/* <MemberListStore>
          <MemberList />
        </MemberListStore> */}
      </Route>

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
    </Switch>
  </div>
);

export default App;
