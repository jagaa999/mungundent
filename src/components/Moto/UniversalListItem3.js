import React from "react";
import { Link } from "react-router-dom";
// import { unescape } from "lodash";
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Image, Table, Tooltip, Tag } from "antd";

import AutozarListItemMainImage from "./Autozar/AutozarListItemMainImage";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import UniversalListItemMainImage from "./Universal/UniversalListItemMainImage";
import UniversalListItemButton from "./Universal/UniversalListItemButton";
import { getSpecData } from "util/getSpecData";

const AuctionListItem3 = ({ myListContextListList }) => {
  const htmlEntities = new Html5Entities();

  const RenderHeaderSpec = ({ item }) => {
    if (item.value !== "") {
      const myItem = getSpecData(item.field, "autozar");

      return (
        <span className="moto-label-main ant-tag">
          <Tooltip title={myItem.tooltip} placement="bottom">
            {item.value}
          </Tooltip>
        </span>
      );
    }
    return "";
  };

  const RenderSpecList1 = ({ item }) => {
    if (item.value !== "") {
      const myItem = getSpecData(item.field, "autozar");

      return (
        <span className="moto-label-main ant-tag">
          <Tooltip title={myItem.label} placement="bottom">
            {item.value}
          </Tooltip>
        </span>
      );
    }
    return "";
  };

  const RenderSpecList2 = ({ item }) => {
    if (item.value !== "") {
      const myItem = getSpecData(item.field, "autozar");

      return (
        <span className="moto-label-main ant-tag">
          <Tooltip title={myItem.label} placement="bottom">
            {item.value}
          </Tooltip>
        </span>
      );
    }
    return "";
  };

  const columns = [
    {
      title: "",
      dataIndex: myListContextListList[0].mainData.id,
      key: myListContextListList[0].mainData.id,
      render: (mglmark, record) => (
        <div className="gx-media gx-flex-nowrap">
          <UniversalListItemMainImage
            myClass="gx-mr-3"
            width="64"
            imageMain={record.mainData.imagemain}
            cloudName={record.mainData.imagemaincloudname}
          />

          <div className="gx-media-body gx-align-self-center">
            <Link to={record.mainData.link}>{record.mainData.title}</Link>
            <div>
              {record.headerSpec.map((item, index) => {
                return <RenderHeaderSpec key={index} item={item} />;
              })}

              {record.specList1.map((item, index) => {
                return <RenderSpecList1 key={index} item={item} />;
              })}

              {record.specList2.map((item, index) => {
                return <RenderSpecList2 key={index} item={item} />;
              })}
            </div>
          </div>

          <UniversalListItemButton myUniversalItem={record} />
        </div>
      ),
    },
  ];

  const myTableColumn = myListContextListList[0].tableColumns;

  myTableColumn.map((item, index) => {
    const myColumn = {
      ...item,
      key: index,
      render: () => (
        <Tooltip title={item.tooltip} key={index}>
          <div className={item.renderDivClass}>{item.value}</div>
        </Tooltip>
      ),
    };

    columns.push(myColumn);
  });

  return (
    <Table
      rowKey={(record) => record.mainData.id}
      columns={columns}
      dataSource={myListContextListList}
      pagination={false}
      showHeader={true}
    />
  );
};

export default AuctionListItem3;
