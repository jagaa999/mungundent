import React, { useState, useContext, useEffect } from "react";
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
  Input,
} from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import {
  preparePartcatalogList,
  preparePartcatalogListSettings as mySettings,
  preparePartcatalogDetail,
} from "util/specData/prepareSpecsPartcatalog";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import MyIcon from "util/iconFunction";
import { isEmpty } from "lodash";
import { GetSpecData } from "util/getSpecData";
import { ContextDevTool } from "react-context-devtool";

const { Option } = Select;

const PartcatalogContext = React.createContext();

export const PartcatalogStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #
  const initialStatePartEngineList = {
    loadParams: {
      systemmetagroupid: "1607594054211261", //Engine List
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        sortcolumnnames: {
          id: {
            sorttype: "ASC", //эрэмбэлэх чиглэл
          },
        },
      },
    },
    partEngineList: [],
    loading: false,
    error: null,
  };

  const initialStatePartCategoryList = {
    loadParams: {
      systemmetagroupid: "1607672615109111", //Part Category ID
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        sortcolumnnames: {
          nodeid: {
            sorttype: "ASC", //эрэмбэлэх чиглэл
          },
        },
      },
    },
    partCategoryList: [],
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

  const initialStatePartDetail = {
    partDetail: {},
    loading: false,
    error: null,
  };

  const [partEngineList, setPartEngineList] = useState(
    initialStatePartEngineList
  );
  const [partCategoryList, setPartCategoryList] = useState(
    initialStatePartCategoryList
  );
  const [carIndexList, setCarIndexList] = useState(initialStateCarIndexList);
  const [carEditionList, setCarEditionList] = useState(
    initialStateCarEditionList
  );
  const [partDetail, setPartDetail] = useState(initialStatePartDetail);

  // const [partDrawer, setPartDrawer] = useStickyState(
  //   {
  //     isOpen: true,
  //     onlyThisCar: false,
  //     engineid: null,
  //     categoryid: null,
  //     partid: null,
  //     carid: null,
  //   },
  //   "partDrawer"
  // );
  const [partDrawer, setPartDrawer] = useState({
    isOpen: true,
    onlyThisCar: false,
    engineid: null,
    categoryid: null,
    partid: null,
    carid: null,
  });

  // console.log("GGGGGG", partDrawer);

  useEffect(() => {
    if (!isEmpty(partDrawer.engineid)) {
      loadPartCategoryList(partDrawer.engineid);
    }
  }, [partDrawer.engineid]);

  useEffect(() => {
    if (!isEmpty(partDrawer.categoryid)) {
      loadCarIndexList(partDrawer.categoryid);
    }
  }, [partDrawer.categoryid]);

  useEffect(() => {
    if (!isEmpty(partDrawer.indexid)) {
      loadCarEditionList(partDrawer.indexid);
    }
  }, [partDrawer.indexid]);

  useEffect(() => {
    if (!isEmpty(partDrawer.carid)) {
      loadPartDetail(partDrawer.carid);
    }
  }, [partDrawer.carid]);

  useEffect(() => {
    // if (filterContext.urlSetting.menu !== "autozar") return;
    loadPartEngineList();

    if (!isEmpty(filterContext.urlSetting.filterList?.partcatalogengineid)) {
      loadPartCategoryList(
        filterContext.urlSetting.filterList?.partcatalogengineid
      );
    }

    if (!isEmpty(filterContext.urlSetting.filterList?.partcatalogcategoryid)) {
      loadCarIndexList(
        filterContext.urlSetting.filterList?.partcatalogcategoryid
      );
    }

    if (!isEmpty(filterContext.urlSetting.filterList?.partcatalogindexid)) {
      loadCarEditionList(
        filterContext.urlSetting.filterList?.partcatalogindexid
      );
    }

    if (!isEmpty(filterContext.urlSetting.filterList?.partcatalogeditionid)) {
      loadPartDetail(filterContext.urlSetting.filterList?.partcatalogeditionid);
    }
  }, [filterContext.urlSetting, memberContext.state.isLogin]);

  //  ####### #     #  #####  ### #     # #######
  //  #       ##    # #     #  #  ##    # #
  //  #       # #   # #        #  # #   # #
  //  #####   #  #  # #  ####  #  #  #  # #####
  //  #       #   # # #     #  #  #   # # #
  //  #       #    ## #     #  #  #    ## #
  //  ####### #     #  #####  ### #     # #######

  const loadPartEngineList = () => {
    setPartEngineList({ ...partEngineList, loading: true });

    const myParamsPartEngineList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: partEngineList.loadParams,
      },
    };

    axios
      .post("", myParamsPartEngineList)
      .then((response) => {
        // console.log("ENGINE response---------", response);
        const myData = response.data.response;
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setPartEngineList({
            ...partEngineList,
            loading: false,
            partEngineList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setPartEngineList({ ...partEngineList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  //   #####     #    ####### #######  #####  ####### ######  #     #
  //  #     #   # #      #    #       #     # #     # #     #  #   #
  //  #        #   #     #    #       #       #     # #     #   # #
  //  #       #     #    #    #####   #  #### #     # ######     #
  //  #       #######    #    #       #     # #     # #   #      #
  //  #     # #     #    #    #       #     # #     # #    #     #
  //   #####  #     #    #    #######  #####  ####### #     #    #
  const loadPartCategoryList = (engineid) => {
    console.log("DDDDDDDDDD");
    setPartCategoryList({ ...partCategoryList, loading: true });

    const myParamsPartCategoryList = {
      request: {
        // username: memberContext.state.memberUID,
        username: "admin",
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...partCategoryList.loadParams,
          criteria: {
            engineid: {
              0: {
                operator: "=",
                operand: engineid,
              },
            },
          },
        },
      },
    };

    console.log("myParamsPartCategoryList", myParamsPartCategoryList);

    axios
      .post("", myParamsPartCategoryList)
      .then((response) => {
        console.log("PART CATEGORY response---------", response);
        const myData = response.data.response;
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          console.log("Part Category Response ", myArray);

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setPartCategoryList({
            ...partCategoryList,
            loading: false,
            partCategoryList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setPartCategoryList({ ...partCategoryList, loading: false, error });
        message.error(error);
        console.log("Error", error);
      });
  };

  //### #     # ######  ####### #     #
  // #  ##    # #     # #        #   #
  // #  # #   # #     # #         # #
  // #  #  #  # #     # #####      #
  // #  #   # # #     # #         # #
  // #  #    ## #     # #        #   #
  //### #     # ######  ####### #     #

  const loadCarIndexList = (categoryid) => {
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
            categoryid: {
              0: {
                operator: "=",
                operand: categoryid,
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
  const loadPartDetail = (carid) => {
    setPartDetail({ ...partDetail, loading: true });

    const myParamsPartDetail = {
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
    // console.log(myParamsPartDetail);

    axios
      .post("", myParamsPartDetail)
      .then((response) => {
        // console.log("DETAIL", response);
        const myArray = response.data.response.result;
        // console.log("carCatalogDetail-------", myArray);

        const myTempItem = preparePartcatalogDetail(myArray, "partcatalog");
        // console.log("CARCAT DETAIL------------> ", myTempItem);

        setPartDetail({
          ...partDetail,
          loading: false,
          // partDetail: myArray,
          partDetail: myTempItem,
        });
      })
      .catch((error) => {
        setPartDetail({ ...carEditionList, loading: false, error });
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
  const PartDrawer = () => {
    return (
      <Drawer
        title="Хөдөлгүүрийн сэлбэг"
        className="moto-drawer-bottom-full"
        placement="top"
        height="350px"
        width="100%"
        closable={true}
        onClose={(e) => setPartDrawer({ ...partDrawer, isOpen: false })}
        visible={partDrawer.isOpen}
        closeIcon={<MyIcon type="icontimes-solid" />}
        headerStyle={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="gx-p-3">
          <Row>
            <Col
              xl={{ span: 10, order: 1 }}
              lg={{ span: 10, order: 1 }}
              md={{ span: 10, order: 1 }}
              sm={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
              <Input.Search
                placeholder="Хөдөлгүүрийн ID дугаар бичнэ үү"
                onSearch={(e) =>
                  setPartDrawer({
                    ...partDrawer,
                    engineid: e,
                    categoryid: null,
                    indexid: null,
                    carid: null,
                  })
                }
              />

              {/* Mark */}
              <Select
                className="moto-select-firm gx-w-100 gx-my-2"
                showSearch
                allowClear
                placeholder="Марк"
                optionFilterProp="children"
                onChange={(value) =>
                  setPartDrawer({
                    ...partDrawer,
                    // engineid: value,
                    categoryid: value,
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
                defaultValue={partDrawer.categoryid || null}
                loading={partCategoryList.partCategoryList.loading}
              >
                {partCategoryList.partCategoryList.map((item, index) => (
                  // count: "3"
                  // firmname: "Bmw"
                  // id: "1020300000"
                  // categoryid: "6037338451216753"
                  // markname: "M Roadster"
                  <Option key={index} value={item.categoryid}>
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
                  setPartDrawer({
                    ...partDrawer,
                    // engineid: value,
                    // categoryid: value,
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
                defaultValue={partDrawer.indexid || null}
                loading={carIndexList.carIndexList.loading}
              >
                {carIndexList.carIndexList.map((item, index) => (
                  // count: "25"
                  // desceng: "Tradition of BMW some upper-mid"
                  // descmon: "BMW уламжлал зарим нь дээд, ду"
                  // engineid: "1020300000"
                  // firmname: "Bmw"
                  // maindate: "2019-01-01"
                  // maindate2: "2019-01"
                  // mainid: "201901_BMW_5_SERIES"
                  // mainimg: "https://catalogphoto.goo-net.com/carphoto/20151502_201901c.jpg"
                  // categoryid: "6464819816495469"
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
                  setPartDrawer({
                    ...partDrawer,
                    // engineid: value,
                    // categoryid: value,
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
                defaultValue={partDrawer.carid || null}
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
              <PartDetailPopover />
            </Col>
          </Row>
        </div>
      </Drawer>
    );
  };

  const toggleDrawer = (props) => {
    setPartDrawer({ ...partDrawer, isOpen: !partDrawer.isOpen });
  };
  const toggleOnlyThisCar = (props) => {
    setPartDrawer({ ...partDrawer, onlyThisCar: !partDrawer.onlyThisCar });
  };

  //  ######  ####### #######    ######  ####### ######
  //  #     # #          #       #     # #     # #     #
  //  #     # #          #       #     # #     # #     #
  //  #     # #####      #       ######  #     # ######
  //  #     # #          #       #       #     # #
  //  #     # #          #       #       #     # #
  //  ######  #######    #       #       ####### #
  const PartDetailPopover = () => {
    if (isEmpty(partDetail.partDetail)) {
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
            src={partDetail.partDetail.mainData.imagemain.value}
            loading="lazy"
            width={110}
            quality="auto"
            // className="  gx-mb-4"
            alt={partDetail.partDetail.mainData.title.value}
          />
        }
        title={partDetail.partDetail.mainData.title.value}
        description={
          <ul className="moto-small-ul">
            {partDetail.partDetail.specList1.map((item, index) => {
              if (isEmpty(item.value || "")) return null;
              const myItem = GetSpecData(item.field, "partcatalog");
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
    <PartcatalogContext.Provider
      value={{
        partEngineList,
        partCategoryList,
        carIndexList,
        carEditionList,
        partDetail,
        PartDetailPopover,
        partDrawer,
        loadPartEngineList,
        loadPartCategoryList,
        loadCarIndexList,
        loadCarEditionList,
        loadPartDetail,
        toggleDrawer,
        toggleOnlyThisCar,
      }}
    >
      {process.env.NODE_ENV === "development" && (
        <ContextDevTool
          context={PartcatalogContext}
          id="PartcatalogContextId"
          displayName="PARTCATALOG STORE"
        />
      )}

      {props.children}
      <PartDrawer />
    </PartcatalogContext.Provider>
  );
};

export default PartcatalogContext;
