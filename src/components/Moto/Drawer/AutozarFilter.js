import React, { useState, useEffect, useContext } from "react";
import { isEmpty } from "lodash";
import { Button, Input, Checkbox, Divider, Select, Radio } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { Html5Entities } from "html-entities";

import CustomScrollbars from "../../../util/CustomScrollbars";
import {
  LoadProcessAuction,
  loadDataviewAuction,
} from "../../../util/axiosFunctionAuction";
import { loadDataview } from "util/axiosFunction";

import AuctionContext from "../../../context/AuctionContext";
import FilterContext from "../../../context/FilterContext";

const { Search } = Input;
const { Option } = Select;

const AutozarFilter = (props) => {
  const htmlEntities = new Html5Entities();
  const auctionListContext = useContext(AuctionContext);
  const filterContext = useContext(FilterContext);

  const [mglFirmList, setMglFirmList] = useState({
    loading: false,
    mglFirmList: [],
  });
  const [mglMarkList, setMglMarkList] = useState({
    loading: false,
    mglMarkList: [],
  });
  const [mglBodyList, setMglBodyList] = useState({
    loading: false,
    mglBodyList: [],
  });

  const callAllDataAsync = async () => {
    setMglFirmList({ ...mglFirmList, loading: true });
    setMglFirmList({
      mglFirmList: await loadDataview({
        systemmetagroupid: "1602132741145717",
        paging: {
          sortColumnNames: {
            mglfirm: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });

    if (filterContext.urlSetting.filterList?.mglfirm) {
      setMglMarkList({ ...mglMarkList, loading: true });
      setMglMarkList({
        mglMarkList: await loadDataview({
          systemmetagroupid: "1602132873132213",
          criteria: {
            mglfirm: {
              0: {
                operator: "=",
                operand: filterContext.urlSetting.filterList?.mglfirm,
              },
            },
          },
          paging: {
            sortColumnNames: {
              mglmark: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }

    setMglBodyList({ ...mglBodyList, loading: true });
    setMglBodyList({
      mglBodyList: await loadDataview({
        systemmetagroupid: "1599557926832",
      }),
      loading: false,
    });

    // if (filterContext.urlSetting.filterList?.model_id) {
    //   setCaryearList({ ...caryearList, loading: true });
    //   setCaryearList({
    //     caryearList: await loadDataviewAuction({
    //       sql: `select year from main ${auctionListContext.auctionList.where} group by year order by year`,
    //     }),
    //     loading: false,
    //   });
    // }
  };

  useEffect(() => {
    callAllDataAsync();
    // setDidMount(true); //first render-ийг илрүүлэхийн төлөө
  }, [filterContext.urlSetting.filterList]);

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
          loading={mglFirmList.loading}
          showSearch
          allowClear
          placeholder="Фирм"
          optionFilterProp="children"
          onChange={(e) => prepareURL2(e, "mglfirm")} //нэмэлт параметр дамжуулж байгаа юм.
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={
            filterContext.urlSetting.filterList?.mglfirm || undefined
          }
        >
          {mglFirmList.mglFirmList.map((item, index) => (
            <Option key={index} value={item.mglfirm}>
              {item.mglfirm}
            </Option>
          ))}
        </Select>

        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Марк
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={mglMarkList.loading}
          showSearch
          allowClear
          placeholder="Марк"
          onChange={(e) => prepareURL2(e, "mglmark")} //нэмэлт параметр дамжуулж байгаа юм.
          optionFilterProp="children"
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={
            filterContext.urlSetting.filterList?.mglmark || undefined
          }
        >
          {mglMarkList.mglMarkList.map((item, index) => (
            <Option key={index} value={item.mglmark}>
              {item.mglmark}
            </Option>
          ))}
        </Select>

        <Divider className="gx-my-5" />

        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Хийц
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={mglBodyList.loading}
          allowClear
          placeholder="Арал"
          onChange={(e) => prepareURL2(e, "mglbody")} //нэмэлт параметр дамжуулж байгаа юм.
          optionFilterProp="children"
          showSearch
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={
            filterContext.urlSetting.filterList?.mglbody || undefined
          }
        >
          {mglBodyList.mglBodyList.map((item, index) => (
            <Option key={index} value={item.mglbody}>
              {item.mglbody}
            </Option>
          ))}
        </Select>

        {/* <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
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
          optionFilterProp="children"
          showSearch
          filterOption={(input, option) => {
            if (option.value) {
              return option.children.indexOf(input) >= 0;
            } else {
              return false;
            }
          }}
          defaultValue={filterContext.urlSetting.filterList?.yearstart || undefined}
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
          optionFilterProp="children"
          showSearch
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={filterContext.urlSetting.filterList?.yearend || undefined}
        >
          {caryearList.caryearList.map((item, index) => (
            <Option key={index} value={item.YEAR}>
              {item.YEAR}
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
          defaultValue={filterContext.urlSetting.filterList?.rate || undefined}
        >
          {rateList.rateList.map((item, index) => (
            <Option key={index} value={item.RATE}>
              {item.RATE}
            </Option>
          ))}
        </Select> */}

        {isEmpty(filterContext.urlSetting.filterList) ? (
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

export default AutozarFilter;
