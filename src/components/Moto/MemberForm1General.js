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

const MemberForm1General = ({ form }) => {
  // address
  // // birthdate
  // cityid
  // createdby
  // createddate
  // description
  // districtid
  //! email
  // fbid
  // firebaseuid
  // // gender
  // googleid
  //? homecity
  //? homedistrict
  //? homestreet
  // id
  // // imagemain
  // // imageother
  // line1
  // line2
  // line3
  // name
  //! phonenumber1
  //! phonenumber2
  //! phonenumber3
  // providerid
  // registrationnumber
  // specattention
  // specknowledge
  // specusage
  // streetid
  // systemuserid
  //* typename1
  //* typename2
  //* typename3
  //* typename4
  //* typename5
  //* typename6
  //? workcity
  //? workdistrict
  //? workstreet
  //* bio

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
        <Input />
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
