import React, { useState, useEffect } from "react";
import {
  Card,
  Image,
  Input,
  InputNumber,
  Row,
  Col,
  Divider,
  Switch,
  Tooltip,
} from "antd";

function formatNumber(value) {
  value += "";
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
}

const NumericInput = (props) => {
  const onChange = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      props.onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  const onBlur = () => {
    console.log("АААААААА", props);
    return null;

    const { value, onBlur, onChange } = props;
    let valueTemp = value;
    if (
      String(value).charAt(String(value).length - 1) === "." ||
      String(value) === "-"
    ) {
      valueTemp = String(value).slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
    if (onBlur) {
      onBlur();
    }
  };

  const { value } = props;
  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(value) : "-"}
    </span>
  ) : (
    "Зөвхөн тоо оруулаарай"
  );

  return (
    <Tooltip
      trigger={["focus"]}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={onChange}
        /*onBlur={onBlur}*/ maxLength={25}
      />
    </Tooltip>
  );
};

const MotoAuctionDetailPriceInput = ({
  defaultValue,
  onChangefromParent,
  placeholder = "Тоо!",
  prefix = "₮",
  suffix = "",
  size = "default",
  style = { undefined },
  className = "",
}) => {
  const [state, setState] = useState({ value: defaultValue });

  const onChange = (value) => {
    setState({ value });
  };

  useEffect(() => {
    onChangefromParent(state.value);
  }, [state.value]);

  return (
    <NumericInput
      value={state.value}
      onChange={onChange}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix}
      size={size}
      style={style}
      className={className}
    />
  );
};

export default MotoAuctionDetailPriceInput;
