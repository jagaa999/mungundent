import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { Avatar, List, Tooltip, Image as ImageAnt } from "antd";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";
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

  Object.keys(memberItemsContext.state.memberItems).map((item, index) => {
    if (
      memberItemsContext.state.memberItems[item].tablename === tableName &&
      memberItemsContext.state.memberItems[item].actionname === "Жоорлох"
    ) {
      MemberItemsList.push(memberItemsContext.state.memberItems[item]);
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
            <span className={`gx-mr-2 ${myColor(item.actionname)}`}>
              <small>{item.actionname}</small>
            </span>,
            <Tooltip title="Устгах">
              <DeleteOutlined
                onClick={(e) => {
                  // console.log("Устгах дарав", item.id);
                  memberItemsContext.deleteMemberItem(item.id);
                }}
              />
            </Tooltip>,
          ]}
        >
          <List.Item.Meta
            avatar={<ImageAnt src={item.mainimg} width={64} />}
            title={
              <Tooltip title={moment(item.modifieddate).fromNow()}>
                <Link to={`/${menu}/${item.recordid}`}>
                  <span className="gx-fs-sm">{item.description}</span>
                </Link>
              </Tooltip>
            }
            description={
              <></>
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
