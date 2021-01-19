import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import CarCatalogMarkListType1 from "components/Moto/CarCatalogMarkListType1";

const CarCatalogMarkPage = () => {
  const { firmId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  return <CarCatalogMarkListType1 firmId={firmId} />;
};

export default CarCatalogMarkPage;
