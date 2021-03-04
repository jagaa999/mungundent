import React, { useContext } from "react";
import { Pagination, Button } from "antd";
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
    <div className="gx-my-4">
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
        current={filterContext.urlSetting.paging.offset * 1 || 1}
        pageSize={filterContext.urlSetting.paging.pagesize * 1 || 12}
        total={filterContext.totalcount * 1 || 1}
        onChange={onChange}
      />
    </div>
  );
};

export default MotoPagination;
