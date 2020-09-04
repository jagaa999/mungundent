import React from "react";
import { Skeleton, Divider, Typography, Button, Avatar } from "antd";

const { Text, Link } = Typography;

const MemberAvatar = (props) => {
  // memberName={newsItem.publisherpositionname}
  // memberPhoto={newsItem.publisherphoto}
  // memberPosition={newsItem.publisherpositionname}
  console.log(props);

  return (
    <div className="gx-chat-user-hd">
      <div className="gx-chat-avatar gx-mr-3" onClick={null}>
        <div className="gx-status-pos">
          {props.memberPhoto !== null ? (
            <Avatar
              id="avatar-button"
              src={props.memberPhoto || "https://via.placeholder.com/150"}
              className="gx-size-50"
              alt={props.memberName}
            />
          ) : (
            <Avatar
              id="avatar-button"
              style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
              gap={2}
              className="gx-size-50"
            >
              {props.memberName !== null
                ? props.memberName.substring(0, 3)
                : "Тодорхойгүй"}
            </Avatar>
          )}

          <span className="gx-status gx-online" />
        </div>
      </div>

      <div className="gx-module-user-info gx-flex-column gx-justify-content-center">
        <div className="gx-module-title">
          <h5 className="gx-mb-0">{props.memberName}</h5>
        </div>
        <div className="gx-module-user-detail">
          <span className="gx-text-grey gx-link">{props.memberPosition}</span>
        </div>
      </div>
    </div>
  );
};
export default MemberAvatar;
