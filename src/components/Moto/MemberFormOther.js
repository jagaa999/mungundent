import React, { useEffect, useState } from "react";

import { Form, Input, Select } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import "moment/locale/mn";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MemberFormOther = ({ form, refAttention, refKnowledge, refUsage }) => {
  // console.log("refAttention", refAttention);
  // console.log("refKnowledge", refKnowledge);
  // console.log("refUsage", refUsage);
  return (
    <>
      <Form.Item name="refattention" hasFeedback label="Авто анхаарал">
        <Select
          className="moto-select-firm"
          loading={refAttention.loading}
          showSearch
          allowClear
          placeholder="Авто анхаарал"
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
          {refAttention.refAttention.map((item, index) => (
            <Option key={index} value={item.booktypeid}>
              {item.booktypename}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="refknowledge" hasFeedback label="Авто мэдлэг">
        <Select
          className="moto-select-firm"
          loading={refKnowledge.loading}
          showSearch
          allowClear
          placeholder="Авто мэдлэг"
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
          {refKnowledge.refKnowledge.map((item, index) => (
            <Option key={index} value={item.booktypeid}>
              {item.booktypename}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="refusage" hasFeedback label="Авто хэрэглээ">
        <Select
          className="moto-select-firm"
          loading={refUsage.loading}
          showSearch
          allowClear
          placeholder="Авто хэрэглээ"
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
          {refUsage.refUsage.map((item, index) => (
            <Option key={index} value={item.booktypeid}>
              {item.booktypename}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/* <Form.Item name="typename4" hasFeedback label="Таашаал">
        <Input />
      </Form.Item>
      <Form.Item name="typename5" hasFeedback label="Ажилладаг салбар">
        <Input />
      </Form.Item>
      <Form.Item name="typename6" hasFeedback label="Сонирхол, Хобби">
        <Input />
      </Form.Item> */}
      <Form.Item name="bio" hasFeedback label="Таны тухай">
        <TextArea
          placeholder="Та өөрийнхөө авто амьдрал, сонирхол хобби, ур чадвар болон бусад зүйлсийг бичиж болно."
          autoSize
        />
      </Form.Item>
    </>
  );
};

export default MemberFormOther;
