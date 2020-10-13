import React, { useState, useEffect, useContext } from "react";

import { Form, Input, InputNumber } from "antd";
import MemberContext from "context/MemberContext";
import ImageCrop2 from "./Image/ImageCrop2";
import ImageDragger2 from "./Image/ImageDragger2";

const { TextArea } = Input;

const MotocarFormSpec = ({ form, imagemainFileList, imageotherFileList }) => {
  const memberContext = useContext(MemberContext);

  // console.log("ӨӨӨӨӨӨӨӨӨӨӨӨ", imagemainFileList);

  return (
    <>
      <Form.Item name="imagemain" label="Үндсэн зураг" valuePropName="fileList">
        <ImageCrop2 imagemainFileList={imagemainFileList} />
      </Form.Item>

      <Form.Item
        name="imageother"
        label="Нэмэлт зургууд"
        valuePropName="flieList"
      >
        <ImageDragger2 imageotherFileList={imageotherFileList} />
      </Form.Item>

      <Form.Item
        name="carmilagenow"
        hasFeedback
        label="Одоогийн гүйлт (км)"
        rules={[
          {
            type: "number",
            min: 10,
            max: 1500000,
            message: "Багадаа 10, ихдээ 1,500,000",
          },
        ]}
      >
        <InputNumber
          step={1000}
          min={10}
          max={1500000}
          // formatter={(value) => `${value} км`}
          decimalSeparator=","
          className="gx-w-100"
        />
      </Form.Item>

      <Form.Item name="description" hasFeedback label="Машины тухай">
        <TextArea
          placeholder="Машиныхаа тухай бичнэ үү"
          autoSize
          // onChange={titleOnChange}
        />
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
