import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import _ from "lodash";
import axios from "axios";
import MotoTinyBarChart from "routes/extensions/charts/recharts/bar/Components/MotoTinyBarChart";
import MotoToolFuelTips from "../dashboard/Listing/MotoToolFuelTips";

import {
  Card,
  Button,
  message,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Row,
  Col,
  Alert,
  Badge,
  Spin,
  notification,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const giveInfo = (type, title, desc) => {
  notification[type]({
    message: title,
    description: desc,
  });
};

const ToolConverter = () => {
  const [mile, setMile] = useState({
    mile: undefined,
    km: undefined,
  });

  const onChangeMileMile = (item) => {
    setMile({
      mile: Number(item.target.value),
      km: (Number(item.target.value) * 1.609344).toFixed(1),
    });
  };

  const onChangeMileKm = (item) => {
    setMile({
      mile: (Number(item.target.value) / 1.609344).toFixed(1),
      km: Number(item.target.value),
    });
  };

  const [mpg, setMpg] = useState({
    mpg: undefined,
    liter: undefined,
  });

  const onChangeMpgMpg = (item) => {
    setMpg({
      mpg: Number(item.target.value),
      liter: (235.214583 / Number(item.target.value)).toFixed(1),
    });
  };

  const onChangeMpgLiter = (item) => {
    setMpg({
      mpg: (235.214583 / Number(item.target.value)).toFixed(1),
      liter: Number(item.target.value),
    });
  };

  const [kmliter, setKmliter] = useState({
    kmliter: undefined,
    liter100km: undefined,
  });

  const onChangesetKmliter1 = (item) => {
    setKmliter({
      kmliter: Number(item.target.value),
      liter100km: (100 / Number(item.target.value)).toFixed(1),
    });
  };

  const onChangesetKmliter2 = (item) => {
    setKmliter({
      kmliter: (100 / Number(item.target.value)).toFixed(1),
      liter100km: Number(item.target.value),
    });
  };

  return (
    <>
      <h2>Хөрвүүлэх багажууд</h2>

      <Divider className="gx-my-4" />

      <Row>
        <Col span={8} className="gx-fs-sm">
          Америк Mi ↔ Км үзүүлэлт
          <Button
            className="gx-m-0"
            size="small"
            type="link"
            icon={<InfoCircleOutlined />}
            onClick={() =>
              giveInfo(
                "info",
                "Mi ↔ Км",
                "Америкт өргөнөөр хэрэглэдэг Mile хэмжигдэхүүнийг Км-т хувиргана. Эсрэгээр Км-ыг бичвэл Mile-д хувиргана."
              )
            }
          />
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Input
                // onChangefromParent={(value) =>
                //   setYourPrice({ ...yourPrice, JPY: Number(value) })
                // }
                value={mile.mile}
                placeholder="бичнэ үү.."
                suffix="mile"
                onChange={onChangeMileMile}
              />
            </Col>
            <Col span={12}>
              <Input
                value={mile.km}
                placeholder="бичнэ үү.."
                suffix="км"
                onChange={onChangeMileKm}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider className="gx-my-4" />

      <Row>
        <Col span={8} className="gx-fs-sm">
          Америк MPG ↔ литр/100 км
          <Button
            className="gx-m-0"
            size="small"
            type="link"
            icon={<InfoCircleOutlined />}
            onClick={() =>
              giveInfo(
                "info",
                "Mi ↔ Км",
                "Америкт өргөнөөр хэрэглэдэг Mile хэмжигдэхүүнийг Км-т хувиргана. Эсрэгээр Км-ыг бичвэл Mile-д хувиргана."
              )
            }
          />
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Input
                // onChangefromParent={(value) =>
                //   setYourPrice({ ...yourPrice, JPY: Number(value) })
                // }
                value={mpg.mpg}
                placeholder="бичнэ үү.."
                suffix="mpg"
                onChange={onChangeMpgMpg}
              />
            </Col>
            <Col span={12}>
              <Input
                value={mpg.liter}
                placeholder="бичнэ үү.."
                suffix="литр/100 км"
                onChange={onChangeMpgLiter}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider className="gx-my-4" />

      <Row>
        <Col span={8} className="gx-fs-sm">
          Япон км/литр ↔ литр/100 км
          <Button
            className="gx-m-0"
            size="small"
            type="link"
            icon={<InfoCircleOutlined />}
            onClick={() =>
              giveInfo(
                "info",
                "Mi ↔ Км",
                "Америкт өргөнөөр хэрэглэдэг Mile хэмжигдэхүүнийг Км-т хувиргана. Эсрэгээр Км-ыг бичвэл Mile-д хувиргана."
              )
            }
          />
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Input
                // onChangefromParent={(value) =>
                //   setYourPrice({ ...yourPrice, JPY: Number(value) })
                // }
                value={kmliter.kmliter}
                placeholder="бичнэ үү.."
                suffix="км/литр"
                onChange={onChangesetKmliter1}
              />
            </Col>
            <Col span={12}>
              <Input
                value={kmliter.liter100km}
                placeholder="бичнэ үү.."
                suffix="литр/100 км"
                onChange={onChangesetKmliter2}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ToolConverter;
