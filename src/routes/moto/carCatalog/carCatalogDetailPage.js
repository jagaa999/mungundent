import React from "react";
import { useParams } from "react-router-dom";

import CarCatalogDetail from "components/Moto/CarCatalogDetail";

const CarCatalogDetailPage = () => {
  const { carId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  return <CarCatalogDetail carId={carId} />;
};

export default CarCatalogDetailPage;
