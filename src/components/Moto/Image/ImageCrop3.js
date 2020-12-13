import React, { useState, useContext, useEffect } from "react";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
// https://github.com/nanxiaobei/antd-img-crop хаяг дээр байгаа.

import MemberContext from "context/MemberContext";

const ImageCrop3 = ({ onChange, imagemainFileList }) => {
  const memberContext = useContext(MemberContext);
  const [ImageMain, setImageMain] = useState(imagemainFileList);

  useEffect(() => {
    if (onChange) {
      onChange({
        fileList: imagemainFileList,
      });
    }
  }, []);

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
      <PlusOutlined className="gx-text-light-grey" />
      <div className="ant-upload-text gx-text-light-grey">Фото зураг</div>
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
        action={`https://api.cloudinary.com/v1_1/duznp4bqa/image/upload?upload_preset=autozar&folder=autozar/${memberContext.state.memberUID}`}
        listType="picture-card"
        fileList={ImageMain}
        onChange={onUploadChange}
      >
        {ImageMain.length < 1 && uploadButton}
      </Upload>
    </ImgCrop>
  );
};

export default ImageCrop3;
