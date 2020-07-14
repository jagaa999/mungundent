import React, { useState } from "react";
import { Card, Modal, Upload } from "antd";
import ImgCrop from "antd-img-crop";
// yarn add antd-img-crop гэж суулгана.
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
  // state = {
  //   previewVisible: false,
  //   previewImage: "",
  //   fileList: [
  //     {
  //       uid: -1,
  //       name: "xxx.png",
  //       status: "done",
  //       url:
  //         "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  //     },
  //   ],
  // };

  // handleCancel = () => this.setState({ previewVisible: false });

  // handlePreview = (file) => {
  //   this.setState({
  //     previewImage: file.url || file.thumbUrl,
  //     previewVisible: true,
  //   });
  // };

  // handleChange = ({ fileList }) => this.setState({ fileList });

  //   render() {
  //     const { previewVisible, previewImage, fileList } = this.state;
  //     const uploadButton = (
  //       <div>
  //         <PlusOutlined />
  //         <div className="ant-upload-text">Upload</div>
  //       </div>
  //     );
  //     return (
  //       <Card title="Мото Нийтлэлийн зураг илгээх" className="gx-card clearfix">
  //         <Upload
  //           action="//jsonplaceholder.typicode.com/posts/"
  //           listType="picture-card"
  //           fileList={fileList}
  //           onPreview={this.handlePreview}
  //           onChange={this.handleChange}
  //         >
  //           {fileList.length >= 3 ? null : uploadButton}
  //         </Upload>
  //         <Modal
  //           visible={previewVisible}
  //           footer={null}
  //           onCancel={this.handleCancel}
  //         >
  //           <img alt="example" style={{ width: "100%" }} src={previewImage} />
  //         </Modal>
  //       </Card>
  //     );
  //   }
  // }

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
    ],
  });
  const onChange = ({ fileList }) => {
    console.log("onCHANGE", fileList);
    setState({ fileList });
  };

  const onPreview = async (file) => {
    console.log("ЭНД ФАЙЛ ОРЖ ИРЛЭЭ", file);

    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState((prevState) => ({
      ...prevState,
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    }));
  };

  const onPreviewCancel = () => {
    setState((prevState) => ({
      ...prevState,
      previewVisible: false,
    }));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Илгээх</div>
    </div>
  );

  console.log("FILELIST", state);

  return (
    <Card title="Мото Нийтлэлийн зураг илгээх" className="gx-card clearfix">
      ЭНД БАЙГАА{state.fileList} ЭНД БАС БАЙГАА
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
          {state.length < 8 && uploadButton}
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
