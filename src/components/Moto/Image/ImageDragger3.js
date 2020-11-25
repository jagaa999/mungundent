import React, { useState, useContext, useEffect } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import MemberContext from "context/MemberContext";

const ImageDragger3 = ({ onChange, imageotherFileList }) => {
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (onChange) {
      onChange({
        fileList: imageotherFileList,
      });
    }
  }, []);

  const onMultiUploadChange = (data) => {
    const { status } = data.file;
    if (status !== "uploading") {
      // console.log("NOT UPLOADING  ", data.file, data.fileList);

      if (onChange) {
        onChange({
          fileList: data.fileList,
        });
      }
    }
    if (status === "done") {
      message.success(`${data.file.name} - амжилттай илгээлээ.`);
    } else if (status === "error") {
      message.error(`${data.file.name} - илгээж чадсангүй.`);
    }
  };

  return (
    <Upload.Dragger
      name="file"
      multiple={true}
      listType="picture"
      action={`https://api.cloudinary.com/v1_1/duznp4bqa/image/upload?upload_preset=autozar&folder=autozar/${memberContext.state.memberUID}`}
      onChange={onMultiUploadChange}
      defaultFileList={imageotherFileList}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined className="gx-text-light-grey" />
      </p>
      <p className="ant-upload-text gx-text-light-grey">
        Олон зураг оруулж болно.
      </p>
      <p className="ant-upload-hint gx-text-light-grey">
        Хулганаар дарах юмуу шууд чирж оруулаарай.
      </p>
    </Upload.Dragger>
  );
};

export default ImageDragger3;
