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
import MemberItemsContext from "context/MemberItemsContext";
import CarcatalogContext from "context/CarcatalogContext";

const UniversalListCarDetail = (props) => {
  const memberItemsContext = useContext(MemberItemsContext);
  const carCatalogContext = useContext(CarcatalogContext);

  const MyDetail = carCatalogContext.CarDetailPopover;
  const carDrawer = carCatalogContext.carDrawer;
  // const carDetail = carCatalogContext.carDetail.carDetail;
  const carDetail = memberItemsContext.motocar.defaultCar;
  const mainData = carDetail.mainData;
  const specList1 = carDetail.specList1;
  if (isEmpty(mainData)) return null;

  // console.log("carDetail", carDetail);

  return (
    <div
      className={`gx-d-flex gx-mb-5`}
      style={{ alignItems: "center", justifyContent: "flex-end" }}
    >
      <div
        className="gx-mr-3 gx-d-flex "
        style={{ flexDirection: "column", justifyContent: "flex-end" }}
      >
        <div className="gx-mb-2 gx-ml-auto">Таны гарааш дахь машин</div>
        <div className="">
          <span className="gx-fs-xs gx-mr-2">Зөвхөн энэ машин!</span>
          <Switch
            checked={carDrawer.onlyThisCar}
            size="small"
            onChange={() => carCatalogContext.toggleOnlyThisCar()}
          />
        </div>
      </div>
      <Card
        className={`gx-card-full gx-dot-arrow-hover gx-m-0`}
        style={{ width: "300px" }}
      >
        <div className="gx-user-wid-row" style={{ height: "80px" }}>
          <div
            className="gx-user-wid gx-mr-3"
            style={{ width: "110px", height: "100%" }}
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
            <div className="gx-mb-1 gx-text-grey gx-fs-sm">
              {/* <Space split="•"> */}
              <div>
                <Typography.Text>{mainData.mainnumber.value}</Typography.Text>
              </div>
              {carDetail.headerSpec.map((item, index) => {
                if (isEmpty(item.value || "")) return null;
                return (
                  <div>
                    <Typography.Text key={index}>{item.value}</Typography.Text>
                  </div>
                );
              })}
              {/* </Space> */}
            </div>
            <div className="gx-fs-xs">
              {/* tire2frontfull
              tire2frontwidth
              tire2frontratio
              tire2frontdiameter */}
              {carDetail.tire2frontfull} • {carDetail.tire2rearfull}
            </div>
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
