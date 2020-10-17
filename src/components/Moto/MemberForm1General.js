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
  // ######  ####### ####### #     # ######  #     #
  // #     # #          #    #     # #     # ##    #
  // #     # #          #    #     # #     # # #   #
  // ######  #####      #    #     # ######  #  #  #
  // #   #   #          #    #     # #   #   #   # #
  // #    #  #          #    #     # #    #  #    ##
  // #     # #######    #     #####  #     # #     #

  // ID
  // SYSTEM_USER_ID
  // NAME
  // REGISTRATION_NUMBER
  // EMAIL
  // PHONE_NUMBER1
  // PHONE_NUMBER2
  // PHONE_NUMBER3
  // BIRTH_DATE
  // GENDER
  // CREATED_DATE
  // CREATED_BY
  // FIREBASE_UID
  // FB_ID
  // GOOGLE_ID
  // PROVIDER_ID
  // IMAGEMAIN
  // IMAGEOTHER
  // SPEC_KNOWLEDGE
  // SPEC_USAGE
  // SPEC_ATTENTION

  //  id
  //  systemUserId
  //  name
  //  registrationNumber
  //  email
  //  phoneNumber1
  //  phoneNumber2
  //  phoneNumber3
  //  birthDate
  //  gender
  //  createdDate
  //  createdBy
  //  firebaseUid
  //  fbId
  //  googleId
  //  providerId
  //  imagemain
  //  imageother
  //  specKnowledge
  //  specUsage
  //  specAttention

  return (
    <>
      <Form.Item name="id" label="ID дугаар" hidden={false}>
        <Input disabled />
      </Form.Item>

      <Form.Item name="systemUserId" hasFeedback label="Системийн дугаар">
        <Input />
      </Form.Item>
      <Form.Item name="name" hasFeedback label="Гишүүний нэр">
        <Input />
      </Form.Item>
      <Form.Item
        name="registrationNumber"
        hasFeedback
        label="Регистрийн дугаар"
      >
        <Input />
      </Form.Item>
      <Form.Item name="birthDate" hasFeedback label="Төрсөн огноо">
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

      <Divider />
    </>
  );
};

export default MemberForm1General;
