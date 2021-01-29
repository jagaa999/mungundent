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

  const prepareURL2 = (checkedValues, parameterLabel) => {
    // console.log("checkedValues", checkedValues);
    // console.log("parameterLabel", parameterLabel);
    // console.log(
    //   "productCategoryList.productCategoryList.",
    //   productCategoryList.productCategoryList
    // );

    //Category List дотроос сонгогдсон утгыг хайж олоод kpitemplateid-г олж авна. kpitemplateid-аа бас URL руу дамжуулах ёстой.
    let myKpiTemplateId = "";
    productCategoryList.productCategoryList.map((item, index) => {
      if (item.id === checkedValues) {
        myKpiTemplateId = item.kpitemplateid;
      }
    });

    filterContext.updateParams({
      [parameterLabel]: checkedValues,
      kpitemplateid: myKpiTemplateId,
    });
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
          onChange={(e) => prepareURL2(e, "itemcategoryname")} //нэмэлт параметр дамжуулж байгаа юм.
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
            filterContext.state.filterList?.itemcategoryname || undefined
          }
        >
          {productCategoryList.productCategoryList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.itemcategoryname} (KPI: {item.kpitemplateid})
            </Option>
          ))}
        </Select>

        <Divider className="gx-my-5" />

        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Энэ тасгийн тусгай шүүлтүүр
        </h6>

        <KpiFilter kpiFilterList={kpiFilterList} />

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
