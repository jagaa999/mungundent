import React, { useState, useContext } from "react";
import { Pagination } from "antd";
import FilterContext from "context/FilterContext";
import NewsListContext from "context/NewsListContext";

const MotoPagination = () => {
  const filterContext = useContext(FilterContext);
  const newsListContext = useContext(NewsListContext);

  function showTotal(total, range) {
    return `${range[0]}-${range[1]} (Нийт: ${total})`;
  }

  const onChange = (page, pageSize) => {
    filterContext.updateParams({ offset: "" + page, pagesize: "" + pageSize });
  };

  return (
    <>
      <Pagination
        size="small"
        showSizeChanger
        // hideOnSinglePage={true}
        pageSizeOptions={[10, 20, 50]}
        showTotal={showTotal}
        responsive={true}
        total={newsListContext.state.paging.totalcount}
        defaultCurrent={newsListContext.state.paging.offset}
        // current={myCurrent}
        defaultPageSize={newsListContext.state.paging.pagesize}
        // pageSize={myPageSize}
        onChange={onChange}
      />
    </>
  );
};

export default MotoPagination;
