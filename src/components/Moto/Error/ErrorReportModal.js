import React, { useContext, useEffect, useState } from "react";

import NewsDetailContext from "context/NewsDetailContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import { Modal, Divider, Button, Form, Input, Radio } from "antd";

const { TextArea } = Input;

const ErrorReportModal = (props) => {
  console.log("ErrorReportModal props", props);

  const [form] = Form.useForm();

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    props.setShowErrorReportModal(false);
  };

  return (
    <Modal
      visible={props.showErrorReportModal}
      title="Алдаа илгээх"
      okText="Илгээх"
      cancelText="Болих"
      onCancel={() => {
        props.setShowErrorReportModal(false);
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="horizontal"
        name="error_modal"
        initialValues={{
          id: props.item.newsid,
          title: props.item.title,
          modifier: "public",
        }}
      >
        <Form.Item
          name="id"
          label="ID"
          rules={[
            {
              required: true,
              message: "ID заавал байх ёстой",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title"
          label="Гарчиг"
          rules={[
            {
              required: true,
              message: "Гарчиг заавал байх ёстой",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Тайлбар">
          <TextArea
            rows={4}
            autoSize={true}
            placeholder="Алдааны талаар боломжоороо дэлгэрэнгүй бичихийг хүсье."
          />
        </Form.Item>
        {/* <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default ErrorReportModal;
