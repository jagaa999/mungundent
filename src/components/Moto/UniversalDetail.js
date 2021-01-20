import React from "react";

import { isEmpty } from "lodash";
import UniversalDetailPageHeader from "./Universal/UniversalDetailPageHeader";
import UniversalDetailPageCard from "./Universal/UniversalDetailPageCard";
import UniversalDetailPageTableColumn from "./Universal/UniversalDetailPageTableColumn";

const UniversalDetail = ({
  myDetailContext,
  myDetailContextDetail,
  myDetailContextDetailDetail,
  myDetailSettings,
}) => {
  if (isEmpty(myDetailContextDetailDetail)) return null;

  return (
    <>
      <UniversalDetailPageHeader
        myItem={myDetailContextDetailDetail}
        myDetailSettings={myDetailSettings}
      />

      <UniversalDetailPageTableColumn
        myItem={myDetailContextDetailDetail}
        myDetailSettings={myDetailSettings}
      />

      <UniversalDetailPageCard
        myItem={myDetailContextDetailDetail}
        myDetailSettings={myDetailSettings}
      />
    </>
  );
};

export default UniversalDetail;
