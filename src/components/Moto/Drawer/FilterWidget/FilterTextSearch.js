import React, { useState, useEffect, useContext } from "react";

import { Select, Input } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import { FilterTitle } from "util/textFunction";
import FilterContext from "context/FilterContext";

const FilterTextSearch = ({ title, placeholder, urlparamfield }) => {
  const filterContext = useContext(FilterContext);

  return (
    <>
      <FilterTitle title={title} className="gx-mt-4 gx-mb-3" />

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
