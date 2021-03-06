import React from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";
import { defaultSrc } from "util/config";
import { Image } from "cloudinary-react";

const NewsItem = ({ newsItem }) => {
  newsItem.imagemain =
    newsItem.imagemain === ""
      ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
      : newsItem.imagemain;

  return (
    <Card
      className="gx-card-full gx-text-center moto-item-card"
      style={{ margin: "0 10px", height: "290px" }}
    >
      <div className="gx-pt-4 gx-px-3 gx-mb-3">
        <div className="gx-separator gx-bg-grey" />
        {/* <h5 className="gx-mb-4 gx-text-grey">{newsItem.newssourcename}</h5> */}
        <Link to={"/news/" + newsItem.newsid}>
          <span>{newsItem.title.substring(0, 50)}</span>
        </Link>
      </div>

      <div className="gx-mt-4 gx-ayurveda-thumb">
        <Image
          cloudName="motomn"
          publicId={newsItem.imagemain
            .slice(
              newsItem.imagemain.indexOf("upload/") + 7,
              newsItem.imagemain.length
            )
            .split(".")
            .shift()}
          crop="fill"
          loading="lazy"
          dpr="auto"
          responsive
          width="300"
          gravity="face"
          quality="auto"
          responsiveUseBreakpoints="true"
          className="gx-img-fluid gx-w-100"
          alt={newsItem.title}
          onError={defaultSrc}
        />
      </div>
    </Card>
  );
};

export default NewsItem;
