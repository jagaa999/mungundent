import React from "react";
import { Skeleton, Divider, Typography, Button, Avatar } from "antd";

const { Text, Link } = Typography;

const MemberAvatar = ({ memberPhoto, memberName }) => {
  // memberName={newsItem.publisherpositionname}
  // memberPhoto={newsItem.publisherphoto}
  // memberPosition={newsItem.publisherpositionname}
  // console.log(;

  return (
    <div className="gx-chat-user-hd">
      <div className="gx-chat-avatar gx-mr-3" onClick={null}>
        <div className="gx-status-pos">
          {memberPhoto !== null ? (
            <Avatar
              id="avatar-button"
              src={memberPhoto || "https://via.placeholder.com/150"}
              className="gx-size-50"
              alt={memberName}
            />
          ) : (
            <Avatar
              id="avatar-button"
              style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
              gap={2}
              className="gx-size-50"
            >
              {memberName !== null ? memberName.substring(0, 3) : "Тодорхойгүй"}
            </Avatar>
          )}

          {/* <span className="gx-status gx-online" /> */}
        </div>
      </div>

      <div className="gx-module-user-info gx-flex-column gx-justify-content-center">
        <div className="gx-module-title">
          <h5 className="gx-mb-0">{memberName}</h5>
        </div>
      </div>
    </div>
  );
};
export default MemberAvatar;
