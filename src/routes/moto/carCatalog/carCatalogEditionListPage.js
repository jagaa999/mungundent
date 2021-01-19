import React from "react";
import { useParams } from "react-router-dom";

// import CarCatalogEditionListType1 from "components/Moto/CarCatalogEditionListType1";
import CarCatalogEditionListType3 from "components/Moto/CarCatalogEditionListType3";

const CarCatalogEditionPage = () => {
  const { indexId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  // return <CarCatalogEditionListType1 indexId={indexId} />;
  return <CarCatalogEditionListType3 indexId={indexId} />;
};

export default CarCatalogEditionPage;
