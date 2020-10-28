import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
// import toBoolean from "util/booleanFunction";

import { Button, Card, message, Divider, Form, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { loadDataview } from "util/axiosFunction";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 17,
      offset: 7,
    },
  },
};

const callOther = () => {
  const myParams = {
    params: {
      zaalt: "12",
      road: "4",
      achaa: "3",
      tire: "4",
      light: "5",
      fuellight: "5",
      condition: "6",
    },
  };
  axios
    .get(
      "https://us-central1-moto-86243.cloudfunctions.net/carFuelMPG",
      myParams
    )
    .then((response) => {
      console.log("carFuelMPG: ", response.data);
    })
    .catch((error) => {
      message.error(error.toString(), 7);
      console.log(error);
    });
};

const ToolFuel = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("AFTER SUBMIT --------- ");
    console.table(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // console.log("Failed:", errorInfo.errorFields);
    errorInfo.errorFields.map((errorItem) => {
      message.error(errorItem.errors[0]);
    });
  };

  // const onFieldsChange = (changedFields, allFields) => {
  //   console.log("onFieldsChange onFieldsChange ", changedFields);
  // };
  const onValuesChange = (changedValues, allValues) => {
    // console.log("onValuesChange onValuesChange ", changedValues);
    console.log("DFDFDFDFDFDFDFDFF", allValues);
  };

  // #####  ###### ##### #    # #####  #    #
  // #    # #        #   #    # #    # ##   #
  // #    # #####    #   #    # #    # # #  #
  // #####  #        #   #    # #####  #  # #
  // #   #  #        #   #    # #   #  #   ##
  // #    # ######   #    ####  #    # #    #

  //   zaalt
  //   road
  //   achaa
  //   tire
  //   window
  //   light
  //   fuellight
  //   condition
  //   coldengine
  //   driving
  //   engineservice
  //   enginesensor
  //   engineoil
  //   winternormal
  //   highland

  return (
    <Card
      className="gx-card_old "
      style={{ backgroundColor: "#f0f0f0" }}
      title="Шатахууны тооцоолол"
    >
      <Form
        {...formItemLayout}
        form={form}
        name="motocarDetailForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // onFieldsChange={onFieldsChange}
        onValuesChange={onValuesChange}
        // initialValues={}
        scrollToFirstError={true}
        colon={false}
      >
        <Form.Item name="zaalt" label="Идэх ёстой норм">
          <Input />
        </Form.Item>

        <Form.Item name="road" label="Замын нөхцөл">
          <Input />
        </Form.Item>
        <Form.Item name="achaa" label="Ачаа нэмэгдэх тутамд">
          <Input />
        </Form.Item>
        <Form.Item name="tire" label="Дугуйн хий">
          <Input />
        </Form.Item>
        <Form.Item name="window" label="Хурдтай явахад цонх онгойлгох">
          <Input />
        </Form.Item>
        <Form.Item name="light" label="Их гэрэл асаах">
          <Input />
        </Form.Item>
        <Form.Item name="fuellight" label="Бензиний шар гэрэл асаадаг">
          <Input />
        </Form.Item>
        <Form.Item name="condition" label="Агааржуулагч хэрэглэдэг">
          <Input />
        </Form.Item>
        <Form.Item name="coldengine" label="Хүйтэн хөдөлгүүр">
          <Input />
        </Form.Item>
        <Form.Item name="driving" label="Жолоодох араншин">
          <Input />
        </Form.Item>
        <Form.Item name="engineservice" label="Моторын арчилгаа (шүүгч, свечэ)">
          <Input />
        </Form.Item>
        <Form.Item name="enginesensor" label="Гэмтэлтэй мэдрэгч (яндан)">
          <Input />
        </Form.Item>
        <Form.Item name="engineoil" label="Моторын тос">
          <Input />
        </Form.Item>
        <Form.Item name="winternormal" label="Өвөл нормальддаг">
          <Input />
        </Form.Item>
        <Form.Item name="highland" label="Өндөрлөг газар">
          <Input />
        </Form.Item>

        <Divider className="gx-my-5" />

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            icon={<PlusOutlined />}
          >
            Илгээх
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ToolFuel;
