import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  InputNumber,
  Tooltip,
  message,
  Select,
  DatePicker,
  Switch,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess } from "util/axiosFunction";
import { formCompactLayout } from "util/config";
import moment from "moment";
import "moment/locale/mn";
import { isEmpty } from "lodash";

const { Option } = Select;

const AutozarForm1General = ({ form, mglFuelList }) => {
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
          successMessage: "Олдлоо!",
          errorMessage: "Олдсонгүй!",
        }),
        loading: false,
      });
    }
  };

  const mgllicensenumberfullChange = (value) => {
    const myText = value.target.value;
    // console.log("mgllicensenumberfullChange", myText);

    if (myText.length === 7) {
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
    // if (Object.keys(mglCar.mglCar).length !== 0) {
    if (!isEmpty(mglCar.mglCar)) {
      message.success("Машин олдлоо", 7);
      console.log("mglCar", mglCar);

      form.setFieldsValue({
        body2modelcodefull: mglCar.mglCar.body2vinnumber,
        body2vinnumber: mglCar.mglCar.body2vinnumber,
        mglyearmanufactured: mglCar.mglCar.mglyearmanufactured
          ? moment(mglCar.mglCar.mglyearmanufactured, "YYYY-MM")
          : null,
        mglyearimport: mglCar.mglCar.mglyearimport
          ? moment(mglCar.mglCar.mglyearimport, "YYYY-MM-DD")
          : null,
        mglfirm: mglCar.mglCar.mglfirm,
        mglmark: mglCar.mglCar.mglmark,
        mglbody: mglCar.mglCar.mglbody,
        mglfuel: mglCar.mglCar.mglenginefuel,
        mglengine2disp: mglCar.mglCar.mglenginesize * 1 || undefined,
        mgldoor: mglCar.mglCar.mgldoor * 1 || undefined,
        mglseat: mglCar.mglCar.mglseat * 1 || undefined,
      });
    }
  }, [mglCar.mglCar]);

  // console.log("MGLFITMLIST", mglFirmList);
  // console.log("MGLMARKLIST", mglMarkList);
  // console.log("carbodyList", carBodyList);
  // console.log("CCCCCCC", mglCar);

  // ######  ####### ####### #     # ######  #     #
  // #     # #          #    #     # #     # ##    #
  // #     # #          #    #     # #     # # #   #
  // ######  #####      #    #     # ######  #  #  #
  // #   #   #          #    #     # #   #   #   # #
  // #    #  #          #    #     # #    #  #    ##
  // #     # #######    #     #####  #     # #     #
  return (
    <>
      <Form.Item name="id" label="ID дугаар" hidden={true}>
        <Input disabled />
      </Form.Item>
      {/* <Form.Item name="title" label="Title">
        <Input />
      </Form.Item> */}
      <Form.Item
        name="mgllicensenumberfull"
        label={
          <span>
            Улсын дугаар
            <Tooltip title="Зөв, гүйцэт бичээрэй. 0000ААА">
              <QuestionCircleOutlined className="gx-ml-2" />
            </Tooltip>
          </span>
        }
        hasFeedback
        validateStatus={!isEmpty(mglCar.mglCar) ? "success" : ""}
      >
        <Input
          size="large"
          placeholder="0000ААА"
          onChange={mgllicensenumberfullChange}
          className="gx-border-success"
        />
      </Form.Item>
      <Form.Item
        name="body2vinnumber"
        hasFeedback
        label="Арлын дугаар"
        {...formCompactLayout}
      >
        <Input placeholder="Арлын дугаар" />
      </Form.Item>
      {/*
      #     # ### #          #     #####  ####### 
      ##   ##  #  #         # #   #     # #       
      # # # #  #  #        #   #  #       #       
      #  #  #  #  #       #     # #  #### #####   
      #     #  #  #       ####### #     # #       
      #     #  #  #       #     # #     # #       
      #     # ### ####### #     #  #####  ####### */}
      <Form.Item
        name="autozarmilage"
        hasFeedback
        label="Одоогийн гүйлт (км)"
        {...formCompactLayout}
        rules={[
          {
            type: "number",
            min: 10,
            max: 1500000,
            message: "Багадаа 10, ихдээ 1,500,000",
          },
        ]}
      >
        <InputNumber
          step={1000}
          min={10}
          max={1500000}
          // formatter={(value) => `${value} км`}
          decimalSeparator=","
          className="gx-w-100"
          placeholder="Одоогийн гүйлт (км)"
        />
      </Form.Item>
      {/* 
      #     # #######    #    ######  
       #   #  #         # #   #     # 
        # #   #        #   #  #     # 
         #    #####   #     # ######  
         #    #       ####### #   #   
         #    #       #     # #    #  
         #    ####### #     # #     #  */}
      <Form.Item
        name="mglyearmanufactured"
        hasFeedback
        label="Үйлдвэрлэсэн он"
        {...formCompactLayout}
      >
        <DatePicker
          className="gx-w-100"
          picker="year"
          placeholder="Үйлдвэрлэсэн он"
          format="YYYY"
        />
      </Form.Item>
      <Form.Item
        name="mglyearimport"
        hasFeedback
        label="Орж ирсэн он"
        {...formCompactLayout}
      >
        <DatePicker
          className="gx-w-100"
          picker="year"
          placeholder="Орж ирсэн он"
          format="YYYY"
        />
      </Form.Item>
      {/* 
      ####### #     # ####### #       
      #       #     # #       #       
      #       #     # #       #       
      #####   #     # #####   #       
      #       #     # #       #       
      #       #     # #       #       
      #        #####  ####### ####### */}
      <Form.Item
        name="mglfuel"
        hasFeedback
        label="Шатахуун"
        {...formCompactLayout}
      >
        <Select
          className="moto-select-firm"
          loading={mglFuelList.loading}
          showSearch
          allowClear
          placeholder="Шатахуун"
          optionFilterProp="children"
          onChange={null}
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
          {mglFuelList.mglFuelList.map((item, index) => (
            <Option key={index} value={item.mglenginefuel}>
              {item.mglenginefuel}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/*
      ######  ######  ### ######  #######  #####  
      #     # #     #  #  #     # #     # #     # 
      #     # #     #  #  #     # #     # #       
      #     # ######   #  ######  #     #  #####  
      #     # #   #    #  #       #     #       # 
      #     # #    #   #  #       #     # #     # 
      ######  #     # ### #       #######  #####  */}
      <Form.Item
        name="mgldrivepos"
        label="Жолооны байрлал"
        hasFeedback
        valuePropName="checked"
      >
        <Switch
          checkedChildren="Зөв"
          unCheckedChildren="Буруу"
          defaultChecked={false}
        />
      </Form.Item>
    </>
  );
};

export default AutozarForm1General;
