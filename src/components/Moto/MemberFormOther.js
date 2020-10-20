import React, { useEffect, useState } from "react";

import { Form, Input, Select } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import "moment/locale/mn";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MemberFormOther = ({ form }) => {
  return (
    <>
      <Form.Item name="typename1" hasFeedback label="Авто анхаарал">
        <Input />
      </Form.Item>
      <Form.Item name="typename2" hasFeedback label="Авто мэдлэг">
        <Input />
      </Form.Item>
      <Form.Item name="typename3" hasFeedback label="Авто хэрэглээ">
        <Input />
      </Form.Item>
      <Form.Item name="typename4" hasFeedback label="Таашаал">
        <Input />
      </Form.Item>
      <Form.Item name="typename5" hasFeedback label="Ажилладаг салбар">
        <Input />
      </Form.Item>
      <Form.Item name="typename6" hasFeedback label="Сонирхол, Хобби">
        <Input />
      </Form.Item>
    </>
  );
};

export default MemberFormOther;
