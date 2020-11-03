import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  InputNumber,
  Tooltip,
  message,
  Select,
  Divider,
  DatePicker,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import moment from "moment";
import "moment/locale/mn";

const { Option } = Select;

const MotocarForm1General = ({
  form,
  mglFirmList,
  // setMglFirmList,
  mglMarkList,
  setMglMarkList,
  mglBodyList,
  mglFuelList,
}) => {
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

  const mgllicensenumberfullChange = (value) => {
    const myText = value.target.value;
    // console.log("mgllicensenumberfullChange", myText);

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

      form.setFieldsValue({
        body2modelcodefull: mglCar.mglCar.body2vinnumber,
        body2vinnumber: mglCar.mglCar.body2vinnumber,
        caryearmanufactured: mglCar.mglCar.caryearmanufactured
          ? moment(mglCar.mglCar.caryearmanufactured, "YYYY-MM")
          : null,
        caryearimport: mglCar.mglCar.caryearimport
          ? moment(mglCar.mglCar.caryearimport, "YYYY-MM-DD")
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
            <Tooltip title="Зөв, гүйцэт бичээрэй. 2527УНГ">
              <QuestionCircleOutlined className="gx-ml-2" />
            </Tooltip>
          </span>
        }
        hasFeedback
        validateStatus={
          Object.keys(mglCar.mglCar).length !== 0 ? "success" : ""
        }
      >
        <Input
          size="large"
          placeholder="1234УНГ"
          onChange={mgllicensenumberfullChange}
          className="gx-border-success"
        />
      </Form.Item>

      <Divider className="gx-my-4" />

      <Form.Item
        name="mglfirm"
        hasFeedback
        label="Фирм"
        rules={[{ required: true, message: "Фирмээ сонгоно уу!" }]}
      >
        {/* <MotoSelect1
          loading={mglFirmList.loading}
          key="mglfirm"
          placeholder="Фирм"
          myList={mglFirmList.mglFirmList}
          valueName="mglfirm"
          valueLabel="mglfirm"
          onChange={mglFirmChange}
        /> */}
        <Select
          className="moto-select-firm"
          loading={mglFirmList.loading}
          showSearch
          allowClear
          placeholder="Фирм"
          optionFilterProp="children"
          onChange={mglFirmChange}
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
          {mglFirmList.mglFirmList.map((item, index) => (
            <Option key={index} value={item.mglfirm}>
              {item.mglfirm}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="mglmark"
        hasFeedback
        label="Марк"
        rules={[{ required: true, message: "Маркаа сонгоно уу!" }]}
      >
        <Select
          className="moto-select-firm"
          loading={mglMarkList.loading}
          showSearch
          allowClear
          placeholder="Марк"
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
          {mglMarkList.mglMarkList.map((item, index) => (
            <Option key={index} value={item.mglmark}>
              {item.mglmark}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="body2vinnumber" hasFeedback label="Арлын дугаар">
        <Input />
      </Form.Item>

      <Form.Item name="mglbody" hasFeedback label="Хийц">
        {/* <MotoSelect1
          loading={carBodyList.loading}
          placeholder="Хийц"
          myList={carBodyList.carBodyList}
          valueName="mglbody"
          valueLabel="mglbody"
          onChange={null}
        /> */}
        <Select
          className="moto-select-firm"
          loading={mglBodyList.loading}
          showSearch
          allowClear
          placeholder="Хийц"
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
          {mglBodyList.mglBodyList.map((item, index) => (
            <Option key={index} value={item.mglbody}>
              {item.mglbody}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="caryearmanufactured"
        hasFeedback
        label="Үйлдвэрлэсэн Он-Сар"
      >
        <DatePicker
          className="gx-w-100"
          picker="month"
          placeholder="2012-12"
          format="YYYY-MM"
        />
      </Form.Item>

      <Form.Item name="caryearimport" hasFeedback label="Импортолсон огноо">
        <DatePicker
          className="gx-w-100"
          placeholder="2018-12-31"
          format="YYYY-MM-DD"
        />
      </Form.Item>

      <Form.Item name="mglfuel" hasFeedback label="Шатахуун">
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

      <Form.Item
        name="mglengine2disp"
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
