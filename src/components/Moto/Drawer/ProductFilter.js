import React, { useState, useEffect, useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { isEmpty } from "lodash";
import { Button, Input, Checkbox, Divider, Select, Radio } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { Html5Entities } from "html-entities";

import MyIcon from "util/iconFunction";

import CustomScrollbars from "../../../util/CustomScrollbars";
import {
  LoadProcessAuction,
  loadDataviewAuction,
} from "../../../util/axiosFunctionAuction";
import { loadDataview } from "util/axiosFunction";

import ProductContext from "../../../context/ProductContext";
import FilterContext from "../../../context/FilterContext";
import KpiFilter from "./KpiFilter";

const { Search } = Input;
const { Option } = Select;

const ProductFilter = (props) => {
  const htmlEntities = new Html5Entities();
  const productContext = useContext(ProductContext);
  const filterContext = useContext(FilterContext);

  const { kpiFilterList } = productContext;

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
  };

  useEffect(() => {
    callAllDataAsync();
    // setDidMount(true); //first render-ийг илрүүлэхийн төлөө
  }, [filterContext.state.filterList]);

  const changeCategory = (checkedValues, parameterLabel) => {
    //Category List дотроос сонгогдсон утгыг хайж олоод kpitemplateid-г олж авна. kpitemplateid-аа бас URL руу дамжуулах ёстой.
    let myKpiTemplateId = "";
    productCategoryList.productCategoryList.map((item, index) => {
      if (item.id === checkedValues) {
        myKpiTemplateId = item.kpitemplateid;
      }
    });

    // filterContext.clearAll();

    filterContext.updateParams(
      {
        [parameterLabel]: checkedValues,
        kpitemplateid: myKpiTemplateId,
      },
      true
    );
  };

  // console.log("kpiFilterList", kpiFilterList);

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #
  return (
    <div className="gx-p-0" style={{ height: "100%", width: "99%" }}>
      <CustomScrollbars className="gx-p-1">
        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Ангилал
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={productCategoryList.loading}
          showSearch
          allowClear
          placeholder="Барааны ангилал"
          optionFilterProp="children"
          onChange={(e) => changeCategory(e, "itemcategoryid")} //нэмэлт параметр дамжуулж байгаа юм.
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
            filterContext.state.filterList?.itemcategoryid || undefined
          }
        >
          {productCategoryList.productCategoryList.map((item, index) => (
            <Option key={index} value={item.id}>
              {/* {item.itemcategoryname} (KPI: {item.kpitemplateid}) */}
              {item.itemcategoryname}
            </Option>
          ))}
        </Select>

        {!isEmpty(kpiFilterList.kpiFilterList) && (
          <>
            <h6 className="gx-mt-5 gx-mb-3 gx-text-uppercase gx-text-orange">
              Тусгай шүүлтүүр
            </h6>

            <KpiFilter kpiFilterList={kpiFilterList} />
          </>
        )}

        {isEmpty(filterContext.state.filterList) ? (
          <></>
        ) : (
          <>
            <Divider dashed className="gx-mt-5" />
            <Button
              type="dashed"
              size={isBrowser ? "default" : "small"}
              icon={<MyIcon type="icontrash-alt-solid" />}
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
