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
  const [newsType, setNewsType] = useState([]);
  const [newsSource, setNewsSource] = useState([]);
  const [newsPublisher, setNewsPublisher] = useState([]);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

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
            <Checkbox.Group onChange={null} className="moto-filter-checkbox">
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
            <Checkbox.Group onChange={null} className="moto-filter-checkbox">
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
            <Checkbox.Group onChange={null} className="moto-filter-checkbox">
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
