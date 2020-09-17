import React, { useEffect } from "react";
import { FacebookProvider, Like, Page } from "react-facebook";
// import iPhone5S from "./moto_iphone5s.png";
import nexus5 from "./moto_nexus_5.png";
import facebookBack01 from "./moto_back01_2.jpg";
// import facebookBack02 from "./moto_back02.jpg";
// import facebookBack03 from "./moto_back03.jpg";

// appId=186294318100220

const FacebookGadget = () => {
  return (
    <div
      className="moto-home-facebook-back"
      style={{ backgroundImage: "url(" + facebookBack01 + ")" }}
    >
      <div
        className="moto-home-facebook"
        style={{ backgroundImage: "url(" + nexus5 + ")" }}
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
            width={200}
            height={400}
            adoptContainerWidth={false}
          />
        </FacebookProvider>
      </div>
    </div>
  );
};

export default FacebookGadget;
