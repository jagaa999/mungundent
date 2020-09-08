import React from "react";
import { Skeleton, Divider, Typography, Button, Avatar, Tooltip } from "antd";

const { Text, Link } = Typography;

const OnlyAvatar = (props) => {
  // console.log(props);

  if (props.member.profilephoto === "" || props.member.profilephoto === null) {
    return (
      <Tooltip title={props.member.userfullname}>
        <Avatar
          key={props.index}
          style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
          gap={2}
          shape="square"
          size="large"
          className="gx-mr-2 gx-mb-2"
        >
          {props.member.userfullname !== null
            ? props.member.userfullname.substring(0, 3)
            : "Тодорхойгүй"}
        </Avatar>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={props.member.userfullname}>
      <Avatar
        key={props.index}
        shape="square"
        size="large"
        className="gx-mr-2 gx-mb-2"
        src={props.member.profilephoto}
      />
    </Tooltip>
  );
};
export default OnlyAvatar;
