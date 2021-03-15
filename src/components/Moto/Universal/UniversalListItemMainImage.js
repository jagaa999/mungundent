import React from "react";

import { Image as ImageCloudinary } from "cloudinary-react";
import "moment/locale/mn";
import { defaultSrc } from "util/config";
import { isEmpty } from "lodash";
// import { Image as ImageAnt } from "antd";

const UniversalListItemMainImage = ({
  width = "auto",
  height = "auto",
  imageMain = "",
  style,
  cloudName = "duznp4bqa",
  myClass = "",
}) => {
  let myImageMain = imageMain;
  let myCloudName = cloudName;
  if (isEmpty(myImageMain)) {
    myImageMain =
      "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg";
    myCloudName = "motomn";
  }

  // moto-img-pngshadow
  // const ddd = opacityRatio(imageMain);
  // console.log("DDDDDDDDDD", ddd);

  const imgExt = imageMain
    .substring(imageMain.lastIndexOf(".") + 1)
    .toLowerCase();
  const myAdditionClass = `moto-img-${imgExt}`;

  return (
    <>
      {myImageMain.indexOf("cloudinary") !== -1 ? (
        <ImageCloudinary
          className={`${myClass} ${myAdditionClass}`}
          cloudName={myCloudName}
          publicId={myImageMain
            .slice(myImageMain.indexOf("upload/") + 7, myImageMain.length)
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
          alt={myImageMain}
          onError={defaultSrc}
          style={style}
          onLoad={function noRefCheck() {}}
        />
      ) : (
        <img
          src={myImageMain}
          width={`${width}px`}
          height={height}
          className={`${myClass} ${myAdditionClass}`}
          alt={myImageMain}
          style={style}
        />
        // <ImageAnt
        //   src={myImageMain}
        //   width={width}
        //   className={myClass}
        //   alt={myImageMain}
        //   style={style}
        //   fallback="https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
        // />
      )}
    </>
  );
};

export default UniversalListItemMainImage;
