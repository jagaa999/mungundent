import React from "react";

import { Avatar, Button } from "antd";

import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
// import { isImg } from "./utils";
import "rc-banner-anim/assets/index.css";

const WidgetBanner101 = ({ myWidgetDtl, myResult }) => {
  console.table("myWidgetDtl", myWidgetDtl);
  console.table("myResult", myResult);

  return (
    <div
      className="gx-profile-banner"
      style={{
        height: "600px",
        padding: "15%",
        backgroundImage: `url(${myResult.photo})`,
      }}
    >
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..." src={myResult.avatar} />
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">
                {myResult.title}
              </h2>
              <p className="gx-mb-0 gx-fs-lg">{myResult.description}</p>
            </div>
          </div>
        </div>

        <div className="gx-mt-5">
          <Button>{myResult.buttontext}</Button>
        </div>
      </div>
    </div>
  );
};

export default WidgetBanner101;
