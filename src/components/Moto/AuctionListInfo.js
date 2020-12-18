import React, { useState } from "react";

import { Button, Typography, Drawer, Tooltip } from "antd";
import Joyride, { STATUS } from "react-joyride";
import MyIcon from "util/iconFunction";

import MostCarsInfo from "./Auction/MostCarsInfo";
import RareCarsInfo from "./Auction/RareCarsInfo";

const { Paragraph } = Typography;

const AuctionListInfo = (props) => {
  const joySteps = [
    {
      target: ".JOY-STEP-FILTER",
      content: "Эндээс янз бүрээр шүүж, хүссэн машинаа олоорой",
    },
    {
      target: ".JOY-STEP-CARDTYPE",
      content: "Эндээс харагдах хэлбэрийг сонгоорой",
    },
    {
      target: ".JOY-STEP-CHOOSE",
      content:
        "Авч болох машинуудын зарим сонирхолтой сонголтыг эндээс хараарай",
    },
  ];
  const [runJoyride, setRunJoyride] = useState(false);
  const handleJoyrideCallback = (data) => {
    const { status, type } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunJoyride(false);
    }
  };

  const [topCarsVisible, setTopCarsVisible] = useState(false);
  const [rareCarsVisible, setRareCarsVisible] = useState(false);
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
            // zIndex: 10000,
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

      <div className="gx-text-grey gx-fs-sm">
        <Paragraph>
          Япон улсын аукшин системд яг одоогоор тавигдсан байгаа автомашинуудыг
          та харж байна. Японоос орж ирж буй бүх автомашиныг эндээс авдаг билээ.
          Та өөрт таалагдсан хамгийн онцгой автомашиныг эндээс шууд үнэ тавин
          авах боломжтой.
        </Paragraph>
        <Paragraph>
          Энэ системийг ашигласнаар дундаж үнэлгээтэй энгийн автомашиныг хямдхан
          авах эсвэл маш сайн тоноглолтой сайхан автомашиныг боломжийн үнээр олж
          авах нөхцөл бүрдэж байгаа юм.
        </Paragraph>
      </div>

      <div className="JOY-STEP-CHOOSE">
        <Button type="primary" onClick={showTopCars}>
          Нийтлэг машинууд
        </Button>
        <Button onClick={showRareCars}>Өвөрмөц машинууд</Button>
      </div>
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
    </>
  );
};

export default AuctionListInfo;
