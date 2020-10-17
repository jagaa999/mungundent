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

const MemberFormOther = ({ form }) => {
  return (
    <>
      <Form.Item name="specKnowledge" hasFeedback label="Мэдлэг">
        <Input />
      </Form.Item>
      <Form.Item name="specUsage" hasFeedback label="Хэрэглээ">
        <Input />
      </Form.Item>
      <Form.Item name="specAttention" hasFeedback label="Анхаарал">
        <Input />
      </Form.Item>
    </>
  );
};

export default MemberFormOther;
