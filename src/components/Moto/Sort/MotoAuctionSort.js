import React, { useState, useContext, useEffect } from "react";
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
import NewsContext from "context/NewsContext";
import useDidMountEffect from "util/useDidMountEffect";

const MotoSort = () => {
  const filterContext = useContext(FilterContext);
  const newsListContext = useContext(NewsContext);

  const [selectedKeys, setSelectedKeys] = useState([
    filterContext.state.sorting.sortcolumnnames || "YEAR",
    filterContext.state.cardtype.cardtype || "typetable",
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
    console.log(item);
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
        <Menu.Item key="YEAR" onClick={onChangeSort}>
          Оноор <Sort ddd="YEAR" />
        </Menu.Item>
        <Menu.Item key="RATE" onClick={onChangeSort}>
          Үнэлгээгээр <Sort ddd="RATE" />
        </Menu.Item>
        <Menu.Item key="MILEAGE" onClick={onChangeSort}>
          Гүйлтээр <Sort ddd="MILEAGE" />
        </Menu.Item>
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
          size="small"
          onClick={(e) => e.preventDefault()}
          className="gx-mr-0 gx-ml-1"
        >
          Эрэмбэ
          <CaretDownOutlined />
        </Button>
      </Dropdown>

      <Radio.Group
        className="gx-ml-1 JOY-STEP-CARDTYPE"
        defaultValue={selectedKeys[1]}
        buttonStyle="solid"
        size="small"
        onChange={onChangeTypeRadio}
      >
        <Radio.Button value="typelist">
          <MyIcon type="iconlistlist" />
        </Radio.Button>
        <Radio.Button value="typecard">
          <MyIcon type="iconlistcard" />
        </Radio.Button>
        <Radio.Button value="typetable">
          <MyIcon type="iconlisttable" />
        </Radio.Button>
      </Radio.Group>
    </>
  );
};

export default MotoSort;
