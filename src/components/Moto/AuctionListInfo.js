import React, { useState, useContext } from "react";

import { Button, Typography, Drawer, Tooltip, Row, Col, Card } from "antd";
import Joyride, { STATUS } from "react-joyride";
import MyIcon from "util/iconFunction";

import MostCarsInfo from "./Auction/MostCarsInfo";
import RareCarsInfo from "./Auction/RareCarsInfo";
import FaqInfo from "./Auction/FaqInfo";

import CompareContext from "context/CompareContext";

const { Paragraph } = Typography;

const AuctionListInfo = (props) => {
  const joySteps = [
    {
      target: ".JOY-STEP-FILTER",
      content: "Эндээс янз бүрээр шүүж, хүссэн машинаа олоорой.",
    },
    {
      target: ".JOY-STEP-CARDTYPE",
      content: "Эндээс харагдах хэлбэрийг сонгоорой.",
    },
    {
      target: ".JOY-STEP-CHOOSE",
      content:
        "Авч болох машинуудын зарим сонирхолтой сонголтыг эндээс хараарай.",
    },
    {
      target: ".JOY-STEP-FAQ",
      content: "Аукшинтай холбоотой асуултуудаа эндээс хариулт аваарай.",
    },
  ];
  const [runJoyride, setRunJoyride] = useState(false);
  const handleJoyrideCallback = (data) => {
    const { status, type } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunJoyride(false);
    }
  };

  const compareContext = useContext(CompareContext);

  const [topCarsVisible, setTopCarsVisible] = useState(false);
  const [rareCarsVisible, setRareCarsVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const showTopCars = () => {
    setTopCarsVisible(true);
  };
  const onCloseTopCars = () => {
    setTopCarsVisible(false);
  };
  const showRareCars = () => {
    setRareCarsVisible(true);
  };
  const onCloseRareCars = () => {
    setRareCarsVisible(false);
  };
  const showFaq = () => {
    setFaqVisible(true);
  };
  const onCloseFaq = () => {
    setFaqVisible(false);
  };

  return (
    <>
      <Joyride
        steps={joySteps}
        continuous={true}
        showProgress={true}
        scrollToFirstStep={true}
        showSkipButton={true}
        run={runJoyride}
        scrollOffset={120}
        locale={{
          back: "өмнөх",
          close: "Хаах",
          last: "Дуусгах",
          next: "Дараах",
          skip: "Болих",
        }}
        styles={{
          options: {
            primaryColor: "#588bae",
            fontSize: "10px",
          },
        }}
        callback={handleJoyrideCallback}
      />

      <div className="moto-filter-button" style={{ top: "291px" }}>
        <Tooltip title="Энэ хуудасны зааварчилгээ үзэх" placement="right">
          <Button
            onClick={() => {
              setRunJoyride(!runJoyride);
            }}
            className={`${!runJoyride ? "gx-btn-grey" : "gx-btn-primary"}`}
          >
            <MyIcon
              type="iconhand"
              className={`gx-d-block ${
                !runJoyride ? "gx-text-grey" : "gx-text-white"
              }`}
            />
          </Button>
        </Tooltip>
      </div>

      <Row>
        {/* <Col span={17}> */}
        <Col xl={16} lg={14} md={12} sm={12} xs={24}>
          <div className="gx-text-grey gx-fs-sm">
            <Paragraph>
              Япон улсын аукшин системд яг одоогоор тавигдсан байгаа
              автомашинуудыг та харж байна. Японоос орж ирж буй бүх автомашиныг
              эндээс авдаг билээ. Та өөрт таалагдсан хамгийн онцгой автомашиныг
              эндээс шууд үнэ тавин авах боломжтой.
            </Paragraph>
            <Paragraph>
              Энэ системийг ашигласнаар дундаж үнэлгээтэй энгийн автомашиныг
              хямдхан авах эсвэл маш сайн тоноглолтой сайхан автомашиныг
              боломжийн үнээр олж авах нөхцөл бүрдэж байгаа юм.
            </Paragraph>
          </div>
        </Col>
        {/* <Col span={7}> */}
        <Col xl={8} lg={10} md={12} sm={12} xs={24}>
          <Row gutter={[4, 4]}>
            <Col
              className="JOY-STEP-CHOOSE"
              xl={8}
              lg={8}
              md={12}
              sm={12}
              xs={12}
            >
              <Card
                hoverable
                onClick={showTopCars}
                className="gx-card-widget gx-card-full gx-p-3 gx-bg-cyan gx-text-white gx-mb-0"
              >
                <div className="gx-media gx-align-items-center gx-flex-nowrap">
                  {/* <div className="gx-mr-2">
                      <i className={`icon icon-diamond gx-fs-icon-lg`} />
                    </div> */}
                  <div className="gx-media-body">
                    <h1 className="gx-fs-lg gx-font-weight-semi-bold gx-mb-1 gx-text-white">
                      Нийтлэг
                    </h1>
                    <p className="gx-mb-0">машинууд</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={12}>
              <Card
                hoverable
                onClick={showRareCars}
                className="gx-card-widget gx-card-full gx-p-3 gx-bg-teal gx-text-white gx-mb-0"
              >
                <div className="gx-media gx-align-items-center gx-flex-nowrap">
                  <div className="gx-media-body">
                    <h1 className="gx-fs-lg gx-font-weight-semi-bold gx-mb-1 gx-text-white">
                      Өвөрмөц
                    </h1>
                    <p className="gx-mb-0">машинууд</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col className="JOY-STEP-FAQ" xl={8} lg={8} md={24} sm={24} xs={24}>
              <Card
                hoverable
                onClick={showFaq}
                className="gx-card-widget gx-card-full gx-p-3 gx-bg-orange gx-text-white gx-mb-0"
              >
                <div className="gx-media gx-align-items-center gx-flex-nowrap">
                  <div className="gx-media-body">
                    <h1 className="gx-fs-lg gx-font-weight-semi-bold gx-mb-1 gx-text-white">
                      Аукшины
                    </h1>
                    <p className="gx-mb-0">асуулт</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Button onClick={compareContext.toggleDrawer}>dfd fdsf </Button>

      <Drawer
        className="moto-big-drawer"
        title="Нийтлэг машинууд"
        placement="right"
        closable={true}
        onClose={onCloseTopCars}
        visible={topCarsVisible}
      >
        <MostCarsInfo />
      </Drawer>
      <Drawer
        className="moto-big-drawer"
        title="Өвөрмөц машинууд"
        placement="right"
        closable={true}
        onClose={onCloseRareCars}
        visible={rareCarsVisible}
      >
        <RareCarsInfo />
      </Drawer>
      <Drawer
        className="moto-big-drawer"
        title="Аукшины асуулт, хариулт"
        placement="right"
        closable={true}
        onClose={onCloseFaq}
        visible={faqVisible}
      >
        <FaqInfo />
      </Drawer>
    </>
  );
};

export default AuctionListInfo;
