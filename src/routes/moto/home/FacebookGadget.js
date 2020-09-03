import React, { useEffect } from "react";
import { FacebookProvider, Like, Page } from "react-facebook";

// appId=186294318100220

const FacebookGadget = () => {
  return (
    <>
      <FacebookProvider appId="186294318100220">
        <Page
          href="https://www.facebook.com/moto.mn"
          tabs="timeline"
          smallHeader={true}
          hideCover={false}
          showFacepile={true}
          width={500}
          height={700}
          adoptContainerWidth={false}
        />
      </FacebookProvider>
    </>
  );
};

export default FacebookGadget;
