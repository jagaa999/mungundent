import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  InputNumber,
  Tooltip,
  message,
  Select,
  Divider,
  DatePicker,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import moment from "moment";
import "moment/locale/mn";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MemberFormContact = ({ form }) => {
  return (
    <>
      <Form.Item name="email" hasFeedback label="Имэйл">
        <Input />
      </Form.Item>
      <Form.Item name="phoneNumber1" hasFeedback label="Утас 1">
        <Input />
      </Form.Item>
      <Form.Item name="phoneNumber2" hasFeedback label="Утас 2">
        <Input />
      </Form.Item>
      <Form.Item name="phoneNumber3" hasFeedback label="Утас 3">
        <Input />
      </Form.Item>
      <Form.Item name="fbId" hasFeedback label="fbId">
        <Input />
      </Form.Item>
      <Form.Item name="googleId" hasFeedback label="googleId">
        <Input />
      </Form.Item>

      <Form.Item name="providerId" hasFeedback label="providerId">
        <Input />
      </Form.Item>
    </>
  );
};

export default MemberFormContact;
