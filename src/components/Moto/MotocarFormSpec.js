import React, { useState, useEffect, useContext } from "react";

import { Form, Input, InputNumber, Select, Badge, Upload, message } from "antd";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import ImageUpload2 from "./Image/ImageUpload2";
import MemberContext from "context/MemberContext";

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

const MotocarFormThecar = ({ form, myImages, setMyImages }) => {
  const memberContext = useContext(MemberContext);

  const [mainImage, setMainImage] = useState(
    [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ]
    // mainImage: props.newsImageMain
    //   ? [
    //       {
    //         uid: "-1",
    //         name: "Тодорхойгүй",
    //         status: "done",
    //         url: props.newsImageMain,
    //         thumbUrl: props.newsImageMain,
    //       },
    //     ]
    //   : [],

    // [
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url:
    //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    //   thumbUrl:
    //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  );

  const normFileImages = (e) => {
    console.log("Cloudinary-аас хүлээн авсан images:", e);

    setMyImages({ ...myImages, e });
    return e;
  };

  const onChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log("NOT UPLOADING  ", info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} - амжилттай илгээлээ.`);
    } else if (status === "error") {
      message.error(`${info.file.name} - илгээж чадсангүй.`);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Илгээх</div>
    </div>
  );

  const onUploadChange = ({ mainImage: newMainImage }) => {
    setMainImage(newMainImage);
  };

  return (
    <>
      <Form.Item name="tempimages" label="Үндсэн зураг">
        <ImgCrop
          rotate
          zoom
          grid
          aspect={800 / 600}
          modalTitle="Зургаа янзална уу"
          modalWidth="60%"
          modalOk="Янзтай!"
          modalCancel="Болих"
        >
          <Upload
            action={`https://api.cloudinary.com/v1_1/dzih5nqhg/image/upload?upload_preset=motocar&folder=motocar/${memberContext.state.memberUID}`}
            listType="picture-card"
            fileList={mainImage}
            onChange={onUploadChange}
          >
            {mainImage.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </Form.Item>

      <Form.Item name="multiimages" label="Нэмэлт зургууд">
        <Dragger
          name="file"
          multiple={true}
          action={`https://api.cloudinary.com/v1_1/dzih5nqhg/image/upload?upload_preset=motocar&folder=motocar/${memberContext.state.memberUID}`}
          onChange={onChange}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Олон зураг оруулж болно.</p>
          <p className="ant-upload-hint">
            Хулганаар дарах юмуу шууд чирж оруулаарай.
          </p>
        </Dragger>
      </Form.Item>

      <Form.Item
        name="carmilagenow"
        hasFeedback
        label="Одоогийн гүйлт (км)"
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
          formatter={(value) => `${value} км`}
          decimalSeparator=","
          className="gx-w-100"
        />
      </Form.Item>

      {/* <Form.Item name="imageOther" label="imageOther">
        <Input />
      </Form.Item> */}

      <Form.Item name="description" label="Машины тухай">
        <TextArea
          placeholder="Машиныхаа тухай бичнэ үү"
          autoSize
          // onChange={titleOnChange}
        />
      </Form.Item>
    </>
  );
};

export default MotocarFormThecar;

{
  /* <Form.Item name="engine2PowerHp" label="Морины хүч">
          <Input />
        </Form.Item> */
}
{
  /* <Form.Item name="engineTurboid" label="Турбо">
          <Input />
        </Form.Item> */
}
{
  /* <Form.Item name="engine2Type" label="engine2Type">
          <Input />
        </Form.Item> */
}
{
  /* <Form.Item name="vehicletype" label="vehicletype">
          <Input />
        </Form.Item> */
}
