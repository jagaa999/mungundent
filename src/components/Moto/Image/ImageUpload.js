import React, { useState, useEffect, useContext } from "react";
import { Card, Modal, Upload } from "antd";
import ImgCrop from "antd-img-crop";
// https://github.com/nanxiaobei/antd-img-crop хаяг дээр байгаа.
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import axios from "axios";

import MemberContext from "context/MemberContext";

import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const UploadPictureMoto = (props) => {
  const memberContext = useContext(MemberContext);

  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: props.newsImageMain
      ? [
          {
            uid: "-1",
            name: "Тодорхойгүй",
            status: "done",
            url: props.newsImageMain,
            thumbUrl: props.newsImageMain,
          },
        ]
      : [],

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
    // {
    //   uid: "-2",
    //   name: "image.png",
    //   status: "done",
    //   url:
    //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    //   thumbUrl:
    //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // ],
  });

  useEffect(() => {
    props.normFile(state.fileList);
  }, [state.fileList]);

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

  const onChange = () => {
    console.log("occur onChange");
  };

  const uploadToCloudinary = (e) => {
    console.log("Орж ирсэн e-----", e);
    // console.log("fffffff", e.target.files[0]);
    // const myFile = e.target.files[0];
    const myFile = e;
    const formData = new FormData();
    formData.append("upload_preset", "moto-member");
    formData.append("file", myFile);
    formData.append("folder", "members/" + memberContext.state.memberUID);
    formData.append("tags", props.imageTags);
    formData.append("context", props.imageTags);

    // setLoading(true);

    axios
      .post("https://api.cloudinary.com/v1_1/motomn/image/upload", formData)
      .then((res) => {
        // console.log("Cloudinary-аас ирсэн хариу res: ", res);
        // console.log("Cloudinary-аас ирсэн хариу res.data: ", res.data);

        // https://res.cloudinary.com/motomn/image/upload/v1596594951/members/fzpqe6st2wnczarqlidf.jpg
        // ↓↓
        // https://res.cloudinary.com/motomn/image/upload/c_thumb,w_200,g_face/v1596594951/members/fzpqe6st2wnczarqlidf.jpg
        const originalFileURL =
          "https://res.cloudinary.com/motomn/image/upload/";
        const thumbnailFileURL =
          "https://res.cloudinary.com/motomn/image/upload/c_thumb,w_200,g_face/";
        const myThumbnailFileURL = res.data.secure_url
          .split(originalFileURL)
          .join(thumbnailFileURL);
        // console.log("myThumbnailFileURL", myThumbnailFileURL);

        const myImage = {
          uid: res.data.public_id,
          name: res.data.secure_url,
          status: "done",
          url: res.data.secure_url,
        };
        setState((prev) => ({
          ...prev,
          fileList: [...prev.fileList, myImage],
        }));
      })
      .catch((err) => console.log("error", err));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Илгээх</div>
    </div>
  );

  return (
    <>
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
          action={uploadToCloudinary}
          listType="picture-card"
          fileList={state.fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {state.fileList.length < 1 && uploadButton}
        </Upload>
      </ImgCrop>
      <Modal
        visible={state.previewVisible}
        footer={null}
        onCancel={onPreviewCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={state.previewImage} />
      </Modal>
    </>
  );
};

export default UploadPictureMoto;
