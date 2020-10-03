import React, { useState, useEffect } from "react";

import { Form, Input, Select, Badge } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import ImageUpload from "./Image/ImageUpload";

const { Option, OptGroup } = Select;

//? TheCar
// CAR_YEAR_MANUFACTURED;
// CAR_YEAR_IMPORT;
// CAR_MILAGE_IMPORT;
// CAR_MILAGE_NOW;
// CAR_COLOR_OUTSIDE;
// CAR_COLOR_INSIDE;
// CAR_COUNTY_ORIGIN;
// CAR_COUNTRY_IMPORT;
// IMAGE_MAIN;
// IMAGE_OTHER
// BODY2_DOOR;
// BODY2_SEAT;
// DRIVERPOSID;

const MotocarFormThecar = (props) => {
  return (
    <>
      <Form.Item name="caryearmanufactured" label="Үйлдвэрлэсэн он">
        <Input />
      </Form.Item>
      <Form.Item name="caryearimport" label="Импортолсон он">
        <Input />
      </Form.Item>
      <Form.Item name="carmilageimport" label="Импортлох үеийн гүйлт">
        <Input />
      </Form.Item>
      <Form.Item name="carmilagenow" label="Одоогийн гүйлт">
        <Input />
      </Form.Item>
      <Form.Item name="carcoloroutside" label="Гадна өнгө">
        <Input />
      </Form.Item>
      <Form.Item name="carcolorinside" label="Салоны өнгө">
        <Input />
      </Form.Item>

      <Form.Item name="carCountyOrigin" label="Брэндийн улс">
        <Input />
      </Form.Item>
      <Form.Item name="carCountryImport" label="Импортолсон улс">
        <Input />
      </Form.Item>
      <Form.Item name="body2Door" label="Хаалганы тоо">
        <Input />
      </Form.Item>
      <Form.Item name="body2Seat" label="Суудлын тоо">
        <Input />
      </Form.Item>
      <Form.Item name="driverPosId" label="Жолооны байрлал">
        <Input />
      </Form.Item>

      <Form.Item name="imageOther" label="imageOther">
        <Input />
      </Form.Item>
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
    </>
  );
};

export default MotocarFormThecar;
