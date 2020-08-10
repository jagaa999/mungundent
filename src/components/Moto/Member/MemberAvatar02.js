import React from "react";
import { Skeleton, Divider, Typography, Button, Avatar, Tooltip } from "antd";

const { Text, Link } = Typography;

const MemberAvatar = (props) => {
  // memberName={newsItem.publisherpositionname}
  // memberPhoto={newsItem.publisherphoto}
  // memberPosition={newsItem.publisherpositionname}

  return (
    <Tooltip title={props.memberName}>
      {/* <span className="gx-text-grey gx-link">{props.memberPosition}</span> */}
      <Avatar
        id="avatar-button"
        src={props.memberPhoto || "https://via.placeholder.com/150"}
        className="gx-size-50"
        alt={props.memberName}
      />
    </Tooltip>
  );
};
export default MemberAvatar;
