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

const ProductFilter = (props) => {
  const htmlEntities = new Html5Entities();
  const auctionListContext = useContext(AuctionContext);
  const filterContext = useContext(FilterContext);

  const [productCategoryList, setProductCategoryList] = useState({
    loading: false,
    productCategoryList: [],
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
    setProductCategoryList({ ...productCategoryList, loading: true });
    setProductCategoryList({
      productCategoryList: await loadDataview({
        systemmetagroupid: "1486357548092",
        criteria: {
          parentCategoryId: [
            {
              operator: "=",
              operand: "16102833377461",
            },
          ],
        },
        paging: {
          sortColumnNames: {
            itemcategoryname: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });

    if (filterContext.state.filterList?.mglfirm) {
      setMglMarkList({ ...mglMarkList, loading: true });
      setMglMarkList({
        mglMarkList: await loadDataview({
          systemmetagroupid: "1602132873132213",
          criteria: {
            mglfirm: {
              0: {
                operator: "=",
                operand: filterContext.state.filterList?.mglfirm,
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
        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Барааны ангилал
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={productCategoryList.loading}
          showSearch
          allowClear
          placeholder="Барааны ангилал"
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
          defaultValue={filterContext.state.filterList?.mglfirm || undefined}
        >
          {productCategoryList.productCategoryList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.itemcategoryname} (KPI: {item.kpitemplateid})
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
          defaultValue={filterContext.state.filterList?.mglbody || undefined}
        >
          {mglBodyList.mglBodyList.map((item, index) => (
            <Option key={index} value={item.mglbody}>
              {item.mglbody}
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

export default ProductFilter;
