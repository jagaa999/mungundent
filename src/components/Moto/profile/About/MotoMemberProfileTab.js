import React from "react";
import { Col, Row, Descriptions, Tabs, Card } from "antd";
import { aboutList } from "routes/socialApps/Profile/data";
import AboutItem from "./AboutItem";
import MotoMemberProfileAboutItem from "./MotoMemberProfileAboutItem";

const TabPane = Tabs.TabPane;

// id
// systemuserid
// name
// registrationnumber
// email
// phonenumber1
// phonenumber2
// birthdate
// gender
// createddate
// createdby
// cityid
// districtid
// streetid
// line1
// line2
// line3
// homecity
// homedistrict
// homestreet
// address
// workcity
// workdistrict
// workstreet
// description
// typename1
// typename2
// typename3
// typename4
// typename5
// typename6

const myGeneralData = ["systemuserid", "name", "registrationnumber"];

// {
//   id: 1,
//   title: 'Works at',
//   icon: 'company',
//   userList: '',
//   desc: ['G-axon Tech Pvt. Ltd.']
// },

const MotoMemberProfileTab = ({ myMemberDetail }) => {
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
                  desc={myMemberDetail.birthdate}
                  userList={null}
                />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <MotoMemberProfileAboutItem
                  title="Хүйс"
                  icon="company"
                  desc={myMemberDetail.gender}
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

        <TabPane tab="Гэр" key="2">
          <div className="gx-mb-2">
            <Row>
              {aboutList.map((about, index) => (
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about} />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane>

        <TabPane tab="Ажил" key="3">
          <div className="gx-mb-2">
            <Row>
              {aboutList.map((about, index) => (
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about} />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default MotoMemberProfileTab;
