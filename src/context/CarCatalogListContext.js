import React, { useState, useContext, useEffect } from "react";
import { parse } from "query-string";

import { message } from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import useDidMountEffect from "util/useDidMountEffect";

const CarCatalogListContext = React.createContext();

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

  // useDidMountEffect(() => {
  //   loadCarCatalogList();
  // }, [
  //   filterContext.state.filterList,
  //   filterContext.state.paging,
  //   filterContext.state.sorting,
  //   filterContext.state.cardtype,
  // ]);

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
        console.log("response---------", response);
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
        // console.log("response---------", response);
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
        console.log("response---------", response);
        const myData = response.data.response;
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
        // console.log(response);
        const myArray = response.data.response.result;

        // console.log(myArray);

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

  return (
    <CarCatalogListContext.Provider
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
      }}
    >
      {props.children}
    </CarCatalogListContext.Provider>
  );
};

export default CarCatalogListContext;
