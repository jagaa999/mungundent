import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { List, Tooltip, Image as ImageAnt, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import MemberItemsContext from "context/MemberItemsContext";
import moment from "moment";
import "moment/locale/mn";

const MemberItemsList = ({ tableName, menu }) => {
  const memberItemsContext = useContext(MemberItemsContext);

  const myColor = (actionName) => {
    let myTextColor = "gx-text-grey";
    switch (actionName) {
      case "Таалагдлаа":
        myTextColor = "gx-text-orange";
        break;
      case "Жоорлох":
        myTextColor = "gx-text-success";
        break;
      default:
        myTextColor = "gx-text-grey";
        break;
    }
    return myTextColor;
  };

  let MemberItemsList = [];

  Object.keys(memberItemsContext.memberItems.memberItems).map((item, index) => {
    if (
      memberItemsContext.memberItems.memberItems[item].tablename ===
        tableName &&
      memberItemsContext.memberItems.memberItems[item].actionname === "Жоорлох"
    ) {
      MemberItemsList.push(memberItemsContext.memberItems.memberItems[item]);
    }
  });

  // console.log("MemberItemsList", MemberItemsList);

  return (
    <List
      className="gx-mr-4"
      loading={false}
      itemLayout="horizontal"
      dataSource={MemberItemsList}
      renderItem={(item) => (
        <List.Item
          actions={[
            // <span className={`gx-mr-2 ${myColor(item.actionname)}`}>
            //   <small>{item.actionname}</small>
            // </span>,
            <Tooltip title="Устгах">
              <DeleteOutlined
                onClick={(e) => {
                  memberItemsContext.deleteMemberItem(item.id);
                }}
              />
            </Tooltip>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Link to={`/${menu}/${item.recordid}`}>
                <ImageAnt src={item.mainimg} width={64} />
              </Link>
            }
            title={
              // <Tooltip title={moment(item.modifieddate).fromNow()}>
              <Link to={`/${menu}/${item.recordid}`}>
                <span className="gx-fs-sm gx-font-weight-semi-bold">
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, symbol: "…" }}
                    className="gx-m-0"
                  >
                    {item.description}
                  </Typography.Paragraph>
                </span>
              </Link>
              // </Tooltip>
            }
            description={
              <span className="gx-fs-sm gx-text-grey">
                {moment(item.modifieddate).fromNow()}
              </span>
              // <>
              //   <span className={`gx-mr-2 ${myColor(item.actionname)}`}>
              //     <small>{item.actionname}</small>
              //   </span>
              //   <span className="gx-meta-date">
              //     <small>{item.modifieddate}</small>
              //   </span>
              // </>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default MemberItemsList;
