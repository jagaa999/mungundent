import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Checkbox, List, Tooltip, Image as ImageAnt, Typography } from "antd";
import MemberItemsContext from "context/MemberItemsContext";
import FilterContext from "context/FilterContext";

const MemberMotocarCarList = () => {
  const memberItemsContext = useContext(MemberItemsContext);

  const motocarList = memberItemsContext.motocar.mainList;

  return (
    <List
      className="gx-mr-4"
      loading={false}
      itemLayout="horizontal"
      dataSource={motocarList}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Tooltip title="Default машинаар сонгох">
              <Checkbox
                checked={item.isdefault || false}
                onClick={(e) => {
                  memberItemsContext.chooseDefaultMotocar({
                    ...item,
                    isdefault: e.target.checked,
                  });
                }}
              />
            </Tooltip>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Link to={item.mainData.link.value}>
                <ImageAnt src={item.mainData.imagemain.value} width={64} />
              </Link>
            }
            title={
              // <Tooltip title={moment(item.modifieddate).fromNow()}>
              <Link to={item.mainData.link.value}>
                <span className="gx-fs-sm gx-font-weight-semi-bold">
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, symbol: "…" }}
                    className="gx-m-0"
                  >
                    {item.mainData.title.value}
                  </Typography.Paragraph>
                </span>
              </Link>
              // </Tooltip>
            }
            description={
              <span className="gx-fs-sm gx-text-grey">
                {item.mainData.mainnumber.value}
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

export default MemberMotocarCarList;
