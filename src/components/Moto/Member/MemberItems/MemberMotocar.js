import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { Tabs } from "antd";
import MemberItemsList from "./MemberItemsList";
import MemberMotocarCarList from "./MemberMotocarCarList";

const MemberMotocar = () => {
  return (
    <>
      <div className="">
        <h6 className="gx-mb-3">Таны гарааш</h6>
      </div>

      <Tabs defaultActiveKey="1" size="small" className="motoMemberItems">
        <Tabs.TabPane tab="Машин" key="news">
          <Scrollbars
            autoHeight
            autoHeightMin={200}
            autoHeightMax={400}
            autoHide
            autoHideTimeout={2000}
            universal
          >
            <MemberMotocarCarList />
          </Scrollbars>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Сэлбэг" key="autozar">
          <Scrollbars
            autoHeight
            autoHeightMin={200}
            autoHeightMax={400}
            autoHide
            autoHideTimeout={2000}
            universal
          >
            {/* <MemberItemsList tableName="MOTO_AUTOZAR" menu="autozar" /> */}
          </Scrollbars>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default MemberMotocar;
