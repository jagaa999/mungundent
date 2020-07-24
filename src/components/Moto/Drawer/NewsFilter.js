import React, { useState, useEffect } from "react";
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
} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import MotoCheckBox from "components/Moto/Filter/CheckBox";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import axios from "axios";

const { Search } = Input;

const NewsFilter = () => {
  const [urlParams, setUrlParams] = useState({});
  const [newsType, setNewsType] = useState([]);
  const [newsSource, setNewsSource] = useState([]);
  const [newsPublisher, setNewsPublisher] = useState([]);

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callFunctionAsync = async () => {
    await loadDataview(newsType, setNewsType, {
      systemmetagroupid: "1587100905303413",
    });
    await loadDataview(newsSource, setNewsSource, {
      systemmetagroupid: "1585046479054",
    });
    await loadDataview(newsPublisher, setNewsPublisher, {
      systemmetagroupid: "1585046481242",
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const prepareURL = (checkedValues, parameterLabel) => {
    // console.log("gotoURL дарагдлаа-------> ", checkedValues);
    // console.log("gotoURL дарагдлаа-------> ", parameterLabel);

    const param = checkedValues
      .map(function (itemvalue) {
        return encodeURIComponent(itemvalue);
      })
      .join(",");

    const tempObject = {
      [parameterLabel]: param,
    };

    setUrlParams({ ...urlParams, ...tempObject });
  };

  useEffect(() => {
    console.log("ЭНД ӨӨРЧЛӨЛТ ОРЖ БАЙНА");
    // Энд Search Query-ээ тохируулна
    const mySearchQuery = "";
    Object.keys(urlParams).map((item) => {
      return;
    });
  }, [urlParams]);

  return (
    <div className="gx-p-3" style={{ height: "100%", width: "100%" }}>
      <CustomScrollbars>
        <Search
          placeholder="Гарчгаас хайх"
          onSearch={(value) => console.log(value)}
        />
        {newsType === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase">Төрөл</h6>

            <Checkbox.Group
              onChange={(e) => prepareURL(e, "newstypeid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
            >
              {newsType.map((item) => (
                <Checkbox value={item.newstypeid}>
                  {/* <div>
                    <span className="gx-d-flex"> */}

                  {item.newstypename}
                  <span className="gx-fs-sm gx-text-light gx-ml-3">
                    {item.count}
                  </span>

                  {/* </span>
                  </div> */}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </>
        )}
        {newsSource === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase">Эх сурвалж</h6>
            <Checkbox.Group
              onChange={(e) => prepareURL(e, "newssourceid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
            >
              {newsSource.map((item) => (
                <Checkbox value={item.newssourceid}>
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
            <h6 className="gx-my-3 gx-text-uppercase">Нийтлэгч</h6>
            <Checkbox.Group
              onChange={(e) => prepareURL(e, "publisherid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
            >
              {newsPublisher.map((item) => (
                <Checkbox value={item.publisherid}>
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
      </CustomScrollbars>
    </div>
  );
};

export default NewsFilter;
