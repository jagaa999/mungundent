import React, { useState, useContext } from "react";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
// https://github.com/nanxiaobei/antd-img-crop хаяг дээр байгаа.

import MemberContext from "context/MemberContext";

const ImageCrop2 = ({ onChange }) => {
  const memberContext = useContext(MemberContext);
  const [ImageMain, setImageMain] = useState([]);

  const onUploadChange = (data) => {
    // console.log("YEAHYEAH YEAH", data);
    setImageMain(data.fileList);

    if (onChange) {
      onChange({
        fileList: data.fileList,
      });
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Илгээх</div>
    </div>
  );

  return (
    <ImgCrop
      rotate
      zoom
      grid
      aspect={800 / 600}
      modalTitle="Зургаа янзална уу"
      modalWidth="60%"
      modalOk="Янзтай!"
      modalCancel="Болих"
      name="imageCrop"
    >
      <Upload
        action={`https://api.cloudinary.com/v1_1/dzih5nqhg/image/upload?upload_preset=motocar&folder=motocar/${memberContext.state.memberUID}`}
        listType="picture-card"
        fileList={ImageMain}
        onChange={onUploadChange}
      >
        {ImageMain.length < 1 && uploadButton}
      </Upload>
    </ImgCrop>
  );
};

export default ImageCrop2;
