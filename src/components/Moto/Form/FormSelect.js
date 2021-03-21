import React, { useState, useEffect, useContext } from "react";

import { Select } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import { FilterTitle } from "util/textFunction";
import { isEmpty } from "lodash";

const FormSelect = ({
  metaListId,
  title,
  placeholder,
  labelfield,
  valuefield,
  criteria = undefined,
  paging = undefined,
  onChange,
  style,
}) => {
  const [myData, setMyData] = useState({
    loading: false,
    myList: [],
  });

  const callAllDataAsync = async () => {
    setMyData({
      myList: await loadDataview({
        systemmetagroupid: metaListId,
        criteria: criteria,
        paging: paging,
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callAllDataAsync();
  }, [metaListId, criteria]);

  // console.log("FormSelect", myData);

  return (
    <>
      <FilterTitle title={title} className="gx-mt-4" />

      <Select
        className="gx-fs-sm"
        style={{ ...style }}
        loading={myData.loading}
        showSearch
        allowClear
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) => {
          if (option.value) {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          } else {
            return false;
          }
        }}
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

export default FormSelect;
