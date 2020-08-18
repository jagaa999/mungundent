import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { Avatar, List, Tooltip } from "antd";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";
import MemberItemsContext from "context/MemberItemsContext";

const MemberItemsList = (props) => {
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

  var MemberItemsList = Object.keys(props.memberItems).map(function (name) {
    var obj = {};
    obj = props.memberItems[name];
    return obj;
  });

  console.log("MemberItemsList", MemberItemsList);

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
            avatar={
              <Avatar shape="square" size="large" src={`${item.imagemain}`} />
            }
            title={
              <Tooltip title={item.modifieddate}>
                <Link to={"/news/" + item.recordid}>
                  <span className="gx-fs-sm">{item.title}</span>
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
