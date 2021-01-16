import React, { useContext, useEffect, useState } from "react";

import { Image } from "cloudinary-react";
import moment from "moment";
//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.

import toBoolean from "util/booleanFunction";
import { defaultSrc } from "util/config";
import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

import {
  Card,
  Row,
  Col,
  Space,
  Typography,
  Tabs,
  Tooltip,
  Avatar,
  Divider,
} from "antd";

import LogBox from "./LogBox";
import CommentBox from "./CommentBox";
import NewsDetailHeader from "./NewsDetailHeader";
import NewsControlButton from "./Button/NewsControlButton";

import NewsItemMainImage from "./NewsItemMainImage";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";
import EditorBody from "./Editor/EditorBody";

const NewsDetailComponent = ({ myDetailContext }) => {
  const myItem = myDetailContext.newsDetail.mainDetail;

  const {
    mainData,
    headerSpec,
    specList1,
    specList2,
    ownerData,
    saveButtonsData,
    compareButtonData,
    tableColumns,
  } = myItem;

  if (isEmpty(myItem)) return null;

  return (
    <div key={myItem.newsid} className="gx-main-content2 news-detail">
      <Row>
        <Col xs={24}>
          <Card
            className={
              (toBoolean(myItem.isfeatured) ? "gx-border-success" : "") +
              (!toBoolean(myItem.isactive) ? "gx-border-danger" : "")
            }
            cover={
              <NewsItemMainImage width="auto" imageMain={myItem.imagemain} />
            }
            style={{ maxWidth: "700px" }}
          >
            <h2
              className={toBoolean(myItem.isfeatured) ? "gx-text-success" : ""}
            >
              {myItem.title}
              {toBoolean(myItem.isfeatured) && <FeaturedTag />}
              {!toBoolean(myItem.isactive) && <ActiveTag />}
            </h2>

            <Divider className="gx-my-3" />

            <div className="moto-news-body gx-mt-3">
              <EditorBody myBody={myItem.body} />
            </div>

            <Row gutter={[16, 16]} className="gx-mt-5">
              <Col span={8}>
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
              <Col span={8}>
                <h4 className="gx-mb-4">
                  {GetSpecData("newssourcename").label}
                </h4>

                <div className="gx-mt-auto">
                  <div className="gx-media gx-mt-3">
                    {!isEmpty(myItem.newssourcelogo) && (
                      <Avatar
                        src={myItem.newssourcelogo}
                        alt={myItem.newssourcelogo}
                        className="gx-mr-2"
                        size={30}
                      />
                    )}

                    <div className="gx-media-body">
                      <h5 className=" gx-fs-sm">{myItem.newssourcename}</h5>
                      <p className="gx-text-grey gx-fs-sm">
                        {myItem.newssourcetype}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <h4 className="gx-mb-4">{GetSpecData("newstypename").label}</h4>

                <div className="gx-mt-auto">
                  <div className="gx-media gx-mt-3">
                    <div className="gx-media-body">
                      <h5 className=" gx-fs-sm">{myItem.newstypename}</h5>
                      <p className="gx-text-grey gx-fs-sm">
                        {myItem.newstypename.indexOf("мэдээ") !== -1
                          ? "Мэдээ"
                          : "Нийтлэл"}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div>
        <NewsControlButton item={myItem} />
      </div>
      <CommentBox recordId={myItem.newsid} tableName="" />
      <LogBox recordId={myItem.newsid} tableName="ECM_NEWS" />
    </div>
  );
};

export default NewsDetailComponent;
