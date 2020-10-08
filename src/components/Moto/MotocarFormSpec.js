import React, { useState, useEffect } from "react";

import { Form, Input, Select, Badge } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import ImageUpload from "./Image/ImageUpload";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

//? ҮЗҮҮЛЭЛТ
// ENGINE2_CODE
// ENGINE2_DISP;
// ENGINE2_CYLINDER;
// FUELTYPEID;
// ENGINE2_POWER_HP;
// ENGINE_TURBOID
// ENGINE2_TYPE

// TRANSTYPEID;
// DRIVE2_TRANSMISSION_STEP;
// DRIVEID;

const MotocarFormThecar = (props, { form }) => {
  return (
    <>
      <Form.Item name="carmilagenow" label="Одоогийн гүйлт">
        <Input />
      </Form.Item>

      {/* <Form.Item name="engine2PowerHp" label="Морины хүч">
          <Input />
        </Form.Item> */}
      {/* <Form.Item name="engineTurboid" label="Турбо">
          <Input />
        </Form.Item> */}
      {/* <Form.Item name="engine2Type" label="engine2Type">
          <Input />
        </Form.Item> */}

      <Form.Item
        name="tempimages"
        label="Зураг"
        // rules={[{ required: true, message: "Зургаа заавал оруулна уу!" }]}
      >
        <ImageUpload
          normFile={props.normFileImages}
          // newsImageMain={motocarItem ? motocarItem.imagemain : ""}
          newsImageMain=""
          imageTags={props.imageTags}
        />
      </Form.Item>

      <Form.Item name="imageOther" label="imageOther">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Машины тухай">
        <TextArea
          placeholder="Машиныхаа тухай бичнэ үү"
          autoSize
          // onChange={titleOnChange}
        />
      </Form.Item>

      {/* <Form.Item name="vehicletype" label="vehicletype">
          <Input />
        </Form.Item> */}
    </>
  );
};

export default MotocarFormThecar;
