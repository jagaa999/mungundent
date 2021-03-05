import React, { useState, useEffect, useContext } from "react";

import { Select } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import FilterContext from "context/FilterContext";

const FilterCheckbox = ({
  metaListId,
  title,
  placeholder,
  urlparamfield,
  labelfield,
  valuefield,
}) => {
  const filterContext = useContext(FilterContext);

  const [myData, setMyData] = useState({
    loading: true,
    myList: [],
  });

  const callAllDataAsync = async () => {
    setMyData({
      myList: await loadDataview({
        systemmetagroupid: metaListId,
        criteria: {},
        paging: {},
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callAllDataAsync();
  }, []);

  return (
    <>
      <h6 className="gx-text-uppercase gx-text-orange gx-mt-4">{title}</h6>

      <Select
        className="moto-select-firm gx-w-100 gx-my-2"
        loading={myData.loading}
        showSearch
        allowClear
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={(e) => filterContext.updateParams({ [urlparamfield]: e })}
        filterOption={(input, option) => {
          if (option.value) {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          } else {
            return false;
          }
        }}
        defaultValue={
          filterContext.urlSetting.filterList?.[urlparamfield] || undefined
        }
      >
        {myData.myList.map((item, index) => (
          <Select.Option key={index} value={item[valuefield]}>
            {item[labelfield]}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export default FilterCheckbox;
