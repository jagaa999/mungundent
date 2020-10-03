import React, { useEffect, useState } from "react";

import { Form, Input, Tooltip, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";

const MotocarForm1General = (props) => {
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
    }
  };

  useEffect(() => {
    if (Object.keys(mglCar.mglCar).length !== 0) {
      message.success("Машин олдлоо", 7);
    }
  }, [mglCar.mglCar]);

  console.log("mglCar", mglCar);

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

  return (
    <>
      <Form.Item
        name="motocarid"
        label="ID дугаар"
        // hidden={true}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item name="title" label="Title">
        <Input />
      </Form.Item>

      <Form.Item
        name="mglLicensenumberfull"
        label={
          <span>
            Улсын дугаар
            <Tooltip title="Зөв, гүйцэт бичээрэй. 2527УНГ">
              <QuestionCircleOutlined className="gx-ml-3" />
            </Tooltip>
          </span>
        }
      >
        <Input
          placeholder="Улсын дугаараа бичнэ үү"
          onChange={mglLicensenumberfullChange}
        />
      </Form.Item>

      <Form.Item name="bodyid" label="Хийц ID Select">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="description">
        <Input />
      </Form.Item>

      <Form.Item name="body2ModelCodeFull" label="body2ModelCodeFull">
        <Input />
      </Form.Item>

      {/* <Form.Item name="modelCode" label="modelCode">
          <Input />
        </Form.Item> */}

      <Form.Item name="body2VinNumber" label="body2VinNumber">
        <Input />
      </Form.Item>
    </>
  );
};

export default MotocarForm1General;
