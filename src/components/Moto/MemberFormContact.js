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

export default MemberForm1General;
