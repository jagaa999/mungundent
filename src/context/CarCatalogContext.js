import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { parse } from "query-string";
import { useStickyState } from "util/stickyState";

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
  Empty,
} from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import {
  prepareCarcatalogList,
  prepareCarcatalogListSettings as mySettings,
  prepareCarcatalogDetail,
} from "util/prepareSpecsCarcatalog";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import MyIcon from "util/iconFunction";
import { isEmpty } from "lodash";
import { GetSpecData } from "util/getSpecData";
const { Option } = Select;

const CarcatalogContext = React.createContext();

export const CarcatalogStore = (props) => {
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
  // const [carDrawer, setCarDrawer] = useState({
  //   isOpen: false,
  //   firmid: useStickyState(null, "carcatalogfirmid"),
  //   markid: useStickyState(null, "carcatalogmarkid"),
  //   indexid: useStickyState(null, "carcatalogindexid"),
  //   carid: useStickyState(null, "carcatalogcarid"),
  // });
  const [carDrawer, setCarDrawer] = useStickyState(
    {
      isOpen: false,
      firmid: null,
      markid: null,
      indexid: null,
      carid: null,
    },
    "CarcatalogIDs"
  );

  // console.log("GGGGGG", carDrawer);

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
        // console.log("FIRM response---------", response);
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
        // console.log("MARK response---------", response);
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
        // console.log("INDEX Response Index---------", myData);
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
        // console.log("EDITION Response Edition---------", myData);
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
        // console.log("DETAIL", response);
        const myArray = response.data.response.result;
        // console.log("carCatalogDetail-------", myArray);

        const myTempItem = prepareCarcatalogDetail(myArray, "carcatalog");
        // console.log("CARCAT DETAIL------------> ", myTempItem);

        setCarDetail({
          ...carDetail,
          loading: false,
          // carDetail: myArray,
          carDetail: myTempItem,
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
        title="Таны машин"
        className="moto-drawer-bottom-full"
        placement="top"
        height="350px"
        width="100%"
        closable={true}
        onClose={(e) => setCarDrawer({ ...carDrawer, isOpen: false })}
        visible={carDrawer.isOpen}
        closeIcon={<MyIcon type="icontimes-solid" />}
        headerStyle={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="gx-p-3">
          <Row>
            {/* <Col span={10}> */}
            <Col
              xl={{ span: 10, order: 1 }}
              lg={{ span: 10, order: 1 }}
              md={{ span: 10, order: 1 }}
              sm={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
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
                defaultValue={carDrawer.firmid || null}
                loading={carFirmList.carFirmList.loading}
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
                defaultValue={carDrawer.markid || null}
                loading={carMarkList.carMarkList.loading}
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
                defaultValue={carDrawer.indexid || null}
                loading={carIndexList.carIndexList.loading}
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
                defaultValue={carDrawer.carid || null}
                loading={carEditionList.carEditionList.loading}
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
            {/* <Col span={14}> */}
            <Col
              xl={{ span: 14, order: 2 }}
              lg={{ span: 14, order: 2 }}
              md={{ span: 14, order: 2 }}
              sm={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              <CarDetailPopover />
            </Col>
          </Row>
        </div>
      </Drawer>
    );
  };

  const toggleDrawer = (props) => {
    setCarDrawer({ ...carDrawer, isOpen: !carDrawer.isOpen });
  };

  //  ######  ####### #######    ######  ####### ######
  //  #     # #          #       #     # #     # #     #
  //  #     # #          #       #     # #     # #     #
  //  #     # #####      #       ######  #     # ######
  //  #     # #          #       #       #     # #
  //  #     # #          #       #       #     # #
  //  ######  #######    #       #       ####### #
  const CarDetailPopover = () => {
    if (isEmpty(carDetail.carDetail)) {
      return (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span>Машин сонгоогүй.</span>}
        >
          <Button type="primary" onClick={() => toggleDrawer()}>
            Одоо сонгоё
          </Button>
        </Empty>
      );
    }

    return (
      <Card.Meta
        avatar={
          <Image
            src={carDetail.carDetail.mainData.imagemain.value}
            loading="lazy"
            width={110}
            quality="auto"
            // className="  gx-mb-4"
            alt={carDetail.carDetail.mainData.title.value}
          />
        }
        title={carDetail.carDetail.mainData.title.value}
        description={
          <ul className="moto-small-ul">
            {carDetail.carDetail.specList1.map((item, index) => {
              if (isEmpty(item.value || "")) return null;
              const myItem = GetSpecData(item.field, "carcatalog");
              return (
                <li key={index}>
                  <span className="head-label gx-text-grey gx-fs-xs">
                    {myItem.label}
                  </span>
                  <span className="head-value gx-fs-sm">{item.value}</span>
                </li>
              );
            })}
          </ul>
        }
      />
    );
  };

  return (
    <CarcatalogContext.Provider
      value={{
        carFirmList,
        carMarkList,
        carIndexList,
        carEditionList,
        carDetail,
        CarDetailPopover,
        loadCarFirmList,
        loadCarMarkList,
        loadCarIndexList,
        loadCarEditionList,
        loadCarDetail,
        toggleDrawer,
      }}
      displayName="CarcatalogStore"
    >
      {props.children}
      <CarDrawer />
    </CarcatalogContext.Provider>
  );
};

export default CarcatalogContext;
