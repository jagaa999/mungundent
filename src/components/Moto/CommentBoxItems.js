import React, { useEffect, useState, useContext } from "react";
import { Card, Avatar, Button, Input, Divider } from "antd";

import CommentBoxDetail from "./CommentBoxDetail";
import MemberContext from "context/MemberContext";
import CommentContext from "context/CommentContext";
import NewsContext from "context/NewsContext";

const { TextArea } = Input;

const CommentBoxItems = ({ commentBoxItems, recordId, tableName }) => {
  const [commentBody, setCommentBody] = useState("");
  const memberContext = useContext(MemberContext);
  const commentContext = useContext(CommentContext);
  const newsDetailContext = useContext(NewsContext);

  return (
    <div>
      <Card
        title={<span className="gx-fs-sm gx-font-weight-light">Сэтгэгдэл</span>}
        size="small"
      >
        {commentBoxItems.length > 0 ? (
          <>
            <div className="gx-wall-comment-box">
              {commentBoxItems.map((commentItem, index) => (
                <CommentBoxDetail
                  key={index}
                  index={index}
                  commentItem={commentItem}
                />
              ))}
            </div>

            <Divider className="gx-my-4" />
          </>
        ) : (
          // <div className="gx-mb-3">Сэтгэгдэл алга</div>
          ""
        )}

        <div className="gx-wall-comment-box">
          <div className="gx-media gx-mb-2">
            <Avatar
              className="gx-mr-3 gx-size-36"
              src={memberContext.state.memberFirebaseProfile.photoURL}
            />
            <div className="gx-media-body" key="dddd">
              <p>{memberContext.state.memberFirebaseProfile.displayName} </p>

              <TextArea
                placeholder="Сэтгэгдлээ бичээрэй"
                autoSize={{ minRows: 2, maxRows: 6 }}
                onChange={(event) => {
                  setCommentBody(event.target.value);
                }}
              />

              <Button
                className="gx-mt-3"
                onClick={() => {
                  // commentContext.insertComment(
                  //   newsDetailContext.newsDetail.mainDetail.newsid,
                  //   commentBody,
                  //   "ECM_NEWS",
                  //   "0"
                  // );
                  commentContext.insertComment(
                    recordId,
                    commentBody,
                    tableName,
                    "0"
                  );
                }}
              >
                Нэмэх
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CommentBoxItems;
