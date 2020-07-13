import React, { useEffect, useContext } from "react";

import { Row, Col } from "antd";

import CommentContext from "../../context/CommentContext";
import CommentBoxItems from "./CommentBoxItems";

const CommentBox = (props) => {
  useEffect(() => {
    if (props) commentBox.loadCommentList(props.recordId, props.tableName);
  }, []);

  const commentBox = useContext(CommentContext);

  return (
    <div className="gx-main-content news-detail">
      <CommentBoxItems commentBoxItems={commentBox.state.commentItems || {}} />
    </div>
  );
};

export default CommentBox;
