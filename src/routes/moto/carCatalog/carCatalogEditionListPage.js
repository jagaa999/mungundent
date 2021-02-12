import React from "react";
import { useParams } from "react-router-dom";

// import CarcatalogEditionListType1 from "components/Moto/CarcatalogEditionListType1";
import CarcatalogEditionListType3 from "components/Moto/CarcatalogEditionListType3";

const CarcatalogEditionPage = () => {
  const { indexId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  // return <CarcatalogEditionListType1 indexId={indexId} />;
  return <CarcatalogEditionListType3 indexId={indexId} />;
};

export default CarcatalogEditionPage;
