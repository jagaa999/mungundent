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
          autoSize
          // onChange={titleOnChange}
        />
      </Form.Item>

      <Form.Item
        name="isactive"
        label="Идэвхтэй?"
        valuePropName="checked"
        // initialValue={true}
      >
        <Switch />
      </Form.Item>
    </>
  );
};

export default MotocarFormSpec;

{
  /* <Form.Item name="engine2PowerHp" label="Морины хүч">
          <Input />
        </Form.Item> */
}
{
  /* <Form.Item name="engineTurboid" label="Турбо">
          <Input />
        </Form.Item> */
}
{
  /* <Form.Item name="engine2Type" label="engine2Type">
          <Input />
        </Form.Item> */
}
{
  /* <Form.Item name="vehicletype" label="vehicletype">
          <Input />
        </Form.Item> */
}
