import React, { useState, useEffect } from "react";

import { Form, Input, InputNumber, Select, Radio, Badge, Switch } from "antd";
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

const MotocarFormThecar = ({ form, techTranstypeList, techDriveList }) => {
  const optionsDoor = [1, 2, 3, 4, 5];
  const optionsSeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18];

  return (
    <>
      <Form.Item
        name="carmilageimport"
        hasFeedback
        label="Импортлох үеийн гүйлт (км)"
        rules={[
          {
            type: "number",
            min: 10,
            max: 1000000,
            message: "Багадаа 10, ихдээ 1,000,000",
          },
        ]}
      >
        <InputNumber
          step={1000}
          min={10}
          max={1000000}
          formatter={(value) => `${value} км`}
          // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          decimalSeparator=","
          className="gx-w-100"
          // formatter={(value) =>
          //   `${value} км`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          // }
          // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        />
      </Form.Item>

      {/* <Form.Item name="engine2Code" label="Хөдөлгүүрийн код">
        <Input />
      </Form.Item> */}

      <Form.Item name="transtypeid" hasFeedback label="Хроп">
        {/* <Select
          className="moto-select-firm"
          loading={techTranstypeList.loading}
          showSearch
          allowClear
          placeholder="Хроп"
        >
          {techTranstypeList.techTranstypeList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.transtypename}
            </Option>
          ))}
        </Select> */}
        <Radio.Group buttonStyle="solid" className="gx-w-100">
          {techTranstypeList.techTranstypeList.map((item, index) => (
            <Radio.Button key={index} value={item.id}>
              {item.transtypename}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="dirveid" hasFeedback label="Хөтлөгч">
        <Select
          className="moto-select-firm"
          loading={techDriveList.loading}
          showSearch
          allowClear
          placeholder="Хөтлөгч"
        >
          {techDriveList.techDriveList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.drivename}
            </Option>
          ))}
        </Select>
        {/* <Radio.Group buttonStyle="solid">
          {techDriveList.techDriveList.map((item, index) => (
            <Radio.Button key={index} value={item.id}>
              {item.drivename}
            </Radio.Button>
          ))}
        </Radio.Group> */}
      </Form.Item>

      <Form.Item name="carcoloroutside" hasFeedback label="Гадна өнгө">
        <Input />
      </Form.Item>

      <Form.Item name="carcolorinside" hasFeedback label="Салоны өнгө">
        <Input />
      </Form.Item>

      <Form.Item name="carCountyOrigin" hasFeedback label="Үйлдвэрлэсэн улс">
        <Input />
      </Form.Item>

      <Form.Item name="carCountryImport" hasFeedback label="Импортолсон улс">
        <Input />
      </Form.Item>

      <Form.Item name="body2Door" hasFeedback label="Хаалганы тоо">
        <Radio.Group buttonStyle="solid">
          {optionsDoor.map((item, index) => {
            return (
              <Radio.Button key={index} value={item}>
                {item}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="body2Seat" hasFeedback label="Суудлын тоо">
        <Radio.Group buttonStyle="solid">
          {optionsSeat.map((item, index) => {
            return (
              <Radio.Button key={index} value={item}>
                {item}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="driverPosId"
        label="Жолооны байрлал"
        hasFeedback
        valuePropName="checked"
      >
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
