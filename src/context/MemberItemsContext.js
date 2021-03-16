import React, { useEffect, useState, useContext } from "react";

import myAxiosZ from "../util/myAxiosZ";
import MemberContext from "context/MemberContext";
import { message, Modal, Result, Button, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import toBoolean from "util/booleanFunction";
import Moment from "moment";
import { ContextDevTool } from "react-context-devtool";
import {
  prepareMotocarList,
  prepareMotocarListSettings as mySettings,
  prepareMotocarDetail,
} from "util/specData/prepareSpecsMotocar";
import { LoadProcess, LoadProcessAdvanced2 } from "util/axiosFunction";
import FilterContext from "context/FilterContext";

const MemberItemsContext = React.createContext();

export const MemberItemsStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  const initialMemberItems = {
    memberItems: [],
    loading: false,
    error: null,
  };

  const initialMotocar = {
    mainList: [],
    loading: false,
    error: null,
    defaultCar: {},
  };

  const [memberItems, setMemberItems] = useState(initialMemberItems);
  const [motocar, setMotocar] = useState(initialMotocar);

  useEffect(() => {
    loadMemberItems();
    loadMotocar();
  }, [memberContext.state.memberCloudUserSysId]);

  //motocar.mainList өөрчлөгдөхөд defaultCar-ийг тавьж өгнө.
  useEffect(() => {
    motocar.mainList.map((item, index) => {
      if (item.isdefault) {
        setMotocar({
          ...motocar,
          defaultCar: {
            ...item,
          },
        });
      }
    });
  }, [motocar.mainList]);

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

    myAxiosZ(myParamsMemberItems)
      .then((myResponse) => {
        // console.log("ИРСЭН loadMemberItems response:   ", myResponse);
        const myData = myResponse.response;

        if (myData.status === "error") {
          message.error(myData.text);
        } else {
          const myPaging = myData.result?.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setMemberItems({
            ...memberItems,
            loading: false,
            memberItems: myArray,
          });
        }
      })
      .catch((error) => {
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
    console.log("loadMotocar ажиллаж байна");

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
    // console.log("loadMotoCar myParams", myParams);

    myAxiosZ(myParams)
      .then((myResponse) => {
        // console.log("loadMotoCar myResponse", myResponse);

        const myData = myResponse.response;
        if (myData.status === "error") {
          message.error(myData.text);
        } else {
          const myPaging = myData.result?.paging || {};
          const myArray = myData.result || [];
          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          // const myTempList = Object.values(myArray);
          const myTempList = prepareMotocarList(
            myArray,
            filterContext.urlSetting.menu
          );

          setMotocar({
            ...motocar,
            loading: false,
            mainList: myTempList,
          });
        }
      })
      .catch((error) => {
        message.error(error);
        console.log(error);
      });
  };

  // **************
  // **************
  // **************
  const saveMotocar = (values) => {
    // console.log("saveMotocar дотор орж ирсэн values--", values);

    LoadProcessAdvanced2({
      request: {
        username: memberContext.state.memberUID,
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
      successActions: [
        {
          action: () =>
            notification.open({
              description: (
                <Result
                  status="success"
                  title="Амжилттай нэмлээ."
                  subTitle="Таны эзэмшилд байдаг энэ машиныг таны гараашт дөнгөж сая нэмлээ."
                  extra={[
                    <Button type="primary" key="mygarage" disabled>
                      Гараашаа үзэх
                    </Button>,
                  ]}
                />
              ),
              placement: "topLeft",
            }),
        },
        {
          action: () => loadMotocar(),
        },
      ],
    });
  };

  //  #####  ###### #    #  ####  #    # ######
  //  #    # #      ##  ## #    # #    # #
  //  #    # #####  # ## # #    # #    # #####
  //  #####  #      #    # #    # #    # #
  //  #   #  #      #    # #    #  #  #  #
  //  #    # ###### #    #  ####    ##   ######
  const removeMotocar = (values) => {
    LoadProcessAdvanced2({
      request: {
        username: memberContext.state.memberUID,
        command: "motoMotocarDV_005",
        parameters: {
          id: values.id || "",
        },
      },
      preConfirmModal: {
        title: "Та энэ машиныг Гараашаасаа устгахдаа итгэлтэй байна уу?",
        zIndex: 2500,
        icon: <ExclamationCircleOutlined />,
        content:
          "Нэгэнт устгавал энэ машинтай холбоотой бүх мэдээлэл устах болно.",
        okText: "Устгая",
        okType: "danger",
        cancelText: "Больё",
      },
      successActions: [
        {
          action: () =>
            message.warning("Таны эзэмшилд байсан машиныг гараашаас устгав."),
        },
        {
          action: () => loadMotocar(),
        },
      ],
    });
  };

  const changeIsDefault = (values) => {
    LoadProcess({
      username: memberContext.state.memberUID,
      command: "motoMotocarDV_002",
      parameters: {
        ...values,
        id: values.id,
        isdefault: toBoolean(values.isdefault) ? "1" : "0",
      },
      successMessage: "none",
      errorMessage: "none",
    });
  };

  const chooseDefaultMotocar = async (values) => {
    const myId = values.id;
    await motocar.mainList.map((item, index) => {
      if (item.id === myId) {
        changeIsDefault({ ...item, isdefault: true });
      } else {
        changeIsDefault({ ...item, isdefault: false });
      }
    });

    await loadMotocar();
    await message.success("Таны үндсэн машин сонгогдлоо.");
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
        chooseDefaultMotocar,
        removeMotocar,
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
