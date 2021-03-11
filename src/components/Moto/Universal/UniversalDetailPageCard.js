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

import { FeaturedTag, ActiveTag } from "../Tag/SmallTags";
import UniversalListItemMainImage from "./UniversalListItemMainImage";
import UniversalDetailImages from "./UniversalDetailImages";
import UniversalDetailPageTableColumn from "./UniversalDetailPageTableColumn";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";

const UniversalDetailPageCard = ({ myItem, myDetailSettings }) => {
  const {
    mainData,
    headerSpec,
    specList1,
    specList2,
    ownerData,
    tableColumns,
  } = myItem;
  const { headerSettings } = myDetailSettings;

  if (headerSettings.showCard) {
    return (
      <>
        <Row>
          <Col span={12}>
            <UniversalListItemMainImage
              myClass="gx-img-fluid gx-w-100 gx-card-widget gx-mb-4"
              width="auto"
              imageMain={mainData.imagemain.value}
              cloudName={mainData.imagemaincloudname.value}
            />

            <UniversalDetailImages
              myItem={myItem}
              imageotherFileList={myItem.imageotherFileList}
            />
          </Col>
          <Col span={12}>
            <div className="gx-fs-xxxl gx-font-weight-semi-bold">
              {mainData.title.value}
              {mainData.isfeatured.value && <FeaturedTag />}
              {mainData.isactive.value && !mainData.isactive.value && (
                <ActiveTag />
              )}
            </div>
            <h3 className="gx-mt-4">{mainData.mainnumber.value}</h3>

            <div>
              <Descriptions
                column={1}
                layout="horizontal"
                className="moto-auction-head-description"
              >
                {[
                  ...headerSpec,
                  ...specList1,
                  ...specList2,
                  ...tableColumns,
                ].map((item, index) => {
                  if (isEmpty(item.value || "")) return null;
                  const myTempItem = GetSpecData(
                    item.field,
                    myItem.mainData.menu
                  );
                  return (
                    <Descriptions.Item
                      className="gx-border-bottom gx-py-2"
                      key={index}
                      label={
                        <span className="gx-text-grey_old">
                          {myTempItem.label}
                        </span>
                      }
                    >
                      {item.value}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </div>
          </Col>
        </Row>

        {!isEmpty(mainData.description.value) && (
          <Row className="gx-mt-5">
            <Col span={24}>
              <h4>Тайлбар</h4>
              {mainData.description.value}
            </Col>
          </Row>
        )}

        <div style={{ marginBottom: "90px" }}></div>

        {/*       
          {!isEmpty(ownerData.name) && (
            <>
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
            </>
          )}
        */}
      </>
    );
  }
  return "";
};

export default UniversalDetailPageCard;
