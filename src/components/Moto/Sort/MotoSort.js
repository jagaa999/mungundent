import React, { useState, useContext, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import {
  DownOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import FilterContext from "context/FilterContext";
import NewsListContext from "context/NewsListContext";
import useDidMountEffect from "util/useDidMountEffect";

const MotoSort = () => {
  const filterContext = useContext(FilterContext);
  const newsListContext = useContext(NewsListContext);

  const [selectedKeys, setSelectedKeys] = useState(["publisheddate"]);
  const [sortDirection, setSortDirection] = useState("DESC");

  useDidMountEffect(() => {
    //Анхны render дээр ажиллахгүй. https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
    filterContext.updateParams({
      sortcolumnnames: selectedKeys[0],
      sorttype: sortDirection,
    });
  }, [selectedKeys, sortDirection]);

  const onClick = (item) => {
    // console.log("keyPathkeyPath", item);
    if (item.key !== selectedKeys[0]) {
      setSelectedKeys(item.keyPath);
    } else {
      const mySort = sortDirection === "DESC" ? "ASC" : "DESC";
      setSortDirection(mySort);
    }
  };

  const Sort = (props) => {
    if (props.ddd === selectedKeys[0]) {
      if (sortDirection === "desc") {
        return <CaretDownOutlined className="gx-ml-auto gx-pl-3" />;
      } else {
        return <CaretUpOutlined className="gx-ml-auto gx-pl-3" />;
      }
    } else {
      return null;
    }
  };

  const menu = (
    <Menu selectable={true} selectedKeys={selectedKeys} onClick={onClick}>
      <Menu.Item key="publisheddate">
        Огноогоор <Sort ddd="publisheddate" />
      </Menu.Item>
      <Menu.Item key="title">
        Гарчгаар <Sort ddd="title" />
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Эрэмбэ
        </a>
      </Dropdown>
    </div>
  );
};

export default MotoSort;
