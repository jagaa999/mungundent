import React, { useEffect } from "react";
import { FacebookProvider, Like, Page } from "react-facebook";
import iPhone5S from "./moto_iphone5s.png";
import facebookBack01 from "./moto_back01.jpg";
import facebookBack02 from "./moto_back02.jpg";

// appId=186294318100220

const FacebookGadget = () => {
  return (
    <div
      className="moto-home-facebook-back"
      style={{ backgroundImage: "url(" + facebookBack01 + ")" }}
    >
      <div
        className="moto-home-facebook"
        style={{ backgroundImage: "url(" + iPhone5S + ")" }}
      >
        <FacebookProvider
          appId="186294318100220"
          className="moto-home-facebook-box"
        >
          <Page
            href="https://www.facebook.com/moto.mn"
            tabs="timeline"
            smallHeader={true}
            hideCover={false}
            showFacepile={true}
            width={290}
            height={470}
            adoptContainerWidth={false}
          />
        </FacebookProvider>
      </div>
    </div>
  );
};

export default FacebookGadget;
