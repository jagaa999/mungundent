import React, { useContext } from "react";

import { Button, PageHeader, Typography, Row, Col, Divider } from "antd";
import { FilterOutlined, EllipsisOutlined } from "@ant-design/icons";
import MyIcon from "util/iconFunction";

import FilterContext from "context/FilterContext";
import AuctionContext from "context/AuctionContext";
import MotoAuctionSort from "./Sort/MotoAuctionSort";

const { Paragraph } = Typography;

const AuctionListActionHeader = (props) => {
  const filterContext = useContext(FilterContext);
  const auctionListContext = useContext(AuctionContext);

  const toggleFilterDrawer = () => {
    auctionListContext.toggleFilterDrawerOpen();
  };

  return (
    <>
      <div className="gx-text-grey gx-fs-sm">
        <Paragraph>
          Япон улсын аукшин системд яг одоогоор тавигдсан байгаа автомашинуудыг
          та харж байна. Японоос орж ирж буй бүх автомашиныг эндээс авдаг билээ.
          Та өөрт таалагдсан хамгийн онцгой автомашиныг эндээс шууд үнэ тавин
          авах боломжтой.
        </Paragraph>
        <Paragraph>
          Энэ системийг ашигласнаар дундаж үнэлгээтэй энгийн автомашиныг хямдхан
          авах эсвэл маш сайн тоноглолтой сайхан автомашиныг боломжийн үнээр олж
          авах нөхцөл бүрдэж байгаа юм.
        </Paragraph>
      </div>

      <Divider className="gx-my-3" />

      <PageHeader
        className="moto-pageheader"
        title={
          <h3>
            Аукшины автомашинууд
            {filterContext.totalcount > 0 ? (
              <span className="gx-ml-2 gx-text-grey gx-fs-sm">
                ({filterContext.totalcount})
              </span>
            ) : (
              ""
            )}
          </h3>
        }
        extra={[
          <Button
            key="moto-filter-button"
            size="small"
            icon={<MyIcon type="iconfilter" />}
            onClick={toggleFilterDrawer}
            className="gx-mr-0"
          >
            Шүүлтүүр
          </Button>,

          <MotoAuctionSort key="motosort" />,
        ]}
      ></PageHeader>

      {/* <div className="gx-mb-3">
        <div className="gx-text-grey gx-fs-sm gx-mr-2 gx-mb-2">Шүүлтүүр</div>
        <div>
          <Input.Group compact></Input.Group>
        </div>
      </div> */}
    </>
  );
};

export default AuctionListActionHeader;
