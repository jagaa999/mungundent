import React, { useContext } from "react";
import { Pagination } from "antd";
import FilterContext from "context/FilterContext";

const MotoPagination = (props) => {
  const filterContext = useContext(FilterContext);

  function showTotal(total, range) {
    return `${range[0]}-${range[1]} (Нийт: ${total})`;
  }

  const onChange = (page, pageSize) => {
    // console.log("Энд орж ирсэн", page, pageSize);
    filterContext.updateParams({ offset: "" + page, pagesize: "" + pageSize });
  };

  return (
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
  );
};

export default MotoPagination;
