import React, { useEffect, useContext } from "react";
import { Carousel, Button, Card, Col, Row, Space, Tooltip, Avatar } from "antd";

import MemberContext from "context/MemberContext";
// motoMemberLIST_MAINLIST

const MemberBox = (props) => {
  console.log(props);
  const memberContext = useContext(MemberContext);

  const nonMemberInfo = (
    <Card
      className="gx-widget-bg moto-item-card gx-d-none gx-d-sm-block"
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
        1,702 хүн
      </h1>
      <p>Мото гишүүн болжээ.</p>
      <p>
        Та бас элсэж гишүүн болоорой. Танаас төлбөр гарахгүй, юу ч шаардахгүй.
        Одоогийн Facebook, Google-ийнхээ аль нэгээр шууд ороорой.
      </p>

      <div className="gx-mt-5">
        <h5 className="gx-text-warning">Шинэхэн гишүүд</h5>

        {props.newMembers.map((member, index) => (
          <Avatar
            key={index}
            shape="square"
            size="large"
            className="gx-mr-2 gx-mb-2"
            src={member.profilephoto}
          />
        ))}

        <Avatar
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
          src="https://i.insider.com/5ea83a5d0fc639045d7fd154?width=1100&format=jpeg&auto=webp"
        />
        <Avatar
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkB0S2g2_ilvXX4W2IMRF4AnEo0AL5ARr7tA&usqp=CAU"
        />
        <Avatar
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
          src="https://img.jakpost.net/c/2018/07/07/2018_07_07_48925_1530972022._medium.jpg"
        />
        <Avatar
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
          src="https://cdn.vox-cdn.com/thumbor/xbCtVGIK8MatKfcJN9JxuhPsjqE=/0x0:3000x2190/1200x800/filters:focal(1260x855:1740x1335)/cdn.vox-cdn.com/uploads/chorus_image/image/67160326/02666b5402.0.jpeg"
        />
        <Avatar
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMQzS3u6Pn0dQ7bHfRInH1KY9LQhZECt6AHQ&usqp=CAU"
        />
        <Avatar
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQFl4mHdkaIyUs70gaRVmxqbr-H31fFIh2eg&usqp=CAU"
        />
      </div>

      <Button
        className="gx-mb-1 gx-btn-warning"
        htmlType="submit"
        style={{ position: "absolute", bottom: "29px" }}
      >
        Бүртгүүлэх
      </Button>
    </Card>
  );

  const memberInfo = (
    <Card
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
      {/* <p>Мото гишүүн болжээ.</p>
      <p>
        Та бас элсэж гишүүн болоорой. Танаас төлбөр гарахгүй, юу ч шаардахгүй.
        Одоогийн Facebook, Google-ийнхээ аль нэгээр шууд ороорой.
      </p>

      <div className="gx-mt-5"></div> */}

      <div style={{ position: "absolute", bottom: "29px" }}>
        <Button className="gx-mb-1 gx-btn-warning">Гарааш</Button>
        <Button className="gx-mb-1 gx-btn-warning">Профайл</Button>
      </div>
    </Card>
  );

  return memberContext.state.isLogin ? <>{memberInfo}</> : <>{nonMemberInfo}</>;
};

export default MemberBox;
