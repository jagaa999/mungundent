import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { Card, Tabs } from "antd";
import NotificationItem from "./NotificationItem";
import { notifications } from "./data";

const { TabPane } = Tabs;

const MemberItems = () => {
  return (
    <>
      {/* <div className="gx-popover-header">
        <h6 className="gx-mb-0">Таны зүйлс</h6>
        <i className="gx-icon-btn icon icon-charvlet-down" />
      </div> */}

      <Tabs defaultActiveKey="1" size="small" className="motoMemberItems">
        <TabPane tab="Нийтлэл" key="1">
          <Scrollbars
            autoHeight
            autoHeightMin={200}
            autoHeightMax={400}
            autoHide
            autoHideTimeout={2000}
            universal
          >
            <ul className="gx-sub-popover">
              {notifications.map((notification, index) => (
                <NotificationItem key={index} notification={notification} />
              ))}
            </ul>
          </Scrollbars>
        </TabPane>
        <TabPane tab="Автозар" key="2">
          <Scrollbars autoHeight>
            <ul className="gx-sub-popover">
              {notifications.map((notification, index) => (
                <NotificationItem key={index} notification={notification} />
              ))}
            </ul>
          </Scrollbars>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <Scrollbars autoHeight>
            <ul className="gx-sub-popover">
              {notifications.map((notification, index) => (
                <NotificationItem key={index} notification={notification} />
              ))}
            </ul>
          </Scrollbars>
        </TabPane>
      </Tabs>
    </>
  );
};

export default MemberItems;
