import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { message } from "antd";
import toBoolean from "util/booleanFunction";
import moment from "moment";

import axios from "util/axiosConfig";
import myAxiosZ from "../util/myAxiosZ";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import { prepareCompanyList } from "util/prepareSpecsCompany";

const CompanyContext = React.createContext();

export const CompanyStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);
  const history = useHistory();

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialStateCompanyList = {
    loadParams: {
      systemmetagroupid: "1610127106917056", //motoCompanyDV
      showquery: "0",
      ignorepermission: "1",
      criteria: {
        // isactive: {
        //   0: {
        //     operator: "=",
        //     operand: "1", // зөвхөн идэвхтэйг харуулна
        //   },
        // },
      },
      paging: {
        pagesize: filterContext.state.paging?.pagesize || "12",
        offset: filterContext.state.paging?.offset || "1",
        sortcolumnnames: {
          [filterContext.state.sorting?.sortcolumnnames || "title"]: {
            sorttype: filterContext.state.sorting?.sorttype || "ASC",
          },
        },
      },
    },
    companyList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: false,
  };
  const initialStateCompanyDetail = {
    loadParams: {
      systemmetagroupid: "1605592797379",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pagesize: "1",
        offset: "1",
      },
    },
    companyDetail: [],
    loading: false,
    error: null,
  };

  const [companyList, setCompanyList] = useState(initialStateCompanyList);
  const [companyDetail, setCompanyDetail] = useState(initialStateCompanyDetail);

  useEffect(() => {
    if (filterContext.state.menu !== "company") return;
    loadCompanyList();
  }, [filterContext.state, memberContext.state.isLogin]);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadCompanyList = () => {
    setCompanyList({ ...companyList, loading: true });

    let tempFilter = {};
    Object.keys(filterContext.state.filterList).map((item) => {
      console.log(item, "----", filterContext.state.filterList[item]);
      if (item !== "offset" && item !== "pagesize" && item !== "title") {
        const myItem1 = {
          operator: "=",
          operand: filterContext.state.filterList[item],
        };
        const myItem2 = {
          [item]: {
            0: myItem1,
          },
        };
        tempFilter = Object.assign(tempFilter, myItem2);
        //   newstypeid: {
        //     0: {
        //       operator: "=",
        //       operand: "201",
        //     },
        //     1: {
        //       operator: "=",
        //       operand: "202",
        //     },
        //   },
      } else if (item === "title") {
        const myItem1 = {
          operator: "like",
          operand: `%${filterContext.state.filterList[item]}%`,
        };
        const myItem2 = {
          [item]: {
            0: myItem1,
          },
        };
        tempFilter = Object.assign(tempFilter, myItem2);

        //   title: {
        //     0: {
        //       operator: "like",
        //       operand: "%toyota%",
        //     },
        //   },
      }
    });

    //criteria-д isactive = 1 утга нэмж өгнө.
    tempFilter = Object.assign(tempFilter, {
      isactive: {
        0: {
          operator: "=",
          operand: "1",
        },
      },
    });
    // console.log("tempFilter", tempFilter);
    const dddd = {};
    const myTemp33 = Object.assign(dddd, { criteria: tempFilter });

    const myNewParam = {
      ...companyList,
      loadParams: {
        ...companyList.loadParams,
        ...myTemp33,
        paging: {
          ...companyList.loadParams.paging,
          pagesize: filterContext.state.paging.pagesize || "12",
          offset: filterContext.state.paging.offset || "1",
          sortcolumnnames: {
            [filterContext.state.sorting.sortcolumnnames || "modifieddate"]: {
              sorttype: filterContext.state.sorting.sorttype || "DESC",
            },
          },
        },
      },
      loading: true,
    };

    const myParamsCompanyList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: myNewParam.loadParams,
      },
    };

    // axiosCloud
    myAxiosZ(myParamsCompanyList)
      .then((myData) => {
        // console.log("myData---------", myData);
        const myPaging = myData.response?.result?.paging || {};
        const myArray = myData.response.result || [];

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        // console.log("dfdgdgdf gd gdfg", myArray);
        const myTempList = prepareCompanyList(
          myArray,
          filterContext.state.menu
        );
        // console.log("gdfgdfg dfg", myTempList);

        setCompanyList({
          ...myNewParam,
          loading: false,
          // companyList: Object.values(myArray),
          companyList: myTempList,
        });

        filterContext.updateTotal(myPaging.totalcount);
      })
      .catch((error) => {
        setCompanyList({ ...companyList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  const clearCompanyDetail = () => {
    setCompanyDetail(initialStateCompanyDetail);
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######

  const loadCompanyDetail = (id = 0) => {
    const myParamsCompanyDetail = {
      request: {
        // username: memberContext.state.memberUID,
        username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: {
          ...companyDetail.loadParams,
          criteria: {
            id: {
              0: {
                operator: "=",
                operand: id,
              },
            },
          },
        },
      },
    };

    // console.log("myParamsCompanyDetail", myParamsCompanyDetail);
    setCompanyDetail(initialStateCompanyDetail);
    setCompanyDetail({ ...companyDetail, loading: true });

    axios
      .post("", myParamsCompanyDetail)
      .then((response) => {
        // console.log("AUTOZAR DETAIL RESPONSE------------> ", response);
        const myArray = response.data.response.result[0] || [];
        // console.log("AUTOZAR DETAIL myArray------------> ", myArray);
        myArray.mglyearmanufactured = moment(myArray.mglyearmanufactured);
        myArray.mglyearimport = moment(myArray.mglyearimport);
        myArray.createddate = moment(myArray.createddate);
        myArray.modifieddate = moment(myArray.modifieddate);

        myArray.mglengine2disp = myArray.mglengine2disp * 1;
        // myArray.carmilageimport = myArray.carmilageimport * 1;
        myArray.companymilage = myArray.companymilage * 1;
        myArray.mgldoor = myArray.mgldoor * 1;
        myArray.mglseat = myArray.mglseat * 1;
        myArray.mgldrivepos = myArray.mgldrivepos === "1" ? true : false;
        myArray.companyleasing = myArray.companyleasing === "1" ? true : false;
        myArray.companypenalty = myArray.companypenalty === "1" ? true : false;
        myArray.companytax = myArray.companytax === "1" ? true : false;
        myArray.isactive = myArray.isactive === "1" ? true : false;
        myArray.iscomment = myArray.iscomment === "1" ? true : false;
        myArray.isfeatured = myArray.isfeatured === "1" ? true : false;
        myArray.imagemainFileList = [];
        myArray.imagemainFileList =
          myArray.imagemain !== undefined &&
          (myArray.imagemain !== ""
            ? [
                {
                  uid: "-1",
                  name: "Тодорхойгүй",
                  status: "done",
                  url: myArray.imagemain || "",
                  thumbUrl: myArray.imagemain || "",
                  response: { url: myArray.imagemain || "" },
                },
              ]
            : []);
        myArray.imageotherFileList = [];
        myArray.imageotherFileList =
          myArray.imageother !== undefined &&
          (myArray.imageother !== ""
            ? JSON.parse(myArray.imageother).map((item, index) => ({
                uid: index - 1,
                name: item.replace(/^.*[\\\/]/, ""),
                status: "done",
                url: item || "",
                thumbUrl: item || "",
                response: { url: item || "" },
              }))
            : []);

        // console.log("MOTOCAR DETAIL------------> ", myArray);

        setCompanyDetail({
          ...companyDetail,
          loading: false,
          companyDetail: myArray,
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
  const saveCompanyDetail = (values) => {
    console.log("saveCompanyDetail дотор орж ирсэн values--", values);
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

    const myParamsCompanyDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoCompany_DV_002",
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
          companyleasing: toBoolean(values.companyleasing) ? "1" : "0",
          companypenalty: toBoolean(values.companypenalty) ? "1" : "0",
          companytax: toBoolean(values.companytax) ? "1" : "0",
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

    console.log(
      "myParamsCompanyDetail",
      myParamsCompanyDetail.request.parameters
    );

    // return;

    axios
      .post("", myParamsCompanyDetail)
      .then((response) => {
        console.log("Save CompanyDetail:   ", response);

        const myData = response.data.response;
        console.log("After Save CompanyDetail ------------>", myData);

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          message.success("Амжилттай нэмлээ. Өдрийг сайхан өнгөрүүлээрэй.");
          history.push({
            pathname: "/company",
          });
        }
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

  const toggleFilterDrawerOpen = () => {
    setCompanyList({
      ...companyList,
      isFilterDrawerOpen: !companyList.isFilterDrawerOpen,
    });
  };

  return (
    <CompanyContext.Provider
      value={{
        companyList,
        companyDetail,
        loadCompanyList,
        loadCompanyDetail,
        saveCompanyDetail,
        clearCompanyDetail,
        toggleFilterDrawerOpen,
      }}
    >
      {props.children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
