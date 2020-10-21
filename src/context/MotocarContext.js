import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { message } from "antd";
import toBoolean from "util/booleanFunction";
import moment from "moment";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const MotocarContext = React.createContext();

export const MotocarStore = (props) => {
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

  const initialStateMotocarList = {
    loadParams: {
      // systemmetagroupid: "1585197442423220",
      systemmetagroupid: "1600421356169317",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        pageSize: "24",
        offset: "1",
        sortcolumnnames: {
          createddate: {
            sorttype: "DESC", //эрэмбэлэх чиглэл
          },
        },
      },
    },
    motocarList: [],
    loading: false,
    error: null,
  };
  const initialStateMotocarDetail = {
    loadParams: {
      systemmetagroupid: "1600405606733265",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pageSize: "1",
        offset: "1",
      },
    },
    motocarDetail: [],
    loading: false,
    error: null,
  };

  const [motocarList, setMotocarList] = useState(initialStateMotocarList);
  const [motocarDetail, setMotocarDetail] = useState(initialStateMotocarDetail);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadMotocarList = () => {
    setMotocarList({ ...motocarList, loading: true });

    const myParamsMotocarList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: motocarList.loadParams,
      },
    };

    // axiosCloud
    axios
      .post("", myParamsMotocarList)
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

          setMotocarList({
            ...motocarList,
            loading: false,
            motocarList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setMotocarList({ ...motocarList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  const clearMotocarDetail = () => {
    setMotocarDetail(initialStateMotocarDetail);
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######

  const loadMotocarDetail = (id = 0) => {
    // console.log("ЭЭЭЭЭЭЭЭЭЭ", id);

    const myParamsMotocarDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: {
          ...motocarDetail.loadParams,
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

    // console.log("myParamsMotocarDetail", myParamsMotocarDetail);
    setMotocarDetail(initialStateMotocarDetail);
    setMotocarDetail({ ...motocarDetail, loading: true });

    axios
      .post("", myParamsMotocarDetail)
      .then((response) => {
        // console.log("MOTOCAR DETAIL RESPONSE------------> ", response);
        const myArray = response.data.response.result[0];
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
        myArray.imagemainFileList =
          myArray.imagemain !== ""
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
            : [];
        myArray.imageotherFileList =
          myArray.imageother !== ""
            ? JSON.parse(myArray.imageother).map((item, index) => ({
                uid: index - 1,
                name: item.replace(/^.*[\\\/]/, ""),
                status: "done",
                url: item || "",
                thumbUrl: item || "",
                response: { url: item || "" },
              }))
            : [];

        // console.log("MOTOCAR DETAIL------------> ", myArray);

        setMotocarDetail({
          ...motocarDetail,
          loading: false,
          motocarDetail: myArray,
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
  const saveMotocarDetail = (values) => {
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

    console.log("saveMotocarDetail дотор орж ирсэн values--", values);
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

    const myParamsMotocarDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMotocarDV_002",
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

    console.table(myParamsMotocarDetail.request.parameters);

    // return;

    axios
      .post("", myParamsMotocarDetail)
      .then((response) => {
        console.log("Save MotocarDetail:   ", response);

        const myData = response.data.response;
        console.log("After Save MotocarDetail ------------>", myData);

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          message.success("Амжилттай нэмлээ. Өдрийг сайхан өнгөрүүлээрэй.");
          history.push({
            pathname: "/motocar",
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
    <MotocarContext.Provider
      value={{
        motocarList,
        motocarDetail,
        loadMotocarList,
        loadMotocarDetail,
        saveMotocarDetail,
        clearMotocarDetail,
      }}
    >
      {props.children}
    </MotocarContext.Provider>
  );
};

export default MotocarContext;
