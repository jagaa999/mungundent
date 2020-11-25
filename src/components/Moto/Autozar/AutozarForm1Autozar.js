import React, { useState, useEffect } from "react";

import {
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Badge,
  Switch,
  Divider,
} from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";

const { Option, OptGroup } = Select;

const AutozarFormAutozar = ({ form }) => {
  // console.log("countryList", countryList);

  return (
    <>
      Нөхцөл Монголд бага явсан <br />
      Зарын дугаар 1587535609962815 <br />
      Зарах нөхцөл Бэлнээр ярина <br />
      Лизингтэй? 1 <br />
      Зарах үнэ ₮39'000'000 <br />
      <Divider className="gx-my-3" />
      Оношилгоо? 1 <br />
      Торгуульгүй? 1 <br />
      Татвар төлсөн? 1 <br />
      Идэвхтэй? <br />
      Коммент? 1 <br />
      Спонсор? 0
    </>
  );
};

export default AutozarFormAutozar;
