import React, { useState, useContext, useEffect } from "react";

import EditorJs from "react-editor-js";

// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EDITOR_JS_TOOLS } from "./editorjsConfig";
import NewsEditor from "./NewsEditor";
import ImageUpload from "./Image/ImageUpload";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import toBoolean from "util/booleanFunction";

import MotocarForm1General from "./MotocarForm1General";
import MotocarFormTech from "./MotocarFormTech";
import MotocarFormThecar from "./MotocarFormThecar";
import MotocarFormSpec from "./MotocarFormSpec";

import {
  Button,
  Card,
  Badge,
  Tooltip,
  Row,
  Col,
  Tag,
  Dropdown,
  Menu,
  Checkbox,
  Switch,
  message,
  Divider,
  Spin,
  Form,
  Input,
  Cascader,
  Select,
  AutoComplete,
  DatePicker,
  InputNumber,
  TreeSelect,
  Radio,
  Steps,
} from "antd";

import {
  WarningTwoTone,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  PlusOutlined,
  CloudUploadOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import NewsButtonPanel from "components/Moto/Button/NewsButtonPanel";

import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

import LogsContext from "context/LogsContext";
import MemberCard02 from "./MemberCard02";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import MotocarContext from "context/MotocarContext";

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { Step } = Steps;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};
const forItemLayoutSame = {
  labelCol: {
    xs: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 17 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 17,
      offset: 7,
    },
  },
};

//  ####   ####  #    #  ####  #####
// #    # #    # ##   # #        #
// #      #    # # #  #  ####    #
// #      #    # #  # #      #   #
// #    # #    # #   ## #    #   #
//  ####   ####  #    #  ####    #

const MotocarForm = () => {
  const [form] = Form.useForm();
  const motocarDetailContext = useContext(MotocarContext);
  const motocarItem = motocarDetailContext.motocarDetail.motocarDetail;

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох
  let myTempBody;

  try {
    myTempBody = htmlEntities.decode(motocarItem.body);
  } catch (e) {
    myTempBody = "";
  }

  let myOutputBody = {};
  if (myTempBody !== "") {
    if (myTempBody.indexOf('"blocks"') !== -1) {
      try {
        myOutputBody = JSON.parse(myTempBody);
      } catch (e) {
        myOutputBody = {};
      }
    } else {
      myOutputBody = {};
    }
  }

  const [myBody, setMyBody] = useState(myOutputBody);
  const [myImages, setMyImages] = useState([]);
  const [imageTags, setImageTags] = useState("");

  const onFinish = (values) => {
    console.log("AFTER SUBMIT --------- ", values);

    // values.body = htmlEntities.decode(myBody);
    // values.body = myBody;
    // values.images = myImages;
    // motocarDetailContext.saveMotocarDetail(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const saveButton = () => {
    console.log("Save button clicked");
  };

  const normFileBody = (e) => {
    console.log("Editorjs хүлээн авсан нь:", e);

    setMyBody(e);
    return e;
  };

  const normFileImages = (e) => {
    console.log("Editorjs хүлээн авсан images:", e);

    setMyImages(e);
    return e;
  };

  const titleOnChange = (text) => {
    // console.log("dsfdsfsd", text.target.value);
    setImageTags(text.target.value);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const onStepChange = (current) => {
    console.log("onStepChange:", current);
    setCurrentStep(current);
  };

  // #####  ###### ##### #    # #####  #    #
  // #    # #        #   #    # #    # ##   #
  // #    # #####    #   #    # #    # # #  #
  // #####  #        #   #    # #####  #  # #
  // #   #  #        #   #    # #   #  #   ##
  // #    # ######   #    ####  #    # #    #

  return (
    <Card
      className="gx-card_old "
      style={{ backgroundColor: "#f0f0f0" }}
      title="Автомашины тохиргоо"
    >
      <Form
        {...formItemLayout}
        form={form}
        name="motocarDetailForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          motocarid: motocarItem ? motocarItem.motocarid : "",
          newstypeid: motocarItem ? motocarItem.newstypeid : null,
          vehicletype: "passenger",
          newssourceid: motocarItem ? motocarItem.newssourceid : null,
          isactive: motocarItem ? toBoolean(motocarItem.isactive) : true,
          isfeatured: motocarItem ? toBoolean(motocarItem.isfeatured) : false,
          iscomment: motocarItem ? toBoolean(motocarItem.iscomment) : true,
        }}
        scrollToFirstError={true}
        colon={false}
      >
        <Steps
          type="navigation"
          size="small"
          current={currentStep}
          onChange={onStepChange}
          className="site-navigation-steps"
        >
          <Step title="Ерөнхий" />
          <Step title="Загвар" />
          <Step title="Автомашин" />
          <Step title="Үзүүлэлт" />
          {/* <Step title="Эзэмшигч" /> */}
        </Steps>
        <div className="gx-mt-4">
          {currentStep === 0 && <MotocarForm1General form={form} />}
          {currentStep === 1 && <MotocarFormTech />}
          {currentStep === 2 && (
            <MotocarFormThecar normFileImages={normFileImages} imageTags />
          )}
          {currentStep === 3 && <MotocarFormSpec />}
        </div>

        <Divider dashed orientation="center" plain>
          Тохиргоо
        </Divider>

        <Form.Item
          name="isactive"
          label="Идэвхтэй?"
          valuePropName="checked"
          {...forItemLayoutSame}
        >
          <Switch name="switchisactive" defaultChecked />
        </Form.Item>

        <Divider dashed orientation="center" plain>
          Таны үйлдэл
        </Divider>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            icon={<PlusOutlined />}
          >
            Илгээх
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default MotocarForm;

//? ЕРӨНХИЙ
// MOTOCARID
// TITLE;
// MGL_LICENSENUMBER_FULL;
// MGL_LICENSENUMBER_NUMBER;
// MGL_LICENSENUMBER_SERIES;
// BODYID;

// DESCRIPTION
// BODY2_MODEL_CODE_FULL
// MODEL_CODE
// BODY2_VIN_NUMBER

//? GOOTECH
// FIRMID;
// CAR_FIRM;
// MARKID;
// CAR_MARK;
// MAINID
// CARID;
// CARTRIM

//? TheCar
// CAR_YEAR_MANUFACTURED;
// CAR_YEAR_IMPORT;
// CAR_MILAGE_IMPORT;
// CAR_MILAGE_NOW;
// CAR_COLOR_OUTSIDE;
// CAR_COLOR_INSIDE;

// CAR_COUNTY_ORIGIN;
// CAR_COUNTRY_IMPORT;
// IMAGE_MAIN;
// IMAGE_OTHER
// BODY2_DOOR;
// BODY2_SEAT;
// DRIVERPOSID;

//? ҮЗҮҮЛЭЛТ
// ENGINE2_CODE
// ENGINE2_DISP;
// ENGINE2_CYLINDER;
// FUELTYPEID;
// ENGINE2_POWER_HP;
// ENGINE_TURBOID
// ENGINE2_TYPE

// TRANSTYPEID;
// DRIVE2_TRANSMISSION_STEP;
// DRIVEID;

//? ЭЗЭМШИГЧ
// CREATED_DATE
// CREATED_BY
// MODIFIED_DATE
// MODIFIED_BY
// IS_ACTIVE
// OWNERID
// PERSON_ID
// SYSTEM_USER_ID

//! VEHICLE_TYPE;
//! TEMP_LEASING
//! TEMP_SALECONDITION
//! TEMP_PRICE
//! TEMP_PHONE

//! TEMP_UNAAID
//! TEMP_UNEGUIID
//! TEMP_NUXTSUL
//! TEMP_MININGURL
//! TEMP_MININGPAGETITLE
//! TEMP_MININGDATE

//! TEMP
//! OLD_MOTO_GOO_ALLCAR_CARID

//! COMPANY_ID
