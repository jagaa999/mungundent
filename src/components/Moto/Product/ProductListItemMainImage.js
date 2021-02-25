import React, { useState, useContext } from "react";

import { Image as ImageCloudinary } from "cloudinary-react";
import "moment/locale/mn";
import { defaultSrc } from "util/config";
import { Image as ImageAnt } from "antd";

const NewsItemMainImage = ({
  width,
  imageMain,
  cloudName = "duznp4bqa",
  myClass = "",
}) => {
  // console.log("imageMain", imageMain);

  // action={`https://api.cloudinary.com/v1_1/duznp4bqa/image/upload?upload_preset=autozar&folder=autozar/${memberContext.state.memberUID}`}

  return (
    <>
      {imageMain.indexOf("cloudapi") === -1 ? (
        <ImageCloudinary
          className={myClass}
          cloudName={cloudName}
          publicId={imageMain
            .slice(imageMain.indexOf("upload/") + 7, imageMain.length)
            .split(".")
            .shift()}
          crop="fill"
          loading="lazy"
          dpr="auto"
          responsive
          width={width}
          gravity="face"
          quality="auto"
          // placeholder="blur"
          responsiveUseBreakpoints="true"
          defaultImage="jhannw5jgo2mlvvkvke9"
          alt={imageMain}
          onError={defaultSrc}
        />
      ) : (
        <ImageAnt
          src={imageMain}
          // width={Number(width || "")}
          className="gx-mr-3"
          alt={imageMain}
          fallback="https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
        />
      )}
    </>
  );
};

export default NewsItemMainImage;
