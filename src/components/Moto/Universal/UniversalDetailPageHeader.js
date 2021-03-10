import React from "react";
import { Link } from "react-router-dom";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import moment from "moment";
import accounting from "accounting";

import {
  Card,
  Row,
  Col,
  Divider,
  Alert,
  Badge,
  PageHeader,
  Tag,
  List,
  Avatar,
  Button,
  Tooltip,
  Statistic,
  Descriptions,
} from "antd";

import MyIcon from "util/iconFunction";
import { FeaturedTag, ActiveTag } from "../Tag/SmallTags";
import UniversalListItemMainImage from "./UniversalListItemMainImage";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";
import UniversalListItemButton from "./UniversalListItemButton";
import UniversalDetailOwnerControlMenu from "./UniversalDetailOwnerControlMenu";

const UniversalDetailPageHeader = ({
  myDetailContext,
  myItem,
  myDetailSettings,
}) => {
  const { mainData } = myItem;
  const { headerSettings } = myDetailSettings;

  if (headerSettings.showPageHeader) {
    return (
      <PageHeader
        className="site-page-header gx-mb-3"
        onBack={() => window.history.back()}
        title={myDetailSettings.pagetitle}
        subTitle={mainData.title.value.substring(0, 23) + "…"}
        tags={
          <>
            {myItem.mainData.isfeatured.value && <FeaturedTag />}
            {!myItem.mainData.isactive.value && <ActiveTag />}
          </>
        }
        extra={[
          <UniversalListItemButton
            myUniversalItem={myItem}
            isDetail={true}
            key="pageheader01"
          />,

          <Link
            to={`/${mainData.menu}/edit/${mainData.id}`}
            className="gx-m-0 gx-ml-2"
            key="pageheader02"
          >
            <Button key="pageheader03" type="primary" className="gx-m-0">
              Засах
            </Button>
          </Link>,

          <UniversalDetailOwnerControlMenu
            myDetailContext={myDetailContext}
            myUniversalItem={myItem}
            myDetailSettings={myDetailSettings}
            isDetail={true}
            key="ownermenu"
            myClassName="gx-m-0 gx-ml-2"
            myStyle={{ width: "40px" }}
          />,
        ]}
      />
    );
  }
  return "";
};

export default UniversalDetailPageHeader;
