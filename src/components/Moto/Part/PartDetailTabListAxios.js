import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import { loadDataview } from "util/axiosFunction";

const PartDetailTabListAxios = ({
  systemmetagroupid,
  criteria,
  renderItem,
}) => {
  const [attributeList, setAttributeList] = useState({
    loading: false,
    mainList: [],
  });

  const callFunctionAsync = async () => {
    setAttributeList({ ...attributeList, loading: true });
    setAttributeList({
      mainList: await loadDataview({
        // systemmetagroupid: "16147434609241",
        systemmetagroupid: systemmetagroupid,
        criteria: {
          ...criteria,
          // criteriaDataSupplierArticleNumber: myDetail.datasupplierarticlenumber,
        },
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  return (
    <List
      size="small"
      itemLayout="horizontal"
      loading={attributeList.loading}
      dataSource={attributeList.mainList}
      renderItem={renderItem}
      // renderItem={(item) => (
      // <List.Item key={item.id}>
      //   <List.Item.Meta
      //     title={item.displaytitle}
      //     description={
      //       <span className="gx-text-grey gx-fs-sm">{item.description}</span>
      //     }
      //   />
      //   <div>{item.displayvalue}</div>
      // </List.Item>
      // )}
    />
  );
};

export default PartDetailTabListAxios;
