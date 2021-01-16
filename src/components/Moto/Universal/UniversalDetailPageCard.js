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
import { FeaturedTag, ActiveTag } from "../Tag/SmallTags";
import UniversalListItemMainImage from "./UniversalListItemMainImage";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";
import UniversalListItemButton from "./UniversalListItemButton";

const UniversalDetailPageCard = ({ myItem, myDetailSettings }) => {
  const { mainData, headerSpec, specList1, specList2, ownerData } = myItem;
  const { headerSettings } = myDetailSettings;

  if (headerSettings.showCard) {
    return (
      <Card
        className="moto-autozar-detail-card gx-mt-3"
        style={{ width: "100%", height: "100ыы%" }}
        title={
          <>
            {mainData.title.value}
            {mainData.isfeatured.value && <FeaturedTag />}
            {mainData.isactive.value && !mainData.isactive.value && (
              <ActiveTag />
            )}
          </>
        }
        extra={mainData.mainnumber.value}
      >
        <Row>
          <Col span={12}>
            <Descriptions
              column={1}
              layout="horizontal"
              className="moto-auction-head-description"
            >
              {[...headerSpec, ...specList1, ...specList2].map(
                (item, index) => {
                  if (isEmpty(item.value || "")) return null;
                  const myItem = GetSpecData(item.field);
                  return (
                    <Descriptions.Item
                      className="gx-border-bottom gx-py-2"
                      key={index}
                      label={
                        <span className="gx-text-grey_old">{myItem.label}</span>
                      }
                    >
                      {item.value}
                    </Descriptions.Item>
                  );
                }
              )}
            </Descriptions>
          </Col>
          <Col span={12}>
            <UniversalListItemMainImage
              myClass="gx-img-fluid gx-w-100"
              width="auto"
              imageMain={mainData.imagemain.value}
              cloudName={mainData.imagemaincloudname.value}
            />
          </Col>
        </Row>

        <Divider className="gx-my-5" />

        <Row>
          <Col span={24}>
            <h4 className="gx-mb-4">
              {GetSpecData(mainData.description.field).label}
            </h4>

            {mainData.description.value}
          </Col>
        </Row>

        <Divider className="gx-my-5" />

        <Row>
          <Col span={24}>
            <h4 className="gx-mb-4">{GetSpecData("ownerdata").label}</h4>

            <div className="gx-mt-auto">
              <div className="gx-media gx-mt-3">
                {!isEmpty(ownerData.photo) && (
                  <Avatar
                    src={ownerData.photo}
                    alt={ownerData.photoalt}
                    className="gx-mr-2"
                    size={30}
                  />
                )}

                <div className="gx-media-body">
                  <h5 className=" gx-fs-sm">{ownerData.name}</h5>
                  <p className="gx-text-grey gx-fs-sm">
                    {mainData.modifieddate.value}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
  return "";
};

export default UniversalDetailPageCard;
