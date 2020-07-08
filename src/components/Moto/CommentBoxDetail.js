import React, { useEffect, useState } from "react";
import { Card, Avatar, Button } from "antd";

import DisplayDate from "../wall/DisplayDate/index";

const CommentBoxDetail = (props) => {
  // console.log("КОММММММММ=>   ", props);
  const [isComment, setIsComment] = useState(false);

  const [commentItem, setCommentItem] = useState({
    isLike: false,
    likeCount: 0,
    id: 0,
    code: 0,
    description: "",
    parentid: 0,
    actiontype: 1,
    attachment: "",
    tablename: "",
    recordid: 0,
    memberid: 0,
    membername: "",
    memberphoto: "",
    positionname: "",
    createddate: null,
    creatorid: 0,
    modifieddate: null,
    modifierid: 0,
  });

  const _handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommentToggle();
    }
  };

  useEffect(() => {
    setCommentItem(props.commentItem);
  }, [props.commentItem]);

  const handleLikeToggle = () => {
    setCommentItem({
      ...commentItem,
      isLike: !commentItem.isLike,
      likeCount:
        commentItem.isLike === true
          ? commentItem.likeCount - 1
          : commentItem.likeCount + 1,
    });
  };

  const handleCommentToggle = () => {
    setIsComment((previousState) => ({
      isComment: !previousState.isComment,
    }));
  };

  // console.log("------------", commentItem);

  // const { user, isLike, date, comment } = commentItem;
  return (
    <div
      className="gx-media gx-flex-nowrap gx-wall-user-info gx-mb-3"
      key={commentItem.id}
    >
      <Avatar className="gx-mr-3 gx-size-40" src={commentItem.memberphoto} />
      <div className="gx-media-body">
        <h5 className="gx-wall-user-title">{commentItem.membername}</h5>
        {/* <DisplayDate date={commentItem.modifieddate} /> */}
        <p className="gx-text-grey gx-fs-sm gx-mb-0">
          {commentItem.modifieddate}
        </p>
        <p className="gx-mt-2">{commentItem.description}</p>
        <div className="gx-flex-row">
          {/* <Button type="primary" size="small" onClick={handleLikeToggle}>
            {commentItem.isLike ? "Like" : "UnLike"}
          </Button> */}
          <Button
            className="gx-btn-primary-light"
            size="small"
            onClick={handleCommentToggle}
          >
            Хариулах
          </Button>
        </div>
        {isComment === true ? (
          <div className="gx-media">
            <Avatar
              className="gx-mr-3 gx-size-30"
              src={commentItem.memberphoto}
            />
            <div className="gx-media-body">
              <input
                id="required"
                className="gx-border-0 ant-input"
                placeholder="Type Comments"
                onKeyPress={(event) => _handleKeyPress(event)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CommentBoxDetail;
