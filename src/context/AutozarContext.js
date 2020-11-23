import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { message } from "antd";
import toBoolean from "util/booleanFunction";
import moment from "moment";

import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const AutozarContext = React.createContext();

export const AutozarStore = (props) => {
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

  const initialStateAutozarList = {
    loadParams: {
      systemmetagroupid: "1605592797379",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        pageSize: "12",
        offset: "1",
        sortcolumnnames: {
          modifieddate: {
            sorttype: "DESC", //эрэмбэлэх чиглэл
          },
        },
      },
    },
    autozarList: [],
    loading: false,
    error: null,
  };
  const initialStateAutozarDetail = {
    loadParams: {
      systemmetagroupid: "",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pageSize: "1",
        offset: "1",
      },
    },
    autozarDetail: [],
    loading: false,
    error: null,
  };

  const [autozarList, setAutozarList] = useState(initialStateAutozarList);
  const [autozarDetail, setAutozarDetail] = useState(initialStateAutozarDetail);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadAutozarList = () => {
    setAutozarList({ ...autozarList, loading: true });

    const myParamsAutozarList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: autozarList.loadParams,
      },
    };

    // axiosCloud
    axios
      .post("", myParamsAutozarList)
      .then((response) => {
        // console.log("response---------", response);
        const myData = response.data.response;
        if (myData.status === "error") {
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setAutozarList({
            ...autozarList,
            loading: false,
            autozarList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setAutozarList({ ...autozarList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  const clearAutozarDetail = () => {
    setAutozarDetail(initialStateAutozarDetail);
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######

  const loadAutozarDetail = (id = 0) => {
    // console.log("ЭЭЭЭЭЭЭЭЭЭ", id);

    const myParamsAutozarDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: {
          ...autozarDetail.loadParams,
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

    // console.log("myParamsAutozarDetail", myParamsAutozarDetail);
    setAutozarDetail(initialStateAutozarDetail);
    setAutozarDetail({ ...autozarDetail, loading: true });

    axios
      .post("", myParamsAutozarDetail)
      .then((response) => {
        // console.log("MOTOCAR DETAIL RESPONSE------------> ", response);
        const myArray = response.data.response.result[0] || [];
        // console.log("MOTOCAR DETAIL myArray------------> ", myArray);
        myArray.caryearmanufactured = moment(myArray.caryearmanufactured);
        myArray.caryearimport = moment(myArray.caryearimport);
        myArray.mglengine2disp = myArray.mglengine2disp * 1;
        myArray.carmilageimport = myArray.carmilageimport * 1;
        myArray.carmilagenow = myArray.carmilagenow * 1;
        myArray.mgldoor = myArray.mgldoor * 1;
        myArray.mglseat = myArray.mglseat * 1;
        myArray.mgldrivepos = myArray.mgldrivepos === "1" ? true : false;
        myArray.isactive = myArray.isactive === "1" ? true : false;
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

        setAutozarDetail({
          ...autozarDetail,
          loading: false,
          autozarDetail: myArray,
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
    // title
    // body2Door: 5
    // body2Seat: 8
    // body2VinNumber: "ATH100007261"
    // carCountryImport: "Япон"
    // mglCountyOrigin: "Япон"
    // carcolorinside: "Шаргал"
    // carcoloroutside: "Ягаан"
    // carmilageimport: 138000
    // carmilagenow: 220000
    // caryearimport: moment {_isAmomentObject: true, _i: "2013-09-25", _f: "YYYY-MM-DD", _isUTC: false, _pf: {…}, …}
    // caryearmanufactured: moment {_isAmomentObject: true, _i: "2004-01-01", _f: "YYYY-MM", _isUTC: false, _pf: {…}, …}
    // description: "Японоос захиж авч байсан."
    // driveid: "58170471"
    // driverPosId: false
    // isactive: true
    // imagemain: {fileList: Array(1)} → values.imagemain.fileList[0].response.url
    // mgllicensenumberfull: "2527УНГ"
    // mglbody: "Минивэн"
    // mglfuel: "Энгийн бензин"
    // mglengine2disp: 2362
    // mglfirm: "TOYOTA"
    // mglmark: "Alphard"
    // id: undefined
    // imageother: {fileList: Array(2)} → values.imageother.fileList.map(item)  → item.response.url
    // transtypeid: "1002"

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
        command: "motoAutozarDV_002",
        parameters: {
          ...values,
          id: values.id || "",
          title: mytitle,
          isactive: toBoolean(values.isactive) ? "1" : "0",
          mgldrivepos: toBoolean(values.mgldrivepos) ? "1" : "2",
          caryearimport: moment(values.caryearimport).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          caryearmanufactured: moment(values.caryearmanufactured).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          imagemain: myimagemain,
          imageother: myimageother,

          createdby: memberContext.state.memberCloudUserSysId,
          modifiedby: memberContext.state.memberCloudUserSysId,
          ownerid: memberContext.state.memberCloudUserSysId,
        },
      },
    };

    console.table(myParamsAutozarDetail.request.parameters);

    // return;

    axios
      .post("", myParamsAutozarDetail)
      .then((response) => {
        console.log("Save AutozarDetail:   ", response);

        const myData = response.data.response;
        console.log("After Save AutozarDetail ------------>", myData);

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

    //MOTOCAR НЭМЭХ ПРОЦЕСС
    // id
    // mglLicensenumberFull
    // title
    // firmId
    // markId
    // mainId
    // carId
    // carYearManufactured
    // carYearImport
    // carMilageImport
    // carMilageNow
    // carColorOutside
    // carColorInside
    // bodyid
    // mglEngine2Disp
    // engine2Cylinder
    // fueltypeid
    // engine2PowerHp
    // mglCountyOrigin
    // carCountryImport
    // body2Door
    // body2Seat
    // transtypeid
    // drive2TransmissionStep
    // driveId
    // driverPosId
    // engineTurboid
    // engine2Type
    // mglLicensenumberNumber
    // mglLicensenumberSeries
    // vehicleType
    // imageMain
    // createdDate
    // createdBy
    // mglMark
    // mglFirm
    // carTrim
    // tempLeasing
    // tempSalecondition
    // tempPrice
    // tempPhone
    // tempUnaaid
    // tempUneguiid
    // tempNuxtsul
    // tempMiningurl
    // tempMiningpagetitle
    // tempMiningdate
    // imageOther
    // description
    // body2ModelCodeFull
    // modelCode
    // body2VinNumber
    // engine2Code
    // temp
    // oldMotoGooAllcarCarid
    // modifiedDate
    // modifiedBy
    // isActive
    // ownerid
    // personId
    // companyId
    // systemUserId
    // mglLicenseClassification
    // mglFuel
    // mglDrivePos
    // mglDoor
    // mglSeat
    // mglWeight
    // mglHeight
    // mglWidth
    // mglLength
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
      }}
    >
      {props.children}
    </AutozarContext.Provider>
  );
};

export default AutozarContext;
