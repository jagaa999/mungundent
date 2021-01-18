import React from "react";

import { Tooltip } from "antd";

import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";
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
