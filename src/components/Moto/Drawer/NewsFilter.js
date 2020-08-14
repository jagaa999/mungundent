import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory, Link, useLocation } from "react-router-dom";
import { parse } from "query-string";
import { isEmpty } from "lodash";

import {
  Badge,
  Button,
  Drawer,
  Radio,
  Input,
  Checkbox,
  Space,
  Row,
  Col,
  Divider,
} from "antd";
import { ClearOutlined } from "@ant-design/icons";
import CustomScrollbars from "util/CustomScrollbars";
import MotoCheckBox from "components/Moto/Filter/CheckBox";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";

const { Search } = Input;

const NewsFilter = (props) => {
  const newsListContext = useContext(NewsListContext);
  const newsFilterContext = useContext(FilterContext);

  const [newsType, setNewsType] = useState([]);
  const [newsSource, setNewsSource] = useState([]);
  const [newsPublisher, setNewsPublisher] = useState([]);

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callAllDataAsync = async () => {
    setNewsType(
      await loadDataview({
        systemmetagroupid: "1587100905303413",
        criteria: newsListContext.state.loadParams.criteria,
      })
    );
    setNewsSource(
      await loadDataview({
        systemmetagroupid: "1585046479054",
        criteria: newsListContext.state.loadParams.criteria,
      })
    );
    setNewsPublisher(
      await loadDataview({
        systemmetagroupid: "1585046481242",
        criteria: newsListContext.state.loadParams.criteria,
      })
    );
  };

  useEffect(() => {
    callAllDataAsync();
    console.log(
      "newsListContext.state.loadParams.criterianewsListContext.state.loadParams.criterianewsListContext.state.loadParams.criteria",
      newsListContext.state.loadParams.criteria
    );
    // setDidMount(true); //first render-ийг илрүүлэхийн төлөө
  }, [newsListContext.state.loadParams.criteria]);

  const prepareURL = (checkedValues, parameterLabel) => {
    const param = checkedValues
      .map(function (itemvalue) {
        return encodeURIComponent(itemvalue);
      })
      .join("|");

    const tempObject = {
      [parameterLabel]: param,
    };

    // console.log("tempObjecttempObject", tempObject);
    newsFilterContext.updateParams(tempObject);
  };

  return (
    <div className="gx-p-3" style={{ height: "100%", width: "100%" }}>
      <CustomScrollbars>
        {/* <Search
          placeholder="Гарчгаас хайх"
          onSearch={(value) => console.log(value)}
        /> */}

        {newsType === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
              Төрөл
            </h6>

            <Checkbox.Group
              onChange={(e) => prepareURL(e, "newstypeid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
              defaultValue={[
                newsFilterContext.state.filterList?.newstypeid || "",
              ]}
            >
              {newsType.map((item) => (
                <Checkbox
                  value={item.newstypeid}
                  key={item.newstypeid}
                  checked={true}
                >
                  {item.newstypename}
                  <span className="gx-fs-sm gx-text-light gx-ml-3">
                    {item.count}
                  </span>
                </Checkbox>
              ))}
            </Checkbox.Group>
          </>
        )}
        {newsSource === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
              Эх сурвалж
            </h6>
            <Checkbox.Group
              onChange={(e) => prepareURL(e, "newssourceid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
              defaultValue={[
                newsFilterContext.state.filterList?.newssourceid || "",
              ]}
            >
              {newsSource.map((item) => (
                <Checkbox value={item.newssourceid} key={item.newssourceid}>
                  {item.newssourcename}
                  <span className="gx-fs-sm gx-text-light gx-ml-3">
                    {item.count}
                  </span>
                </Checkbox>
              ))}
            </Checkbox.Group>
          </>
        )}

        {newsPublisher === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
              Нийтлэгч
            </h6>
            <Checkbox.Group
              onChange={(e) => prepareURL(e, "publisherid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
              defaultValue={[
                newsFilterContext.state.filterList?.publisherid || "",
              ]}
            >
              {newsPublisher.map((item) => (
                <Checkbox value={item.publisherid} key={item.publisherid}>
                  {item.publishername}
                  <span className="gx-fs-sm gx-text-light gx-ml-3">
                    {item.publishercount}
                  </span>
                </Checkbox>
              ))}
            </Checkbox.Group>
          </>
        )}

        {/* <MotoCheckBox title="Нийтлэлийн төрөл" /> */}
        {/* <MotoCheckBox title="Нийтлэгч" /> */}

        {isEmpty(newsFilterContext.state.filterList) ? (
          <></>
        ) : (
          <>
            <Divider dashed className="gx-mt-5" />
            <Button
              type="dashed"
              icon={<ClearOutlined />}
              onClick={(e) => {
                newsFilterContext.clearAll();
              }}
            >
              Арилгах
            </Button>
          </>
        )}
      </CustomScrollbars>
    </div>
  );
};

export default NewsFilter;
