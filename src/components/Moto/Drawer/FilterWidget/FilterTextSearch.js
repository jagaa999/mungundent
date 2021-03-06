import React, { useState, useEffect, useContext } from "react";

import { Select, Input } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import FilterContext from "context/FilterContext";

const FilterTextSearch = ({ title, placeholder, urlparamfield }) => {
  const filterContext = useContext(FilterContext);

  return (
    <>
      {/* <h6 className="gx-text-uppercase gx-text-orange gx-mt-4">{title}</h6> */}
      <div
        className="gx-mt-4 gx-mb-2 gx-fs-sm"
        style={{ color: "rgb(173, 182, 199)" }}
      >
        {title}
      </div>

      <Input.Search
        placeholder={placeholder}
        defaultValue={
          filterContext.urlSetting.filterList?.["~" + urlparamfield] ||
          undefined
        }
        onSearch={(e) =>
          filterContext.updateParams({ ["~" + urlparamfield]: e })
        }
      />
    </>
  );
};

export default FilterTextSearch;
