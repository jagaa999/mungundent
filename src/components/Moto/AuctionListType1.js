import React, { useContext, useState } from "react";

import { Col, Row, Divider, Popover, Button, Card } from "antd";
import Joyride from "react-joyride";

import AuctionListItem1 from "./AuctionListItem1";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionListInfo from "./AuctionListInfo";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import AuctionContext from "context/AuctionContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const AuctionListType1 = () => {
  const auctionListContext = useContext(AuctionContext);
  const [joySteps, setJoySteps] = useState({
    steps: [
      {
        target: ".JOY-STEP-FIRM",
        // title: "Энэ бол гарчиг",
        content: "Эндээс машины Фирмээ сонгоорой",
      },
      {
        target: ".JOY-STEP-MARK",
        // title: "Бас гарчиг",
        content: "Фирмээ сонгосны дараа эндээс машины Маркаа сонгоорой",
      },
    ],
  });

  const MyTooltip = ({
    continuous,
    index,
    step,
    showSkipButton,
    backProps,
    closeProps,
    skipProps,
    primaryProps,
    tooltipProps,
  }) => (
    <div className="ant-card" {...tooltipProps}>
      <div class="ant-card-head">
        <div class="ant-card-head-wrapper">
          <div class="ant-card-head-title">{step.title || ""}</div>
        </div>
      </div>
      <div className="ant-card-body">{step.content}</div>
      <div>
        {showSkipButton && (
          <Button {...skipProps} size="small">
            <span id="skip" />
            Болих
          </Button>
        )}
        {index > 0 && (
          <Button {...backProps} size="small">
            <span id="back" />
            Буцах
          </Button>
        )}
        {continuous && (
          <Button {...primaryProps} size="small">
            <span id="next" />
            Дараах
          </Button>
        )}
        {!continuous && (
          <Button {...closeProps}>
            <span id="close" />
            Хаах
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="moto-list">
      <div className="gx-mb-2"></div>

      {!auctionListContext.auctionList.loading ? (
        <>
          <Joyride
            steps={joySteps.steps}
            continuous={true}
            showProgress={true}
            // showSkipButton={true}
            scrollToFirstStep={true}
            scrollOffset={120}
            locale={{
              back: "өмнөх",
              close: "Хаах",
              last: "Баярлалаа",
              next: "Дараах",
              skip: "Болих",
            }}
            // tooltipComponent={MyTooltip}
            styles={{
              options: {
                // arrowColor: "#e3ffeb",
                // backgroundColor: "#e3ffeb",
                // overlayColor: "rgba(79, 26, 0, 0.4)",
                primaryColor: "#588bae",
                // textColor: "#004a14",
                // width: 900,
                zIndex: 10000,
                fontSize: "10px",
              },
            }}
          />
          <AuctionListInfo />
          <Divider className="gx-my-3" />
          <AuctionListActionHeader />
          <AuctionFilterHeader />

          <div className="gx-main-content gx-p-2 gx-p-sm-0">
            <Row key="row" className="gx-d-flex">
              {auctionListContext.auctionList.auctionList.map(
                (auctionItem, index) => {
                  return (
                    <Col key={index} span={24}>
                      <AuctionListItem1 key={index} auctionItem={auctionItem} />
                    </Col>
                  );
                }
              )}
            </Row>
            <MotoPagination />
            <AuctionFilterDrawer />
          </div>
        </>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default AuctionListType1;
