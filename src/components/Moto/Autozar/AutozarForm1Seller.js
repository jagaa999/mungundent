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
  DatePicker,
} from "antd";

const { Option, OptGroup } = Select;

const AutozarForm1Seller = ({ form }) => {
  // console.log("countryList", countryList);

  return (
    <>
      <Divider className="gx-my-3" />
      <Form.Item name="createddate" hasFeedback label="Зарыг үүсгэсэн огноо">
        <DatePicker
          disabled
          className="gx-w-100"
          placeholder="2018-12-31"
          format="YYYY-MM-DD"
        />
      </Form.Item>
      <Form.Item name="modifieddate" hasFeedback label="Зарыг шинэчилсэн огноо">
        <DatePicker
          disabled
          className="gx-w-100"
          placeholder="2018-12-31"
          format="YYYY-MM-DD"
        />
      </Form.Item>
      <Divider className="gx-my-4" />
      {/*
       #####  ####### #     # #######    #     #####  ####### 
      #     # #     # ##    #    #      # #   #     #    #    
      #       #     # # #   #    #     #   #  #          #    
      #       #     # #  #  #    #    #     # #          #    
      #       #     # #   # #    #    ####### #          #    
      #     # #     # #    ##    #    #     # #     #    #    
       #####  ####### #     #    #    #     #  #####     #    */}

      <Form.Item
        name="mobile1rr"
        hasFeedback
        label="Гар утас"
        rules={[{ required: true, message: "Гар утас заавал оруулна!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="mobile2" hasFeedback label="Гар утас 2">
        <Input />
      </Form.Item>

      <Form.Item name="email" hasFeedback label="Имэйл">
        <Input />
      </Form.Item>
      {/* <Divider className="gx-my-4" />
      <Form.Item name="memberfirebaseuid" hasFeedback label="UID">
        <Input disabled />
      </Form.Item>
      <Form.Item name="systemuserid" hasFeedback label="Sys ID">
        <Input disabled />
      </Form.Item> */}
    </>
  );
};

export default AutozarForm1Seller;
