import React, { useState, useEffect } from "react";

import { Form, Input, Select, Radio, Badge, Switch } from "antd";
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

const MotocarFormThecar = (props, { form }) => {
  const optionsDoor = [1, 2, 3, 4, 5];
  const optionsSeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18];

  return (
    <>
      <Form.Item name="carmilageimport" label="Импортлох үеийн гүйлт">
        <Input />
      </Form.Item>

      <Form.Item name="engine2Code" label="Хөдөлгүүрийн код">
        <Input />
      </Form.Item>

      <Form.Item name="transtypeid" label="Хроп">
        <Input />
      </Form.Item>

      <Form.Item name="driveId" label="Хөтлөгч">
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
        <Radio.Group buttonStyle="solid">
          {optionsDoor.map((item, index) => {
            return <Radio.Button value={item}>{item}</Radio.Button>;
          })}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="body2Seat" label="Суудлын тоо">
        <Radio.Group buttonStyle="solid">
          {optionsSeat.map((item, index) => {
            return <Radio.Button value={item}>{item}</Radio.Button>;
          })}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="driverPosId" label="Жолооны байрлал">
        <Switch
          checkedChildren="Зөв"
          unCheckedChildren="Буруу"
          defaultChecked={false}
        />
      </Form.Item>
    </>
  );
};

export default MotocarFormThecar;
