import React, { useEffect, useState } from "react";

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

import AutozarDetail2General from "./Autozar/AutozarDetail2General";
import AutozarDetail2Zar from "./Autozar/AutozarDetail2Zar";
import AutozarDetailSeller from "./Autozar/AutozarDetailSeller";
import AutozarGoonet from "./Autozar/AutozarGoonet";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import UniversalListItemMainImage from "./Universal/UniversalListItemMainImage";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";

const UniversalDetail = ({
  myDetailContext,
  myDetailContextDetail,
  myDetailContextDetailDetail,
  myDetailSettings,
}) => {
  if (isEmpty(myDetailContextDetailDetail)) return null;

  const {
    mainData,
    headerSpec,
    specList1,
    specList2,
    ownerData,
    saveButtonsData,
    compareButtonData,
    tableColumns,
  } = myDetailContextDetailDetail;

  console.log(mainData);
  console.log("ownerData", ownerData);

  // const htmlEntities = new Html5Entities();

  const RenderSpecList1 = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field);

      return (
        <li>
          <span className="moto-spec-list-label">{myItem.label}</span>
          <span className="moto-spec-list-value">
            <Tooltip title={myItem.tooltip}>{item.value}</Tooltip>
          </span>
        </li>
      );
    }
    return "";
  };

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #
  return (
    <div className="gx-main-content1 autozar-detail">
      <PageHeader
        className="site-page-header gx-mb-3"
        onBack={() => window.history.back()}
        title={myDetailSettings.pagetitle}
        subTitle={mainData.title.value.substring(0, 23) + "…"}
        tags={
          <>
            {mainData.isfeatured.value && <FeaturedTag />}
            {mainData.isactive.value && !mainData.isactive.value && (
              <ActiveTag />
            )}
          </>
        }
        extra={[
          <Button key="save" className="gx-mr-0">
            Хадгалах
          </Button>,
          <Button key="edit" type="primary">
            Засах
          </Button>,
        ]}
      />

      <div className="gx-d-flex gx-justify-content-center gx-align-items-center">
        {/* <div>{mainData.modifieddate.value}</div> */}
        <div className="gx-ml-auto2 gx-d-inline-flex gx-vertical-align-middle">
          {tableColumns.map((item, index) => {
            const myItem = GetSpecData(item.field);
            return (
              <Statistic
                className="moto-detail-header-statistic gx-ml-5"
                title={myItem.label}
                value={item.value}
              />
            );
          })}
        </div>
      </div>

      <Card
        className="moto-autozar-detail-card gx-mt-3"
        style={{ width: "100%", height: "100ыы%" }}
        title={
          <>
            {/* <UniversalListItemMainImage
              myClass="gx-mr-2"
              width="50"
              imageMain={mainData.imagemain.value}
              cloudName={mainData.imagemaincloudname.value}
            /> */}
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
            {/* <List
              dataSource={[...headerSpec, ...specList1, ...specList2]}
              renderItem={(item, index) => {
                if (isEmpty(item.value)) return null;
                const myItem = GetSpecData(item.field); //Label болон орчуулгуудыг авчирна
                return (
                  <List.Item key={index}>
                    <List.Item.Meta
                      // avatar={
                      //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      // }
                      // title={<a href="https://ant.design">{item.value}</a>}
                      description={myItem.label}
                    />
                    <div>
                      <Tooltip title={myItem.tooltip}>{item.value}</Tooltip>
                    </div>
                  </List.Item>
                );
              }}
            ></List> */}

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
    </div>
  );
};

export default UniversalDetail;
