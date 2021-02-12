import React from "react";
import { useParams } from "react-router-dom";

import CarcatalogIndexListType1 from "components/Moto/CarcatalogIndexListType1";

const CarcatalogIndexPage = () => {
  const { markId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  return <CarcatalogIndexListType1 markId={markId} />;
};

export default CarcatalogIndexPage;
