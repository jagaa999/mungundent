import React, { useEffect, useState, useContext } from "react";

import myAxiosZ from "../util/myAxiosZ";
import MemberContext from "context/MemberContext";
import { message } from "antd";
import Moment from "moment";
import { ContextDevTool } from "react-context-devtool";

const MemberItemsContext = React.createContext();

export const MemberItemsStore = (props) => {
  const memberContext = useContext(MemberContext);

  const initialMemberItems = {
    memberItems: {},
    loading: false,
    error: null,
  };

  const initialMotocar = {
    mainList: {},
    loading: false,
    error: null,
  };

  const [memberItems, setMemberItems] = useState(initialMemberItems);
  const [motocar, setMotocar] = useState(initialMotocar);

  useEffect(() => {
    loadMemberItems();
  }, [memberContext.state.memberCloudUserSysId]);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #
  const loadMemberItems = () => {
    if (!memberContext.state.isLogin) return null;

    setMemberItems({ ...memberItems, loading: true });

    const myParamsMemberItems = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          systemmetagroupid: "1588073051944136", //Хадгалсан зүйлс
          showQuery: "0",
          ignorepermission: "1",
          paging: {
            pageSize: "", //нийтлэлийн тоо
            offset: "1", //хуудасны дугаар
            sortColumnNames: {
              modifieddate: {
                //эрэмбэлэх талбар
                sortType: "DESC", //эрэмбэлэх чиглэл
              },
            },
          },
          criteria: {
            usersystemid: memberContext.state.memberCloudUserSysId,
            actionname: null, //Хамаарахгүй, бүгдийг нь
            actiondata: null, //Хамаарахгүй, бүгдийг нь
            recordid: null, //Хамаарахгүй, бүгдийг нь
          },
        },
      },
    };
    // console.log("Бэлтгэсэн myParamsMemberItems : ", myParamsMemberItems);

    // axios
    //   .post("", myParamsMemberItems)
    //   .then((response) => {
    myAxiosZ(myParamsMemberItems)
      .then((myResponse) => {
        // console.log("ИРСЭН loadMemberItems response:   ", myResponse);
        const myData = myResponse.response;

        if (myData.status === "error") {
          message.error(myData.text);
        } else {
          // const myPaging = response.data.response.result.paging;
          // const myArray = response.data.response.result;
          const myPaging = myData.result?.paging || {};
          // console.log("myPaging myPaging", myPaging);
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          // console.log("ИРСЭН loadMemberItems myArray:   ", myArray);

          setMemberItems({
            ...memberItems,
            loading: false,
            memberItems: myArray,
          });
        }
      })
      .catch((error) => {
        // setMemberItems({ ...memberItems, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  //   #####     #    #     # #######    ### ####### ####### #     #
  //  #     #   # #   #     # #           #     #    #       ##   ##
  //  #        #   #  #     # #           #     #    #       # # # #
  //   #####  #     # #     # #####       #     #    #####   #  #  #
  //        # #######  #   #  #           #     #    #       #     #
  //  #     # #     #   # #   #           #     #    #       #     #
  //   #####  #     #    #    #######    ###    #    ####### #     #
  const saveMemberItem = (values) => {
    if (!memberContext.isMember()) {
      return null;
    }

    console.log("saveMemberItem дотор орж ирсэн values--", values);

    const myMemberItem = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMemberDV_SAVEITEMS_002",
        parameters: {
          id: values.id || "",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: values.tablename || "ECM_NEWS",
          recordid: values.recordid || "",
          actionname: values.actionname || "Таалагдлаа",
          actiondata: values.actiondata || "1",
          createtorid: memberContext.state.memberCloudUserSysId,
          createddate: Moment().format("YYYY-MM-DD HH:mm:ss"),
          modifierid: memberContext.state.memberCloudUserSysId,
          modifieddate: Moment().format("YYYY-MM-DD HH:mm:ss"),
          description: values.description || "",
          mainimg: values.mainimg || "",
        },
      },
    };

    console.log("saveMemberItem-ын бэлтгэсэн myMemberItem", myMemberItem);

    // axios
    //   .post("", myMemberItem)
    //   .then((response) => {
    myAxiosZ(myMemberItem)
      .then((myData) => {
        const myDetail = myData.response || {};
        console.log(
          "After parse saveMemberItem Result ------------>",
          myDetail
        );

        if (myDetail.status === "error") {
          message.error(myDetail.text, 7);
        } else {
          message.success(
            "Амжилттай тэмдэглэж авлаа. Өдрийг сайхан өнгөрүүлээрэй."
          );
          loadMemberItems();
        }
      })
      .catch((error) => {
        message.error(error);
        console.log(error);
      });
  };

  //  ######  ####### #       ####### ####### #######    ### ####### ####### #     #
  //  #     # #       #       #          #    #           #     #    #       ##   ##
  //  #     # #       #       #          #    #           #     #    #       # # # #
  //  #     # #####   #       #####      #    #####       #     #    #####   #  #  #
  //  #     # #       #       #          #    #           #     #    #       #     #
  //  #     # #       #       #          #    #           #     #    #       #     #
  //  ######  ####### ####### #######    #    #######    ###    #    ####### #     #

  const deleteMemberItem = (id) => {
    // console.log("deleteMemberItem дотор орж ирсэн values--", id);
    const myMemberItem = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMemberDV_SAVEITEMS_005", //Устгах
        parameters: {
          id: id || "",
        },
      },
    };
    // console.log("deleteMemberItem-ын бэлтгэсэн myMemberItem", myMemberItem);
    myAxiosZ(myMemberItem)
      .then((myData) => {
        const myDetail = myData.response || {};

        if (myDetail.status === "error") {
          message.error(myDetail.text, 7);
        } else {
          message.warning(
            "Таны тэмдэглэлээс устгалаа. Өдрийг сайхан өнгөрүүлээрэй."
          );
          loadMemberItems();
        }
      })
      .catch((error) => {
        message.error(error);
        console.log(error);
      });
  };

  //  #     # ####### ####### #######  #####     #    ######
  //  ##   ## #     #    #    #     # #     #   # #   #     #
  //  # # # # #     #    #    #     # #        #   #  #     #
  //  #  #  # #     #    #    #     # #       #     # ######
  //  #     # #     #    #    #     # #       ####### #   #
  //  #     # #     #    #    #     # #     # #     # #    #
  //  #     # #######    #    #######  #####  #     # #     #
  const loadMotocar = () => {
    setMotocar({ ...motocar, loading: true });
    const myParams = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          systemmetagroupid: "1600421356169317",
          showQuery: "0",
          ignorepermission: "1",
          criteria: {
            systemuserid: memberContext.state.memberCloudUserSysId,
          },
          paging: {
            pagesize: "",
            offset: "1",
            sortcolumnnames: {
              id: { sorttype: "DESC" },
            },
          },
        },
      },
    };
    myAxiosZ(myParams)
      .then((myResponse) => {
        const myData = myResponse.response;
        if (myData.status === "error") {
          message.error(myData.text);
        } else {
          const myPaging = myData.result?.paging || {};
          const myArray = myData.result || [];
          delete myArray["aggregatecolumns"];
          delete myArray["paging"];
          setMotocar({
            ...motocar,
            loading: false,
            mainList: myArray,
          });
        }
      })
      .catch((error) => {
        message.error(error);
        console.log(error);
      });
  };

  const saveMotocar = (values) => {
    console.log("saveMotocar дотор орж ирсэн values--", values);

    const myMotocar = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMotocarDV_002",
        parameters: {
          id: values.id || "",
          systemuserid: memberContext.state.memberCloudUserSysId,
          firmid: values.firmid || "",
          markid: values.markid || "",
          mainid: values.mainid || "",
          carid: values.carid || "",
        },
      },
    };
    console.log("saveMotocar-ын бэлтгэсэн myMotocar", myMotocar);
    // return null;

    myAxiosZ(myMotocar)
      .then((myData) => {
        const myDetail = myData.response || {};
        console.log("After parse saveMotocar Result ------------>", myDetail);

        if (myDetail.status === "error") {
          message.error(myDetail.text, 7);
        } else {
          message.success(
            "Амжилттай тэмдэглэж авлаа. Өдрийг сайхан өнгөрүүлээрэй."
          );
          loadMotocar();
        }
      })
      .catch((error) => {
        message.error(error);
        console.log(error);
      });
  };

  return (
    <MemberItemsContext.Provider
      value={{
        memberItems,
        loadMemberItems,
        saveMemberItem,
        deleteMemberItem,
        motocar,
        loadMotocar,
        saveMotocar,
      }}
    >
      {process.env.NODE_ENV === "development" && (
        <ContextDevTool
          context={MemberItemsContext}
          id="MemberItemsContext"
          displayName="MEMBER ITEM STORE"
        />
      )}

      {props.children}
    </MemberItemsContext.Provider>
  );
};

export default MemberItemsContext;
