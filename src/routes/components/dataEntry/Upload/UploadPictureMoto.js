import React, { useState } from "react";
import { Card, Modal, Upload } from "antd";
import ImgCrop from "antd-img-crop";
// https://github.com/nanxiaobei/antd-img-crop хаяг дээр байгаа.
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const UploadPictureMoto = () => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-2",
        name: "image.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ],
  });

  const onChange = ({ fileList }) => {
    setState({ fileList });
  };

  const onPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState(() => ({
      ...state,
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    }));
  };

  const onPreviewCancel = () => {
    setState(() => ({
      ...state,
      previewVisible: false,
    }));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Илгээх</div>
    </div>
  );

  return (
    <Card
      title="Нийтлэлийн зураг илгээх (8 зураг)"
      className="gx-card clearfix"
    >
      <ImgCrop
        rotate
        zoom
        grid
        aspect="1.3333"
        modalTitle="Зургаа янзална уу"
        modalWidth="60%"
        modalOk="Янзтай!"
        modalCancel="Болих"
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={state.fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {state.fileList.length < 8 && uploadButton}
        </Upload>
      </ImgCrop>
      <Modal
        visible={state.previewVisible}
        footer={null}
        onCancel={onPreviewCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={state.previewImage} />
      </Modal>
    </Card>
  );
};

export default UploadPictureMoto;
