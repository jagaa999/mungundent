import React, { useState, useEffect } from "react";

import { Form, Input, Select, Badge } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import ImageUpload from "./Image/ImageUpload";

const { Option, OptGroup } = Select;

//? ҮЗҮҮЛЭЛТ
// ENGINE2_CODE
// ENGINE2_DISP;
// ENGINE2_CYLINDER;
// FUELTYPEID;
// ENGINE2_POWER_HP;
// ENGINE_TURBOID
// ENGINE2_TYPE

// TRANSTYPEID;
// DRIVE2_TRANSMISSION_STEP;
// DRIVEID;

const MotocarFormThecar = (props) => {
  return (
    <>
      <Form.Item name="engine2Code" label="engine2Code">
        <Input />
      </Form.Item>
      <Form.Item name="engine2Disp" label="Хөдөлгүүрийн CC">
        <Input />
      </Form.Item>
      <Form.Item name="engine2Cylinder" label="Хөдөлгүүрийн цилиндр">
        <Input />
      </Form.Item>
      <Form.Item name="fueltypeid" label="Шатахуун">
        <Input />
      </Form.Item>
      {/* <Form.Item name="engine2PowerHp" label="Морины хүч">
          <Input />
        </Form.Item> */}
      {/* <Form.Item name="engineTurboid" label="Турбо">
          <Input />
        </Form.Item> */}
      {/* <Form.Item name="engine2Type" label="engine2Type">
          <Input />
        </Form.Item> */}
      <Form.Item name="transtypeid" label="Хроп ID">
        <Input />
      </Form.Item>
      {/* <Form.Item name="drive2TransmissionStep" label="Хропны шатлал">
          <Input />
        </Form.Item> */}
      <Form.Item name="driveId" label="Хөтлөгч">
        <Input />
      </Form.Item>

      {/* <Form.Item name="vehicletype" label="vehicletype">
          <Input />
        </Form.Item> */}
    </>
  );
};

export default MotocarFormThecar;
