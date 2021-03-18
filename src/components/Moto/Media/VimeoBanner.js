import React from "react";
import Vimeo from "@u-wave/react-vimeo";

//  https://www.npmjs.com/package/react-vimeo-embed

const VimeoBanner = (props) => {
  return (
    <>
      <Vimeo
        video={props.videoId}
        autoplay={true}
        muted={true}
        background={true}
        width="100%"
        height="auto"
        loop={true}
        showByline={true}
        controls={false}
        responsive={true}
      />
      <div className="gx-mt-2 gx-w-100 gx-text-center">
        <span className="gx-mr-2">{props.title}</span>
        <a href={props.link} target="_blank" className="gx-fs-sm">
          <i className="icon icon-long-arrow-right gx-fs-xl gx-ml-3 gx-d-inline-flex gx-vertical-align-middle" />{" "}
          Энд дарна уу
        </a>
      </div>
    </>
  );
};

export default VimeoBanner;
