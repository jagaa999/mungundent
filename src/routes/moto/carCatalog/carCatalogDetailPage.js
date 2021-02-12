import React from "react";
import { useParams } from "react-router-dom";

import CarcatalogDetail from "components/Moto/CarcatalogDetail";

const CarcatalogDetailPage = () => {
  const { carId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  return <CarcatalogDetail carId={carId} />;
};

export default CarcatalogDetailPage;
