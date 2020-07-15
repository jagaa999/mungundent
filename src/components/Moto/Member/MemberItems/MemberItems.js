import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { Card, Tabs } from "antd";
import MemberItem from "./MemberItem";
import { notifications } from "./data";
import MemberItemsContext from "context/MemberItemsContext";

const { TabPane } = Tabs;

const MemberItems = () => {
  const memberItemsContext = useContext(MemberItemsContext);

  const memberItems = memberItemsContext.state.memberItems;

  console.log("memberItems--------", memberItems);

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
              {Object.entries(memberItems).map(function (item, index) {
                return <MemberItem key={index} memberItem={item} />;
              })}
            </ul>
          </Scrollbars>
        </TabPane>
        <TabPane tab="Автозар" key="2">
          <Scrollbars autoHeight>
            <ul className="gx-sub-popover">
              {notifications.map((memberItem, index) => (
                <MemberItem key={index} memberItem={memberItem} />
              ))}
            </ul>
          </Scrollbars>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <Scrollbars autoHeight>
            <ul className="gx-sub-popover">
              {notifications.map((memberItem, index) => (
                <MemberItem key={index} memberItem={memberItem} />
              ))}
            </ul>
          </Scrollbars>
        </TabPane>
      </Tabs>
    </>
  );
};

export default MemberItems;
