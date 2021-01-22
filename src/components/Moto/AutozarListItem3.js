import React from "react";
import { Link } from "react-router-dom";
// import { unescape } from "lodash";
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Table, Tooltip } from "antd";

import AutozarListItemMainImage from "./Autozar/AutozarListItemMainImage";

const AuctionListItem3 = ({ autozarItem }) => {
  console.log("Манай машин - ", autozarItem);
  const htmlEntities = new Html5Entities();

  const columns = [
    {
      title: "Автомашин",
      dataIndex: "mglmark",
      key: "car-name",
      render: (mglmark, record) => (
        <div className="gx-media gx-flex-nowrap">
          {/* <Image
            width={70}
            src={`https://cloudapi.moto.mn/${record.imagemain}`}
            className="gx-mr-2"
            style={{ minWidth: "50px" }}
            fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50"
          /> */}

          <AutozarListItemMainImage
            width="64"
            imageMain={record.imagemain}
            myClass="gx-mr-3"
          />

          <div className="gx-media-body gx-align-self-center">
            <Link to={"/autozar/" + record.id}>
              {moment(record.mglyearmanufactured || "1980-12-31").format(
                "YYYY"
              )}{" "}
              {record.mglfirm} {record.mglmark}
            </Link>
            <div>
              <Tooltip title="Хийц" placement="bottom">
                <span className="moto-label-main ant-tag">
                  {record.mglbody}
                </span>
              </Tooltip>
              <Tooltip title="Өнгө" placement="bottom">
                <span className="moto-label-main ant-tag">
                  {record.mglcoloroutside}
                </span>
              </Tooltip>
              <Tooltip title="Шатахуун" placement="bottom">
                <span className="moto-label-main ant-tag">
                  {record.mglfuel}
                </span>
              </Tooltip>
              <Tooltip title="Хроп" placement="bottom">
                <span className="moto-label-main ant-tag">
                  {record.drive2transtypename}
                </span>
              </Tooltip>
              <Tooltip title="Хөтлөгч" placement="bottom">
                <span className="moto-label-main ant-tag">
                  {record.drive2drivename}
                </span>
              </Tooltip>
            </div>

            <div className="gx-d-flex gx-fs-sm">
              <span className="gx-mr-2 gx-text-grey">Зарах нөхцөл:</span>
              {htmlEntities.decode(record.financecondition)}
            </div>

            <div className="gx-d-flex gx-fs-sm">
              <span className="gx-mr-2 gx-text-grey">Машины байдал:</span>
              {htmlEntities.decode(record.autozarconditionname)}
            </div>
          </div>

          {/* {record.STATUS !== "" && (
            <div className="moto-auction-badge">
              <Tag color="processing">Төлөв: {record.STATUS}</Tag>
              <Tag icon={<ExclamationCircleOutlined />} color="warning">
                Сүүлийн үнэ:{" "}
                {accounting.formatMoney(record.FINISH, "¥", 0, "'")}
              </Tag>
            </div>
          )} */}
        </div>
      ),
    },

    {
      title: "Хөдөлгүүр",
      key: "car-engine",
      responsive: ["md"],
      dataIndex: "mglengine2disp",
      render: (mglengine2disp, record) => (
        <div className="gx-text-grey">
          {accounting.formatMoney(record.mglengine2disp, {
            symbol: "cc",
            format: "%v %s",
            precision: 0,
            thousand: "'",
          })}
        </div>
      ),
    },
    {
      title: "Гүйлт",
      key: "car-milage",
      responsive: ["sm"],
      width: "90px",
      dataIndex: "autozarmilage",
      render: (autozarmilage, record) => (
        <>
          <div className="gx-text-grey gx-fs-sm">
            {accounting.formatMoney(record.autozarmilage, {
              symbol: "км",
              format: "%v %s",
              precision: 0,
              thousand: "'",
            })}
          </div>
        </>
      ),
    },
    {
      title: "Үнэ",
      key: "car-rating",
      width: "110px",
      dataIndex: "financepricerr",
      align: "center",
      render: (financepricerr, record) => (
        <div className="gx-text-success">
          {/* <div className="gx-fs-md"> */}
          {accounting.formatMoney(record.financepricerr, "₮", 0, "'")}
          {/* </div> */}
        </div>
      ),
    },
    {
      title: "Огноо",
      key: "car-date",
      responsive: ["lg"],
      dataIndex: "modifieddate",
      render: (modifieddate, record) => (
        <>
          <Tooltip title="Зарын огноо">
            <span className="gx-fs-sm gx-text-grey">
              <div>{moment(record.modifieddate).fromNow()}</div>
            </span>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={autozarItem}
      pagination={false}
      showHeader={true}
    />
  );
};

export default AuctionListItem3;
