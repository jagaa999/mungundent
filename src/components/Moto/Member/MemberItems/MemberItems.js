import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { Tabs } from "antd";
import MemberItemsList from "./MemberItemsList";

const MemberItems = () => {
  return (
    <>
      <div className="">
        <h6 className="gx-mb-3">Таны жоорлосон зүйлс</h6>
      </div>

      <Tabs defaultActiveKey="1" size="small" className="motoMemberItems">
        <Tabs.TabPane tab="Нийтлэл" key="news">
          <Scrollbars
            autoHeight
            autoHeightMin={200}
            autoHeightMax={400}
            autoHide
            autoHideTimeout={2000}
            universal
          >
            <MemberItemsList tableName="ECM_NEWS" menu="news" />
          </Scrollbars>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Автозар" key="autozar">
          <Scrollbars
            autoHeight
            autoHeightMin={200}
            autoHeightMax={400}
            autoHide
            autoHideTimeout={2000}
            universal
          >
            <MemberItemsList tableName="MOTO_AUTOZAR" menu="autozar" />
          </Scrollbars>
        </Tabs.TabPane>

        {/* <Tabs.TabPane tab="Аукшин" key="auction">
          <Scrollbars
            autoHeight
            autoHeightMin={200}
            autoHeightMax={400}
            autoHide
            autoHideTimeout={2000}
            universal
          >
            <MemberItemsList tableName="MOTO_AUCTION" menu="auction" />
          </Scrollbars>
        </Tabs.TabPane> */}
      </Tabs>
    </>
  );
};

export default MemberItems;
