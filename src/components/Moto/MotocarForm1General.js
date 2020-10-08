import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  InputNumber,
  Tooltip,
  message,
  Select,
  Badge,
  Divider,
  DatePicker,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import MotoSelect1 from "./Form/MotoSelect1";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MotocarForm1General = ({ form }) => {
  const [mglFirmList, setMglFirmList] = useState({
    loading: false,
    mglFirmList: [],
  });
  const [mglMarkList, setMglMarkList] = useState({
    loading: false,
    mglMarkList: [],
  });
  const [carBodyList, setCarBodyList] = useState({
    loading: false,
    carBodyList: [],
  });
  const [carFuelList, setCarFuelList] = useState({
    loading: false,
    carFuelList: [],
  });

  // * axios-оор ERP-аас дуудна.
  const callFunctionAsync = async () => {
    setMglFirmList({ ...mglFirmList, loading: true });
    setMglFirmList({
      mglFirmList: await loadDataview({
        systemmetagroupid: "1602132741145717",
        paging: {
          sortColumnNames: {
            mglfirm: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });

    setCarBodyList({ ...carBodyList, loading: true });
    setCarBodyList({
      carBodyList: await loadDataview({
        systemmetagroupid: "1599557926832",
      }),
      loading: false,
    });

    setCarFuelList({ ...carFuelList, loading: true });
    setCarFuelList({
      carFuelList: await loadDataview({
        systemmetagroupid: "1599557944149",
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const mglFirmChange = async (value) => {
    console.log(`mglFirm changed selected ${value}`);

    if (value !== "") {
      setMglMarkList({ ...mglMarkList, loading: true });
      setMglMarkList({
        mglMarkList: await loadDataview({
          systemmetagroupid: "1602132873132213",
          criteria: {
            mglfirm: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              mglmark: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const [mglCar, setMglCar] = useState({
    loading: false,
    mglCar: {},
  });

  const getCarWithLicenseNumber = async (myLicenseNumber) => {
    console.log(`Одоо машинаа энэ дугаараар дуудна ${myLicenseNumber}`);

    if (myLicenseNumber !== "") {
      setMglCar({ ...mglCar, loading: true });
      setMglCar({
        mglCar: await LoadProcess({
          command: "motoMotocarMGLDV_004",
          parameters: {
            mgllicensenumberfull: myLicenseNumber,
          },
        }),
        loading: false,
      });
    }
  };

  const mglLicensenumberfullChange = (value) => {
    const myText = value.target.value;
    console.log("mglLicensenumberfullChange", myText);

    if (myText.length == 7) {
      console.log("LENGTH", myText.length);
      console.log("Одоо номероор дуудна");
      getCarWithLicenseNumber(myText);
    } else {
      setMglCar({
        mglCar: {},
        loading: false,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(mglCar.mglCar).length !== 0) {
      message.success("Машин олдлоо", 7);
      console.log("mglCar", mglCar);
    }
    form.setFieldsValue({
      body2ModelCodeFull: mglCar.mglCar.body2vinnumber,
      body2VinNumber: mglCar.mglCar.body2vinnumber,
      caryearmanufactured: mglCar.mglCar.caryearmanufactured,
      caryearimport: mglCar.mglCar.caryearimport,
      mglfirm: mglCar.mglCar.mglfirm,
      mglmark: mglCar.mglCar.mglmark,
      carbody: mglCar.mglCar.carbody,
      mglenginefuel: mglCar.mglCar.mglenginefuel,
      mglenginesize: mglCar.mglCar.mglenginesize,
      // firmid: mglCar.mglCar.firmid,
    });
  }, [mglCar.mglCar]);

  //? ЕРӨНХИЙ
  // MOTOCARID
  // TITLE;
  // MGL_LICENSENUMBER_FULL;
  // MGL_LICENSENUMBER_NUMBER;
  // MGL_LICENSENUMBER_SERIES;
  // BODYID;

  // DESCRIPTION
  // BODY2_MODEL_CODE_FULL
  // MODEL_CODE
  // BODY2_VIN_NUMBER

  // console.log("MGLFITMLIST", mglFirmList);
  // console.log("MGLMARKLIST", mglMarkList);
  // console.log("carbodyList", carBodyList);

  return (
    <>
      <Form.Item
        name="motocarid"
        label="ID дугаар"
        // hidden={true}
      >
        <Input disabled />
      </Form.Item>
      {/* <Form.Item name="title" label="Title">
        <Input />
      </Form.Item> */}

      <Form.Item
        name="mglLicensenumberfull"
        label={
          <span>
            Улсын дугаар
            <Tooltip title="Зөв, гүйцэт бичээрэй. 2527УНГ">
              <QuestionCircleOutlined className="gx-ml-2" />
            </Tooltip>
          </span>
        }
        hasFeedback
        validateStatus={
          Object.keys(mglCar.mglCar).length !== 0 ? "success" : "warning"
        }
      >
        <Input
          placeholder="Улсын дугаараа бичнэ үү"
          onChange={mglLicensenumberfullChange}
        />
      </Form.Item>

      <Divider />

      <Form.Item name="body2VinNumber" label="Арлын дугаар">
        <Input />
      </Form.Item>

      <Form.Item
        name="mglfirm"
        hasFeedback
        label="Фирм"
        rules={[{ required: true, message: "Фирмээ сонгоно уу!" }]}
      >
        <MotoSelect1
          loading={mglFirmList.loading}
          placeholder="Фирм"
          myList={mglFirmList.mglFirmList}
          valueName="mglfirm"
          valueLabel="mglfirm"
          onChange={mglFirmChange}
        />
      </Form.Item>

      <Form.Item
        name="mglmark"
        hasFeedback
        label="Марк"
        rules={[{ required: true, message: "Маркаа сонгоно уу!" }]}
      >
        <MotoSelect1
          loading={mglMarkList.loading}
          placeholder="Марк"
          myList={mglMarkList.mglMarkList}
          valueName="mglmark"
          valueLabel="mglmark"
          onChange={null}
        />
      </Form.Item>

      <Form.Item name="mglbody" hasFeedback label="Хийц">
        <MotoSelect1
          loading={carBodyList.loading}
          placeholder="Хийц"
          myList={carBodyList.carBodyList}
          valueName="carbody"
          valueLabel="carbody"
          onChange={null}
        />
      </Form.Item>
      <Form.Item
        name="caryearmanufactured"
        hasFeedback
        label="Үйлдвэрлэсэн Он-сар"
      >
        <DatePicker className="gx-w-100" picker="month" placeholder="2012-12" />
      </Form.Item>
      <Form.Item name="caryearimport" hasFeedback label="Импортолсон огноо">
        <DatePicker className="gx-w-100" placeholder="2018-12-31" />
      </Form.Item>

      <Form.Item name="mglenginefuel" hasFeedback label="Шатахуун">
        <MotoSelect1
          loading={carFuelList.loading}
          placeholder="Шатахуун"
          myList={carFuelList.carFuelList}
          valueName="mglenginefuel"
          valueLabel="mglenginefuel"
          onChange={null}
        />
      </Form.Item>

      <Form.Item
        name="mglenginesize"
        hasFeedback
        label="Хөдөлгүүрийн cc"
        rules={[
          {
            type: "number",
            min: 100,
            max: 10000,
            message: "Багадаа 100, ихдээ 10,000",
          },
        ]}
      >
        <InputNumber className="gx-w-100" />
      </Form.Item>

      {/* <Form.Item name="body2ModelCodeFull" label="body2ModelCodeFull">
        <Input />
      </Form.Item> */}

      {/* <Form.Item name="modelCode" label="modelCode">
          <Input />
        </Form.Item> */}
    </>
  );
};

export default MotocarForm1General;
