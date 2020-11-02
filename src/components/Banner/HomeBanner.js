import React from "react";
import Vimeo from "@u-wave/react-vimeo";

//  https://www.npmjs.com/package/react-vimeo-embed

const HomeBanner = () => {
  return (
    <>
      <div className="gx-fs-xs gx-text-grey gx-w-100 gx-text-right">Баннер</div>

      <Vimeo
        video="374644920"
        // video="461834246"
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
        <span className="gx-mr-2">Kia K5</span>
        <a
          href="https://www.facebook.com/kiamotorsmongolia/"
          target="_blank"
          className="gx-fs-sm"
        >
          <i className="icon icon-long-arrow-right gx-fs-xl gx-ml-3 gx-d-inline-flex gx-vertical-align-middle" />{" "}
          Энд дарна уу
        </a>
      </div>
    </>
  );
};

export default HomeBanner;
