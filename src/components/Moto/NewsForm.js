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
import NewsContext from "context/NewsContext";

const { Option } = Select;
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

const NewsForm = () => {
  const [form] = Form.useForm();
  const newsContext = useContext(NewsContext);
  const [myBody, setMyBody] = useState([]);
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

    // await loadDataview(newsSource, setNewsSource, {
    //   systemmetagroupid: "1585046479054",
    //   criteria: newsContext.state.loadParams.criteria,
    // });
    // await loadDataview(newsPublisher, setNewsPublisher, {
    //   systemmetagroupid: "1585046481242",
    //   criteria: newsContext.state.loadParams.criteria,
    // });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const onFinish = (values) => {
    // console.log("newsFormDetail form - Received values of form: ", values);
    values.body = myBody;
    values.images = myImages;
    newsContext.saveNewsDetail(values);
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

  return (
    <Card
      className="gx-card_old "
      style={{ backgroundColor: "#f0f0f0" }}
      title="Нийтлэлийн тохиргоо"
      // actions={[
      //   <Button
      //     className="gx-text-success"
      //     size="large"
      //     type="link"
      //     icon={<SettingOutlined key="setting" />}
      //     onClick={() => {
      //       saveButton();
      //     }}
      //   >
      //     Хадгалах
      //   </Button>,
      //   <Button
      //     className="gx-text-grey"
      //     size="large"
      //     type="link"
      //     icon={<EditOutlined key="edit" />}
      //     onClick={() => {
      //       console.log("qqqqwww dfg fdg fdgdf");
      //     }}
      //   >
      //     Цуцлах
      //   </Button>,
      // ]}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="newsDetailForm"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          initialValue=""
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
          <TextArea placeholder="Гарчгаа бичнэ үү" autoSize />
        </Form.Item>

        <Form.Item
          name="newstypeid"
          hasFeedback
          initialValue={null}
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
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {newsType.newsTypes.map((item) => (
              <Option value={item.newstypeid}>{item.newstypename}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="newssourceid"
          initialValue={null}
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
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {newsSource.newsSources.map((item) => (
              <Option value={item.newssourceid}>{item.newssourcename}</Option>
            ))}
            {/* // ! Цаашдаа newssourcetype -аар group-лэх хэрэгтэй. */}
          </Select>
        </Form.Item>

        <Form.Item
          name="isActive"
          label="Идэвхтэй?"
          initialValue={true}
          valuePropName="checked"
        >
          <Switch name="switchIsActive" defaultChecked />
        </Form.Item>
        <Form.Item
          name="isFeatured"
          label="Спонсор?"
          initialValue={false}
          valuePropName="checked"
        >
          <Switch name="switchIsFeatured" defaultChecked />
        </Form.Item>
        <Form.Item
          name="isComment"
          label="Коммент?"
          initialValue={true}
          valuePropName="checked"
        >
          <Switch name="switchIsComment" defaultChecked />
        </Form.Item>
        <Form.Item name="description" initialValue="" label="Товчлол">
          <TextArea rows={4} placeholder="Товчлолоо бичнэ үү" />
        </Form.Item>
        {/* <Form.Item name="publishedDate" label="Нийтлэх огноо">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item> */}

        <Form.Item
          name="tempimages"
          label="Зураг (8 зураг)"
          valuePropName="fileList"
          // getValueFromEvent={normFile}
        >
          <ImageUpload normFile={normFileImages} />
        </Form.Item>

        <Form.Item
          name="tempbody"
          label="Нийтлэл"
          // shouldUpdate={true}
          // valuePropName="myText"
          // getValueProps="blocks"
          getValueFromEvent={normFileBody}
          // trigger={dddd}
          // valuePropName="logLevel"
          rules={[{ type: "array" }]}
        >
          <Card bordered={false}>
            <NewsEditor normFile={normFileBody} />
          </Card>
          {/* Нийтлэлийн их бие нь энд байрлана. Зурагтайгаа юутай хээтэй. */}
        </Form.Item>
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

export default NewsForm;
