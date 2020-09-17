import React from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";
import { defaultSrc } from "util/config";
import { Image } from "cloudinary-react";

const NewsItem = ({ newsItem }) => {
  return (
    <Card
      className="gx-card-full gx-text-center moto-item-card"
      style={{ margin: "0 10px", height: "290px" }}
    >
      <div className="gx-pt-4 gx-px-3 gx-mb-3">
        <div className="gx-separator gx-bg-grey" />
        <h5 className="gx-mb-4 gx-text-grey">{newsItem.newssourcename}</h5>
        <Link to={"/news/" + newsItem.newsid}>
          <p>{newsItem.title.substring(0, 50)}</p>
        </Link>
      </div>

      <div className="gx-mt-4 gx-ayurveda-thumb">
        {/* <div className="gx-text-primary gx-text-uppercase gx-d-block label-read">
          Унших
        </div> */}
        {/* <img
          className="gx-img-fluid gx-w-100"
          alt={newsItem.title}
          src={newsItem.imagemain}
          onError={defaultSrc}
        /> */}

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
          width="auto"
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
