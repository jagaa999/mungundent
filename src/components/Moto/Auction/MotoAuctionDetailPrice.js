import React, { useState, useEffect } from "react";
import {
  Card,
  Image,
  Input,
  InputNumber,
  notification,
  Row,
  Col,
  Divider,
  Switch,
  Button,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import { calculateSpecialTax } from "util/auctionFunction";
import MotoAuctionDetailPriceInput from "./MotoAuctionDetailPriceInput";

const giveInfo = (type, title, desc) => {
  notification[type]({
    message: title,
    description: desc,
  });
};

const MotoAuctionDetailPrice = ({ auctionItem }) => {
  // console.table(auctionItem);
  const [yenRate, setYenRate] = useState(27.7);
  const [usdRate, setUsdRate] = useState(2850);

  const [isHybrid, setIsHybrid] = useState(false);

  // const [startPrice, setStartPrice] = useState({
  //   JPY: auctionItem.START,
  //   MNT: auctionItem.START * yenRate,
  // });
  const [yourPrice, setYourPrice] = useState({
    JPY: auctionItem.AVG_PRICE,
    MNT: auctionItem.AVG_PRICE * yenRate,
  });
  // const [avgPrice, setAvgPrice] = useState({
  //   JPY: auctionItem.AVG_PRICE,
  //   MNT: auctionItem.AVG_PRICE * yenRate,
  // });

  const [specJapanTatvar, setSpecJapanTatvar] = useState({
    JPY: auctionItem.AVG_PRICE * 0.05,
    MNT: auctionItem.AVG_PRICE * 0.05 * yenRate,
  });
  const [specFOB, setSpecFOB] = useState({ JPY: 80000, MNT: 80000 * yenRate });

  const [specJapanLast, setSpecJapanLast] = useState({ JPY: 0, MNT: 0 });

  const [specCargo, setSpecCargo] = useState({ USD: 850, MNT: 850 * usdRate });

  const [specMongoliaLast, setSpecMongoliaLast] = useState(0);

  const [specCustomTax, setSpecCustomTax] = useState(0);
  const [specSpecialTax, setSpecSpecialTax] = useState(
    calculateSpecialTax(auctionItem, isHybrid)
  );
  const [specVATTax, setSpecVATTax] = useState(0);

  const [specLastPrice, setSpecLastPrice] = useState(0);

  const onChange = (value) => {
    console.log("changed", value);
  };

  useEffect(() => {
    setYourPrice({
      ...yourPrice,
      MNT: Number(yourPrice.JPY) * Number(yenRate),
    });

    setSpecJapanTatvar({
      JPY: Number(yourPrice.JPY) * 0.05,
      MNT: Number(yourPrice.JPY) * 0.05 * Number(yenRate),
    });

    setSpecFOB({
      ...specFOB,
      MNT: Number(specFOB.JPY) * Number(yenRate),
    });

    setSpecJapanLast({
      JPY:
        Number(yourPrice.JPY) +
        Number(specJapanTatvar.JPY) +
        Number(specFOB.JPY),
      MNT:
        (Number(yourPrice.JPY) +
          Number(specJapanTatvar.JPY) +
          Number(specFOB.JPY)) *
        Number(yenRate),
    });
  }, [yenRate, yourPrice.JPY]);

  useEffect(() => {
    setSpecCargo({
      ...specCargo,
      MNT: Number(specCargo.USD) * Number(usdRate),
    });
  }, [usdRate, specCargo.USD]);

  useEffect(() => {
    setSpecMongoliaLast(Number(specJapanLast.MNT) + Number(specCargo.MNT));
  }, [specJapanLast.MNT, specCargo.MNT]);

  useEffect(() => {
    setSpecCustomTax(Number(specMongoliaLast) * 0.05);
  }, [specMongoliaLast]);

  useEffect(() => {
    setSpecSpecialTax(calculateSpecialTax(auctionItem, isHybrid));
  }, [isHybrid]);

  useEffect(() => {
    setSpecVATTax(
      (Number(specMongoliaLast) +
        Number(specCustomTax) +
        Number(specSpecialTax)) *
        0.1
    );
  }, [specCustomTax, specSpecialTax]);

  useEffect(() => {
    setSpecLastPrice(
      Number(specMongoliaLast) +
        Number(specCustomTax) +
        Number(specSpecialTax) +
        Number(specVATTax)
    );
  }, [specVATTax]);

  return (
    <Card
      title="Үнэ тооцоолох"
      extra={
        <>
          <small className="gx-mr-1">Хайбрид</small>
          <Switch
            size="small"
            // unCheckedChildren="Энгийн"
            // checkedChildren="Хайбрид"
            defaultChecked={isHybrid}
            onChange={(value) => setIsHybrid(value)}
          />
        </>
      }
    >
      <Row className="gx-mt-0" justify="end">
        <Col>
          <span className="gx-fs-sm gx-mr-2">Ханш</span>
          <MotoAuctionDetailPriceInput
            defaultValue={yenRate}
            onChangefromParent={(value) => setYenRate(Number(value))}
            placeholder="Тоо!"
            prefix="¥"
            suffix="₮"
            size="small"
            style={{ width: "110px" }}
            className="gx-mr-2"
          />
          <MotoAuctionDetailPriceInput
            defaultValue={usdRate}
            onChangefromParent={(value) => setUsdRate(Number(value))}
            placeholder="Тоо!"
            prefix="$"
            suffix="₮"
            size="small"
            style={{ width: "100px" }}
            className="gx-mr-4"
          />
        </Col>
      </Row>
      <Row className="gx-mt-4">
        <Col span={8} className="gx-fs-sm">
          Аукшинаас авах үнэ{" "}
          <Button
            className="gx-m-0"
            size="small"
            // shape="circle"
            type="link"
            icon={<InfoCircleOutlined />}
            onClick={() =>
              giveInfo(
                "info",
                "Аукшинаас авах үнэ",
                "Японы аукшинд тавих таны үнэ бөгөөд энэ үнээр та дэлхийн бусад улсын хүмүүстэй аукшинд өрсөлдөх болно. Энэ үнээр японд энэ машиныг авна гэж тооцоолно гэсэн үг. Эхний нүдэнд үнийг иенээр оруулах ёстой. Хажуугийн нүдэнд ханшийн дагуу төгрөгөөр шилжүүлнэ."
              )
            }
          />
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <MotoAuctionDetailPriceInput
                defaultValue={yourPrice.JPY}
                onChangefromParent={(value) =>
                  setYourPrice({ ...yourPrice, JPY: Number(value) })
                }
                placeholder="Иен оруулна уу"
                prefix="¥"
              />
            </Col>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100"
                precision={0}
                value={yourPrice.MNT}
                formatter={(value) =>
                  `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="gx-mt-3">
        <Col span={8} className="gx-fs-sm">
          Худалдааны татвар
          <Button
            className="gx-m-0"
            size="small"
            // shape="circle"
            type="link"
            icon={<InfoCircleOutlined />}
            onClick={() =>
              giveInfo(
                "info",
                "Худалдааны татвар",
                "Аукшинаас авсан таны төлсөн үнэнд Япон улсаас тавих худалдааны татвар юм."
              )
            }
          />
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100"
                precision={0}
                value={specJapanTatvar.JPY}
                formatter={(value) =>
                  `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\¥\s?|(,*)/g, "")}
              />
            </Col>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100"
                precision={0}
                value={specJapanTatvar.MNT}
                formatter={(value) =>
                  `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="gx-mt-3">
        <Col span={8} className="gx-fs-sm">
          Япон дах зардал (FOB)
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100"
                precision={0}
                value={specFOB.JPY}
                formatter={(value) =>
                  `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\¥\s?|(,*)/g, "")}
              />
            </Col>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100"
                precision={0}
                value={specFOB.MNT}
                formatter={(value) =>
                  `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />

      <Row className="gx-mt-3">
        <Col span={8} className="gx-fs-sm">
          Япон дах эцсийн зардал
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100"
                precision={0}
                value={specJapanLast.JPY}
                formatter={(value) =>
                  `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\¥\s?|(,*)/g, "")}
              />
            </Col>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100 gx-text-warning"
                precision={0}
                value={specJapanLast.MNT}
                formatter={(value) =>
                  `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />

      <Row className="gx-mt-3">
        <Col span={8} className="gx-fs-sm">
          Тээврийн зардал (Контейнер)
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              {/* <InputNumber
                className="gx-d-block gx-w-100"
                precision={0}
                defaultValue={specCargo.USD}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={(value) =>
                  setSpecCargo({ ...specCargo, USD: Number(value) })
                }
              /> */}
              <MotoAuctionDetailPriceInput
                defaultValue={specCargo.USD}
                onChangefromParent={(value) =>
                  setSpecCargo({ ...specCargo, USD: Number(value) })
                }
                placeholder="Доллар оруулна уу"
                prefix="$"
              />
            </Col>
            <Col span={12}>
              <InputNumber
                disabled={true}
                className="gx-d-block gx-w-100"
                precision={0}
                value={specCargo.MNT}
                formatter={(value) =>
                  `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                }
                parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />

      <Row className="gx-mt-3">
        <Col span={11} className="gx-fs-sm">
          Гааль дээр ирэх эцсийн үнэ (ГҮ)
        </Col>
        <Col span={13}>
          <InputNumber
            disabled={true}
            className="gx-d-block gx-w-100 gx-text-warning"
            precision={0}
            value={specMongoliaLast}
            formatter={(value) =>
              `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
            }
            parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
          />
        </Col>
      </Row>

      <Row className="gx-mt-3">
        <Col span={11} className="gx-fs-sm">
          Гаалийн татвар (5%)
        </Col>
        <Col span={13}>
          <InputNumber
            disabled={true}
            className="gx-d-block gx-w-100"
            precision={0}
            value={specCustomTax}
            formatter={(value) =>
              `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
            }
            parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
          />
        </Col>
      </Row>

      <Row className="gx-mt-3">
        <Col span={11} className="gx-fs-sm">
          Онцгой татвар (Хуульд заасны дагуу)
        </Col>
        <Col span={13}>
          <InputNumber
            disabled={true}
            className="gx-d-block gx-w-100 gx-text-danger"
            precision={0}
            value={specSpecialTax}
            formatter={(value) =>
              `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
            }
            parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
          />
        </Col>
      </Row>

      <Row className="gx-mt-3">
        <Col span={11} className="gx-fs-sm">
          НӨАТ (10%)
        </Col>
        <Col span={13}>
          <InputNumber
            disabled={true}
            className="gx-d-block gx-w-100"
            precision={0}
            value={specVATTax}
            formatter={(value) =>
              `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
            }
            parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
          />
        </Col>
      </Row>

      <Divider />

      <Row className="gx-mt-3">
        <Col span={11} className="gx-fs-sm">
          Эцсийн үнэ
        </Col>
        <Col span={13}>
          <InputNumber
            disabled={true}
            className="gx-d-block gx-w-100 gx-text-success"
            precision={0}
            value={specLastPrice}
            formatter={(value) =>
              `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
            }
            parser={(value) => value.replace(/\₮\s?|('*)/g, "")}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default MotoAuctionDetailPrice;
