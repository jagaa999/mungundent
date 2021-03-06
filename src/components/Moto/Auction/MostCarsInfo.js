import React from "react";
import { Link } from "react-router-dom";

import { Tabs, List, Image } from "antd";
import {
  sedanList,
  hatchbackList,
  crossoverList,
  suvList,
} from "content/auction/mostCars";

const MostCarsInfo = () => {
  return (
    <div className="gx-mt-3">
      <div>Монголчуудын нийтлэг худалдан авч унадаг машинуудын жагсаалт</div>
      <Tabs defaultActiveKey="1" centered className="gx-mt-3" size="small">
        <Tabs.TabPane tab="Сэдан" key="1">
          <List
            itemLayout="horizontal"
            dataSource={sedanList}
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
        <Tabs.TabPane tab="Хэчбэк" key="2">
          <List
            itemLayout="horizontal"
            dataSource={hatchbackList}
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
        <Tabs.TabPane tab="Кроссовер" key="3">
          <List
            itemLayout="horizontal"
            dataSource={crossoverList}
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
        <Tabs.TabPane tab="Жийп" key="34">
          <List
            itemLayout="horizontal"
            dataSource={suvList}
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

export default MostCarsInfo;
