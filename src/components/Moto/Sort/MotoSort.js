import React, { useState, useContext, useEffect } from "react";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import FilterContext from "context/FilterContext";
import NewsListContext from "context/NewsListContext";
import useDidMountEffect from "util/useDidMountEffect";

const MotoSort = () => {
  const filterContext = useContext(FilterContext);
  const newsListContext = useContext(NewsListContext);

  const [selectedKeys, setSelectedKeys] = useState([
    filterContext.state.sorting.sortcolumnnames || "publisheddate",
    filterContext.state.cardtype.cardtype || "typelist",
  ]);
  const [sortDirection, setSortDirection] = useState(
    filterContext.state.sorting.sorttype || "DESC"
  );

  useDidMountEffect(() => {
    //Анхны render дээр ажиллахгүй. https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
    console.log("Sort-ийн useDidMountEffect ажиллаж байгаа эсэх??");
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
      console.log("ddddddddddd", sortDirection);
      const mySort = sortDirection === "DESC" ? "ASC" : "DESC";
      console.log("mySort", mySort);
      setSortDirection(mySort);
    }
  };

  const onChangeType = (item) => {
    console.log("keyPathkeyPath", item.key, " - ", selectedKeys[1]);
    if (item.key !== selectedKeys[1]) {
      // console.log("tempStrtempStr", tempStr);
      setSelectedKeys([selectedKeys[0], item.key]);
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
        <Menu.Item key="publisheddate" onClick={onChangeSort}>
          Огноогоор <Sort ddd="publisheddate" />
        </Menu.Item>
        <Menu.Item key="title" onClick={onChangeSort}>
          Гарчгаар <Sort ddd="title" />
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="type1" title="Төрөл">
        <Menu.Item key="typelist" onClick={onChangeType}>
          Жагсаалт
        </Menu.Item>
        <Menu.Item key="typecard" onClick={onChangeType}>
          Карт
        </Menu.Item>
        <Menu.Item key="typetable" onClick={onChangeType}>
          Хүснэгт
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button
        size="small"
        className="gx-bg-grey gx-border-grey"
        onClick={(e) => e.preventDefault()}
      >
        Эрэмбэ <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default MotoSort;
