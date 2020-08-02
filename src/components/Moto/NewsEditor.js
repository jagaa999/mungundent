import React, { useState } from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./ckConfig";
import axios from "axios";

import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const NewsEditor = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = (e) => {
    console.log("fffffff", e.target.files[0]);
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "reyabuvc");
    formData.append("file", files);
    setLoading(true);

    axios
      .post("https://api.cloudinary.com/v1_1/motomn/image/upload", formData)
      .then((res) => setImage(res.data.secure_url))
      .then(setLoading(false))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        autofocus="true"
        placeholder="Let`s write an awesome story!"
        logLevel="VERBOSE"
        data={{}}
      />

      <CloudinaryContext cloudName="motomn">
        <div>
          <Image publicId="sample" width="50" crop="scale" />
        </div>
        <Image publicId="samples/bike" width="0.5" crop="scale" />
      </CloudinaryContext>

      <input type="file" name="file" onChange={uploadImage} />

      {loading ? <h1>Loading</h1> : <img src={image} />}

      {/* <CloudimageProvider config={cloudimageConfig}>
        <h1>Simple demo of react-cloudimage-responsive</h1>
        <Img
          src="https://atyeagrodo.cloudimg.io/v7/i.pinimg.com/originals/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg?func=crop&width=200&grey=1"
          alt="Demo image"
          ratio={1.5}
        />
      </CloudimageProvider> */}
    </>
  );
};

export default NewsEditor;
