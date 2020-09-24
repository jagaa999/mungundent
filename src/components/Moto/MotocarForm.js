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

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log("blur");
}

function handleFocus() {
  console.log("focus");
}

const MotocarForm = () => {
  const [form] = Form.useForm();
  const motocarDetailContext = useContext(MotocarContext);

  const motocarItem = motocarDetailContext.motocarDetail.motocarDetail;

  const [imageTags, setImageTags] = useState("");

  const titleOnChange = (text) => {
    // console.log("dsfdsfsd", text.target.value);
    setImageTags(text.target.value);
  };

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

  // console.log("myTempBodymyTempBody", myTempBody);

  // const myTempBody = JSON.parse(motocarItem.body || []);
  const [myBody, setMyBody] = useState(myOutputBody);
  const [myImages, setMyImages] = useState([]);

  const [newsType, setNewsType] = useState({
    loading: false,
    newsTypes: [],
  });
  const [newsSource, setNewsSource] = useState({
    loading: false,
    newsSources: [],
  });

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callFunctionAsync = async () => {
    setNewsType({ ...newsType, loading: true });
    setNewsType({
      newsTypes: await loadDataview({
        systemmetagroupid: "1587100905303413",
        paging: {
          sortColumnNames: {
            newstypeid: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });

    setNewsSource({ ...newsSource, loading: true });
    setNewsSource({
      newsSources: await loadDataview({
        systemmetagroupid: "1585046479054",
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const onFinish = (values) => {
    // values.body = htmlEntities.decode(myBody);
    values.body = myBody;
    values.images = myImages;
    motocarDetailContext.saveMotocarDetail(values);
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

  let myNewsType = newsType.newsTypes;
  myNewsType.map((item, index) => {
    if (item.newstypeid < 199) {
      myNewsType[index].optgroup = "Мэдээ";
    } else {
      myNewsType[index].optgroup = "Нийтлэл";
    }
  });

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
        initialValues={{
          newsid: motocarItem ? motocarItem.newsid : "",
          title: motocarItem ? motocarItem.title : "",
          newstypeid: motocarItem ? motocarItem.newstypeid : null,
          newssourceid: motocarItem ? motocarItem.newssourceid : null,
          isactive: motocarItem ? toBoolean(motocarItem.isactive) : true,
          isfeatured: motocarItem ? toBoolean(motocarItem.isfeatured) : false,
          iscomment: motocarItem ? toBoolean(motocarItem.iscomment) : true,
          // description: motocarItem ? motocarItem.description : "",
        }}
        scrollToFirstError={true}
        colon={false}
      >
        <Form.Item
          {...forItemLayoutSame}
          name="newsid"
          label="ID дугаар"
          hidden={true}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="title"
          label={
            <span>
              Гарчиг&nbsp;
              <Tooltip title="Нийтлэлийн утга санааг бүрэн төлөөлөхүйцээр өгөөрэй.">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Гарчгаа бичнэ үү!",
              whitespace: true,
            },
          ]}
        >
          <TextArea
            placeholder="Гарчгаа бичнэ үү"
            autoSize
            onChange={titleOnChange}
          />
        </Form.Item>

        <Form.Item
          name="newstypeid"
          hasFeedback
          label="Төрөл"
          rules={[{ required: true, message: "Төрлөө сонгоно уу!" }]}
        >
          <Select
            loading={newsType.loading}
            showSearch
            placeholder="Төрлөө сонгоно уу"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                );
              } else {
                return false;
              }
            }}
          >
            {myNewsType
              .filter(
                (v, i, a) => a.findIndex((t) => t.optgroup === v.optgroup) === i
              )
              .map((item, index) => (
                <OptGroup label={item.optgroup} key={index}>
                  {myNewsType.map((option) => {
                    if (item.optgroup === option.optgroup) {
                      return (
                        <Option
                          key={option.newstypeid}
                          value={option.newstypeid}
                        >
                          {option.newstypename}
                        </Option>
                      );
                    }
                  })}
                </OptGroup>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="newssourceid"
          label="Эх сурвалж"
          rules={[{ required: true, message: "Эх сурвалжийг сонгоно уу!" }]}
        >
          <Select
            loading={newsSource.loading}
            showSearch
            placeholder="Эх сурвалжийг сонгоно уу!"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                );
              } else {
                return false;
              }
            }}
          >
            {/* {newsSource.newsSources.map((item) => (
              <Option key={item.newssourceid} value={item.newssourceid}>
                {item.newssourcename}
              </Option>
            ))} */}

            {newsSource.newsSources
              .filter(
                (v, i, a) =>
                  a.findIndex((t) => t.newssourcetype === v.newssourcetype) ===
                  i
              )
              .map((item, index) => (
                <OptGroup label={item.newssourcetype} key={index}>
                  {newsSource.newsSources.map((option) => {
                    if (item.newssourcetype === option.newssourcetype) {
                      return (
                        <Option
                          key={option.newssourceid}
                          value={option.newssourceid}
                        >
                          {option.newssourcename}
                        </Option>
                      );
                    }
                  })}
                </OptGroup>
              ))}
          </Select>
        </Form.Item>

        {/* <Form.Item name="description" label="Товчлол">
          <TextArea rows={4} placeholder="Товчлолоо бичнэ үү" />
        </Form.Item> */}
        {/* <Form.Item name="publishedDate" label="Нийтлэх огноо">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item> */}

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
        </Form.Item>

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
        <Form.Item
          name="isfeatured"
          label="Спонсор?"
          valuePropName="checked"
          {...forItemLayoutSame}
        >
          <Switch name="switchisfeatured" defaultChecked />
        </Form.Item>
        <Form.Item
          name="iscomment"
          label="Коммент?"
          valuePropName="checked"
          {...forItemLayoutSame}
        >
          <Switch name="switchiscomment" defaultChecked />
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

//? ЗУРАГ
// IMAGE_MAIN;
// IMAGE_OTHER
// BODY2_DOOR;
// BODY2_SEAT;
// DRIVERPOSID;

//? ТЕХНИК ҮЗҮҮЛЭЛТ
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

//? ТУХАЙ
// DESCRIPTION
// BODY2_MODEL_CODE_FULL
// MODEL_CODE
// BODY2_VIN_NUMBER

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
