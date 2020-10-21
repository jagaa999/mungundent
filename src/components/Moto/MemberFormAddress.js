import React, { useEffect, useState } from "react";

import { Form, Input, Select, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import "moment/locale/mn";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MemberFormAddress = ({ form }) => {
  return (
    <>
      <Form.Item name="homecity" hasFeedback label="Гэрийн хаяг - Хот, аймаг">
        <Input />
      </Form.Item>
      <Form.Item
        name="homedistrict"
        hasFeedback
        label="Гэрийн хаяг - Дүүрэг, сум"
      >
        <Input />
      </Form.Item>
      <Form.Item name="homestreet" hasFeedback label="Гэрийн хаяг - Хороо, баг">
        <Input />
      </Form.Item>
      <Form.Item
        name="homeaddress"
        hasFeedback
        label="Гэрийн хаяг - Дэлгэрэнгүй"
      >
        <Input />
      </Form.Item>

      <Divider />

      <Form.Item name="workcity" hasFeedback label="Ажлын хаяг - Хот, аймаг">
        <Input />
      </Form.Item>
      <Form.Item
        name="workdistrict"
        hasFeedback
        label="Ажлын хаяг - Дүүрэг, сум"
      >
        <Input />
      </Form.Item>
      <Form.Item name="workstreet" hasFeedback label="Ажлын хаяг - Хороо, баг">
        <Input />
      </Form.Item>
      <Form.Item
        name="workaddress"
        hasFeedback
        label="Ажлын хаяг - Дэлгэрэнгүй"
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default MemberFormAddress;
