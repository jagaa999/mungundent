import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { parse } from "query-string";

import {
  message,
  Button,
  Drawer,
  Tooltip,
  Row,
  Col,
  Card,
  Image,
  Tag,
  Select,
  Descriptions,
} from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import useDidMountEffect from "util/useDidMountEffect";
import MyIcon from "util/iconFunction";
import { DeleteOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
const { Option } = Select;

const CarCatalogContext = React.createContext();

export const CarCatalogListStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialStateCarFirmList = {
    loadParams: {
      systemmetagroupid: "1599822188399800",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        sortcolumnnames: {
          firmname: {
            sorttype: "ASC", //эрэмбэлэх чиглэл
          },
        },
      },
    },
    carFirmList: [],
    loading: false,
    error: null,
  };

  const initialStateCarMarkList = {
    loadParams: {
      systemmetagroupid: "1599554598533",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        sortcolumnnames: {
          markname: {
            sorttype: "ASC", //эрэмбэлэх чиглэл
          },
        },
      },
    },
    carMarkList: [],
    loading: false,
    error: null,
  };

  const initialStateCarIndexList = {
    loadParams: {
      systemmetagroupid: "1599824590726192",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        sortcolumnnames: {
          maindate2: {
            sorttype: "DESC",
          },
        },
      },
    },
    carIndexList: [],
    loading: false,
    error: null,
  };

  const initialStateCarEditionList = {
    loadParams: {
      systemmetagroupid: "1599825541835232",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        sortcolumnnames: {
          maindate: {
            sorttype: "DESC",
          },
        },
      },
    },
    carEditionList: [],
    loading: false,
    error: null,
  };

  const initialStateCarDetail = {
    carDetail: {},
    loading: false,
    error: null,
  };

  const [carFirmList, setCarFirmList] = useState(initialStateCarFirmList);
  const [carMarkList, setCarMarkList] = useState(initialStateCarMarkList);
  const [carIndexList, setCarIndexList] = useState(initialStateCarIndexList);
  const [carEditionList, setCarEditionList] = useState(
    initialStateCarEditionList
  );
  const [carDetail, setCarDetail] = useState(initialStateCarDetail);
  const [carDrawer, setCarDrawer] = useState({
    isOpen: true,
    firmid: null,
    markid: null,
    indexid: null,
    carid: null,
  });

  // useEffect(() => {
  //   if (!isEmpty(carDrawer.firmid)) {
  //     loadCarMarkList(carDrawer.firmid);
  //   }

  //   if (!isEmpty(carDrawer.markid)) {
  //     loadCarIndexList(carDrawer.markid);
  //   }

  //   if (!isEmpty(carDrawer.indexid)) {
  //     loadCarEditionList(carDrawer.indexid);
  //   }

  //   if (!isEmpty(carDrawer.editionid)) {
  //     loadCarDetail(carDrawer.editionid);
  //   }
  // }, [carDrawer]);

  useEffect(() => {
    if (!isEmpty(carDrawer.firmid)) {
      loadCarMarkList(carDrawer.firmid);
    }
  }, [carDrawer.firmid]);

  useEffect(() => {
    if (!isEmpty(carDrawer.markid)) {
      loadCarIndexList(carDrawer.markid);
    }
  }, [carDrawer.markid]);

  useEffect(() => {
    if (!isEmpty(carDrawer.indexid)) {
      loadCarEditionList(carDrawer.indexid);
    }
  }, [carDrawer.indexid]);

  useEffect(() => {
    if (!isEmpty(carDrawer.carid)) {
      loadCarDetail(carDrawer.carid);
    }
  }, [carDrawer.carid]);

  useEffect(() => {
    // if (filterContext.state.menu !== "autozar") return;
    loadCarFirmList();

    if (!isEmpty(filterContext.state.filterList?.carcatalogfirmid)) {
      loadCarMarkList(filterContext.state.filterList?.carcatalogfirmid);
    }

    if (!isEmpty(filterContext.state.filterList?.carcatalogmarkid)) {
      loadCarIndexList(filterContext.state.filterList?.carcatalogmarkid);
    }

    if (!isEmpty(filterContext.state.filterList?.carcatalogindexid)) {
      loadCarEditionList(filterContext.state.filterList?.carcatalogindexid);
    }

    if (!isEmpty(filterContext.state.filterList?.carcatalogeditionid)) {
      loadCarDetail(filterContext.state.filterList?.carcatalogeditionid);
    }
  }, [filterContext.state, memberContext.state.isLogin]);

  //  ####### ### ######  #     #
  //  #        #  #     # ##   ##
  //  #        #  #     # # # # #
  //  #####    #  ######  #  #  #
  //  #        #  #   #   #     #
  //  #        #  #    #  #     #
  //  #       ### #     # #     #

  const loadCarFirmList = () => {
    setCarFirmList({ ...carFirmList, loading: true });

    const myParamsCarFirmList = {
      request: {
        // username: "motoadmin",
        // password: "moto123",
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: carFirmList.loadParams,
      },
    };

    axios
      .post("", myParamsCarFirmList)
      .then((response) => {
        console.log("FIRM response---------", response);
        const myData = response.data.response;
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setCarFirmList({
            ...carFirmList,
            loading: false,
            carFirmList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setCarFirmList({ ...carFirmList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  //  #     #    #    ######  #    #
  //  ##   ##   # #   #     # #   #
  //  # # # #  #   #  #     # #  #
  //  #  #  # #     # ######  ###
  //  #     # ####### #   #   #  #
  //  #     # #     # #    #  #   #
  //  #     # #     # #     # #    #

  const loadCarMarkList = (firmid) => {
    setCarMarkList({ ...carMarkList, loading: true });

    const myParamsCarMarkList = {
      request: {
        // username: "motoadmin",
        // password: "moto123",
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...carMarkList.loadParams,
          criteria: {
            id: {
              0: {
                operator: "=",
                operand: firmid,
              },
            },
          },
        },
      },
    };

    axios
      .post("", myParamsCarMarkList)
      .then((response) => {
        console.log("MARK response---------", response);
        const myData = response.data.response;
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setCarMarkList({
            ...carMarkList,
            loading: false,
            carMarkList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setCarMarkList({ ...carMarkList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  //### #     # ######  ####### #     #
  // #  ##    # #     # #        #   #
  // #  # #   # #     # #         # #
  // #  #  #  # #     # #####      #
  // #  #   # # #     # #         # #
  // #  #    ## #     # #        #   #
  //### #     # ######  ####### #     #

  const loadCarIndexList = (markid) => {
    setCarIndexList({ ...carIndexList, loading: true });

    const myParamsCarIndexList = {
      request: {
        // username: "motoadmin",
        // password: "moto123",
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...carIndexList.loadParams,
          criteria: {
            markid: {
              0: {
                operator: "=",
                operand: markid,
              },
            },
          },
        },
      },
    };

    axios
      .post("", myParamsCarIndexList)
      .then((response) => {
        const myData = response.data.response;
        console.log("INDEX Response Index---------", myData);
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setCarIndexList({
            ...carIndexList,
            loading: false,
            carIndexList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setCarIndexList({ ...carIndexList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  //  ####### ######  ### ####### ### ####### #     #
  //  #       #     #  #     #     #  #     # ##    #
  //  #       #     #  #     #     #  #     # # #   #
  //  #####   #     #  #     #     #  #     # #  #  #
  //  #       #     #  #     #     #  #     # #   # #
  //  #       #     #  #     #     #  #     # #    ##
  //  ####### ######  ###    #    ### ####### #     #

  const loadCarEditionList = (indexid) => {
    setCarEditionList({ ...carEditionList, loading: true });

    const myParamsCarEditionList = {
      request: {
        // username: "motoadmin",
        // password: "moto123",
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...carEditionList.loadParams,
          criteria: {
            mainid: {
              0: {
                operator: "=",
                operand: indexid,
              },
            },
          },
        },
      },
    };

    axios
      .post("", myParamsCarEditionList)
      .then((response) => {
        const myData = response.data.response;
        console.log("EDITION Response Edition---------", myData);
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setCarEditionList({
            ...carEditionList,
            loading: false,
            carEditionList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setCarEditionList({ ...carEditionList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  //  ######  ####### #######    #    ### #
  //  #     # #          #      # #    #  #
  //  #     # #          #     #   #   #  #
  //  #     # #####      #    #     #  #  #
  //  #     # #          #    #######  #  #
  //  #     # #          #    #     #  #  #
  //  ######  #######    #    #     # ### #######

  const loadCarDetail = (carid) => {
    setCarDetail({ ...carDetail, loading: true });

    const myParamsCarDetail = {
      request: {
        // username: "motoadmin",
        // password: "moto123",
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoGOONET_MAINDETAIL_004",
        parameters: {
          carid: carid || "",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
        },
      },
    };
    // console.log(myParamsCarDetail);

    axios
      .post("", myParamsCarDetail)
      .then((response) => {
        console.log("DETAIL", response);
        const myArray = response.data.response.result;

        console.log("carCatalogDetail-------", myArray);

        setCarDetail({
          ...carDetail,
          loading: false,
          carDetail: myArray,
        });
      })
      .catch((error) => {
        setCarDetail({ ...carEditionList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  //  ######  ######     #    #     # ####### ######
  //  #     # #     #   # #   #  #  # #       #     #
  //  #     # #     #  #   #  #  #  # #       #     #
  //  #     # ######  #     # #  #  # #####   ######
  //  #     # #   #   ####### #  #  # #       #   #
  //  #     # #    #  #     # #  #  # #       #    #
  //  ######  #     # #     #  ## ##  ####### #     #
  //
  // console.log("FFFFFFFFF", carDrawer);
  const CarDrawer = () => {
    return (
      <Drawer
        title="Каталогиас машин сонгох"
        className="moto-drawer-bottom-full"
        placement="top"
        height="350px"
        width="100%"
        closable={true}
        onClose={(e) => setCarDrawer({ ...carDrawer, isOpen: false })}
        visible={carDrawer.isOpen}
        closeIcon={<MyIcon type="iconangledown" />}
        headerStyle={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="gx-p-3">
          <Row>
            <Col span={12}>
              <Select
                className="moto-select-firm gx-w-100 gx-my-2"
                showSearch
                allowClear
                placeholder="Фирм"
                optionFilterProp="children"
                onChange={(value) =>
                  setCarDrawer({
                    ...carDrawer,
                    firmid: value,
                    markid: null,
                    indexid: null,
                    carid: null,
                  })
                }
                filterOption={(input, option) => {
                  if (option.value) {
                    return (
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  } else {
                    return false;
                  }
                }}
                defaultValue={carDrawer.firmid || ""}
              >
                {carFirmList.carFirmList.map((item, index) => (
                  // count: "3"
                  // firmcountrymon: "Англи"
                  // firmname: "Aston Martin"
                  // firmtype: "Passenger"
                  // id: "1040100000"
                  // special: "0"
                  <Option key={index} value={item.id}>
                    {item.firmname}
                  </Option>
                ))}
              </Select>

              {/* Mark */}
              <Select
                className="moto-select-firm gx-w-100 gx-my-2"
                showSearch
                allowClear
                placeholder="Марк"
                optionFilterProp="children"
                onChange={(value) =>
                  setCarDrawer({
                    ...carDrawer,
                    // firmid: value,
                    markid: value,
                    indexid: null,
                    carid: null,
                  })
                }
                filterOption={(input, option) => {
                  if (option.value) {
                    return (
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  } else {
                    return false;
                  }
                }}
                defaultValue={carDrawer.markid || ""}
              >
                {carMarkList.carMarkList.map((item, index) => (
                  // count: "3"
                  // firmname: "Bmw"
                  // id: "1020300000"
                  // markid: "6037338451216753"
                  // markname: "M Roadster"
                  <Option key={index} value={item.markid}>
                    {item.markname}
                  </Option>
                ))}
              </Select>

              {/* Index */}
              <Select
                className="moto-select-firm gx-w-100 gx-my-2"
                showSearch
                allowClear
                placeholder="Цуврал"
                optionFilterProp="children"
                onChange={(value) =>
                  setCarDrawer({
                    ...carDrawer,
                    // firmid: value,
                    // markid: value,
                    indexid: value,
                    carid: null,
                  })
                }
                filterOption={(input, option) => {
                  if (option.value) {
                    return (
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  } else {
                    return false;
                  }
                }}
                defaultValue={carDrawer.indexid || ""}
              >
                {carIndexList.carIndexList.map((item, index) => (
                  // count: "25"
                  // desceng: "Tradition of BMW some upper-mid"
                  // descmon: "BMW уламжлал зарим нь дээд, ду"
                  // firmid: "1020300000"
                  // firmname: "Bmw"
                  // maindate: "2019-01-01"
                  // maindate2: "2019-01"
                  // mainid: "201901_BMW_5_SERIES"
                  // mainimg: "https://catalogphoto.goo-net.com/carphoto/20151502_201901c.jpg"
                  // markid: "6464819816495469"
                  // markname: "5 Series"
                  // url: "https://www.goo-net.com/catalog/BMW/5_SERIES/"
                  <Option key={index} value={item.mainid}>
                    {`${item.markname} (${item.maindate2})`}
                  </Option>
                ))}
              </Select>

              {/* Edition */}
              <Select
                className="moto-select-firm gx-w-100 gx-my-2"
                showSearch
                allowClear
                placeholder="Хувилбар"
                optionFilterProp="children"
                onChange={(value) =>
                  setCarDrawer({
                    ...carDrawer,
                    // firmid: value,
                    // markid: value,
                    // indexid: value,
                    carid: value,
                  })
                }
                filterOption={(input, option) => {
                  if (option.value) {
                    return (
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  } else {
                    return false;
                  }
                }}
                defaultValue={carDrawer.carid || ""}
              >
                {carEditionList.carEditionList.map((item, index) => (
                  // body2bodyname: "Сэдан"
                  // body2door: "4"
                  // body2modelcodefull: "ABA-NE30"
                  // body2seat: "5"
                  // cardate: "2005-05"
                  // cartrim: "530I"
                  // drive2drivename: "RWD (FR)"
                  // drive2transmissionfull: "AT - 6"
                  // engine2code: "N52B30A"
                  // engine2disp: "2996"
                  // envi2fuel10mode: "9"
                  // id: "10029095"
                  // mainid: "200509_BMW_5_SERIES"
                  // mainimg: "https://catalogphoto.goo-net.com/carphoto/20151502_200509.jpg"
                  // modelcode: "NE30"
                  // pricenewusd: "66774"
                  // untilnow: ""
                  <Option key={index} value={item.id}>
                    {item.cartrim} {item.body2modelcodefull}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={12}>
              {/* {carDetail.carDetail.firmname}
              {carDetail.carDetail.markname}
              {carDetail.carDetail.cardate} */}
              <Card.Meta
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                avatar={
                  <Image
                    src={carDetail.carDetail.imagemain}
                    loading="lazy"
                    width={130}
                    quality="auto"
                    // className="  gx-mb-4"
                    alt={carDetail.carDetail.title}
                  />
                }
                title={carDetail.carDetail.title}
                description={
                  <>
                    {carDetail.carDetail.firmname}
                    {carDetail.carDetail.markname}
                  </>
                }
              />

              <Descriptions
                column={1}
                layout="horizontal"
                size="small"
                className=" gx-fs-sm"
              >
                <Descriptions.Item
                  label={<span className="gx-text-grey gx-fs-sm">Эхэлсэн</span>}
                >
                  {carDetail.carDetail.cardate}
                </Descriptions.Item>
                <Descriptions.Item
                  label={
                    <span className="gx-text-grey gx-fs-sm">Хувилбар</span>
                  }
                >
                  {carDetail.carDetail.cartrim}
                </Descriptions.Item>
                <Descriptions.Item
                  label={
                    <span className="gx-text-grey gx-fs-sm">Модель код</span>
                  }
                >
                  {carDetail.carDetail.modelcode}
                </Descriptions.Item>
                <Descriptions.Item
                  label={
                    <span className="gx-text-grey gx-fs-sm">Одоог хүртэл</span>
                  }
                >
                  {carDetail.carDetail.untilnow}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </div>
      </Drawer>
    );
  };

  const toggleDrawer = (props) => {
    setCarDrawer({ ...carDrawer, isOpen: !carDrawer.isOpen });
  };

  return (
    <CarCatalogContext.Provider
      value={{
        carFirmList,
        carMarkList,
        carIndexList,
        carEditionList,
        carDetail,
        loadCarFirmList,
        loadCarMarkList,
        loadCarIndexList,
        loadCarEditionList,
        loadCarDetail,
        toggleDrawer,
      }}
    >
      {props.children}
      <CarDrawer />
    </CarCatalogContext.Provider>
  );
};

export default CarCatalogContext;
