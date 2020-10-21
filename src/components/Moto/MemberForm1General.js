import React, { useEffect, useState } from "react";

import { Form, Input, message, Select, Radio, Divider, DatePicker } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import moment from "moment";
import "moment/locale/mn";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MemberForm1General = ({ form }) => {
  return (
    <>
      <Form.Item name="id" label="ID дугаар" hidden={false}>
        <Input disabled />
      </Form.Item>

      <Form.Item name="systemuserid" hasFeedback label="Системийн дугаар">
        <Input />
      </Form.Item>

      <Form.Item name="name" hasFeedback label="Таны нэр">
        <Input />
      </Form.Item>

      <Form.Item name="registrationnumber" hasFeedback label="Регистр">
        <Input />
      </Form.Item>

      <Form.Item name="birthdate" hasFeedback label="Төрсөн огноо">
        <Input />
      </Form.Item>

      <Form.Item name="gender" hasFeedback label="Хүйс">
        <Radio.Group buttonStyle="solid" className="gx-w-100">
          <Radio.Button key={1} value="1">
            Эрэгтэй
          </Radio.Button>
          <Radio.Button key={2} value="2">
            Эмэгтэй
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="imagemain" hasFeedback label="Үндсэн зураг">
        <Input />
      </Form.Item>

      <Form.Item name="imageother" hasFeedback label="Бусад зураг">
        <Input />
      </Form.Item>
    </>
  );
};

export default MemberForm1General;
