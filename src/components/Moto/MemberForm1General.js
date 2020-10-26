import React, { useEffect, useState } from "react";

import { Form, Input, message, Select, Radio, Divider, DatePicker } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import moment from "moment";
import "moment/locale/mn";

import ImageCrop2 from "./Image/ImageCrop2";
import ImageDragger2 from "./Image/ImageDragger2";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MemberForm1General = ({
  form,
  imagemainFileList,
  imageotherFileList,
}) => {
  return (
    <>
      <Form.Item name="id" label="ID дугаар" hidden={true}>
        <Input disabled />
      </Form.Item>

      <Form.Item
        name="systemuserid"
        hasFeedback
        hidden={true}
        label="Системийн дугаар"
      >
        <Input disabled />
      </Form.Item>

      <Form.Item name="name" hasFeedback label="Таны нэр">
        <Input />
      </Form.Item>

      <Form.Item name="registrationnumber" hasFeedback label="Регистр">
        <Input />
      </Form.Item>

      <Form.Item name="birthdate" hasFeedback label="Төрсөн огноо">
        <DatePicker
          className="gx-w-100"
          placeholder="1990-12-31"
          format="YYYY-MM-DD"
        />
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

      <Form.Item name="imagemain" label="Таны зураг" valuePropName="fileList">
        <ImageCrop2 imagemainFileList={imagemainFileList} />
      </Form.Item>

      <Form.Item
        name="imageother"
        label="Таны машинтайгаа зургууд"
        valuePropName="flieList"
      >
        <ImageDragger2 imageotherFileList={imageotherFileList} />
      </Form.Item>
    </>
  );
};

export default MemberForm1General;
