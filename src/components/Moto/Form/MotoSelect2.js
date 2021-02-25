import React from "react";
import { Select } from "antd";
const { Option } = Select;

const MotoSelect2 = ({
  loading,
  key,
  placeholder,
  onChange,
  myList,
  valueName,
  valueLabel,
}) => {
  return (
    <Select
      className="moto-select-firm"
      loading={loading}
      key={key}
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
      {myList.map((item, index) => (
        <Option key={index} value={item[valueName]}>
          {item[valueLabel]}
        </Option>
      ))}
    </Select>
  );
};

export default MotoSelect2;
