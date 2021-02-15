import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import _ from "lodash";
import axios from "axios";
import MotoTinyBarChart from "routes/extensions/charts/recharts/bar/Components/MotoTinyBarChart";
import MotoToolFuelTips from "../../dashboard/Listing/MotoToolFuelTips";

import {
  Card,
  Button,
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
  Badge,
  Spin,
  notification,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const giveInfo = (type, title, desc) => {
  notification[type]({
    message: title,
    description: desc,
  });
};

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
    // console.log(myState);
  }, [myState.mySpec]);

  const delayedOperation = useRef(
    _.debounce((allValues) => {
      // console.log("ЭНИЙГ ХАРАА ", allValues);
      setMyState({
        ...myState,
        mySpec: allValues,
      });
    }, 700)
  ).current;

  const onValuesChange = (changedValues, allValues) => {
    if (!changedValues.zaalt) {
      //бэлэн товчнууд дарсан үед шууд ажиллана
      // console.log("onValuesChange onValuesChange ", changedValues);
      // console.log("DFDFDFDFDFDFDFDFF", allValues);
      setMyState({
        ...myState,
        mySpec: allValues,
      });
    } else {
      //Зөвхөн input буюу Заалтыг өөрчилсөн үед! 700 миллсекунд хүлээнэ.
      delayedOperation(allValues);
      // console.log("OK OK zaalt өөрчлөгдөж байна ", changedValues);
    }
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

  const myData = [
    {
      label: "Замын нөхцөл",
      name: "road",
      list: [
        { value: "0", label: "Шулуун зам" },
        { value: "4", label: "Хот дотор" },
        { value: "5", label: "Бартаат зам" },
      ],
    },
    {
      label: "Хүн, Ачаа",
      name: "achaa",
      list: [
        { value: "0", label: "Ачаагүй" },
        { value: "1.5", label: "45 кг ачаатай" },
        { value: "3", label: "90 кг ачаатай" },
        { value: "4.5", label: "120 кг ачаатай" },
      ],
    },

    {
      name: "tire",
      label: "Дугуй",
      list: [
        { value: "0", label: "Хэвийн дугуйтай" },
        { value: "4", label: "Хий муу дугуйтай" },
        { value: "5", label: "Тэнхлэг алдагдсан" },
      ],
    },
    {
      name: "window",
      label: "Цонх онгойлгох",
      list: [
        { value: "0", label: "Цонх хаалттай" },
        { value: "5", label: "Цонх онгорхой" },
      ],
    },
    {
      name: "light",
      label: "Их гэрэл",
      list: [
        { value: "0", label: "Их гэрэл унтраастай" },
        { value: "5", label: "Их гэрэл асаасан" },
      ],
    },
    {
      name: "fuellight",
      label: "Банкны шар гэрэл",
      list: [
        { value: "0", label: "Шатахуун хэвийн дүүргэдэг" },
        { value: "5", label: "Банкны шар гэрэл асаадаг" },
      ],
    },
    {
      name: "condition",
      label: "Кондишн?",
      list: [
        { value: "0", label: "Кондишн асаадаггүй" },
        { value: "6", label: "Кондишн сул үлээдэг" },
        { value: "15", label: "Кондишн хүчтэй үлээдэг" },
        { value: "16", label: "Паар тавьдаг" },
      ],
    },
    {
      name: "driving",
      label: "Жолоодох араншин",
      list: [
        { value: "0", label: "Хэвийн зөөлөн жолооддог" },
        { value: "10", label: "Түрэмгий жолооддог" },
        { value: "30", label: "Хэт түрэмгий жолооддог" },
      ],
    },
    {
      name: "engineservice",
      label: "Хөдөлгүүр (шүүгч, свечэ)",
      list: [
        { value: "0", label: "Хөдөлгүүр арчилдаг" },
        { value: "20", label: "Хөдөлгүүр арчилдаггүй" },
      ],
    },
    {
      name: "enginesensor",
      label: "Мэдрэгч (яндан)",
      list: [
        { value: "0", label: "Мэдрэгчүүд хэвийн" },
        { value: "20", label: "Мэдрэгчүүд гэмтэлтэй" },
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
        { value: "0", label: "Өвөл дулаан зогсоолтой" },
        { value: "15", label: "Өглөө оройд халаадаг" },
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

  return (
    <>
      <h2>Бензин идэлт хэмжих</h2>
      <Row>
        <Col span={16}>
          <Card className="gx-card_old " style={{ backgroundColor: "#f0f0f0" }}>
            <Spin spinning={myState.loading} tip="Одоохон..." size="large">
              <Form
                form={form}
                name="toolFuelForm"
                onValuesChange={onValuesChange}
                initialValues={{ ...myState.mySpec }}
                scrollToFirstError={true}
                colon={false}
                size="small"
              >
                <Form.Item
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 12 }}
                  name="zaalt"
                  hasFeedback
                  label={
                    <>
                      Идэх ёстой норм
                      <Button
                        className="gx-m-0"
                        size="small"
                        type="link"
                        icon={<InfoCircleOutlined />}
                        onClick={() =>
                          giveInfo(
                            "info",
                            "Идэх ёстой норм",
                            <>
                              Таны машин идэх ёстой стандарт нормыг бичнэ.
                              Хэрвээ та мэдэхгүй бол{" "}
                              <a href="/carcatalog">Каталог</a> цэснээс машинаа
                              үзэж үйлдвэрийн стандарт нормыг мэдэж болно. Уг
                              норм нь Японы стандарт тул түүнийг 2-оор үржүүлж
                              Монголын стандарт нормыг гаргаж аваарай.
                            </>
                          )
                        }
                      />
                    </>
                  }
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "Стандарт нормыг бөглөнө үү",
                      type: "number",
                      min: 1,
                      max: 100,
                    },
                  ]}
                >
                  <InputNumber
                    disabled={myState.loading}
                    step={1}
                    min={1}
                    max={100}
                    decimalSeparator=","
                    className="gx-w-100"
                  />
                </Form.Item>

                {myData.map((spec, index) => {
                  return (
                    <Form.Item
                      key={index}
                      name={spec.name}
                      label={spec.label}
                      labelCol={{ span: 0 }}
                      wrapperCol={{ span: 24 }}
                    >
                      <Radio.Group
                        buttonStyle="solid"
                        className="toolspec-radio-group"
                      >
                        {spec.list.map((item, index) => {
                          return (
                            <Radio.Button
                              key={index}
                              value={item.value}
                              className={`${
                                item.value == "0"
                                  ? "radio-button-0"
                                  : "radio-button-1"
                              } moto-radio-button`}
                              // style={{ background: "#d1d1d1" }}
                            >
                              <span className="gx-fs-sm toolspec-small-labelspan">
                                {item.label}
                              </span>

                              {myState.mySpec[spec.name] === item.value &&
                                item.value !== "0" && (
                                  <span className="toolspec-fuel-valuebadge">
                                    <Badge
                                      count={item.value + "%"}
                                      className="silver-badge"
                                    />
                                  </span>
                                )}
                            </Radio.Button>
                          );
                        })}
                      </Radio.Group>
                    </Form.Item>
                  );
                })}
              </Form>
            </Spin>
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
