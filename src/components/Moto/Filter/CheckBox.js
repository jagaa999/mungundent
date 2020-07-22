import React, { useState } from "react";
import { Button, Drawer, Radio, Input, Checkbox, Space, Row, Col } from "antd";

const { Search } = Input;

const MotoCheckBox = (props) => {
  return (
    <>
      <h6 className="gx-my-3 gx-text-uppercase">{props.title}</h6>
      <Checkbox.Group onChange={null} className="moto-filter-checkbox">
        <Checkbox value="01">Checkbox</Checkbox>
        <Checkbox value="02">Checkbox</Checkbox>
        <Checkbox value="03">Checkbox</Checkbox>
      </Checkbox.Group>
    </>
  );
};

export default MotoCheckBox;
