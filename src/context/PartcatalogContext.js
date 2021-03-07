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
        offset: "1",
        pageSize: "15",
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

  const initialStatePartList = {
    loadParams: {
      systemmetagroupid: "1614689312797197",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        offset: "1",
        pageSize: "15",
        sortcolumnnames: {
          maindate2: {
            sorttype: "DESC",
          },
        },
      },
    },
    partList: [],
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
  const [partList, setPartList] = useState(initialStatePartList);

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
      loadPartList(partDrawer.engineid, partDrawer.categoryid);
    }
  }, [partDrawer.categoryid]);

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
      loadPartList(filterContext.urlSetting.filterList?.partcatalogcategoryid);
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
        username: memberContext.state.memberUID,
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

  //  ######     #    ######  #######  #####
  //  #     #   # #   #     #    #    #     #
  //  #     #  #   #  #     #    #    #
  //  ######  #     # ######     #     #####
  //  #       ####### #   #      #          #
  //  #       #     # #    #     #    #     #
  //  #       #     # #     #    #     #####
  const loadPartList = (engineid, categoryid) => {
    setPartList({ ...partList, loading: true });

    const myParamsPartList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...partList.loadParams,
          criteria: {
            engineid: engineid,
            nodeid: categoryid,
          },
        },
      },
    };

    axios
      .post("", myParamsPartList)
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

          setPartList({
            ...partList,
            loading: false,
            partList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setPartList({ ...partList, loading: false, error });
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
        setPartDetail({ ...partDetail, loading: false, error });
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
                defaultValue={partDrawer.engineid || null}
              />

              {/* Part Category */}
              <Select
                className="moto-select-firm gx-w-100 gx-my-2"
                showSearch
                allowClear
                placeholder="Каталоги"
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
                  // nodeid: "300001"
                  // engineid: "25707"
                  // searchtreeid: "3"
                  // parentid: "0"
                  // description: "Фильтр"
                  <Option key={index} value={item.nodeid}>
                    {item.description}
                  </Option>
                ))}
              </Select>

              {/* Part List */}
              <Select
                className="moto-select-firm gx-w-100 gx-my-2"
                showSearch
                allowClear
                placeholder="Сэлбэг"
                optionFilterProp="children"
                onChange={(value) =>
                  setPartDrawer({
                    ...partDrawer,
                    // engineid: value,
                    // categoryid: value,
                    partid: value,
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
                defaultValue={partDrawer.partid || null}
                loading={partList.partList.loading}
              >
                {partList.partList.map((item, index) => (
                  //  supplierid: "5"
                  //  productid: "9"
                  //  linkagetypeid: "14"
                  //  linkageid: "1417"
                  //  datasupplierarticlenumber: "4.00030.80.0"
                  //  nodeid: "300001"
                  //  assemblygroupdescription: "Система подачи топлива"
                  //  description: "Топливный фильтр"
                  //  normalizeddescription: "Фильтр"
                  //  usagedescription: "Топливо"
                  //  dataversion: "1017"
                  //  supdescription: "PIERBURG"
                  //  matchcode: "PIERBURG"
                  //  nbrofarticles: "2941377"
                  //  hasnewversionofarticles: "True"
                  <Option key={index} value={item.datasupplierarticlenumber}>
                    {item.description} {item.supdescription}
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
        partList,
        partDetail,
        PartDetailPopover,
        partDrawer,
        loadPartEngineList,
        loadPartCategoryList,
        loadPartList,
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
