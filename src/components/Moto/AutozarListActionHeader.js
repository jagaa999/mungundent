import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Button, PageHeader } from "antd";
import { PlusOutlined, FilterOutlined } from "@ant-design/icons";
import MyIcon from "util/iconFunction";

import FilterContext from "context/FilterContext";
import AutozarContext from "context/AutozarContext";
import MotoSort from "./Sort/MotoSort";

const AutozarListActionHeader = (props) => {
  const filterContext = useContext(FilterContext);
  const autozarContext = useContext(AutozarContext);
  const history = useHistory();

  const toggleFilterDrawer = () => {
    autozarContext.toggleFilterDrawerOpen();
  };

  return (
    <>
      <PageHeader
        className="moto-pageheader"
        title={
          <h3>
            {props.title}
            {filterContext.totalcount > 0 ? (
              <span className="gx-ml-2 gx-text-grey gx-fs-sm">
                ({filterContext.totalcount})
              </span>
            ) : (
              ""
            )}
          </h3>
        }
        extra={[
          // <Button
          //   key="moto-filter-button"
          //   size="small"
          //   icon={<MyIcon type="iconfilter" />}
          //   onClick={toggleFilterDrawer}
          //   className="gx-mr-0"
          // >
          //   Шүүлтүүр
          // </Button>,

          <Link
            key="keyautozarinsertbutton"
            to={"/autozar/insert"}
            className="gx-ml-1 gx-mr-0"
          >
            <Button
              size="small"
              icon={<PlusOutlined />}
              className="gx-btn-success"
            >
              Автозар
            </Button>
          </Link>,

          // <MotoSort key="motosort" />,
        ]}
      ></PageHeader>
    </>
  );
};

export default AutozarListActionHeader;
