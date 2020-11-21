import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Button, PageHeader } from "antd";
import { PlusOutlined, FilterOutlined } from "@ant-design/icons";

import FilterContext from "context/FilterContext";
import NewsListContext from "context/NewsListContext";
import MotoSort from "./Sort/MotoSort";

const NewsListIActionHeader = (props) => {
  const filterContext = useContext(FilterContext);
  const newsListContext = useContext(NewsListContext);
  const history = useHistory();

  const toggleFilterDrawer = () => {
    newsListContext.toggleFilterDrawerOpen();
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
          <Button
            key="moto-filter-button"
            size="small"
            // type="primary"
            icon={
              // <i className="icon icon-filter moto-animation-away gx-mr-1" />
              <FilterOutlined />
            }
            onClick={toggleFilterDrawer}
            className="gx-mr-0"
          >
            Шүүлтүүр
          </Button>,

          <Link
            key="keynewsinsertbutton"
            to={"/news/insert"}
            className="gx-ml-1 gx-mr-0"
          >
            <Button
              size="small"
              icon={<PlusOutlined />}
              className="gx-btn-success"
            >
              Нийтлэл
            </Button>
          </Link>,

          <MotoSort key="motosort" />,
        ]}
      ></PageHeader>

      {/* <div className="gx-mb-3">
        <div className="gx-text-grey gx-fs-sm gx-mr-2 gx-mb-2">Шүүлтүүр</div>
        <div>
          <Input.Group compact></Input.Group>
        </div>
      </div> */}
    </>
  );
};

export default NewsListIActionHeader;
