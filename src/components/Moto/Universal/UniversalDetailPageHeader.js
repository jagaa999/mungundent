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

const UniversalDetailPageHeader = ({ myItem, myDetailSettings }) => {
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
            {mainData.isfeatured.value && <FeaturedTag />}
            {mainData.isactive.value && !mainData.isactive.value && (
              <ActiveTag />
            )}
          </>
        }
        extra={[
          <UniversalListItemButton myUniversalItem={myItem} />,

          <Link
            to={`/${mainData.menu}/edit/${mainData.id}`}
            className="gx-m-0 gx-ml-2"
          >
            <Button key="edit" type="primary" className="gx-m-0">
              Засах
            </Button>
          </Link>,
        ]}
      />
    );
  }
  return "";
};

export default UniversalDetailPageHeader;
