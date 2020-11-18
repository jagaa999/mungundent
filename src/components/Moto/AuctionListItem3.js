import React from "react";
import { Link } from "react-router-dom";
// import { unescape } from "lodash";
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Image, Table, Tooltip, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import MotoAuctionStarRatingComponent from "./Auction/MotoAuctionStarRatingComponent";

const AuctionListItem3 = ({ auctionItem }) => {
  // console.log("Манай машин - ", auctionItem);
  const htmlEntities = new Html5Entities();

  const columns = [
    {
      title: "Автомашин",
      dataIndex: "MODEL_NAME",
      key: "car-name",
      render: (MODEL_NAME, record) => (
        <div className="gx-media gx-flex-nowrap">
          <Image
            // height={250}
            src={record.IMAGES}
            className="gx-mr-2"
            style={{ minWidth: "50px" }}
            fallback="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />

          <div className="gx-media-body gx-align-self-center">
            <Link to={"/auction/" + record.ID}>
              {`${record.YEAR} ${record.MARKA_NAME} ${record.MODEL_NAME}`}
            </Link>
            <Tooltip title="LOT дугаар">
              <Tag color="magenta" className="gx-ml-3">
                {record.LOT}
              </Tag>
            </Tooltip>
            {/* {toBoolean(record.isfeatured) && <FeaturedTag type="dot" />}
              {!toBoolean(record.isactive) && <ActiveTag type="dot" />} */}
            <div>
              <Tooltip title="Өнгө" placement="bottom">
                <span className="moto-label-main ant-tag">{record.COLOR}</span>
              </Tooltip>
              <Tooltip title="Хөдөлгүүр" placement="bottom">
                <span className="moto-label-main ant-tag">
                  {/* {record.ENG_V} cc */}
                  {accounting.formatMoney(record.ENG_V, {
                    symbol: "cc",
                    format: "%v %s",
                    precision: 0,
                    thousand: "'",
                  })}
                </span>
              </Tooltip>
              <Tooltip title="Хроп" placement="bottom">
                <span className="moto-label-main ant-tag">
                  {record.KPP} {record.KPP_TYPE}
                </span>
              </Tooltip>
              <Tooltip title="Хөтлөгч" placement="bottom">
                <span className="moto-label-main ant-tag">{record.PRIV}</span>
              </Tooltip>
            </div>

            <div className="gx-d-flex gx-fs-sm">
              <span className="gx-mr-2 gx-text-grey">Арал:</span>
              {htmlEntities.decode(record.KUZOV)}
            </div>

            <div className="gx-d-flex gx-fs-sm">
              <span className="gx-mr-2 gx-text-grey">Хувилбар:</span>
              {htmlEntities.decode(record.GRADE)}
            </div>
          </div>

          {record.STATUS !== "" && (
            <div className="moto-auction-badge">
              <Tag color="processing">Төлөв: {record.STATUS}</Tag>
              <Tag icon={<ExclamationCircleOutlined />} color="warning">
                Сүүлийн үнэ:{" "}
                {accounting.formatMoney(record.FINISH, "¥", 0, "'")}
              </Tag>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Үнэлгээ",
      key: "car-rating",
      dataIndex: "RATE",
      align: "center",
      render: (RATE, record) => (
        <div style={{ minWidth: "90px" }}>
          <div className="gx-text-black gx-fs-lg">{RATE}</div>
          <MotoAuctionStarRatingComponent
            starCount={6}
            value={RATE}
            emptyStarColor={"#d1d1d1"}
          />
        </div>
      ),
    },
    {
      title: "Гүйлт",
      key: "car-frame",
      responsive: ["md"],
      dataIndex: "KUZOV",
      render: (KUZOV, record) => (
        <div className="gx-text-grey">
          {accounting.formatMoney(record.MILEAGE, {
            symbol: "км",
            format: "%v %s",
            precision: 0,
            thousand: "'",
          })}
        </div>
      ),
    },
    {
      title: "Үнэ",
      key: "car-price",
      responsive: ["sm"],
      dataIndex: "START",
      render: (START, record) => (
        <>
          <Tooltip title="Дуудах эхлэх үнэ">
            <div className="gx-text-grey gx-fs-sm">
              {accounting.formatMoney(START, "¥", 0, "'")}
            </div>
          </Tooltip>
          <Tooltip title="Зарагддаг дундаж үнэ">
            <div className="gx-text-grey gx-fs-sm">
              {accounting.formatMoney(record.AVG_PRICE, "¥", 0, "'")}
            </div>
          </Tooltip>
        </>
      ),
    },
    {
      title: "Огноо",
      key: "car-date",
      responsive: ["lg"],
      dataIndex: "AUCTION_DATE",
      render: (AUCTION_DATE, record) => (
        <>
          <div className="gx-text-grey gx-fs-sm">{record.AUCTION}</div>
          <Tooltip
            title={`Дуудлагын огноо (Япон цагаар) ${record.AUCTION_DATE}`}
          >
            <span className="gx-fs-sm gx-text-grey">
              <div>{moment(record.AUCTION_DATE).fromNow()}</div>
              <div>{moment(record.AUCTION_DATE).format("HH:mm")}</div>
              <div>{record.STATUS}</div>
            </span>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <Table
      rowKey="LOT"
      columns={columns}
      dataSource={auctionItem}
      pagination={false}
      showHeader={true}
    />
  );
};

export default AuctionListItem3;
