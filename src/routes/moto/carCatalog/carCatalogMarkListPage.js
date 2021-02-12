import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import CarcatalogMarkListType1 from "components/Moto/CarcatalogMarkListType1";

const CarcatalogMarkPage = () => {
  const { firmId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  return <CarcatalogMarkListType1 firmId={firmId} />;
};

export default CarcatalogMarkPage;
