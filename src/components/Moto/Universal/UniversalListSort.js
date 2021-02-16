import React, { useState, useContext, useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Menu, Dropdown, Button, Radio } from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  UnorderedListOutlined,
  CreditCardOutlined,
  TableOutlined,
} from "@ant-design/icons";
import MyIcon from "util/iconFunction";

import FilterContext from "context/FilterContext";
import AutozarContext from "context/AutozarContext";
import useDidMountEffect from "util/useDidMountEffect";

const UniversalListSort = ({ mySettings }) => {
  const filterContext = useContext(FilterContext);
  const autozarContext = useContext(AutozarContext);

  const [selectedKeys, setSelectedKeys] = useState([
    filterContext.state.sorting.sortcolumnnames ||
      mySettings.sortFields[0].field,
    filterContext.state.cardtype.cardtype || "typecard",
  ]);
  const [sortDirection, setSortDirection] = useState(
    filterContext.state.sorting.sorttype || "DESC"
  );

  useDidMountEffect(() => {
    //Анхны render дээр ажиллахгүй. https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
    // console.log("Sort-ийн useDidMountEffect ажиллаж байгаа эсэх??");
    filterContext.updateParams({
      sortcolumnnames: selectedKeys[0],
      sorttype: sortDirection,
      cardtype: selectedKeys[1],
    });
  }, [selectedKeys, sortDirection]);

  const onChangeSort = (item) => {
    // console.log(item);
    // if (item.key !== selectedKeys[0]) {
    if (item.key !== selectedKeys[0]) {
      // console.log("tempStrtempStr", tempStr);
      setSelectedKeys([item.key, selectedKeys[1]]);
    } else {
      // console.log("ddddddddddd", sortDirection);
      const mySort = sortDirection === "DESC" ? "ASC" : "DESC";
      // console.log("mySort", mySort);
      setSortDirection(mySort);
    }
  };

  const onChangeType = (item) => {
    // console.log("keyPathkeyPath", item.key, " - ", selectedKeys[1]);
    if (item.key !== selectedKeys[1]) {
      setSelectedKeys([selectedKeys[0], item.key]);
    }
  };

  const onChangeTypeRadio = (e) => {
    // console.log("ttttt", e.target.value);
    if (e.target.value !== selectedKeys[1]) {
      // console.log("tempStrtempStr", tempStr);
      setSelectedKeys([selectedKeys[0], e.target.value]);
    }
  };

  const Sort = (props) => {
    // if (props.ddd === selectedKeys[0]) {
    if (selectedKeys.indexOf(props.ddd) > -1) {
      if (sortDirection === "DESC") {
        return <CaretDownOutlined className="gx-ml-auto gx-pl-3" />;
      } else {
        return <CaretUpOutlined className="gx-ml-auto gx-pl-3" />;
      }
    } else {
      return null;
    }
  };

  const menu = (
    <Menu selectable={true} selectedKeys={selectedKeys}>
      <Menu.ItemGroup key="sort1" title="Эрэмбэ">
        {mySettings.sortFields.map((item, index) => {
          return (
            <Menu.Item key={item.field} onClick={onChangeSort}>
              {item.label} <Sort ddd={item.field} />
            </Menu.Item>
          );
        })}
      </Menu.ItemGroup>
      <Menu.ItemGroup
        key="type1"
        title="Төрөл"
        className="gx-mt-3 gx-text-grey"
      >
        <Menu.Item
          key="typelist"
          onClick={onChangeType}
          icon={<MyIcon type="iconlistlist" />}
        >
          Жагсаалт
        </Menu.Item>
        <Menu.Item
          key="typecard"
          onClick={onChangeType}
          icon={<MyIcon type="iconlistcard" />}
        >
          Карт
        </Menu.Item>
        <Menu.Item
          key="typetable"
          onClick={onChangeType}
          icon={<MyIcon type="iconlisttable" />}
        >
          Хүснэгт
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button
          // type="primary"
          size={isBrowser ? "default" : "small"}
          onClick={(e) => e.preventDefault()}
          className="gx-mr-0 gx-ml-2 gx-btn-white"
          icon={<MyIcon type="iconellipsis-h-solid" />}
        />
      </Dropdown>

      {/* <Radio.Group
        className="gx-ml-2"
        defaultValue={selectedKeys[1]}
        buttonStyle="solid"
        // buttonStyle="outline"
        size={isBrowser ? "default" : "small"}
        onChange={onChangeTypeRadio}
      >
        <Radio.Button value="typelist">
          <MyIcon
            type="iconlistlist"
            className={isBrowser && "moto-icon-1-3"}
          />
        </Radio.Button>
        <Radio.Button value="typecard">
          <MyIcon
            type="iconlistcard"
            className={isBrowser && "moto-icon-1-3"}
          />
        </Radio.Button>
        <Radio.Button value="typetable">
          <MyIcon
            type="iconlisttable"
            className={isBrowser && "moto-icon-1-3"}
          />
        </Radio.Button>
      </Radio.Group> */}
    </>
  );
};

export default UniversalListSort;
