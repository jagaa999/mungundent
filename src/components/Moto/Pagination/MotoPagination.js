import React, { useState, useContext } from "react";
import { Pagination } from "antd";
import FilterContext from "context/FilterContext";
import NewsListContext from "context/NewsListContext";

const MotoPagination = (props) => {
  const filterContext = useContext(FilterContext);
  const newsListContext = useContext(NewsListContext);

  function showTotal(total, range) {
    return `${range[0]}-${range[1]} (Нийт: ${total})`;
  }

  const onChange = (page, pageSize) => {
    // console.log("Энд орж ирсэн", page, pageSize);
    filterContext.updateParams({ offset: "" + page, pagesize: "" + pageSize });
  };

  return (
    <>
      {!newsListContext.state.loading ? (
        <Pagination
          size="small"
          className={props.myClass}
          simple={props.type}
          showSizeChanger
          hideOnSinglePage={true}
          pageSizeOptions={[10, 20, 50]}
          showTotal={showTotal}
          responsive={true}
          showLessItems={true}
          current={filterContext.state.paging.offset * 1}
          pageSize={filterContext.state.paging.pagesize * 1}
          total={filterContext.totalcount * 1}
          onChange={onChange}
        />
      ) : (
        <span>Ачаалж байна</span>
      )}
    </>
  );
};

export default MotoPagination;
