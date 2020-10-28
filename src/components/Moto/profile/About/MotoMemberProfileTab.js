import React from "react";
import moment from "moment";
import { Col, Row, Descriptions, Tabs, Card } from "antd";
import { aboutList } from "routes/socialApps/Profile/data";
import AboutItem from "./AboutItem";
import MotoMemberProfileAboutItem from "./MotoMemberProfileAboutItem";

const TabPane = Tabs.TabPane;
const myGeneralData = ["systemuserid", "name", "registrationnumber"];

const MotoMemberProfileTab = ({ myMemberDetail }) => {
  // console.log("dddddddddddddd", myMemberDetail);
  return (
    <Card title=" " className="gx-card-tabs gx-card-tabs-right gx-card-profile">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Ерөнхий" key="1">
          {/* <div className="gx-mb-2">
            <Descriptions
              layout="horizontal"
              bordered
              size="small"
              column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
            >
              {Object.keys(myMemberDetail).map((val, k) => {
                return (
                  <Descriptions.Item label={val}>
                    {myMemberDetail[val]}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </div> */}

          <div className="gx-mb-2">
            <Row>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <MotoMemberProfileAboutItem
                  title="Нэр"
                  icon="company"
                  desc={myMemberDetail.name}
                  userList={null}
                />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <MotoMemberProfileAboutItem
                  title="Регистр"
                  icon="company"
                  desc={myMemberDetail.registrationnumber}
                  userList={null}
                />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <MotoMemberProfileAboutItem
                  title="Төрсөн огноо"
                  icon="company"
                  desc={moment(myMemberDetail.birthdate).format("YYYY-MM-DD")}
                  userList={null}
                />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <MotoMemberProfileAboutItem
                  title="Хүйс"
                  icon="company"
                  desc={myMemberDetail.gender === "1" ? "Эрэгтэй" : "Эмэгтэй"}
                  userList={null}
                />
              </Col>
              {/* {aboutList.map((about, index) => {
                if (about.indexOf("envi") !== -1) {
                  return (
                    <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                      <MotoMemberProfileAboutItem data={about} />
                    </Col>
                  );
                }
              })} */}
            </Row>
          </div>
        </TabPane>

        <TabPane tab="Хаяг" key="2">
          <div className="gx-mb-2">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <h4>Гэрийн хаяг</h4>
                <MotoMemberProfileAboutItem
                  title="Хот / Аймаг"
                  icon="company"
                  desc={myMemberDetail.homecityname}
                  userList={null}
                />
                <MotoMemberProfileAboutItem
                  title="Дүүрэг / Сум"
                  icon="company"
                  desc={myMemberDetail.homedistrictname}
                  userList={null}
                />
                <MotoMemberProfileAboutItem
                  title="Хороо / Баг"
                  icon="company"
                  desc={myMemberDetail.homestreetname}
                  userList={null}
                />
                <MotoMemberProfileAboutItem
                  title="Дэлгэрэнгүй хаяг"
                  icon="company"
                  desc={myMemberDetail.homeaddress}
                  userList={null}
                />
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <h4>Ажлын хаяг</h4>
                <MotoMemberProfileAboutItem
                  title="Хот / Аймаг"
                  icon="company"
                  desc={myMemberDetail.workcityname}
                  userList={null}
                />
                <MotoMemberProfileAboutItem
                  title="Дүүрэг / Сум"
                  icon="company"
                  desc={myMemberDetail.workdistrictname}
                  userList={null}
                />
                <MotoMemberProfileAboutItem
                  title="Хороо / Баг"
                  icon="company"
                  desc={myMemberDetail.workstreetname}
                  userList={null}
                />
                <MotoMemberProfileAboutItem
                  title="Дэлгэрэнгүй хаяг"
                  icon="company"
                  desc={myMemberDetail.workaddress}
                  userList={null}
                />
              </Col>
            </Row>
          </div>
        </TabPane>

        {/* <TabPane tab="Other" key="3">
          <div className="gx-mb-2">
            <Row>
              {aboutList.map((about, index) => (
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about} />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane> */}
      </Tabs>
    </Card>
  );
};

export default MotoMemberProfileTab;
