import React, { useState, useEffect } from "react";

import { Form, Input, InputNumber, Select, Radio, Badge, Switch } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import ImageUpload from "./Image/ImageUpload";

const { Option, OptGroup } = Select;

const MotocarFormThecar = ({
  form,
  techTranstypeList,
  techDriveList,
  countryList,
}) => {
  const optionsDoor = [1, 2, 3, 4, 5];
  const optionsSeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18];
  // console.log("countryList", countryList);

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
          decimalSeparator=","
          className="gx-w-100"
        />
      </Form.Item>

      {/* <Form.Item name="engine2Code" label="Хөдөлгүүрийн код">
        <Input />
      </Form.Item> */}

      <Form.Item name="transtypeid" hasFeedback label="Хроп">
        <Radio.Group buttonStyle="solid" className="gx-w-100">
          {techTranstypeList.techTranstypeList.map((item, index) => (
            <Radio.Button key={index} value={item.id}>
              {item.transtypename}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="driveid" hasFeedback label="Хөтлөгч">
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

      <Form.Item name="mglcountyorigin" hasFeedback label="Үйлдвэрлэсэн улс">
        <Select
          className="moto-select-firm"
          loading={countryList.loading}
          showSearch
          allowClear
          placeholder="Үйлдвэрлэсэн улс"
        >
          {countryList.countryList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.countryname}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="carcountryimport" hasFeedback label="Импортолсон улс">
        <Select
          className="moto-select-firm"
          loading={countryList.loading}
          showSearch
          allowClear
          placeholder="Импортолсон улс"
        >
          {countryList.countryList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.countryname}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="mgldoor" hasFeedback label="Хаалганы тоо">
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

      <Form.Item name="mglseat" hasFeedback label="Суудлын тоо">
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
        name="mgldrivepos"
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
