import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Empty,
  Card,
  Row,
  Col,
  Space,
  Typography,
  Divider,
  Switch,
} from "antd";
import { isEmpty } from "lodash";
import CarcatalogContext from "context/CarcatalogContext";
import { GetSpecData } from "util/getSpecData";
import { moment } from "moment";

const UniversalListCarDetail = (props) => {
  const carCatalogContext = useContext(CarcatalogContext);

  const MyDetail = carCatalogContext.CarDetailPopover;
  const carDetail = carCatalogContext.carDetail.carDetail;
  const mainData = carCatalogContext.carDetail.carDetail.mainData;
  const specList1 = carCatalogContext.carDetail.carDetail.specList1;
  if (isEmpty(mainData)) return null;

  return (
    <div
      className={`gx-d-flex gx-mb-3`}
      style={{ alignItems: "center", justifyContent: "flex-end" }}
    >
      <div
        className="gx-mr-2 gx-d-flex "
        style={{ flexDirection: "column", justifyContent: "flex-end" }}
      >
        <div className="gx-mb-2 gx-ml-auto">Таны машин</div>
        <div className="">
          <span className="gx-fs-xs gx-mr-2">Зөвхөн энэ машин!</span>
          <Switch
            defaultChecked
            size="small"
            // onChange={onChange}
          />
        </div>
      </div>
      <Card
        className={`gx-card-full gx-dot-arrow-hover gx-m-0`}
        style={{ maxWidth: "290px" }}
      >
        <div className="gx-user-wid-row" style={{ height: "80px" }}>
          <div
            className="gx-user-wid gx-mr-3"
            style={{ width: "40%", height: "100%" }}
          >
            <img
              alt={mainData.title.value}
              src={mainData.imagemain.value}
              // className="gx-object-cover"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div
            className="gx-user-wid-body gx-py-3 gx-pr-3"
            style={{ width: "60%" }}
          >
            <div className="ant-row-flex">
              <Typography.Paragraph
                ellipsis={{ rows: 1, symbol: "…" }}
                className="gx-fs-sm gx-font-weight-bold gx-mr-1 gx-mb-1"
              >
                {mainData.title.value}
              </Typography.Paragraph>
            </div>
            <p className="gx-mb-1 gx-text-grey gx-fs-sm">
              {/* {mainData.mainnumber.value} */}
              <Space split="•">
                <Typography.Text>{mainData.mainnumber.value}</Typography.Text>
                {/* {carDetail.headerSpec.map((item, index) => {
                  if (isEmpty(item.value || "")) return null;
                  const myItem = GetSpecData(item.field, "carcatalog");
                  return (
                    <Typography.Text key={index}>{item.value}</Typography.Text>
                  );
                })} */}
              </Space>
            </p>
            <div className="gx-dot-arrow">
              <div className="gx-bg-primary gx-hover-arrow">
                <Link to={mainData.link.value}>
                  <i className="icon icon-long-arrow-right gx-text-white" />
                </Link>
              </div>
              <div className="gx-dot">
                <i className="icon icon-ellipse-v gx-text-primary" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UniversalListCarDetail;
