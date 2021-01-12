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
import { GetSpecData } from "util/getSpecData";

const AuctionListItem3 = ({ myListContextListList }) => {
  const htmlEntities = new Html5Entities();

  const RenderHeaderSpec = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field);

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
      const myItem = GetSpecData(item.field);

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
      const myItem = GetSpecData(item.field);

      return (
        <div className="gx-d-flex gx-fs-sm">
          <span className="gx-mr-2 gx-text-grey">{myItem.label}</span>
          {item.value}
        </div>
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
            imageMain={record.mainData.imagemain.value}
            cloudName={record.mainData.imagemaincloudname.value}
          />

          <div className="gx-media-body gx-align-self-center">
            <Link to={record.mainData.link.value}>
              {record.mainData.title.value}
            </Link>
            <div>
              {record.headerSpec.map((item, index) => {
                return <RenderHeaderSpec key={index} item={item} />;
              })}

              {/* {record.specList1.map((item, index) => {
                return <RenderSpecList1 key={index} item={item} />;
              })} */}

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
    const myItem = GetSpecData(item.field);

    const myColumn = {
      ...item,

      title: myItem.label,
      dataIndex: item.field,

      render: (temp, record) => record.tableColumns[index].value,
      // <Tooltip title={myItem.tooltip} key={index}>
      //   <div className={record.tableColumns[index].renderDivClass}>
      //     {record.tableColumns[index].value}
      //   </div>
      // </Tooltip>
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
