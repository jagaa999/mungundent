import React, { useState, useEffect, useContext } from "react";

import { Select } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import { FilterTitle } from "util/textFunction";
import FilterContext from "context/FilterContext";
import { isEmpty } from "lodash";

const FilterCheckbox = ({
  metaListId,
  title,
  placeholder,
  urlparamfield,
  labelfield,
  valuefield,
  criteria = undefined,
  paging = undefined,
}) => {
  const filterContext = useContext(FilterContext);

  const [myData, setMyData] = useState({
    loading: true,
    myList: [],
  });

  //prepare criteria params
  let myCriteria = {};
  if (!isEmpty(criteria)) {
    myCriteria = {
      [criteria.operand]: {
        0: {
          operator: criteria.operator || "=",
          operand: filterContext.urlSetting.filterList?.[criteria.operand],
        },
      },
    };
  }

  //prepare paging params
  let myPaging = {};
  if (!isEmpty(paging)) {
    myPaging = {
      sortColumnNames: {
        [paging.sortColumnNames]: {
          sortType: paging?.sortType || "ASC",
        },
      },
    };
  }

  const callAllDataAsync = async () => {
    setMyData({
      myList: await loadDataview({
        systemmetagroupid: metaListId,
        criteria: { ...myCriteria },
        paging: { ...myPaging },
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callAllDataAsync();
  }, [filterContext.urlSetting.filterList]);

  return (
    <>
      {/* <h6 className="gx-text-uppercase gx-text-orange gx-mt-4">{title}</h6> */}
      {/* <div
        className="gx-mt-4 gx-mb-2 gx-fs-sm"
        style={{ color: "rgb(173, 182, 199)" }}
      >
        {title}
      </div> */}
      <FilterTitle title={title} className="gx-mt-4" />

      <Select
        className="moto-select-firm gx-w-100 gx-my-2 gx-fs-sm"
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
        value={
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
