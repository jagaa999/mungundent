import React from "react";

import { Card } from "antd";
// import EventItem from "./EventItem";
import MemberProfileItemsItem from "./MemberProfileItemsItem";
import { eventList } from "routes/socialApps/Profile/data";

const MemberProfileItems = () => {
  return (
    <Card className="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">MemberProfileItems</span>
        <p className="gx-text-grey gx-fs-sm gx-mb-0">What Kiley is up-to</p>
      </div>
      <div className="gx-pt-md-3">
        {eventList.map((data, index) => (
          <MemberProfileItemsItem key={index} data={data} />
        ))}
      </div>
    </Card>
  );
};

export default MemberProfileItems;
