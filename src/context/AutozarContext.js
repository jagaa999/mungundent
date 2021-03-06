import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { message } from "antd";
import toBoolean from "util/booleanFunction";
import moment from "moment";

import axios from "util/axiosConfig";
import myAxiosZ from "../util/myAxiosZ";
import {
  prepareAutozarList,
  prepareAutozarListSettings as mySettings,
  prepareAutozarDetail,
} from "util/specData/prepareSpecsAutozar";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const AutozarContext = React.createContext();

export const AutozarStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);
  const history = useHistory();

  //### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialAutozarList = {
    loadParams: {
      systemmetagroupid: "1605592797379",
      showquery: "0",
      ignorepermission: "1",
      criteria: {
        isactive: {
          0: {
            operator: "=",
            operand: "1", // зөвхөн идэвхтэйг харуулна
          },
        },
      },
      paging: {
        pagesize: filterContext.urlSetting.paging?.pagesize || "12",
        offset: filterContext.urlSetting.paging?.offset || "1",
        sortcolumnnames: {
          [filterContext.urlSetting.sorting?.sortcolumnnames ||
          mySettings.sortFields[0].field]: {
            sorttype: filterContext.urlSetting.sorting?.sorttype || "DESC",
          },
        },
      },
    },
    autozarList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: false,
  };
  const initialAutozarDetail = {
    loadParams: {
      systemmetagroupid: "1605592797379",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pagesize: "1",
        offset: "1",
      },
    },
    autozarDetail: [],
    loading: false,
    error: null,
  };

  const [autozarList, setAutozarList] = useState(initialAutozarList);
  const [autozarDetail, setAutozarDetail] = useState(initialAutozarDetail);

  useEffect(() => {
    if (filterContext.urlSetting.menu !== "autozar") return;
    loadAutozarList();
  }, [filterContext.urlSetting, memberContext.state.isLogin]);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadAutozarList = () => {
    setAutozarList({ ...autozarList, loading: true });

    let myCriteria = {};
    Object.keys(filterContext.urlSetting.filterList).map((item) => {
      // console.log(item, "----", filterContext.urlSetting.filterList[item]);
      if (item !== "offset" && item !== "pagesize" && item !== "title") {
        myCriteria = {
          ...myCriteria,
          [item]: {
            0: {
              operator: "=",
              operand: filterContext.urlSetting.filterList[item],
            },
          },
        };
      } else if (item === "title") {
        myCriteria = {
          ...myCriteria,
          [item]: {
            0: {
              operator: "like",
              operand: `%${filterContext.urlSetting.filterList[item]}%`,
            },
          },
        };
      }
    });

    const myNewParam = {
      ...autozarList,
      loadParams: {
        ...autozarList.loadParams,
        criteria: {
          ...myCriteria,
          isactive: {
            0: {
              operator: "=",
              operand: "1",
            },
          },
        },
        paging: {
          ...autozarList.loadParams.paging,
          pagesize: filterContext.urlSetting.paging.pagesize || "12",
          offset: filterContext.urlSetting.paging.offset || "1",
          sortcolumnnames: {
            [filterContext.urlSetting.sorting.sortcolumnnames ||
            "modifieddate"]: {
              sorttype: filterContext.urlSetting.sorting.sorttype || "DESC",
            },
          },
        },
      },
      loading: true,
    };

    const myParamsAutozarList = {
      request: {
        username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: myNewParam.loadParams,
      },
    };

    myAxiosZ(myParamsAutozarList)
      .then((myData) => {
        const myPaging = myData.response?.result?.paging || {};
        const myArray = myData.response?.result || [];

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        const myTempList = prepareAutozarList(
          myArray,
          filterContext.urlSetting.menu
        );

        setAutozarList({
          ...myNewParam,
          loading: false,
          autozarList: myTempList,
        });

        filterContext.updateTotal(myPaging.totalcount);
      })
      .catch((error) => {
        setAutozarList({ ...autozarList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  const clearAutozarDetail = () => {
    setAutozarDetail(initialAutozarDetail);
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######

  const loadAutozarDetail = (id = 0) => {
    setAutozarDetail({ ...autozarDetail, loading: true });
    const myParamsAutozarDetail = {
      // request: {
      //   // username: memberContext.state.memberUID,
      //   username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
      //   password: "89",
      //   // username: "motoadmin",
      //   // password: "moto123",
      //   command: "PL_MDVIEW_004",
      //   parameters: {
      //     ...autozarDetail.loadParams,
      //     criteria: {
      //       id: {
      //         0: {
      //           operator: "=",
      //           operand: id,
      //         },
      //       },
      //     },
      //   },
      // },

      request: {
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        username:
          memberContext.state.memberUID || "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
        password: "89",
        command: "motoAutozar_List_004",
        parameters: {
          id: id || "",
          memberid: memberContext.state.memberCloudUserSysId || "1598934946963",
          usersystemid:
            memberContext.state.memberCloudUserSysId || "1598934946963",
        },
      },
    };

    // console.log("myParamsAutozarDetail", myParamsAutozarDetail);
    setAutozarDetail(initialAutozarDetail);

    // axios
    //   .post("", myParamsAutozarDetail)
    myAxiosZ(myParamsAutozarDetail)
      .then((myData) => {
        // console.log("AUTOZAR DETAIL RESPONSE------------> ", myData);
        const myArray = myData.response.result || [];
        // console.log("AUTOZAR DETAIL myArray------------> ", myArray);

        const myTempItem = prepareAutozarDetail(
          myArray,
          filterContext.urlSetting.menu
        );

        // console.log("MOTOCAR DETAIL------------> ", myArray);

        setAutozarDetail({
          ...autozarDetail,
          loading: false,
          // autozarDetail: myArray,
          autozarDetail: myTempItem,
        });
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
      });
  };

  //   #####     #    #     # #######
  //  #     #   # #   #     # #
  //  #        #   #  #     # #
  //   #####  #     # #     # #####
  //        # #######  #   #  #
  //  #     # #     #   # #   #
  //   #####  #     #    #    #######
  const saveAutozarDetail = (values) => {
    // autozarconditionid: "1030"
    // id: "1587535609962815"
    // autozarinspection: "1"
    // autozarleasing: false
    // autozarmilage: 115537
    // autozarpenalty: true
    // autozartax: true
    // body2vinnumber: "TRN2150019334"
    // createddate: Moment {_isAMomentObject: true, _i: "2020-04-22 14:06:49", _f: "YYYY-MM-DD HH:mm:ss", _isUTC: false, _pf: {…}, …}
    // description: "Сайхан тэрэг байна."
    // driveid: "95798500"
    // email: "khiddaa01@gmail.com"
    // financecondition: "Бэлнээр ярина"
    // financepricerr: "39000000"
    // id: undefined
    // imagemain: {fileList: Array(1)}
    // imageother: {fileList: Array(0)}
    // isactive: true
    // iscomment: true
    // isfeatured: false
    // memberfirebaseuid: ""
    // mglbody: "SUV"
    // mglcoloroutside: "Хар"
    // mglcountryorigin: "Япон"
    // mgldoor: 4
    // mgldrivepos: true
    // mglengine2disp: 2693
    // mglfirm: "TOYOTA"
    // mglfuel: "Бензин"
    // mgllicensenumberfull: "2825УАА"
    // mglmark: "Hilux"
    // mglseat: 5
    // mglyearimport: Moment {_isAMomentObject: true, _i: "2019-06-02", _f: "YYYY-MM-DD", _isUTC: false, _pf: {…}, …}
    // mglyearmanufactured: Moment {_isAMomentObject: true, _i: "2007-01-01", _f: "YYYY-MM-DD", _isUTC: false, _pf: {…}, …}
    // mobile1rr: "99031547"
    // mobile2: "99031547"
    // modifieddate: Moment {_isAMomentObject: true, _i: "2020-04-22 14:06:49", _f: "YYYY-MM-DD HH:mm:ss", _isUTC: false, _pf: {…}, …}
    // systemuserid: ""
    // transtypeid: "1001"

    console.log("saveAutozarDetail дотор орж ирсэн values--", values);
    const mytitle = `${moment(values.caryearmanufactured).format("YYYY")} ${
      values.mglfirm
    } ${values.mglmark}`;

    const myimagemain =
      values.imagemain &&
      values.imagemain.fileList &&
      values.imagemain.fileList.length > 0
        ? values.imagemain.fileList[0].response.url
        : "";
    const myimageother =
      values.imageother &&
      values.imageother.fileList &&
      values.imageother.fileList.length > 0
        ? JSON.stringify(
            values.imageother.fileList.map((item, index) => item.response.url)
          )
        : "";

    const myParamsAutozarDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoAutozar_DV_002",
        parameters: {
          ...values,
          id: values.id || "",
          mglyearmanufactured: moment(values.mglyearmanufactured).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          mglyearimport: moment(values.mglyearimport).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          createddate: values.id
            ? null
            : moment(values.createddate).format("YYYY-MM-DD HH:mm:ss"),
          modifieddate: moment(values.modifieddate).format(
            "YYYY-MM-DD HH:mm:ss"
          ),

          mgldrivepos: toBoolean(values.mgldrivepos) ? "1" : "0",
          autozarleasing: toBoolean(values.autozarleasing) ? "1" : "0",
          autozarpenalty: toBoolean(values.autozarpenalty) ? "1" : "0",
          autozartax: toBoolean(values.autozartax) ? "1" : "0",
          isactive: toBoolean(values.isactive) ? "1" : "0",
          iscomment: toBoolean(values.iscomment) ? "1" : "0",
          isfeatured: toBoolean(values.isfeatured) ? "1" : "0",

          imagemain: myimagemain,
          imageother: myimageother,

          createdby: values.id
            ? null
            : memberContext.state.memberCloudUserSysId,
          modifiedby: memberContext.state.memberCloudUserSysId,
          ownerid: memberContext.state.memberCloudUserSysId,
          systemuserid: memberContext.state.memberCloudUserSysId,
        },
      },
    };

    // console.log(
    //   "myParamsAutozarDetail",
    //   myParamsAutozarDetail.request.parameters
    // );

    // return;

    axios
      .post("", myParamsAutozarDetail)
      .then((response) => {
        // console.log("Save AutozarDetail:   ", response);

        const myData = response.data.response;
        // console.log("After Save AutozarDetail ------------>", myData);

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          message.success("Амжилттай нэмлээ. Өдрийг сайхан өнгөрүүлээрэй.");
          history.push({
            pathname: "/autozar",
          });
        }
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

  const toggleFilterDrawerOpen = () => {
    setAutozarList({
      ...autozarList,
      isFilterDrawerOpen: !autozarList.isFilterDrawerOpen,
    });
  };

  return (
    <AutozarContext.Provider
      value={{
        autozarList,
        autozarDetail,
        loadAutozarList,
        loadAutozarDetail,
        saveAutozarDetail,
        clearAutozarDetail,
        toggleFilterDrawerOpen,
      }}
    >
      {props.children}
    </AutozarContext.Provider>
  );
};

export default AutozarContext;
