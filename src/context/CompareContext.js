import React, { useState, useContext, useEffect } from "react";

import { Button, Drawer, Tooltip, Row, Col, Card, Image } from "antd";

const CompareContext = React.createContext();

export const CompareStore = (props) => {
  const [compareList, setCompareList] = useState({
    compareList: [
      {
        title: "2014 Toyota Harrier",
        image:
          "https://8.ajes.com/imgs/23FCi0VbnvRhXb4iHollYQZOsAFE37O8hY7Ix48a8C&w=320#https://8.ajes.com/imgs/23FCi0VbnvRhXb4iHollYQZOsAFE37O968IR6F4eEp&h=50",
        mainSpec: "3.5",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier",
        image:
          "https://8.ajes.com/imgs/aKxY8uthGoTnVCYdz2ga1hRTLFvzLVor4ms1bIBEOyTspOf0dsb3&w=320#https://8.ajes.com/imgs/aKxY8uthGoTnVCYdz2ga1hRTLFvzLVor4ms1bIBEOyTspOqISQTv&h=50",
        mainSpec: "3.5",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
      {
        title: "2014 Toyota Harrier2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        subSpecs: [
          {
            title: "Өнгө",
            value: "Silver",
          },
          {
            title: "Хөдөлгүүр",
            value: "2500 cc",
          },
        ],
      },
    ],
    loading: false,
    error: "",
    isOpen: true,
  });

  const CompareDrawer = () => {
    return (
      <Drawer
        // title="Харьцуулах"
        className="moto-drawer-bottom-full"
        placement="bottom"
        height="350px"
        width="100%"
        closable={true}
        onClose={(e) => setCompareList({ ...compareList, isOpen: false })}
        visible={compareList.isOpen}
      >
        <div className="gx-p-3">
          <Row gutter={7} className="gx-d-flex">
            {compareList.compareList.map((item, index) => (
              <Col span={4}>
                <Card
                  className="gx-bg-grey  gx-fs-sm"
                  style={{ height: "100%" }}
                  size="small"
                  cover={<Image src={item.image} />}
                >
                  <div>{item.title}</div>
                  <div>{item.mainSpec}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Drawer>
    );
  };

  const toggleDrawer = (props) => {
    setCompareList({ ...compareList, isOpen: !compareList.isOpen });
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        CompareDrawer,
        toggleDrawer,
      }}
    >
      {props.children}
      <CompareDrawer />
    </CompareContext.Provider>
  );
};

export default CompareContext;
