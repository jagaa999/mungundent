import React from "react";

import { Tabs, Table } from "antd";
import {
  tire2020,
  tire2019,
  tire2018,
  tire2017,
} from "content/product/tire/topBrands";

const TopTireBrand = () => {
  return (
    <>
      <h2>Дугуйны топ 10 брэнд</h2>

      <Tabs defaultActiveKey="2020" centered className="gx-mt-5">
        <Tabs.TabPane tab="2020" key="2020">
          <Table
            columns={tire2020.columns}
            dataSource={tire2020.data}
            pagination={false}
            bordered={false}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="2019" key="2019">
          <Table
            columns={tire2019.columns}
            dataSource={tire2019.data}
            pagination={false}
            bordered={false}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="2018" key="2018">
          <Table
            columns={tire2018.columns}
            dataSource={tire2018.data}
            pagination={false}
            bordered={false}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="2017" key="2017">
          <Table
            columns={tire2017.columns}
            dataSource={tire2017.data}
            pagination={false}
            bordered={false}
          />
        </Tabs.TabPane>
      </Tabs>

      <div className="gx-fs-sm gs-text-grey gx-my-5">
        Эх сурвалж:{" "}
        <a href="https://brandirectory.com/rankings/tyres/" target="_blank">
          Brand Directory - Tyres 10 Ranking
        </a>
      </div>
    </>
  );
};

export default TopTireBrand;
