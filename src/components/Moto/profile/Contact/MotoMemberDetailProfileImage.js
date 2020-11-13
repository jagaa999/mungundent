import React from "react";
import { Card, Image as ImageAnt } from "antd";
import { Image } from "cloudinary-react";
import { defaultSrc } from "util/config";

// title: 'Email',
// icon: 'email',
// desc: [<span className="gx-link" key={1}>kiley.brown@example.com</span>]

const MotoMemberDetailProfileImage = ({ myMemberDetail }) => {
  return (
    <Card
      cover={
        <Image
          cloudName="dzih5nqhg"
          publicId={myMemberDetail.imagemain
            .slice(
              myMemberDetail.imagemain.indexOf("upload/") + 7,
              myMemberDetail.imagemain.length
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
          // placeholder="blur"
          responsiveUseBreakpoints="true"
          className="gx-img-fluid gx-w-100 gx-card-widget gx-mb-4"
          // default_image="jhannw5jgo2mlvvkvke9"
          alt={myMemberDetail.name}
          onError={defaultSrc}
        />
      }
    >
      <div className="gx-pt-1">
        <ul className="gx-gallery-list">
          {myMemberDetail.imageotherFileList.map((item, index) => (
            <li key={index}>
              {/* <img alt="..." src={item.thumbUrl} /> */}
              <ImageAnt src={item.thumbUrl} />
            </li>
          ))}
        </ul>
        <span className="gx-text-primary gx-fs-md gx-pointer gx-d-block">
          Бүгдийг үзэх{" "}
          <i
            className={`icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle`}
          />
        </span>
      </div>
    </Card>
  );
};

export default MotoMemberDetailProfileImage;
