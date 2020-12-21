import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Html5Entities } from "html-entities";
import { Button, Drawer, Tooltip, Row, Col, Card, Image, Tag } from "antd";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import AutozarListItemMainImage from "components/Moto/Autozar/AutozarListItemMainImage";

const CompareContext = React.createContext();

export const CompareStore = (props) => {
  const htmlEntities = new Html5Entities();

  const [compareList, setCompareList] = useState({
    compareList: [
      {
        title: "2014 Toyota Harrier",
        image:
          "https://8.ajes.com/imgs/23FCi0VbnvRhXb4iHollYQZOsAFE37O8hY7Ix48a8C&w=320#https://8.ajes.com/imgs/23FCi0VbnvRhXb4iHollYQZOsAFE37O968IR6F4eEp&h=50",
        mainSpec: "3.5",
        link: "/auction/oTqyOK8MrAxdNQ8",
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
        link: "/auction/oTqyOK8MrAxdNQ8",
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
        title: "2014 TOYOTA COROLLA FIELDER",
        image:
          "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
        mainSpec: "S",
        link: "/auction/oTqyOK8MrAxdNQ8",
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
    isOpen: false,
  });

  const addItem = (item, menu) => {
    let myItem = {};

    switch (menu) {
      case "auction":
        myItem = {
          title: `${item.YEAR} ${item.MARKA_NAME} ${item.MODEL_NAME}`,
          image: item.IMAGES.replace("h=50", "w=320"),
          mainSpec: item.RATE,
          link: "/auction/" + item.ID,
          subSpecs: [
            {
              title: "Арал",
              value: htmlEntities.decode(item.KUZOV),
            },
            {
              title: "Хувилбар",
              value: htmlEntities.decode(item.GRADE),
            },
          ],
          originalItem: item,
        };
        break;
      case "autozar":
        myItem = {
          title: item.myTitle,
          // image: (
          //   <AutozarListItemMainImage
          //     myClass="gx-img-fluid gx-w-100"
          //     width="auto"
          //     imageMain={item.imagemain}
          //   />
          // ),
          image: item.imagemain,
          mainSpec: item.financepricerr, //Үнэ
          link: "/autozar/" + item.id,
          subSpecs: [
            {
              title: "Шатахуун",
              value: htmlEntities.decode(item.mglfuel),
            },
            {
              title: "Хөтлөгч",
              value: htmlEntities.decode(item.drive2drivename),
            },
          ],
          originalItem: item,
        };
        break;
      default:
        myItem = {};
        break;
    }

    const myList = compareList.compareList;
    myList.push(myItem);
    setCompareList({ ...compareList, compareList: myList, isOpen: true });
  };

  const removeItem = (index) => {
    // console.log("ӨӨӨӨӨӨӨӨӨӨӨ", index);
    const myList = compareList.compareList;
    myList.splice(index, 1);
    setCompareList({ ...compareList, compareList: myList });
  };

  const clearAll = () => {
    setCompareList({ ...compareList, compareList: [] });
  };

  const CompareDrawer = () => {
    return (
      <Drawer
        title={
          <>
            <Link to="/compare">
              <Button type="primary" size="small" className="gx-m-0">
                Харьцуулах
              </Button>
            </Link>
            <Button
              size="small"
              className="gx-m-0 gx-ml-2"
              onClick={(e) => clearAll()}
            >
              Хоослох
            </Button>
          </>
        }
        className="moto-drawer-bottom-full"
        placement="bottom"
        height="350px"
        width="100%"
        closable={true}
        onClose={(e) => setCompareList({ ...compareList, isOpen: false })}
        visible={compareList.isOpen}
        closeIcon={<CloseCircleOutlined />}
        // footer={
        //   <div
        //     style={{
        //       textAlign: "right",
        //     }}
        //   >
        //     <Button style={{ marginRight: 8 }}>Cancel</Button>
        //     <Button type="primary">Submit</Button>
        //   </div>
        // }
        headerStyle={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="gx-p-3">
          <Row gutter={11} className="gx-d-flex">
            {compareList.compareList.map((item, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={4}
                sm={6}
                xs={8}
                className="gx-mb-5"
              >
                <Card
                  className="gx-fs-sm"
                  style={{ height: "100%" }}
                  size="small"
                  hoverable
                  cover={<Image src={item.image} />}
                  // actions={[
                  //   <SettingOutlined key="setting" />,
                  //   <EditOutlined key="edit" />,
                  //   <EllipsisOutlined key="ellipsis" />,
                  // ]}
                >
                  <Tag color="warning" className="moto-badge-1">
                    {item.mainSpec}
                  </Tag>

                  <h6>
                    <Link to={item.link || "/"}>
                      {item.title || "Тодорхойгүй"}
                    </Link>
                  </h6>

                  <div className="gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
                    {item.subSpecs.map((subSpec, index) => (
                      <Tooltip title={subSpec.title} key={index}>
                        <span className="moto-label-main ant-tag">
                          {subSpec.value}
                        </span>
                      </Tooltip>
                    ))}
                  </div>

                  <Tooltip title="Хасах">
                    <Button
                      type="text"
                      className="moto-badge-4"
                      onClick={(e) => removeItem(index)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Tooltip>
                  {/* <Button
                    type="primary"
                    className="gx-mt-sm-4 gx-fs-sm gx-btn-block gx-mb-0 gx-text-uppercase gx-border-radius-top-left-0 gx-border-radius-top-right-0 absolute-bottom button-view"
                    size="large"
                    htmlType="submit"
                    block
                  >
                    Үзэх
                  </Button> */}
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
        addItem,
        removeItem,
        clearAll,
        toggleDrawer,
      }}
    >
      {props.children}
      <CompareDrawer />
    </CompareContext.Provider>
  );
};

export default CompareContext;
