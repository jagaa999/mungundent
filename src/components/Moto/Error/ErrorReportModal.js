import React, { useContext, useEffect, useState } from "react";

import NewsDetailContext from "context/NewsDetailContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import {
  Modal,
  Divider,
  Button,
  Form,
  Input,
  Radio,
  Select,
  message,
} from "antd";
import LogsContext from "context/LogsContext";

const { TextArea } = Input;
const { Option } = Select;

const myErrorList = [
  "Гарчиг буруу",
  "Зарагдсан",
  "Зураг буруу",
  "Үнэ буруу",
  "Үзүүлэлт буруу",
  "Эзэн асуудалтай",
  "Утас, мэйл буруу",
  "Луйврын шинжтэй",
  "Бусад алдаа",
];

const errorChildren = [];
myErrorList.map((item, i) => {
  errorChildren.push(<Option key={item}>{item}</Option>);
});

const formLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

const ErrorReportModal = ({
  showErrorReportModal,
  setShowErrorReportModal,
  item,
  tableName,
  idField = "id",
}) => {
  const logContext = useContext(LogsContext);
  const [form] = Form.useForm();

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    values.actionName = "Алдаа илгээв";
    values.tableName = tableName || "ECM_NEWS";
    values.actionType = values.errorList.join("&");
    // values.recordId = idField || "id";
    logContext.insertLog(values);
    setShowErrorReportModal(false);
    message.success("Алдаа илгээсэнд баярлалаа. Админ шалгаж үзэх болно.");
  };

  function handleErrorChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Modal
      visible={showErrorReportModal}
      title="Алдаа илгээх"
      okText="Илгээх"
      cancelText="Болих"
      onCancel={() => {
        setShowErrorReportModal(false);
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
      <div className="gx-mb-4">{item?.title}</div>

      <Form
        form={form}
        {...formLayout}
        layout="horizontal"
        name="error_modal"
        initialValues={{
          recordId: item[idField],
          title: item.title,
          modifier: "public",
        }}
      >
        <Form.Item name="recordId" label="ID" hidden={true}>
          <Input />
        </Form.Item>

        <Form.Item name="title" label="Гарчиг" hidden={true}>
          <Input />
        </Form.Item>

        <Form.Item
          name="errorList"
          label="Алдаа"
          rules={[
            {
              required: true,
              message: "Алдааны төрлүүдээс заавал сонгох ёстой",
            },
          ]}
        >
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Алдааг сонгоно уу"
            // defaultValue={["a10", "c12"]}
            onChange={handleErrorChange}
          >
            {errorChildren}
          </Select>
        </Form.Item>

        <Form.Item name="description" label="Тайлбар">
          <TextArea
            rows={4}
            autoSize={true}
            placeholder="Алдааны талаар боломжоороо дэлгэрэнгүй бичихийг хүсье."
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ErrorReportModal;
