import React, { useState, useEffect, useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { isEmpty } from "lodash";
import {
  Button,
  Input,
  Checkbox,
  Divider,
  Select,
  Radio,
  Row,
  Col,
} from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { Html5Entities } from "html-entities";
import { FilterTitle } from "util/textFunction";

import CustomScrollbars from "../../../util/CustomScrollbars";
import {
  LoadProcessAuction,
  loadDataviewAuction,
} from "../../../util/axiosFunctionAuction";
import { loadDataview } from "util/axiosFunction";
import FilterContext from "../../../context/FilterContext";
import CarcatalogContext from "context/CarcatalogContext";
import useDidMountEffect from "util/useDidMountEffect";

const { Search } = Input;
const { Option } = Select;

const KpiFilterCheckbox = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);
  const carCatalogContext = useContext(CarcatalogContext);
  const [selected, setSelected] = useState(
    atob(filterContext.state.filterList?.["*" + kpiFilterItem.code] || "") ||
      undefined
  );

  const carDrawer = carCatalogContext.carDrawer;
  const carDetail = carCatalogContext.carDetail.carDetail;

  const prepareURL2 = (arriveValue, parameterLabel) => {
    // const ddd = arriveValue[0];
    const ddd = arriveValue;
    // const myValue = ddd !== myDefault ? ddd : null;
    // const myValue = ddd !== selected ? ddd : null;
    const myValue = ddd;
    console.log("myValue ЗЗЗЗЗЗЗЗЗЗЗЗЗ", myValue);
    // console.log("parameterLabel", parameterLabel);
    console.log("myValue encodeURIComponent", encodeURIComponent(myValue));
    const baseEncodedValues = btoa(myValue || "");
    filterContext.updateParams({
      ["*" + parameterLabel]: baseEncodedValues,
    });
  };

  const myIndicators = Object.values(kpiFilterItem.kpiindicatorvalue);

  // let myDefault =
  //   atob(filterContext.state.filterList?.["*" + kpiFilterItem.code] || "") ||
  //   undefined;

  // console.log("ДИАМЕТР", kpiFilterItem);
  console.log("ДИАМЕТР selected", selected);
  // console.log("ДИАМЕТР myDefault", myDefault);
  // myDefault нь {"indicator_id":"16102833423851","value":"16102833423901"} ийм утгатай байгаа.
  //Тэгэхээр indicator item бүрийн code-той carDetail-ийг шалгах бололтой.
  /*Хэрвээ onlyThisCar чагттай байх аваас хэрэглэгчийн ямар шүүлтүүр хийснийг үл хамааран зөвхөн тухайн машины үзүүлэлтийг чагталъя.*/

  useDidMountEffect(() => {
    console.log("ӨӨӨӨӨӨӨӨӨӨӨӨ");
    if (carDrawer.onlyThisCar) {
      //Зөвхөн тухайн машинд гэдэг нь чагттай байна. Иймээс myDefault-ийг тухайн машины үзүүлэлтээр солино.
      if (kpiFilterItem.code === "MotoTireSizeDiameter") {
        //Дугуйн радиус R18 гэх мэт
        const carExactSpec = `R${carDetail.tire2frontdiameter}`;
        console.log("carExactSpec", carExactSpec);

        myIndicators.map((item, index) => {
          if (item.code === carExactSpec) {
            console.log("ОЛДСОН ШҮҮ", item);
            setSelected(
              JSON.stringify({
                indicator_id: item.indicatorid,
                value: item.id,
              })
            );
            // myDefault = JSON.stringify({
            //   indicator_id: item.indicatorid,
            //   value: item.id,
            // });
          }
        });
      }
    }
  }, [carDrawer.onlyThisCar]);

  useDidMountEffect(() => {
    prepareURL2(selected, kpiFilterItem.code);
    // console.log("ЭЭЭЭЭЭЭЭЭЭЭ", selected);
  }, [selected]);

  // console.log("selected", selected);

  return (
    <>
      {isBrowser && (
        <FilterTitle title={kpiFilterItem.name} className="gx-mt-4" />
      )}

      <Checkbox.Group
        style={{ width: "100%" }}
        // onChange={(e) => prepareURL2(e, kpiFilterItem.code)}
        onChange={(e) => setSelected(e)}
        // onSelect={(e) => prepareURL2(e, kpiFilterItem.code)}
        // defaultValue={myDefault}
        value={selected}
        // value={myDefault}
      >
        <Row>
          {myIndicators.map((item, index) => {
            // console.log("dddddd", item);
            //Энд Item нь бүх KPI indicator утгыг агуулж байгаа.
            // code: "R18"
            // color: ""
            // id: "16102833423911"
            // indicatorid: "16102833423851"
            // name: "R18"

            /* Ийм бүтэц бий. Эндээс бид indicatorid, id хоёрыг шүүлтүүртээ ашигладаг.
             */

            const myValue = JSON.stringify({
              indicator_id: item.indicatorid,
              value: item.id,
            });

            return (
              <Col xl={12} lg={12} md={24} sm={24} xs={24} key={index}>
                <Checkbox className="gx-fs-sm gx-my-1" value={myValue}>
                  {item.name}
                </Checkbox>
              </Col>
            );
          })}
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default KpiFilterCheckbox;
