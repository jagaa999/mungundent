import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import VimeoBanner from "../Moto/Media/VimeoBanner";

//  https://www.npmjs.com/package/react-vimeo-embed

const bannerList = [
  {
    videoId: "374644920",
    title: "Kia K5",
    link: "https://www.facebook.com/kiamotorsmongolia/",
  },
  {
    videoId: "489787055",
    title: "Jeep Wrangler Rubicon",
    link: "https://www.facebook.com/JeepOllllllOMongolia",
  },
  {
    videoId: "400887647",
    title: "Jeep Wrangler",
    link: "https://www.facebook.com/JeepOllllllOMongolia",
  },
];

const HomeBanner = () => {
  const myItem = bannerList[Math.floor(Math.random() * bannerList.length)];
  return (
    <>
      <div className="gx-fs-xs gx-text-grey gx-w-100 gx-text-right">Баннер</div>

      <VimeoBanner {...myItem} />
    </>
  );
};

export default HomeBanner;
