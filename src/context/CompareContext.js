import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Html5Entities } from "html-entities";
import { Button, Drawer, Tooltip, Row, Col, Card, Image, Tag } from "antd";
import UniversalListItemMainImage from "components/Moto/Universal/UniversalListItemMainImage";
import MyIcon from "util/iconFunction";
import { DeleteOutlined } from "@ant-design/icons";

import { GetSpecData } from "util/getSpecData";

const CompareContext = React.createContext();

export const CompareStore = (props) => {
  // const htmlEntities = new Html5Entities();

  const [compareList, setCompareList] = useState({
    compareList: [
      // {
      //   title: "2014 Toyota Harrier",
      //   image:
      //     "https://8.ajes.com/imgs/23FCi0VbnvRhXb4iHollYQZOsAFE37O8hY7Ix48a8C&w=320#https://8.ajes.com/imgs/23FCi0VbnvRhXb4iHollYQZOsAFE37O968IR6F4eEp&h=50",
      //   mainSpec: "3.5",
      //   link: "/auction/oTqyOK8MrAxdNQ8",
      //   subSpecs: [
      //     {
      //       title: "Өнгө",
      //       value: "Silver",
      //     },
      //     {
      //       title: "Хөдөлгүүр",
      //       value: "2500 cc",
      //     },
      //   ],
      //   originalItem: {
      //     AUCTION: "TAA Kinki",
      //     AUCTION_DATE: "2020-12-22 00:00:00",
      //     AVG_PRICE: "1260000",
      //     AVG_STRING: "1280,1242,1259",
      //     COLOR: "silver",
      //     ENG_V: "2000",
      //     EQUIP: "AAC",
      //     FINISH: "994000",
      //     GRADE: "S",
      //     ID: "JlcFVEmcTsMPaw",
      //     IMAGES:
      //       "https://8.ajes.com/imgs/dyJ2O5ZnVGaLpjCgSr4JtiXZqMvjmvoi6QPanFbXeO&h=50#https://8.ajes.com/imgs/dyJ2O5ZnVGaLpjCgSr4JtiXZqMvjmvoiT1riWh92LB&h=50",
      //     KPP: "IAT",
      //     KPP_TYPE: "2",
      //     KUZOV: "RK5",
      //     LOT: "2092",
      //     MARKA_ID: "5",
      //     MARKA_NAME: "HONDA",
      //     MILEAGE: "32000",
      //     MODEL_ID: "621",
      //     MODEL_NAME: "STEP WAGON",
      //     PRIV: "",
      //     PW: "",
      //     RATE: "3.5",
      //     START: "550000",
      //     STATUS: "Sold",
      //     TIME: "2020-12-22 14:48:54",
      //     YEAR: "2014",
      //   },
      // },
      // {
      //   title: "2014 Toyota Harrier",
      //   image:
      //     "https://8.ajes.com/imgs/aKxY8uthGoTnVCYdz2ga1hRTLFvzLVor4ms1bIBEOyTspOf0dsb3&w=320#https://8.ajes.com/imgs/aKxY8uthGoTnVCYdz2ga1hRTLFvzLVor4ms1bIBEOyTspOqISQTv&h=50",
      //   mainSpec: "3.5",
      //   link: "/auction/oTqyOK8MrAxdNQ8",
      //   subSpecs: [
      //     {
      //       title: "Өнгө",
      //       value: "Silver",
      //     },
      //     {
      //       title: "Хөдөлгүүр",
      //       value: "2500 cc",
      //     },
      //   ],
      //   originalItem: {
      //     AUCTION: "HERO",
      //     AUCTION_DATE: "2020-12-23 12:07:00",
      //     AVG_PRICE: "1312000",
      //     AVG_STRING: "1416,1236,1240,1357",
      //     COLOR: "white",
      //     ENG_V: "2000",
      //     EQUIP: "AC",
      //     FINISH: "0",
      //     GRADE: "GTI DR",
      //     ID: "IClmlGOTGnOiug",
      //     IMAGES:
      //       "https://8.ajes.com/imgs/8KvxD4CPeYJRFogAQq34T4hmcYi2zLzeXXBpzmWKV5iT&h=50#https://8.ajes.com/imgs/8KvxD4CPeYJRFogAQq34T4hmcYi2zLzeXXBpzpneBfCY&h=50",
      //     KPP: "FA",
      //     KPP_TYPE: "2",
      //     KUZOV: "AUCHH",
      //     LOT: "2017",
      //     MARKA_ID: "31",
      //     MARKA_NAME: "VOLKSWAGEN",
      //     MILEAGE: "31000",
      //     MODEL_ID: "1053",
      //     MODEL_NAME: "GOLF",
      //     PRIV: "",
      //     PW: "",
      //     RATE: "4",
      //     START: "100000",
      //     STATUS: "",
      //     TIME: "2020-12-22 16:14:23",
      //     YEAR: "2014",
      //   },
      // },
      // {
      //   title: "2014 TOYOTA COROLLA FIELDER",
      //   image:
      //     "https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQUWr3fIgev4qu6mlwnRhV&w=320#https://8.ajes.com/imgs/2hSsOwl3qzivoAuAqJCgC8gJ1J9UiOzImMQVcVPIb73B7GPNAw6oftk&h=50",
      //   mainSpec: "S",
      //   link: "/auction/oTqyOK8MrAxdNQ8",
      //   subSpecs: [
      //     {
      //       title: "Өнгө",
      //       value: "Silver",
      //     },
      //     {
      //       title: "Хөдөлгүүр",
      //       value: "2500 cc",
      //     },
      //   ],
      //   originalItem: {
      //     AUCTION: "MIRIVE Osaka",
      //     AUCTION_DATE: "2020-12-24 11:40:00",
      //     AVG_PRICE: "1903000",
      //     AVG_STRING: "1860,1877,2250,1512,2138,2122,1569,2149,2124,2041",
      //     COLOR: "silver",
      //     ENG_V: "2500",
      //     EQUIP: "AAC",
      //     FINISH: "0",
      //     GRADE: "Hybrid Royal",
      //     ID: "32Jw0j1uGY4YlaD",
      //     IMAGES:
      //       "https://8.ajes.com/imgs/8KvxD4CPeYJMMMTdK3cmW9nh9raYZJSQuOsas8Sb6i71&h=50#https://8.ajes.com/imgs/8KvxD4CPeYJMMMTdK3cmW9nh9raYZJSQuOsasaFO7gR2&h=50",
      //     KPP: "FAT",
      //     KPP_TYPE: "2",
      //     KUZOV: "AWS210",
      //     LOT: "70048",
      //     MARKA_ID: "1",
      //     MARKA_NAME: "TOYOTA",
      //     MILEAGE: "61000",
      //     MODEL_ID: "60",
      //     MODEL_NAME: "CROWN",
      //     PRIV: "",
      //     PW: "",
      //     RATE: "4",
      //     START: "850000",
      //     STATUS: "",
      //     TIME: "2020-12-22 13:40:36",
      //     YEAR: "2014",
      //   },
      // },
    ],
    loading: false,
    error: "",
    isOpen: false,
    // closeSoon: false,
  });

  //     #    ######  ######
  //    # #   #     # #     #
  //   #   #  #     # #     #
  //  #     # #     # #     #
  //  ####### #     # #     #
  //  #     # #     # #     #
  //  #     # ######  ######
  const addItem = (item, menu) => {
    const myList = compareList.compareList;
    const myItem = {
      ...item.compareButtonData,
      originalItem: item,
    };
    myList.push(myItem);
    setCompareList({
      ...compareList,
      compareList: myList,
      isOpen: true,
      // closeSoon: true,
    });
  };

  //  ######  ####### #     # ####### #     # #######
  //  #     # #       ##   ## #     # #     # #
  //  #     # #       # # # # #     # #     # #
  //  ######  #####   #  #  # #     # #     # ####
  //  #   #   #       #     # #     #  #   #  #
  //  #    #  #       #     # #     #   # #   #
  //  #     # ####### #     # #######    #    #######
  const removeItem = (index) => {
    // console.log("ӨӨӨӨӨӨӨӨӨӨӨ", index);
    const myList = compareList.compareList;
    myList.splice(index, 1);
    setCompareList({ ...compareList, compareList: myList });
  };

  //   #####  #       #######    #    ######
  //  #     # #       #         # #   #     #
  //  #       #       #        #   #  #     #
  //  #       #       #####   #     # #####
  //  #       #       #       ####### #   #
  //  #     # #       #       #     # #    #
  //   #####  ####### ####### #     # #     #
  const clearAll = () => {
    setCompareList({ ...compareList, compareList: [] });
  };

  //Хэрвээ удахгүй хаагдах горимд байвал буцаагаад хаах хэрэгтэй:
  // useEffect(() => {
  //   if (compareList.closeSoon) {
  //     //буцаагаад хаах хэрэгтэй.
  //     setTimeout(() => {
  //       setCompareList({
  //         ...compareList,
  //         isOpen: false,
  //         closeSoon: false,
  //       });
  //     }, 1500);
  //   }
  // }, [compareList.isOpen]);

  //  ######  ######     #    #     # ####### ######
  //  #     # #     #   # #   #  #  # #       #     #
  //  #     # #     #  #   #  #  #  # #       #     #
  //  #     # ######  #     # #  #  # #####   ######
  //  #     # #   #   ####### #  #  # #       #   #
  //  #     # #    #  #     # #  #  # #       #    #
  //  ######  #     # #     #  ## ##  ####### #     #
  //
  const CompareDrawer = () => {
    return (
      <Drawer
        className="gx-bg-light"
        bodyStyle={{ backgroundColor: "#f5f5f5" }}
        title={null}
        // title={
        //   <>
        //     <Link to="/compare">
        //       <Button
        //         type="primary"
        //         size="small"
        //         className="gx-m-0"
        //         icon={<MyIcon type="iconcheck-square-solid" />}
        //         onClick={toggleDrawer}
        //       >
        //         Харьцуулах
        //       </Button>
        //     </Link>
        //     <Button
        //       size="small"
        //       className="gx-m-0 gx-ml-2"
        //       onClick={(e) => clearAll()}
        //     >
        //       Хоослох
        //     </Button>
        //   </>
        // }
        mask={false}
        maskClosable={false}
        className="moto-drawer-bottom-full"
        placement="bottom"
        height="240px"
        width="100%"
        // closable={true}
        closable={false}
        onClose={(e) => setCompareList({ ...compareList, isOpen: false })}
        visible={compareList.isOpen}
        // closeIcon={<MyIcon type="iconangledown" />}
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
                // className="gx-mb-5"
              >
                <Card
                  className="gx-fs-sm gx-m-0"
                  bordered={false}
                  style={{ height: "100%" }}
                  size="small"
                  hoverable
                  cover={
                    <UniversalListItemMainImage
                      myClass="gx-img-fluid gx-w-100"
                      width="auto"
                      imageMain={item.originalItem.mainData.imagemain.value}
                      cloudName={
                        item.originalItem.mainData.imagemaincloudname.value
                      }
                    />
                  }
                >
                  <Tag color="warning" className="moto-badge-1">
                    {item.mainSpec}
                  </Tag>

                  <h6 className="gx-text-center">
                    <Link to={item.link || "/"}>
                      {item.title || "Тодорхойгүй"}
                    </Link>
                  </h6>

                  {/* <Tooltip title="Хасах">
                    <Button
                      type="text"
                      className="moto-badge-4"
                      onClick={(e) => removeItem(index)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Tooltip> */}
                </Card>
              </Col>
            ))}
            <Col key="control-buttons" xl={3} lg={4} md={4} sm={6} xs={8}>
              <div
                style={{
                  height: "100%",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div>
                  <Link to="/compare">
                    <Button
                      block
                      type="primary"
                      // size="small"
                      // className="gx-m-0"
                      icon={<MyIcon type="iconcheck-square-solid" />}
                      onClick={toggleDrawer}
                    >
                      Харьцуулах
                    </Button>
                  </Link>
                  <Button
                    block
                    // size="small"
                    // className="gx-m-0 gx-ml-2"
                    onClick={(e) => clearAll()}
                  >
                    Хоослох
                  </Button>
                  <Button block onClick={(e) => toggleDrawer()}>
                    Хаах
                  </Button>
                </div>
              </div>
            </Col>
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
        // CompareDrawer,
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
