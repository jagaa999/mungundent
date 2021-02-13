import React from "react";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import { Html5Entities } from "html-entities";
import toBoolean from "util/booleanFunction";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Image, Table, Tooltip, Tag, Typography } from "antd";

import AutozarListItemMainImage from "./Autozar/AutozarListItemMainImage";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import UniversalListItemMainImage from "./Universal/UniversalListItemMainImage";
import UniversalListItemButton from "./Universal/UniversalListItemButton";
import { GetSpecData } from "util/getSpecData";
import { DeviceText } from "util/deviceFunction";

const UniversalListItem3 = ({ myListContextListList }) => {
  const htmlEntities = new Html5Entities();

  const RenderHeaderSpec = ({ item, menu }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, menu);

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

  const RenderSpecList1 = ({ item, menu }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, menu);

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

  const RenderSpecList2 = ({ item, menu }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, menu);

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
            {/* <Link to={record.mainData.link.value}>
              {record.mainData.title.value}
            </Link> */}
            <div className={isBrowser ? "h5" : "h6"}>
              <Link to={record.mainData.link.value}>
                <Tooltip title={record.mainData.title.value}>
                  <Typography.Paragraph
                    ellipsis={{ rows: 4, symbol: "…" }}
                    className="gx-m-0 gx-text-primary gx-font-weight-semi-bold"
                  >
                    {record.mainData.title.value}
                  </Typography.Paragraph>
                </Tooltip>
              </Link>
              {toBoolean(record.mainData.isfeatured.value) && (
                <FeaturedTag type="dot" />
              )}
              {!toBoolean(record.mainData.isactive.value) && (
                <ActiveTag type="dot" />
              )}
            </div>

            <div className="gx-d-none gx-d-sm-block">
              {record.headerSpec?.map((item, index) => {
                return (
                  <RenderHeaderSpec key={index} item={item} menu="autozar" />
                );
              })}

              {/* {record.specList1.map((item, index) => {
                return <RenderSpecList1 key={index} item={item} />;
              })} */}

              {record.specList2?.map((item, index) => {
                return (
                  <RenderSpecList2 key={index} item={item} menu="autozar" />
                );
              })}
            </div>
          </div>

          {/* <UniversalListItemButton myUniversalItem={record} /> */}
        </div>
      ),
    },
  ];

  if (isBrowser) {
    const myTableColumn = myListContextListList[0].tableColumns || [];
    myTableColumn.map((item, index) => {
      const myItem = GetSpecData(item.field, "autozar");
      const myColumn = {
        ...item,
        title: myItem.label,
        dataIndex: item.field,
        render: (temp, record) => record.tableColumns[index].value,
      };

      columns.push(myColumn);
    });
  }

  columns.push({
    title: <DeviceText title="Үйлдэл" />,
    dataIndex: "",

    render: (temp, record) => (
      <div style={{ minWidth: "80px" }}>
        <UniversalListItemButton myUniversalItem={record} />
      </div>
    ),
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

export default UniversalListItem3;
