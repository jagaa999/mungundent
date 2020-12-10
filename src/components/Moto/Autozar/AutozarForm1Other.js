import React, { useState, useEffect, useContext } from "react";

import { Form, Input, InputNumber, Switch } from "antd";
import MemberContext from "context/MemberContext";
import ImageCrop3 from "../Image/ImageCrop3";
import ImageDragger3 from "../Image/ImageDragger3";

const { TextArea } = Input;

const MotocarFormSpec = ({ form, imagemainFileList, imageotherFileList }) => {
  const memberContext = useContext(MemberContext);

  // console.log("ӨӨӨӨӨӨӨӨӨӨӨӨ", imagemainFileList);

  return (
    <>
      <Form.Item name="imagemain" label="Үндсэн зураг" valuePropName="fileList">
        <ImageCrop3 imagemainFileList={imagemainFileList} />
      </Form.Item>

      <Form.Item
        name="imageother"
        label="Нэмэлт зургууд"
        valuePropName="flieList"
      >
        <ImageDragger3 imageotherFileList={imageotherFileList} />
      </Form.Item>

      <Form.Item name="description" hasFeedback label="Машины тухай">
        <TextArea
          placeholder="Машиныхаа тухай бичнэ үү"
          autoSize={{ minRows: 3, maxRows: 19 }}
          showCount
          maxLength={2000}
          // rows={5}
          // onChange={titleOnChange}
        />
      </Form.Item>
    </>
  );
};

export default MotocarFormSpec;
