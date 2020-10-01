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

function handleBlur() {
  console.log("blur");
}

function handleFocus() {
  console.log("focus");
}

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

  const [firmList, setFirmList] = useState({
    loading: false,
    firmList: [],
  });
  const [markList, setMarkList] = useState({
    loading: false,
    markList: [],
  });
  const [indexList, setIndexList] = useState({
    loading: false,
    indexList: [],
  });

  const [editionList, setEditionList] = useState({
    loading: false,
    editionList: [],
  });

  const [mglCar, setMglCar] = useState({
    loading: false,
    mglCar: {},
  });

  // * axios-оор ERP-аас дуудна.
  const callFunctionAsync = async () => {
    setFirmList({ ...firmList, loading: true });
    setFirmList({
      firmList: await loadDataview({
        systemmetagroupid: "1599822188399800",
        paging: {
          sortColumnNames: {
            firmName: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const firmChange = async (value) => {
    console.log(`Firm changed selected ${value}`);

    if (value !== "") {
      setMarkList({ ...markList, loading: true });
      setMarkList({
        markList: await loadDataview({
          systemmetagroupid: "1599554598533",
          criteria: {
            id: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              markName: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const markChange = async (value) => {
    console.log(`Mark changed selected ${value}`);

    if (value !== "") {
      setIndexList({ ...indexList, loading: true });
      setIndexList({
        indexList: await loadDataview({
          systemmetagroupid: "1599824590726192",
          criteria: {
            markid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              maindate: {
                sortType: "DESC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const indexChange = async (value) => {
    console.log(`Index changed selected ${value}`);

    if (value !== "") {
      setEditionList({ ...editionList, loading: true });
      setEditionList({
        editionList: await loadDataview({
          systemmetagroupid: "1599825541835232",
          criteria: {
            mainid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              pricenewusd: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  console.log("FITMLIST", firmList);
  console.log("MARKLIST", markList);
  console.log("INDEXLIST", indexList);
  console.log("EDITIONLIST", editionList);
  console.log("mglCar", mglCar);

  const onFinish = (values) => {
    console.log("AFTER SUBMIT --------- ", values);

    // values.body = htmlEntities.decode(myBody);
    // values.body = myBody;
    // values.images = myImages;
    // motocarDetailContext.saveMotocarDetail(values);
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
      <Steps
        type="navigation"
        size="small"
        current={currentStep}
        onChange={onStepChange}
        className="site-navigation-steps"
      >
        <Step title="Ерөнхий" />
        <Step title="Фирм/Марк" />
        <Step title="Автомашин" />
        <Step title="Үзүүлэлт" />
        <Step title="Эзэмшигч" />
      </Steps>

      <Form
        {...formItemLayout}
        form={form}
        name="motocarDetailForm"
        onFinish={onFinish}
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
        <MotocarForm1General />
        <MotocarFormTech />

        {/* 
        ####### ### ######  #     # 
        #        #  #     # ##   ## 
        #        #  #     # # # # # 
        #####    #  ######  #  #  # 
        #        #  #   #   #     # 
        #        #  #    #  #     # 
        #       ### #     # #     #  */}

        <Form.Item
          name="firm"
          hasFeedback
          label="Фирм"
          rules={[{ required: true, message: "Фирмээ сонгоно уу!" }]}
        >
          <Select
            className="moto-select-firm"
            loading={firmList.loading}
            showSearch
            placeholder="Фирм"
            optionFilterProp="children"
            onChange={firmChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children[0]
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                );
              } else {
                return false;
              }
            }}
          >
            {firmList.firmList
              .filter(
                (v, i, a) =>
                  a.findIndex((t) => t.firmcountrymon === v.firmcountrymon) ===
                  i
              )
              .map((item, index) => (
                <OptGroup label={item.firmcountrymon} key={index}>
                  {firmList.firmList.map((option) => {
                    if (item.firmcountrymon === option.firmcountrymon) {
                      return (
                        <Option key={option.id} value={option.id}>
                          {option.firmname}
                          {/* <Badge
                            count={option.count}
                            className="gx-float-right"
                          /> */}
                          <Badge
                            count={option.count}
                            // className="gx-float-right"
                            className="moto-badge-firm"
                          />
                        </Option>
                      );
                    }
                  })}
                </OptGroup>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="mark"
          hasFeedback
          label="Марк"
          rules={[{ required: true, message: "Маркаа сонгоно уу!" }]}
        >
          <Select
            className="moto-select-firm"
            loading={markList.loading}
            showSearch
            placeholder="Марк"
            optionFilterProp="children"
            onChange={markChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children[0]
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                );
              } else {
                return false;
              }
            }}
          >
            {markList.markList.map((option) => {
              return (
                <Option key={option.markid} value={option.markid}>
                  {option.markname}
                  <Badge count={option.count} className="moto-badge-firm" />
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="index" hasFeedback label="Цуврал">
          <Select
            className="moto-select-firm"
            loading={indexList.loading}
            showSearch
            placeholder="Цуврал"
            optionFilterProp="children"
            onChange={indexChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children[0]
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                );
              } else {
                return false;
              }
            }}
          >
            {indexList.indexList.map((option) => {
              return (
                <Option key={option.mainid} value={option.mainid}>
                  {option.maindate2}
                  <Badge count={option.count} className="moto-badge-firm" />
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="edition" hasFeedback label="Хувилбар">
          <Select
            className="moto-select-firm"
            loading={editionList.loading}
            showSearch
            placeholder="Хувилбар"
            optionFilterProp="children"
            onChange={null}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children[0]
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                );
              } else {
                return false;
              }
            }}
          >
            {editionList.editionList.map((option) => {
              return (
                <Option key={option.id} value={option.id}>
                  {option.cartrim}{" "}
                  <span className="gx-float-right gx-mr-5 gx-ml-2 gx-fs-sm gx-font-weight-light gx-color-light-purple">
                    {option.body2modelcodefull} • {option.engine2disp} cc •{" "}
                    {option.drive2drivename} • {option.drive2transmissionfull}
                  </span>
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Divider className="gx-my-5" />
        {/*
           ####  ##   ## #######    ####    #### ######  
          ## ##  ##   ## ##        ## ##   ## ## ##   ## 
          ## ##  ##   ## ##       ##  ##  ##  ## ##   ## 
          ## ##   ###### ##      ##   ## ##   ## ######  
          ## ##       ## ##      ####### ####### ##      
         ####### ##   ## ##      ##   ## ##   ## ##      
         ##   ##  #####  ##      ##   ## ##   ## ##       */}

        <Divider className="gx-my-5" />

        {/*}
        #     # ####### ####### #######  #####     #    ######  
        ##   ## #     #    #    #     # #     #   # #   #     # 
        # # # # #     #    #    #     # #        #   #  #     # 
        #  #  # #     #    #    #     # #       #     # ######  
        #     # #     #    #    #     # #       ####### #   #   
        #     # #     #    #    #     # #     # #     # #    #  
        #     # #######    #    #######  #####  #     # #     #  */}

        <Form.Item name="caryearmanufactured" label="Үйлдвэрлэсэн он">
          <Input />
        </Form.Item>
        <Form.Item name="caryearimport" label="Импортолсон он">
          <Input />
        </Form.Item>
        <Form.Item name="carmilageimport" label="Импортлох үеийн гүйлт">
          <Input />
        </Form.Item>
        <Form.Item name="carmilagenow" label="Одоогийн гүйлт">
          <Input />
        </Form.Item>
        <Form.Item name="carcoloroutside" label="Гадна өнгө">
          <Input />
        </Form.Item>
        <Form.Item name="carcolorinside" label="Салоны өнгө">
          <Input />
        </Form.Item>

        <Form.Item name="engine2Disp" label="Хөдөлгүүрийн CC">
          <Input />
        </Form.Item>
        <Form.Item name="engine2Cylinder" label="Хөдөлгүүрийн цилиндр">
          <Input />
        </Form.Item>
        <Form.Item name="fueltypeid" label="Шатахуун">
          <Input />
        </Form.Item>
        {/* <Form.Item name="engine2PowerHp" label="Морины хүч">
          <Input />
        </Form.Item> */}
        <Form.Item name="carCountyOrigin" label="Брэндийн улс">
          <Input />
        </Form.Item>
        <Form.Item name="carCountryImport" label="Импортолсон улс">
          <Input />
        </Form.Item>
        <Form.Item name="body2Door" label="Хаалганы тоо">
          <Input />
        </Form.Item>
        <Form.Item name="body2Seat" label="Суудлын тоо">
          <Input />
        </Form.Item>
        <Form.Item name="transtypeid" label="Хроп ID">
          <Input />
        </Form.Item>
        {/* <Form.Item name="drive2TransmissionStep" label="Хропны шатлал">
          <Input />
        </Form.Item> */}
        <Form.Item name="driveId" label="Хөтлөгч">
          <Input />
        </Form.Item>
        <Form.Item name="driverPosId" label="Жолооны байрлал">
          <Input />
        </Form.Item>
        {/* <Form.Item name="engineTurboid" label="Турбо">
          <Input />
        </Form.Item> */}
        {/* <Form.Item name="engine2Type" label="engine2Type">
          <Input />
        </Form.Item> */}
        {/* <Form.Item name="vehicletype" label="vehicletype">
          <Input />
        </Form.Item> */}
        <Form.Item name="imageOther" label="imageOther">
          <Input />
        </Form.Item>
        <Form.Item
          name="tempimages"
          label="Зураг"
          // rules={[{ required: true, message: "Зургаа заавал оруулна уу!" }]}
        >
          <ImageUpload
            normFile={normFileImages}
            newsImageMain={motocarItem ? motocarItem.imagemain : ""}
            imageTags={imageTags}
          />
        </Form.Item>

        <Form.Item name="engine2Code" label="engine2Code">
          <Input />
        </Form.Item>
        {/* 
        <Form.Item
          name="tempbody"
          label="Нийтлэл"
          // initialValue={motocarItem ? motocarItem.body : ""}
          getValueFromEvent={normFileBody}
          rules={[{ type: "array" }]}
        >
          <Card bordered={false}>
            <NewsEditor
              normFile={normFileBody}
              newsBody={motocarItem ? motocarItem.body : {}}
            />
          </Card>
        </Form.Item> */}

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
