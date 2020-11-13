import React, { useState, useEffect } from "react";
import { Card, Image, Input, InputNumber, Row, Col, Divider } from "antd";

const MotoAuctionDetailPrice = ({ auctionItem }) => {
  // console.table(auctionItem);
  const [startPrice, setStartPrice] = useState(auctionItem.START);
  const [yourPrice, setYourPrice] = useState(auctionItem.AVG_PRICE);
  const [avgPrice, setAvgPrice] = useState(auctionItem.AVG_PRICE);
  const [yenRate, setYenRate] = useState(27.7);

  const [specTatvar, setSpecTatvar] = useState(auctionItem.AVG_PRICE * 0.05);
  const [specFOB, setSpecFOB] = useState(80000);

  const [specJapanLast, setSpecJapanLast] = useState(0);
  const [specCargo, setSpecCargo] = useState(850);
  const [specSpecialTax, setSpecSpecialTax] = useState(0);
  const [specCustomTax, setSpecCustomTax] = useState(0);
  const [specVATTax, setSpecVATTax] = useState(0);

  const [specLastPrice, setSpecLastPrice] = useState(0);

  const onChange = (value) => {
    console.log("changed", value);
  };

  useEffect(() => {
    setSpecJapanLast(Number(yourPrice) + Number(specTatvar) + Number(specFOB));
  }, [yourPrice, yenRate, specTatvar, specFOB]);

  return (
    <Card
      title="Үнэ тооцоолох"
      extra={
        <InputNumber
          className="gx-d-block"
          defaultValue={yenRate}
          formatter={(value) =>
            `₮ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\₮\s?|(,*)/g, "")}
          onChange={(value) => setYenRate(value)}
        />
      }
    >
      <Row className="gx-mt-3">
        <Col span={11}>Аукшинаас авах үнэ</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100"
            defaultValue={yourPrice}
            formatter={(value) =>
              `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\¥\s?|(,*)/g, "")}
            onChange={(value) => setYourPrice(value)}
          />
        </Col>
      </Row>
      <Row className="gx-mt-3">
        <Col span={11}>Худалдааны татвар</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100"
            value={specTatvar}
            formatter={(value) =>
              `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\¥\s?|(,*)/g, "")}
          />
        </Col>
      </Row>
      <Row className="gx-mt-3">
        <Col span={11}>Контейнерт орох зардал (FOB)</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100"
            value={specFOB}
            formatter={(value) =>
              `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\¥\s?|(,*)/g, "")}
          />
        </Col>
      </Row>

      <Divider />

      <Row className="gx-mt-3">
        <Col span={11}>Япон дахь эцсийн зардал</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100 gx-text-success"
            value={specJapanLast}
            formatter={(value) =>
              `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\¥\s?|(,*)/g, "")}
          />
        </Col>
      </Row>

      <Divider />

      <Row className="gx-mt-3">
        <Col span={11}>Контейнер</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100 gx-text-success"
            value={specCargo}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Col>
      </Row>

      <Row className="gx-mt-3">
        <Col span={11}>Онцгой татвар</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100 gx-text-success"
            value={specSpecialTax}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Col>
      </Row>
      <Row className="gx-mt-3">
        <Col span={11}>Гаалийн татвар</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100 gx-text-success"
            value={specCustomTax}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Col>
      </Row>
      <Row className="gx-mt-3">
        <Col span={11}>НӨАТ</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100 gx-text-success"
            value={specVATTax}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Col>
      </Row>

      <Divider />

      <Row className="gx-mt-3">
        <Col span={11}>Эцсийн үнэ</Col>
        <Col span={13}>
          <InputNumber
            className="gx-d-block gx-w-100 gx-text-warning"
            value={specLastPrice}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default MotoAuctionDetailPrice;
