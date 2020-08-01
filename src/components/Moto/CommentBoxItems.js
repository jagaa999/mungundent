import React, { useEffect, useState, useContext } from "react";
import { Card, Avatar, Button } from "antd";

import CommentBoxDetail from "./CommentBoxDetail";
import MemberContext from "context/MemberContext";

const CommentBoxItems = (props) => {
  // console.log("ТЭГВЭЛ ЭНИЙГ ХАР ДАА", props.commentBoxItems);
  const memberContext = useContext(MemberContext);
  // console.log("memberProfile--------------", memberContext.state.memberProfile);

  const updateCommentValue = (event) => {
    console.log(event);
  };

  return (
    <div>
      <Card title="Сэтгэгдэл">
        {props.commentBoxItems.length > 0 ? (
          <div className="gx-wall-comment-box">
            {props.commentBoxItems.map((commentItem, index) => (
              <CommentBoxDetail
                key={index}
                index={index}
                commentItem={commentItem}
              />
            ))}
          </div>
        ) : (
          <div className="gx-mb-3">Сэтгэгдэл алга</div>
        )}
        <div className="gx-wall-comment-box">
          <div className="gx-media gx-mb-2">
            <Avatar
              className="gx-mr-3 gx-size-36"
              src={memberContext.state.memberFirebaseProfile.photoURL}
            />
            <div className="gx-media-body" key="dddd">
              <p>
                {memberContext.state.memberFirebaseProfile.displayName}{" "}
                {/* <span>({memberContext.state.memberCloudProfile.lastname})</span> */}
              </p>
              <textarea
                id="required"
                className="gx-border-0 ant-input"
                onChange={(event) => updateCommentValue(event)}
                // onKeyPress={(event) => _handleKeyPress(event)}
                // value={message}
                value=""
                placeholder="Сэтгэгдлээ бичээрэй"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CommentBoxItems;
