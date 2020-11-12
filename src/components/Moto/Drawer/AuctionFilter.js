import React, { useState, useEffect, useContext } from "react";
import { isEmpty } from "lodash";
import { Button, Input, Checkbox, Divider, Select, Radio } from "antd";
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
      setFrameList({ ...frameList, loading: true });
      setFrameList({
        frameList: await loadDataviewAuction({
          sql: `select kuzov from main where model_id='${filterContext.state.filterList?.model_id}' group by kuzov order by kuzov`,
        }),
        loading: false,
      });
    }

    if (filterContext.state.filterList?.kuzov) {
      setRateList({ ...rateList, loading: true });
      setRateList({
        rateList: await loadDataviewAuction({
          sql: `select rate from main where kuzov='${filterContext.state.filterList?.kuzov}' group by rate order by rate`,
        }),
        loading: false,
      });
    }

    if (filterContext.state.filterList?.kuzov) {
      setCaryearList({ ...caryearList, loading: true });
      setCaryearList({
        caryearList: await loadDataviewAuction({
          sql: `select year from main where kuzov='${filterContext.state.filterList?.kuzov}' group by year order by year`,
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

  return (
    <div className="gx-p-3" style={{ height: "100%", width: "100%" }}>
      <CustomScrollbars>
        {/* <Search
          placeholder="Гарчгаас хайх"
          onSearch={(value) => console.log(value)}
        /> */}
        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Фирм
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={firmList.loading}
          showSearch
          allowClear
          placeholder="Фирм"
          optionFilterProp="children"
          onChange={(e) => prepareURL2(e, "marka_id")} //нэмэлт параметр дамжуулж байгаа юм.
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={[filterContext.state.filterList?.marka_id || null]}
        >
          {firmList.firmList.map((item, index) => (
            <Option key={index} value={item.MARKA_ID}>
              {item.MARKA_NAME}
            </Option>
          ))}
        </Select>
        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Марк
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={markList.loading}
          showSearch
          allowClear
          placeholder="Марк"
          optionFilterProp="children"
          onChange={(e) => prepareURL2(e, "model_id")} //нэмэлт параметр дамжуулж байгаа юм.
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={[filterContext.state.filterList?.model_id || null]}
        >
          {markList.markList.map((item, index) => (
            <Option key={index} value={item.MODEL_ID}>
              {item.MODEL_NAME}
            </Option>
          ))}
        </Select>
        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Цуврал Index
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={frameList.loading}
          showSearch
          allowClear
          placeholder="Цуврал Index"
          optionFilterProp="children"
          onChange={(e) => prepareURL2(e, "kuzov")} //нэмэлт параметр дамжуулж байгаа юм.
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={[filterContext.state.filterList?.kuzov || null]}
        >
          {frameList.frameList.map((item, index) => (
            <Option key={index} value={item.KUZOV}>
              <span dangerouslySetInnerHTML={{ __html: item.KUZOV }} />
            </Option>
          ))}
        </Select>
        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Үнэлгээ
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={rateList.loading}
          showSearch
          allowClear
          placeholder="Үнэлгээ"
          optionFilterProp="children"
          onChange={(e) => prepareURL2(e, "rate")} //нэмэлт параметр дамжуулж байгаа юм.
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={[filterContext.state.filterList?.rate || null]}
        >
          {rateList.rateList.map((item, index) => (
            <Option key={index} value={item.RATE}>
              {item.RATE}
            </Option>
          ))}
        </Select>
        {/* {rateList.rateList === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
              Үнэлгээ
            </h6>
            <Checkbox.Group
              onChange={(e) => prepareURL(e, "rate")} //нэмэлт параметр дамжуулж байгаа юм.
              // className="moto-filter-checkbox"
              defaultValue={[filterContext.state.filterList?.rate || ""]}
              buttonStyle="solid"
            >
              {rateList.rateList.map((item, index) => (
                <Checkbox style={radioStyle} value={item.RATE} key={index}>
                  {item.RATE}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </>
        )} */}
        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Үйлдвэрлэсэн он
        </h6>
        <Select
          key="start-date"
          className="gx-mr-2"
          loading={caryearList.loading}
          style={{ width: 120 }}
          allowClear
          placeholder="Доод"
          onChange={(e) => prepareURL2(e, "yearstart")} //нэмэлт параметр дамжуулж байгаа юм.
          defaultValue={[filterContext.state.filterList?.yearstart || null]}
        >
          {caryearList.caryearList.map((item, index) => (
            <Option key={index} value={item.YEAR}>
              {item.YEAR}
            </Option>
          ))}
        </Select>
        <Select
          key="end-date"
          loading={caryearList.loading}
          style={{ width: 120 }}
          allowClear
          placeholder="Дээд"
          onChange={(e) => prepareURL2(e, "yearend")} //нэмэлт параметр дамжуулж байгаа юм.
          defaultValue={[filterContext.state.filterList?.yearend || null]}
        >
          {caryearList.caryearList.map((item, index) => (
            <Option key={index} value={item.YEAR}>
              {item.YEAR}
            </Option>
          ))}
        </Select>

        {isEmpty(filterContext.state.filterList) ? (
          <></>
        ) : (
          <>
            <Divider dashed className="gx-mt-5" />
            <Button
              type="dashed"
              icon={<ClearOutlined />}
              onClick={(e) => {
                filterContext.clearAll();
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

export default AuctionFilter;