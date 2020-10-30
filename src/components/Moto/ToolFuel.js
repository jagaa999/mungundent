import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import MotoTinyBarChart from "routes/extensions/charts/recharts/bar/Components/MotoTinyBarChart";
import MotoToolFuelTips from "../dashboard/Listing/MotoToolFuelTips";

// import toBoolean from "util/booleanFunction";
import {
  Button,
  Card,
  message,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Row,
  Col,
  Alert,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { loadDataview } from "util/axiosFunction";

const { Option, OptGroup } = Select;

const data = [
  { name: "Normal", value: 58 },
  { name: "Height", value: 20 },
];

const COLORS = ["#5797fc", "#FA8C16", "#f5222d", "#d9d9d9"];

const ToolFuel = () => {
  const [myState, setMyState] = useState({
    loading: false,
    mySpec: {
      zaalt: "10",
      road: "0",
      achaa: "0",
      tire: "0",
      window: "0",
      light: "0",
      fuellight: "0",
      condition: "0",
      coldengine: "0",
      driving: "0",
      engineservice: "0",
      enginesensor: "0",
      engineoil: "0",
      winternormal: "0",
      highland: "0",
    },
  });

  const [myResult, setMyResult] = useState({
    description: "",
    message: "",
    more: "",
    rating: "",
    zaalt: "",
  });

  const [form] = Form.useForm();

  useEffect(() => {
    setMyState({
      ...myState,
      loading: true,
    });

    const myParams = {
      params: {
        ...myState.mySpec,
      },
    };
    axios
      .get(
        "https://us-central1-moto-86243.cloudfunctions.net/carFuelMPG",
        myParams
      )
      .then((response) => {
        console.log("carFuelMPG: ", response.data);
        setMyState({
          ...myState,
          loading: false,
        });
        setMyResult({
          ...myResult,
          ...response.data,
        });
      })
      .catch((error) => {
        message.error(error.toString(), 7);
        console.log(error);
      });
    console.log(myState);
  }, [myState.mySpec]);

  // const callOther = (allValues) => {};

  const onValuesChange = (changedValues, allValues) => {
    console.log("onValuesChange onValuesChange ", changedValues);
    console.log("DFDFDFDFDFDFDFDFF", allValues);
    setMyState({
      ...myState,
      mySpec: allValues,
    });
  };

  // const onValuesChange = async (changedValues, allValues) => {
  //   const testArray = [];

  //   testArray.push({
  //     ...myState,
  //     mySpec: allValues,
  //   });

  //   return await setMyState({
  //     testArray,
  //   });
  // };

  // const onFieldsChange = (changedFields, allFields) => {
  //   console.log("onFieldsChange onFieldsChange ", changedFields);
  // };

  // const onFinish = (values) => {
  //   console.log("AFTER SUBMIT --------- ");
  //   console.table(values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  //   // console.log("Failed:", errorInfo.errorFields);
  //   errorInfo.errorFields.map((errorItem) => {
  //     message.error(errorItem.errors[0]);
  //   });
  // };

  // const onFieldsChange = (changedFields, allFields) => {
  //   console.log("onFieldsChange onFieldsChange ", changedFields);
  // };

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

  const myData = [
    {
      label: "Замын нөхцөл",
      name: "road",
      list: [
        { value: "0", label: "Шулуун зам" },
        { value: "4", label: "Хот дотор" },
        { value: "5", label: "Хүнд бартаа" },
      ],
    },
    {
      label: "Хүн, Ачаа",
      name: "achaa",
      list: [
        { value: "0", label: "Ачаагүй" },
        { value: "1.5", label: "45 кг ачаатай" },
        { value: "3", label: "90 кг ачаатай" },
      ],
    },

    {
      name: "tire",
      label: "Дугуй",
      list: [
        { value: "0", label: "Хэвийн" },
        { value: "4", label: "Хий муу" },
        { value: "5", label: "Тэнхлэг алдагдсан" },
      ],
    },
    {
      name: "window",
      label: "Цонх онгойлгох",
      list: [
        { value: "0", label: "Хаалттай" },
        { value: "5", label: "Онгорхой" },
      ],
    },
    {
      name: "light",
      label: "Их гэрэл",
      list: [
        { value: "0", label: "Унтраастай" },
        { value: "5", label: "Их гэрэл асаасан" },
      ],
    },
    {
      name: "fuellight",
      label: "Банкны шар гэрэл",
      list: [
        { value: "0", label: "Хэвийн дүүргэдэг" },
        { value: "5", label: "Байнга асаадаг" },
      ],
    },
    {
      name: "condition",
      label: "Кондишн?",
      list: [
        { value: "0", label: "Асаадаггүй" },
        { value: "6", label: "Сул" },
        { value: "15", label: "Хүчтэй" },
        { value: "16", label: "Паар" },
      ],
    },
    {
      name: "coldengine",
      label: "Хүйтэн хөдөлгүүр",
      list: [
        { value: "0", label: "Хэвийн хөдөлгүүр" },
        { value: "12", label: "Хүйтэн хөдөлгүүр" },
      ],
    },
    {
      name: "driving",
      label: "Жолоодох араншин",
      list: [
        { value: "0", label: "Хэвийн зөөлөн" },
        { value: "10", label: "Түрэмгий" },
        { value: "30", label: "Хэт түрэмгий" },
      ],
    },
    {
      name: "engineservice",
      label: "Хөдөлгүүр (шүүгч, свечэ)",
      list: [
        { value: "0", label: "Арчилгаа хэвийн" },
        { value: "20", label: "Барагтай арчилдаггүй" },
      ],
    },
    {
      name: "enginesensor",
      label: "Мэдрэгч (яндан)",
      list: [
        { value: "0", label: "Хэвийн" },
        { value: "20", label: "Гэмтэлтэй" },
      ],
    },
    {
      name: "engineoil",
      label: "Тос",
      list: [
        { value: "0", label: "Хэвийн тостой" },
        { value: "10", label: "Хямд тостой" },
      ],
    },
    {
      name: "winternormal",
      label: "Өвөл нормальддаг",
      list: [
        { value: "0", label: "Дулаан зогсоолтой" },
        { value: "15", label: "Халаадаг" },
      ],
    },
    {
      name: "highland",
      label: "Өндөрлөг газар",
      list: [
        { value: "0", label: "Хэвийн өндөрт" },
        { value: "5", label: "1500 метр (УБ)" },
        { value: "15", label: "3000 метр" },
      ],
    },
  ];

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

  return (
    <>
      <h2>Шатахууны зарцуулалтыг илрүүлэх багаж</h2>
      <Row>
        <Col span={16}>
          <Card
            className="gx-card_old "
            style={{ backgroundColor: "#f0f0f0" }}
            title="Таны өгөгдлүүд"
          >
            <Form
              {...formItemLayout}
              form={form}
              name="toolFuelForm"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              // onFieldsChange={onFieldsChange}

              onValuesChange={onValuesChange}
              initialValues={{ ...myState.mySpec }}
              scrollToFirstError={true}
              colon={false}
              size="small"
            >
              {/* <Form.Item
                name="zaalt"
                label="Идэх ёстой норм"
                rules={[
                  { required: true, message: "Стандарт нормыг бөглөнө үү" },
                ]}
              >
                <Input />
              </Form.Item> */}

              <Form.Item
                name="zaalt"
                hasFeedback
                label="Идэх ёстой норм"
                rules={[
                  {
                    required: true,
                    message: "Стандарт нормыг бөглөнө үү",
                    type: "number",
                    min: 1,
                    max: 50,
                  },
                ]}
              >
                <InputNumber
                  disabled={myState.loading}
                  step={1}
                  min={1}
                  max={50}
                  // formatter={(value) => `${value} км`}
                  decimalSeparator=","
                  className="gx-w-100"
                  onBlur={onBlur}
                />
              </Form.Item>

              {myData.map((spec, index) => {
                return (
                  <Form.Item key={index} name={spec.name} label={spec.label}>
                    <Radio.Group
                      buttonStyle="solid"
                      className="toolspec-radio-group"
                    >
                      {spec.list.map((item, index) => {
                        return (
                          <Radio.Button
                            key={index}
                            value={item.value}
                            className={
                              item.value == "0"
                                ? "radio-button-0"
                                : "radio-button-1"
                            }
                            // style={{ background: "#d1d1d1" }}
                          >
                            <span className="gx-fs-sm toolspec-small-labelspan">
                              {item.label}
                            </span>
                          </Radio.Button>
                        );
                      })}
                    </Radio.Group>
                  </Form.Item>
                );
              })}
            </Form>
          </Card>
        </Col>
        <Col span={8}>
          Үнэлгээ: {myResult.rating} <br />
          {/* const data = [{ name: "Шатахуун зарцуулалт", Стандарт: 12, Таных: 18 }]; */}
          <MotoTinyBarChart
            data={[
              {
                name: "Шатахуун зарцуулалт",
                Стандарт: myState.mySpec.zaalt,
                Таных: myResult.zaalt,
              },
            ]}
            rating={myResult.rating}
          />
          <Divider className="gx-my-5" />
          <div className="gx-text-center">
            <div className="gx-revenu gx-revenu-total">
              <span className="gx-fs-md gx-mb-3">
                Таны зарцуулж буй шатахуун:
              </span>
              <h1
                className={
                  myResult.rating === "Хэвийн"
                    ? "gx-text-success"
                    : myResult.rating === "Анхаар!"
                    ? "gx-text-warning"
                    : "gx-text-danger"
                }
              >
                {myResult.zaalt}{" "}
                <span className="gx-fs-sm gx-font-weight-medium">км/литр</span>
              </h1>
            </div>
            <div className="gx-revenu gx-revenu-total">
              <span className="gx-fs-md gx-mb-3">Илүү хувь:</span>
              <h1
                className={
                  myResult.rating === "Хэвийн"
                    ? "gx-text-success"
                    : myResult.rating === "Анхаар!"
                    ? "gx-text-warning"
                    : "gx-text-danger"
                }
              >
                {myResult.more}{" "}
                <span className="gx-fs-sm gx-font-weight-medium">%</span>
              </h1>
            </div>
          </div>
          <Alert
            message={myResult.rating}
            description={myResult.description}
            type={
              myResult.rating === "Хэвийн"
                ? "success"
                : myResult.rating === "Анхаар!"
                ? "warning"
                : "error"
            }
            showIcon
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <MotoToolFuelTips />
        </Col>
      </Row>
    </>
  );
};

export default ToolFuel;
