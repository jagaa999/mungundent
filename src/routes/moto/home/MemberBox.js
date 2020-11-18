import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Carousel, Button, Card, Col, Row, Space, Tooltip, Avatar } from "antd";
import { UserOutlined, HomeOutlined, PlusOutlined } from "@ant-design/icons";

import MemberContext from "context/MemberContext";
import OnlyAvatar from "components/Moto/Member/onlyAvatar";

// motoMemberLIST_MAINLIST

const MemberBox = ({ newMembers }) => {
  // console.log("newMembersnewMembers", newMembers);
  const memberContext = useContext(MemberContext);

  const [myNewMembers, setMyNewMembers] = useState([]);
  const [myNewMemberTotal, setMyNewMemberTotal] = useState(0);

  if (newMembers && newMembers.paging) {
    setMyNewMemberTotal(newMembers.paging.totalcount);
    delete newMembers["aggregatecolumns"];
    delete newMembers["paging"];
    setMyNewMembers(Object.values(newMembers));
  }

  const memberInfo = (
    <>
      <div className="gx-text-center">
        <Avatar
          size="large"
          src={memberContext.state.memberFirebaseProfile.photoURL}
        />
        <h4 className="gx-mt-3">
          {memberContext.state.memberFirebaseProfile.displayName}
        </h4>
      </div>

      <Row justify="center">
        <Col>
          <Link to={"/news"}>
            <Button type="primary">Нийтлэл</Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/carcatalog"}>
            <Button type="primary" className="gx-ml-2">
              Каталоги
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/auction"}>
            <Button type="primary" className="gx-ml-2">
              Аукшин
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/store"}>
            <Button type="primary" className="gx-ml-2">
              Дэлгүүр
            </Button>
          </Link>
        </Col>
      </Row>

      {/* <Card
        className="gx-widget-bg moto-item-card gx-d-none gx-d-sm-block"
        style={{ minHeight: "250px" }}
      >
        <span
          className="gx-widget-badge"
          style={{ borderRadius: "0 4px 0 10px" }}
        >
          Moto гишүүн
        </span>

        <p>Сайн байна уу?</p>
        <Avatar
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
          src={memberContext.state.memberFirebaseProfile.photoURL}
        />
        <h1 className="gx-fs-xxxl gx-font-weight-semi-bold gx-mb-3 gx-mb-sm-4">
          {memberContext.state.memberFirebaseProfile.displayName}
        </h1>
        <div className="gx-mt-5">
          <Link to={"/news/insert"}>
            <Button className="gx-mb-1 gx-btn-success" icon={<PlusOutlined />}>
              Нийтлэл нэмэх
            </Button>
          </Link>
        </div>

        <div style={{ position: "absolute", bottom: "29px" }}>
          <Button
            className="gx-mb-1 gx-btn-warning"
            icon={<HomeOutlined />}
            disabled
          >
            Гарааш
          </Button>
          <Button
            className="gx-mb-1 gx-btn-warning"
            icon={<UserOutlined />}
            disabled
          >
            Профайл
          </Button>
        </div>
      </Card> */}
    </>
  );

  const nonMemberInfo = (
    <Card
      className="gx-widget-bg moto-item-card"
      style={{ minHeight: "430px" }}
    >
      <span
        className="gx-widget-badge"
        style={{ borderRadius: "0 4px 0 10px" }}
      >
        Үнэгүй
      </span>
      <i className="icon icon-user-o gx-fs-xlxl" />

      <h1 className="gx-fs-xxxl gx-font-weight-semi-bold gx-mb-3 gx-mb-sm-4">
        {myNewMemberTotal} хүн
      </h1>
      <p>мото гишүүн болжээ.</p>
      <p>
        Одоогийн Facebook, Google бүртгэлийнхээ аль нэгээр шууд ороод мото
        гишүүн болоорой.
      </p>

      <div className="gx-mt-5">
        <h5 className="gx-text-warning">Шинэхэн гишүүд</h5>

        {myNewMembers.map((member, index) => (
          <OnlyAvatar key={index} index={index} member={member} />
        ))}
      </div>

      <Button
        className="gx-mb-1 gx-btn-warning"
        style={{ position: "absolute", bottom: "29px" }}
        onClick={() => {
          memberContext.isModal(true);
        }}
      >
        Нэвтрэх
      </Button>
    </Card>
  );

  return memberContext.state.isLogin ? <>{memberInfo}</> : <>{nonMemberInfo}</>;
};

export default MemberBox;
