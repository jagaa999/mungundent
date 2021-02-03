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
import UniversalDetailPageTableColumn from "./UniversalDetailPageTableColumn";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";

const UniversalDetailPageCard = ({ myItem, myDetailSettings }) => {
  const { mainData, headerSpec, specList1, specList2, ownerData } = myItem;
  const { headerSettings } = myDetailSettings;

  if (headerSettings.showCard) {
    return (
      <>
        {/* <Row className="gx-mt-5" align="middle" justify="center_old">
          <Col span={6} className="gx-text-right">
            <UniversalListItemMainImage
              myClass=""
              width="100"
              imageMain={mainData.imagemain.value}
              cloudName={mainData.imagemaincloudname.value}
            />
          </Col>
          <Col span={18}>
            <h2 className="gx-text-center_old">
              {mainData.title.value}
              {mainData.isfeatured.value && <FeaturedTag />}
              {mainData.isactive.value && !mainData.isactive.value && (
                <ActiveTag />
              )}
            </h2>

            <h4 className="gx-mt-4 gx-text-center_old">
              {mainData.mainnumber.value}
            </h4>
          </Col>
        </Row> */}

        <Row className="gx-mt-5">
          <Col span={24} className="gx-text-center_old">
            <Card.Meta
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              avatar={
                <UniversalListItemMainImage
                  myClass=""
                  width="100"
                  imageMain={mainData.imagemain.value}
                  cloudName={mainData.imagemaincloudname.value}
                />
              }
              title={
                <h2>
                  {mainData.title.value}
                  {mainData.isfeatured.value && <FeaturedTag />}
                  {mainData.isactive.value && !mainData.isactive.value && (
                    <ActiveTag />
                  )}
                </h2>
              }
              description={<h4>{mainData.mainnumber.value}</h4>}
            />
          </Col>
        </Row>

        {/* <Divider className="gx-my-5" /> */}

        <UniversalDetailPageTableColumn
          className="gx-my-5"
          myItem={myItem}
          myDetailSettings={myDetailSettings}
        />

        <Row>
          <Col span={24}>{mainData.description.value}</Col>
        </Row>

        <div style={{ marginBottom: "90px" }}></div>

        {/* <Card
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
                          <span className="gx-text-grey_old">
                            {myItem.label}
                          </span>
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

          {!isEmpty(mainData.description.value) && (
            <>
              <Divider className="gx-my-5" />
              <Row>
                <Col span={24}>
                  <h4 className="gx-mb-4">
                    {GetSpecData(mainData.description.field).label}
                  </h4>

                  {mainData.description.value}
                </Col>
              </Row>
            </>
          )}

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
        </Card> */}
      </>
    );
  }
  return "";
};

export default UniversalDetailPageCard;
