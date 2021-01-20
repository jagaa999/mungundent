import React, { useState, useEffect, useContext } from "react";
import { notification, Row, Col } from "antd";
import MyIcon from "util/iconFunction";
import MemberContext from "context/MemberContext";
import { Scrollbars } from "react-custom-scrollbars";

import AvatarMember03 from "../Member/MemberAvatar03";

const giveInfo = (type, title, desc) => {
  notification[type]({
    message: title,
    description: desc,
  });
};

const AutozarDetailSeller = ({ myItem }) => {
  const memberContext = useContext(MemberContext);
  const OnlyMember = memberContext.OnlyMember;
  // console.table(myItem);

  return (
    <div>
      <OnlyMember>
        <Row>
          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Борлуулагч</h4>
            <div>
              {myItem.memberpersonid != "1598935351415" ? (
                <AvatarMember03
                  memberPhoto={myItem.memberprofilephoto}
                  memberName={myItem.memberuserfullname}
                />
              ) : (
                ""
              )}

              <div className="gx-media gx-mt-4 gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                <div className="gx-mr-3">
                  <MyIcon
                    type="iconmail-bulk"
                    className="gx-fs-xxl gx-text-grey"
                  />
                </div>
                <div className="gx-media-body">
                  <span className="gx-mb-0 gx-text-grey gx-fs-sm">Имэйл</span>
                  <p className="gx-mb-0">{myItem.email || "..."}</p>
                </div>
              </div>

              <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                <div className="gx-mr-3">
                  <MyIcon
                    type="iconphone-up"
                    className="gx-fs-xxl gx-text-grey"
                  />
                </div>
                <div className="gx-media-body">
                  <span className="gx-mb-0 gx-text-grey gx-fs-sm">Утас 1</span>
                  <p className="gx-mb-0">{myItem.mobile1rr || "..."}</p>
                </div>
              </div>

              <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
                <div className="gx-mr-3">
                  <MyIcon type="iconphone" className="gx-fs-xxl gx-text-grey" />
                </div>
                <div className="gx-media-body">
                  <span className="gx-mb-0 gx-text-grey gx-fs-sm">Утас 2</span>
                  <p className="gx-mb-0">{myItem.mobile2 || "..."}</p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Тэмдэглэл</h4>
            <div className="gx-bg-primary-light gx-p-5 gx-border-radius-top-left-0 gx-rounded-lg ">
              {myItem.description}
            </div>
          </Col>
        </Row>
      </OnlyMember>
    </div>
  );
};

export default AutozarDetailSeller;

{
  /* <Scrollbars
        autoHeight
        autoHeightMin={100}
        autoHeightMax="calc(80vh - 36px - 35px - 75px)"
        autoHide
        autoHideTimeout={2000}
        universal
        renderTrackHorizontal={(props) => (
          <div
            {...props}
            style={{ display: "none" }}
            className="track-horizontal"
          />
        )}
      > */
}
