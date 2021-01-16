import React from "react";

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
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import UniversalListItemMainImage from "./Universal/UniversalListItemMainImage";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";
import UniversalListItemButton from "./Universal/UniversalListItemButton";
import UniversalDetailPageHeader from "./Universal/UniversalDetailPageHeader";
import UniversalDetailPageCard from "./Universal/UniversalDetailPageCard";
import UniversalDetailPageTableColumn from "./Universal/UniversalDetailPageTableColumn";

const UniversalDetail = ({
  myDetailContext,
  myDetailContextDetail,
  myDetailContextDetailDetail,
  myDetailSettings,
}) => {
  if (isEmpty(myDetailContextDetailDetail)) return null;

  const myItem = myDetailContextDetailDetail;

  const {
    mainData,
    headerSpec,
    specList1,
    specList2,
    ownerData,
    saveButtonsData,
    compareButtonData,
    tableColumns,
  } = myItem;

  const { headerSettings } = myDetailSettings;

  // console.log(mainData);
  // console.log("ownerData", ownerData);

  // const htmlEntities = new Html5Entities();

  const RenderSpecList1 = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field);

      return (
        <li>
          <span className="moto-spec-list-label">{myItem.label}</span>
          <span className="moto-spec-list-value">
            <Tooltip title={myItem.tooltip}>{item.value}</Tooltip>
          </span>
        </li>
      );
    }
    return "";
  };

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #
  return (
    <>
      <UniversalDetailPageHeader
        myItem={myItem}
        myDetailSettings={myDetailSettings}
      />

      <UniversalDetailPageTableColumn
        myItem={myItem}
        myDetailSettings={myDetailSettings}
      />

      <UniversalDetailPageCard
        myItem={myItem}
        myDetailSettings={myDetailSettings}
      />
    </>
  );
};

export default UniversalDetail;
