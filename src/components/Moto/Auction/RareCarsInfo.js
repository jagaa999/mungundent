import React from "react";
import { Link } from "react-router-dom";

import { Tabs, List, Image } from "antd";
import {
  sportList,
  germanList,
  rareList,
  luxuryList,
} from "content/auction/specialCars";

const SpecialCarsInfo = () => {
  return (
    <div className="gx-mt-3">
      <div>Худалдан авахад сонирхолтой өвөрмөц, ховор машинуудын жагсаалт</div>
      <Tabs defaultActiveKey="1" centered className="gx-mt-3" size="small">
        <Tabs.TabPane tab="Спорт" key="1">
          <List
            itemLayout="horizontal"
            dataSource={sportList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Link to={item.link || "/auction"}>
                    {item.link ? "Үзэх" : ""}
                  </Link>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Image
                      width={45}
                      src={require(`assets/images/auction/${item.image}`)}
                    />
                  }
                  title={
                    item.active != 0 ? (
                      item.title
                    ) : (
                      <span className="gx-text-danger">{item.title}</span>
                    )
                  }
                  description={
                    <span className="gx-text-grey gx-fs-sm">{item.desc}</span>
                  }
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Герман" key="2">
          <List
            itemLayout="horizontal"
            dataSource={germanList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Link to={item.link || "/auction"}>
                    {item.link ? "Үзэх" : ""}
                  </Link>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Image
                      width={45}
                      src={require(`assets/images/auction/${item.image}`)}
                    />
                  }
                  title={
                    item.active != 0 ? (
                      item.title
                    ) : (
                      <span className="gx-text-danger">{item.title}</span>
                    )
                  }
                  description={
                    <span className="gx-text-grey gx-fs-sm">{item.desc}</span>
                  }
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ховор" key="3">
          <List
            itemLayout="horizontal"
            dataSource={rareList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Link to={item.link || "/auction"}>
                    {item.link ? "Үзэх" : ""}
                  </Link>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Image
                      width={45}
                      src={require(`assets/images/auction/${
                        item.image || "unknown.jpg"
                      }`)}
                    />
                  }
                  title={
                    item.active != 0 ? (
                      item.title
                    ) : (
                      <span className="gx-text-danger">{item.title}</span>
                    )
                  }
                  description={
                    <span className="gx-text-grey gx-fs-sm">
                      {item.desc || ""}
                    </span>
                  }
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Тансаг" key="34">
          <List
            itemLayout="horizontal"
            dataSource={luxuryList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Link to={item.link || "/auction"}>
                    {item.link ? "Үзэх" : ""}
                  </Link>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Image
                      width={45}
                      src={require(`assets/images/auction/${
                        item.image || "unknown.jpg"
                      }`)}
                    />
                  }
                  title={
                    item.active != 0 ? (
                      item.title
                    ) : (
                      <span className="gx-text-danger">{item.title}</span>
                    )
                  }
                  description={
                    <span className="gx-text-grey gx-fs-sm">
                      {item.desc || ""}
                    </span>
                  }
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default SpecialCarsInfo;
