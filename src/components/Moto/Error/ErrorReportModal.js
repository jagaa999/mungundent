import React, { useContext, useEffect, useState } from "react";

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
import MyIcon from "util/iconFunction";
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

const ErrorReportModal = (props) => {
  const { showErrorReportModal, setShowErrorReportModal, item } = props;
  const logContext = useContext(LogsContext);
  const [form] = Form.useForm();

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    values.tablename = props.tablename || "ECM_NEWS";
    values.actionname = props.actionname || "Алдаа илгээв";
    values.actiontype = values.errorList.join("&");
    values.imagemain = props.imagemain || "";
    values.recordid = props.recordid || "0";
    values.idstring = values.description || "";
    values.description = window.location.href;
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
      closeIcon={<MyIcon type="icontimes-solid" className="moto-icon-1-5" />}
      title="Алдаа илгээх"
      okText="Илгээх"
      // cancelText="Болих"
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
      onCancel={() => {
        setShowErrorReportModal(false);
      }}
      footer={[
        <Button
          key="cancel"
          type="text"
          onClick={() => {
            setShowErrorReportModal(false);
          }}
          className="gx-mr-1"
        >
          <MyIcon type="icontrash-alt-solid" className="moto-icon-1-3" />
          {/* Болих */}
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={(e) => {
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
          Илгээх
        </Button>,
      ]}
    >
      <div className="gx-mb-4">{item?.mainData?.title?.value || ""}</div>

      <Form
        form={form}
        {...formLayout}
        layout="horizontal"
        name="error_modal"
        initialValues={{
          recordId: props.recordid,
          title: item?.mainData?.title?.value || "",
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
