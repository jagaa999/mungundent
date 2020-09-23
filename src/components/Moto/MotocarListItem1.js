import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Image } from "cloudinary-react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import { defaultSrc, prepareImageSrc } from "util/config";

import {
  Button,
  Badge,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Menu,
  Avatar,
  message,
  Modal,
  Divider,
} from "antd";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "./Member/MemberAvatar";
import AvatarMember02 from "./Member/MemberAvatar02";
import AvatarMember03 from "./Member/MemberAvatar03";
import NewsDetailModal from "./newsDetailModal";
import NewsDetailMore from "./newsDetailMore";

const NewsItem = ({ motocarItem, grid }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const showModalToggle = () => {
    setShowModal(!showModal);
  };

  const showMoreToggle = () => {
    setShowMore(!showMore);
  };

  const modalOk = (e) => {
    console.log(e);
    setShowModal(true);
  };

  const modalCancel = (e) => {
    console.log(e);
    setShowModal(false);
  };

  console.log("Манай машин - ", motocarItem);

  const truncatedDescription = motocarItem.description.substring(0, 250);

  const myMainImage = prepareImageSrc(motocarItem.imagemain);
  const myYear =
    moment(motocarItem.caryearmanufactured, "YYYY").isValid() === true
      ? moment(motocarItem.caryearmanufactured).format("YYYY")
      : "";

  return (
    <div
      key={motocarItem.newsid}
      className={`gx-product-item gx-autozar-list-item  ${
        grid ? "gx-product-vertical" : "gx-product-horizontal"
      } ${toBoolean(motocarItem.isfeatured) ? "moto-card-sponsor" : ""} ${
        !toBoolean(motocarItem.isactive) ? "border-top" : ""
      }`}
    >
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <Link to={"/news/" + motocarItem.newsid}>
            <span className="gx-link gx-grid-thumb-cover">
              <img
                alt="..."
                src={myMainImage}
                className="gx-img-fluid gx-w-100"
              />
              {/* <Image
                cloudName="motomn"
                publicId={motocarItem.imagemain
                  .slice(
                    motocarItem.imagemain.indexOf("upload/") + 7,
                    motocarItem.imagemain.length
                  )
                  .split(".")
                  .shift()}
                crop="fill"
                loading="lazy"
                dpr="auto"
                responsive
                width="auto"
                gravity="face"
                quality="auto"
                placeHolder="blur"
                responsiveUseBreakpoints="true"
                className="gx-img-fluid gx-w-100"
                default_image="jhannw5jgo2mlvvkvke9"
                alt={motocarItem.title}
                onError={defaultSrc}
              /> */}
            </span>
          </Link>
        </div>
      </div>

      <div className="gx-product-body">
        <Row>
          <Col xl={17} md={16} sm={15} xs={24}>
            <h3 className="gx-product-title">
              <Link to={"/motocar/" + motocarItem.motocarid}>
                {myYear} {motocarItem.firmname} {motocarItem.markname}{" "}
                {motocarItem.cartrim}
              </Link>
              {toBoolean(motocarItem.isfeatured) && <FeaturedTag />}
              {!toBoolean(motocarItem.isactive) && <ActiveTag />}
            </h3>

            <div className="gx-dealclose-header-right">
              <p className="gx-mr-3 gx-mb-2">
                <Badge className="gx-mb-0" status="processing" />
                {motocarItem.mgllicensenumberfull}
              </p>

              <p className="gx-mr-2 gx-mb-2">
                <Badge className="gx-mb-0" status="default" />
                {motocarItem.body2bodyname}
              </p>
            </div>

            {/* <div className="gx-mt-3">
              <span className="moto-label-main ant-tag">
                {motocarItem.body2bodyname}
              </span>
              <Tooltip title="Улсын дугаар">
                <span className="moto-label-main ant-tag">
                  {motocarItem.mgllicensenumberfull}
                </span>
              </Tooltip>
            </div> */}

            <div className="gx-mt-3">
              <Row>
                <Col span={24}>
                  <ul className="moto-spec-list">
                    <li>
                      <span className="moto-spec-list-label">Жолоо</span>
                      <span className="moto-spec-list-value">
                        {motocarItem.body2driverposname}
                      </span>
                    </li>
                    <li>
                      <span className="moto-spec-list-label">Хөдөлгүүр</span>
                      <span className="moto-spec-list-value">
                        {motocarItem.engine2disp} cc{", "}
                        {motocarItem.engine2fuelname}
                      </span>
                    </li>
                    <li>
                      <span className="moto-spec-list-label">Хроп</span>
                      <span className="moto-spec-list-value">
                        {motocarItem.drive2transtypename}
                      </span>
                    </li>
                    <li>
                      <span className="moto-spec-list-label">Хөтлөгч</span>
                      <span className="moto-spec-list-value">
                        {motocarItem.drive2drivename}
                      </span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>

            <div className="gx-description gx-mt-3">
              <p className="gx-mt-2">
                <span
                  dangerouslySetInnerHTML={{ __html: truncatedDescription }}
                ></span>
              </p>
            </div>

            {/* <div className="gx-d-flex gx-mt-4">
          <Button size="small" onClick={showModalToggle}>
            Нээж унших
          </Button>

          <Button size="small" onClick={showMoreToggle}>
            Эндээ унших
          </Button>
        </div> */}
          </Col>
          <Col
            xl={7}
            md={8}
            sm={9}
            xs={24}
            className="gx-d-flex gx-flex-column"
          >
            {/* <div className="gx-overview-description motocar-left-spec">
              <div className="gx-revenu gx-revenu-total">
                <h5>$2,650</h5>
                <span className="gx-fs-md">төгрөг</span>
              </div>

              <div className="gx-revenu">
                <div className="gx-revenu-row">
                  <div className="gx-revenu-col">
                    <h6>{moment(motocarItem.caryearimport).format("YYYY")}</h6>
                    <span className="gx-fs-sm">он</span>
                  </div>

                  <div className="gx-revenu-col">
                    <h6>{motocarItem.carmilagenow}</h6>
                    <span className="gx-fs-sm">км</span>
                  </div>
                </div>
              </div>

              <div className="gx-revenu">
                <Avatar
                  src={motocarItem.memberprofilephoto}
                  alt={motocarItem.memberuserfullname}
                  className="gx-mr-2"
                  size={30}
                />
                <h6 className=" gx-fs-sm">{motocarItem.memberuserfullname}</h6>
                <p className="gx-text-grey gx-fs-sm">
                  {moment(motocarItem.modifieddate).fromNow()}
                </p>
              </div>
            </div> */}

            {/* <div className="moto-spec-1">
              Гүйлт
              <span className="moto-spec-1-label">
                {motocarItem.carmilagenow} км
              </span>
              Импортолсон
              <span className="moto-spec-1-body">
                {moment(motocarItem.caryearimport).format("YYYY")}
              </span>
            </div> */}

            {/* <div className="gx-currentplan-col"> */}
            <div>
              <h3 className="gx-text-primary gx-font-weight-medium gx-mb-1">
                19,000,000<sub className="gx-fs-md gx-bottom-0"> төг</sub>
              </h3>
              <p className="gx-mb-1 gx-fs-sm">
                <span className="gx-size-8 gx-bg-success gx-rounded-xs gx-d-inline-block  gx-mr-1" />{" "}
                {moment(motocarItem.caryearimport).format("YYYY")} он
              </p>
              <p className="gx-mb-1 gx-fs-sm">
                <span className="gx-size-8 gx-bg-success gx-rounded-xs gx-d-inline-block  gx-mr-1" />{" "}
                {motocarItem.carmilagenow} км
              </p>
            </div>

            <div className="gx-mt-auto">
              <div className="gx-media gx-mt-3">
                <Avatar
                  src={motocarItem.memberprofilephoto}
                  alt={motocarItem.memberuserfullname}
                  className="gx-mr-2"
                  size={30}
                />

                <div className="gx-media-body">
                  <h5 className=" gx-fs-sm">
                    {motocarItem.memberuserfullname}
                  </h5>
                  <p className="gx-text-grey gx-fs-sm">
                    {moment(motocarItem.modifieddate).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {showMore ? (
        <div className="gx-p-3">
          <Divider
            className="gx-mt-3 gx-mb-4"
            dashed
            plain
            orientation="center"
          >
            Дэлгэрэнгүй
          </Divider>
          <NewsDetailMore newsId={motocarItem.newsid} />
        </div>
      ) : (
        <></>
      )}

      <Modal
        title={motocarItem.title}
        visible={showModal}
        footer={null}
        onOk={modalOk}
        onCancel={modalCancel}
        width="80%"
        style={{ width: "100%", resize: "none" }}
      >
        <div>
          <img
            alt="example"
            style={{ width: "100%" }}
            src={motocarItem.imageMain}
          />
          <Divider className="gx-my-4" />
          <NewsDetailModal newsId={motocarItem.newsid} />
        </div>
      </Modal>

      {/* <div className="gx-product-footer">
        <AvatarMember02
          memberName={motocarItem.memberuserfullname}
          memberPhoto={motocarItem.memberprofilephoto}
          memberPosition="Гишүүнчлэл тодорхойгүй"
          memberId={motocarItem.memberpersonid}
          memberUid={motocarItem.memberfirebaseuid}
        />
      </div> */}
    </div>
  );
};

export default NewsItem;

// motocarid
// mglLicensenumberFull
// title
// imageMain
// imageOther
// description
// firmid
// markid
// mainid
// carid
// firmName
// firmCountryMon
// markName
// indexImage
// indexDate
// gooCartrim
// gooCarDate
// gooUntilnow
// gooPriceNewUsd
// gooBody2Door
// gooBody2Seat
// gooBody2ModelCodeFull
// gooModelCode
// gooEngine2Code
// gooEngine2PowerHp
// gooEngine2Disp
// gooEngine2Fueltank
// gooEngine2Fuelname
// gooDrive2Transtypename
// carYearManufactured
// carYearImport
// carMilageImport
// carMilageNow
// carColorOutside
// carColorInside
// bodyid
// body2Bodyname
// engine2Disp
// engine2Cylinder
// fueltypeid
// engine2Fuelname
// engine2PowerHp
// carCountyOrigin
// carCountryImport
// body2Door
// body2Seat
// transtypeid
// drive2Transtypename
// drive2TransmissionStep
// driveid
// drive2Drivename
// driverposid
// body2Driverposname
// engineTurboid
// engineTurboName
// engine2Type
// mglLicensenumberNumber
// mglLicensenumberSeries
// vehicleType
// createdDate
// createdBy
// modifiedDate
// modifiedBy
// carFirm
// carMark
// cartrim
// tempLeasing
// tempSalecondition
// tempPrice
// tempPhone
// tempUnaaid
// tempUneguiid
// tempNuxtsul
// tempMiningurl
// tempMiningpagetitle
// tempMiningdate
// body2ModelCodeFull
// modelCode
// body2VinNumber
// engine2Code
// temp
// oldMotoGooAllcarCarid
// isActive
// ownerid
// personId
// systemUserId
// memberusername
// memberPersonId
// memberuserFullName
// memberprofilePhoto
// memberfirebaseUid
// companyId
