import React, { useEffect, useContext } from "react";

import { Row, Col, message, Alert } from "antd";

import CommentContext from "../../context/CommentContext";
import CommentBoxItems from "./CommentBoxItems";

const CommentBox = (props) => {
  useEffect(() => {
    if (props) commentContext.loadCommentList(props.recordId, props.tableName);
  }, []);

  const commentContext = useContext(CommentContext);

  return (
    <div className="gx-main-content news-detail">
      <CommentBoxItems
        commentBoxItems={commentContext.state.commentItems || {}}
      />
      {commentContext.state.error !== null ? (
        <Alert
          message="Анхаар!"
          description={commentContext.state.error}
          type="warning"
          showIcon
          closable
        />
      ) : null}
    </div>
  );
};

export default CommentBox;
