import React, { useEffect, useContext } from "react";

import { Row, Col } from "antd";

import NewsContext from "../../context/NewsContext";
import CommentBoxItems from "./CommentBoxItems";

const CommentBox = (props) => {
  useEffect(() => {
    if (props)
      commentBox.loadNewsDetailComment(props.recordId, props.tableName);
  }, []);

  const commentBox = useContext(NewsContext);

  return (
    <div className="gx-main-content news-detail">
      <CommentBoxItems commentBoxItems={commentBox.state.commentItems || {}} />
    </div>
  );
};

export default CommentBox;
