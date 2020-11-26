import React, { useState, useEffect } from "react";

import {
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Badge,
  Switch,
  Divider,
} from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";

const { Option, OptGroup } = Select;

const AutozarFormAutozar = ({ form, conditionList }) => {
  // console.log("countryList", countryList);

  return (
    <>
      {/*
       #####  ####### #     # ######  ### ####### ### ####### #     # 
      #     # #     # ##    # #     #  #     #     #  #     # ##    # 
      #       #     # # #   # #     #  #     #     #  #     # # #   # 
      #       #     # #  #  # #     #  #     #     #  #     # #  #  # 
      #       #     # #   # # #     #  #     #     #  #     # #   # # 
      #     # #     # #    ## #     #  #     #     #  #     # #    ## 
       #####  ####### #     # ######  ###    #    ### ####### #     # */}
      <Form.Item name="autozarconditionid" hasFeedback label="Нөхцөл">
        <Select
          className="moto-select-firm"
          loading={conditionList.loading}
          showSearch
          allowClear
          placeholder="Нөхцөл"
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
        >
          {conditionList.conditionList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.conditionname}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="autozarid" hasFeedback label="Зарын дугаар">
        <Input disabled />
      </Form.Item>

      <Form.Item name="financecondition" hasFeedback label="Зарах нөхцөл">
        <Input />
      </Form.Item>

      <Form.Item
        name="autozarleasing"
        label="Лизингтэй?"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Divider className="gx-my-3" />

      <Form.Item name="financepricerr" hasFeedback label="Зарах үнэ">
        <Input />
      </Form.Item>

      <Divider className="gx-my-3" />

      <Form.Item
        name="autozarinspection"
        label="Оношилгоо?"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item
        name="autozarpenalty"
        label="Торгуульгүй?"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item
        name="autozartax"
        label="Татвар төлсөн?"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Divider className="gx-my-3" />

      <Form.Item name="isactive" label="Идэвхтэй?" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name="iscomment" label="Коммент?" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name="isfeatured" label="Спонсор?" valuePropName="checked">
        <Switch />
      </Form.Item>
    </>
  );
};

export default AutozarFormAutozar;
