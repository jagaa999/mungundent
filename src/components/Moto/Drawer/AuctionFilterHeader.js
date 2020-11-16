import React, { useState, useEffect, useContext } from "react";
import { isEmpty } from "lodash";
import { Button, Input, Divider, Select, Tooltip } from "antd";
import { ClearOutlined } from "@ant-design/icons";

import CustomScrollbars from "../../../util/CustomScrollbars";
import {
  LoadProcessAuction,
  loadDataviewAuction,
} from "../../../util/axiosFunctionAuction";
import AuctionContext from "../../../context/AuctionContext";
import FilterContext from "../../../context/FilterContext";

const { Search } = Input;
const { Option } = Select;

const AuctionFilter = (props) => {
  const auctionListContext = useContext(AuctionContext);
  const filterContext = useContext(FilterContext);

  const [firmList, setFirmList] = useState({
    firmList: [],
    loading: false,
  });
  const [markList, setMarkList] = useState({
    markList: [],
    loading: false,
  });
  const [frameList, setFrameList] = useState({
    frameList: [],
    loading: false,
  });
  const [rateList, setRateList] = useState({
    rateList: [],
    loading: false,
  });
  const [caryearList, setCaryearList] = useState({
    caryearList: [],
    loading: false,
  });

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callAllDataAsync = async () => {
    setFirmList({ ...firmList, loading: true });
    setFirmList({
      firmList: await loadDataviewAuction({
        sql:
          "select marka_id,marka_name from main group by marka_id order by marka_id ASC",
      }),
      loading: false,
    });

    if (filterContext.state.filterList?.marka_id) {
      setMarkList({ ...markList, loading: true });
      setMarkList({
        markList: await loadDataviewAuction({
          sql:
            // "select marka_id,marka_name from main group by marka_id order by marka_id ASC",
            // "select model_id,model_name,COUNT(model_id) from stats where marka_name='toyota' group by model_id order by model_name",
            `select model_id,model_name from main where marka_id='${filterContext.state.filterList?.marka_id}' group by model_name order by model_id`,
          // "select model_id,model_name from main where marka_id=2 group by model_name order by model_name",
        }),
        loading: false,
      });
    }

    if (filterContext.state.filterList?.model_id) {
      setCaryearList({ ...caryearList, loading: true });
      setCaryearList({
        caryearList: await loadDataviewAuction({
          sql: `select year from main where model_id='${filterContext.state.filterList?.model_id}' group by year order by year`,
        }),
        loading: false,
      });
    }

    if (filterContext.state.filterList?.model_id) {
      setFrameList({ ...frameList, loading: true });
      setFrameList({
        frameList: await loadDataviewAuction({
          sql: `select kuzov from main where model_id='${filterContext.state.filterList?.model_id}' group by kuzov order by kuzov`,
        }),
        loading: false,
      });
    }

    if (filterContext.state.filterList?.model_id) {
      setRateList({ ...rateList, loading: true });
      setRateList({
        rateList: await loadDataviewAuction({
          sql: `select rate from main where model_id='${filterContext.state.filterList?.model_id}' group by rate order by rate`,
        }),
        loading: false,
      });
    }
  };

  useEffect(() => {
    callAllDataAsync();
    // setDidMount(true); //first render-ийг илрүүлэхийн төлөө
  }, [filterContext.state.filterList]);

  const prepareURL = (checkedValues, parameterLabel) => {
    console.log("checkedValues", checkedValues);

    //multiple values || checkbox etc
    const param = checkedValues
      .map(function (itemvalue) {
        return encodeURIComponent(itemvalue);
      })
      .join("|");

    const tempObject = {
      [parameterLabel]: param,
    };

    filterContext.updateParams(tempObject);
  };

  const prepareURL2 = (checkedValues, parameterLabel) => {
    console.log("checkedValues", checkedValues);

    //multiple values || checkbox etc
    console.log("checkedValues", checkedValues);
    console.log("parameterLabel", parameterLabel);

    const tempObject = {
      [parameterLabel]: checkedValues,
    };

    // console.log("tempObjecttempObject", tempObject);
    filterContext.updateParams(tempObject);
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  // console.log("rateList", rateList);
  // console.log("caryearList", caryearList);

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #

  return (
    <div className="gx-mb-3">
      <div className="gx-text-grey gx-fs-sm gx-mr-2 gx-mb-2">Шүүлтүүр</div>
      <div>
        <Input.Group compact>
          <Select
            style={{ width: "175px" }}
            loading={firmList.loading}
            showSearch
            allowClear
            placeholder="Фирм"
            optionFilterProp="children"
            onChange={(e) => prepareURL2(e, "marka_id")} //нэмэлт параметр дамжуулж байгаа юм.
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                );
              } else {
                return false;
              }
            }}
            defaultValue={filterContext.state.filterList?.marka_id || undefined}
            // defaultValue={undefined}
          >
            {firmList.firmList.map((item, index) => (
              <Option key={index} value={item.MARKA_ID}>
                {item.MARKA_NAME}
              </Option>
            ))}
          </Select>
          <Select
            style={{ width: "175px" }}
            loading={markList.loading}
            showSearch
            allowClear
            placeholder="Марк"
            optionFilterProp="children"
            onChange={(e) => prepareURL2(e, "model_id")} //нэмэлт параметр дамжуулж байгаа юм.
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                );
              } else {
                return false;
              }
            }}
            defaultValue={filterContext.state.filterList?.model_id || undefined}
          >
            {markList.markList.map((item, index) => (
              <Option key={index} value={item.MODEL_ID}>
                {item.MODEL_NAME}
              </Option>
            ))}
          </Select>
        </Input.Group>
      </div>
      {filterContext.state.filterList?.model_id !== undefined && (
        <div className="gx-mt-2">
          <Input.Group compact>
            <Select
              key="start-date"
              style={{ width: "95px" }}
              loading={caryearList.loading}
              allowClear
              placeholder="Доод жил"
              onChange={(e) => prepareURL2(e, "yearstart")} //нэмэлт параметр дамжуулж байгаа юм.
              defaultValue={
                filterContext.state.filterList?.yearstart || undefined
              }
            >
              {caryearList.caryearList.map((item, index) => (
                <Option key={index} value={item.YEAR}>
                  {item.YEAR}
                </Option>
              ))}
            </Select>
            <Select
              key="end-date"
              style={{ width: "95px" }}
              loading={caryearList.loading}
              allowClear
              placeholder="Дээд жил"
              onChange={(e) => prepareURL2(e, "yearend")} //нэмэлт параметр дамжуулж байгаа юм.
              defaultValue={
                filterContext.state.filterList?.yearend || undefined
              }
            >
              {caryearList.caryearList.map((item, index) => (
                <Option key={index} value={item.YEAR}>
                  {item.YEAR}
                </Option>
              ))}
            </Select>

            <Select
              className="gx-ml-1"
              // style={{ minWidth: "120px" }}
              loading={frameList.loading}
              showSearch
              allowClear
              placeholder="Арал"
              optionFilterProp="children"
              onChange={(e) => prepareURL2(e, "kuzov")} //нэмэлт параметр дамжуулж байгаа юм.
              filterOption={(input, option) => {
                if (option.value) {
                  return (
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  );
                } else {
                  return false;
                }
              }}
              defaultValue={filterContext.state.filterList?.kuzov || undefined}
            >
              {frameList.frameList.map((item, index) => (
                <Option key={index} value={item.KUZOV}>
                  <span dangerouslySetInnerHTML={{ __html: item.KUZOV }} />
                </Option>
              ))}
            </Select>
            <Select
              // className="moto-select-firm gx-mr-3"
              // style={{ minWidth: "120px" }}
              loading={rateList.loading}
              showSearch
              allowClear
              placeholder="Үнэлгээ"
              optionFilterProp="children"
              onChange={(e) => prepareURL2(e, "rate")} //нэмэлт параметр дамжуулж байгаа юм.
              filterOption={(input, option) => {
                if (option.value) {
                  return (
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  );
                } else {
                  return false;
                }
              }}
              defaultValue={filterContext.state.filterList?.rate || undefined}
            >
              {rateList.rateList.map((item, index) => (
                <Option key={index} value={item.RATE}>
                  {item.RATE}
                </Option>
              ))}
            </Select>

            {isEmpty(filterContext.state.filterList) ? (
              <></>
            ) : (
              <>
                <Button
                  // shape="circle"
                  // className="gx-m-0"
                  icon={<ClearOutlined />}
                  onClick={(e) => {
                    filterContext.clearAll();
                  }}
                />
              </>
            )}
          </Input.Group>
        </div>
      )}
    </div>
  );
};

export default AuctionFilter;
