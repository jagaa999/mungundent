import React from "react";
import { Link } from "react-router-dom";

import accounting from "accounting";
import { Html5Entities } from "html-entities";
import { Card, Avatar, Tag, Tooltip, Image } from "antd";
import moment from "moment";
import "moment/locale/mn";
import { defaultSrc } from "util/config";
import { Image as ImageCloud } from "cloudinary-react";
import AutozarListItemMainImage from "components/Moto/Autozar/AutozarListItemMainImage";

const AutozarItem2 = ({ autozarItem }) => {
  console.log("autozarItem", autozarItem);
  const htmlEntities = new Html5Entities();

  autozarItem.imagemain =
    autozarItem.imagemain === ""
      ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
      : autozarItem.imagemain;

  return (
    <>
      <Card
        className={`moto-item-card`}
        hoverable={true}
        style={{ margin: "0 10px", height: "330px" }}
        cover={
          <AutozarListItemMainImage
            myClass="gx-img-fluid gx-w-100"
            width="300"
            imageMain={autozarItem.imagemain}
          />
        }
      >
        <Avatar className="moto-badge-1" src={autozarItem.memberprofilephoto} />

        <span className="gx-text-grey gx-fs-sm">
          {moment(autozarItem.modifieddate).fromNow()}
        </span>
        <Tooltip title="Дэлгэрэнгүй үзэх">
          <h4 className="gx-mt-2">
            <Link to={"/autozar/" + autozarItem.id}>
              {moment(autozarItem.mglyearmanufactured).format("YYYY")}{" "}
              {autozarItem.mglfirm} {autozarItem.mglmark}
            </Link>
          </h4>
        </Tooltip>

        <div className="gx-d-flex gx-mt-3">
          <span className="moto-label-main gx-text-success">
            {/* {autozarItem.financepricerr} */}
            {accounting.formatMoney(autozarItem.financepricerr, "₮", 0, "'")}
          </span>
        </div>
      </Card>
    </>
  );
};

export default AutozarItem2;
