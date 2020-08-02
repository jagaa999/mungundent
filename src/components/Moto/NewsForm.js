import React, { useState, useContext } from "react";

import EditorJs from "react-editor-js";

// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EDITOR_JS_TOOLS } from "./ckConfig";
import NewsEditor from "./NewsEditor";

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
  QuestionCircleOutlined,
} from "@ant-design/icons";

import NewsButtonPanel from "components/Moto/Button/NewsButtonPanel";

import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

import LogsContext from "context/LogsContext";
import MemberCard02 from "./MemberCard02";
import NewsContext from "context/NewsContext";

const { Option } = Select;
const { TextArea } = Input;
// const editor = new EditorJS();

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
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

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card
      className="gx-card_old"
      title="Нийтлэлийн тохиргоо"
      actions={[
        <>
          <SettingOutlined key="setting" />
          Хадгалах
        </>,
        <>
          <EditOutlined key="edit" />
          Цуцлах
        </>,
      ]}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="newstitle"
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
          {/* <Input /> */}
          <TextArea placeholder="Гарчгаа бичнэ үү" autoSize />
        </Form.Item>
        <Form.Item
          name="newstype"
          label="Төрөл"
          rules={[{ required: true, message: "Төрлөө сонгоно уу!" }]}
        >
          <Select
            showSearch
            // style={{ width: 200 }}
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
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="newssource"
          label="Эх сурвалж"
          rules={[{ required: true, message: "Эх сурвалжийг сонгоно уу!" }]}
        >
          <Select
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
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        Photo <br />
        <Form.Item label="Идэвхтэй?">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="Спонсор?">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="Коммент?">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="Товчлол">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Нийтлэх огноо">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item label="Нийтлэл"></Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Илгээх
          </Button>
        </Form.Item>
      </Form>

      <div style={{ padding: "30px", background: "#ececec" }}>
        <Card bordered={false}>
          <NewsEditor />
        </Card>
      </div>
    </Card>
  );
};

export default NewsForm;
