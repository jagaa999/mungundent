import React from "react";
import { useParams } from "react-router-dom";

import CarCatalogIndexListType1 from "components/Moto/CarCatalogIndexListType1";

const CarCatalogIndexPage = () => {
  const { markId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  return <CarCatalogIndexListType1 markId={markId} />;
};

export default CarCatalogIndexPage;
