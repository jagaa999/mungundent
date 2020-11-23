import React, { useState, useContext } from "react";

import { Image } from "cloudinary-react";
import "moment/locale/mn";
import { defaultSrc } from "util/config";
import { Image as ImageAnt } from "antd";

const NewsItemMainImage = ({ width, imageMain }) => {
  // console.log("imageMain", imageMain);

  return (
    <>
      {imageMain.indexOf("cloudapi") === -1 ? (
        <Image
          cloudName="motomn"
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
          className="gx-mr-3"
          default_image="jhannw5jgo2mlvvkvke9"
          alt={imageMain}
          onError={defaultSrc}
        />
      ) : (
        <ImageAnt
          src={imageMain}
          width={Number(width)}
          className="gx-mr-3"
          alt={imageMain}
          fallback="https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
        />
      )}
    </>
  );
};

export default NewsItemMainImage;
