import React from "react";
import { Select } from "antd";
const { Option } = Select;

const MotoSelect1 = (props) => {
  return (
    <Select
      className="moto-select-firm"
      loading={props.loading}
      key={props.key}
      showSearch
      allowClear
      placeholder={props.placeholder}
      optionFilterProp="children"
      onChange={props.onChange}
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
      {props.myList.map((item, index) => (
        // <Option key={index} value={item[props.valueName]}>
        <Option key={index} value={item.mglfirm}>
          {item[props.valueLabel]}
        </Option>
      ))}
    </Select>
  );
};

export default MotoSelect1;
