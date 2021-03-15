import React, { useState, useEffect, useContext } from "react";
import { Card, Tooltip } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import { FilterTitle } from "util/textFunction";
import FilterContext from "context/FilterContext";

const FilterRadioButton2 = ({
  metaListId,
  title,
  placeholder,
  urlparamfield,
  labelfield,
  valuefield,
}) => {
  const filterContext = useContext(FilterContext);

  const [myData, setMyData] = useState({
    loading: true,
    myList: [],
  });

  const callAllDataAsync = async () => {
    setMyData({
      myList: await loadDataview({
        systemmetagroupid: metaListId,
        criteria: {},
        paging: {},
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callAllDataAsync();
  }, []);

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const myValue = arriveValue !== myDefault ? arriveValue : undefined;
    const baseEncodedValues = myValue;
    filterContext.updateParams({
      [parameterLabel]: baseEncodedValues,
    });
  };

  // const myIndicators = Object.values(kpiFilterItem.kpiindicatorvalue);
  const myDefault =
    filterContext.urlSetting.filterList?.[urlparamfield] || "" || undefined;

  return (
    <>
      <FilterTitle title={title} className="gx-mt-4" />

      <div className="gx-w-100 gx-p-0">
        {myData.myList.map((item, index) => {
          const myValue = item[valuefield];

          return (
            <Card
              key={index}
              className={`gx-fs-sm gx-mb-2 gx-card-full gx-p-2 gx-text-center ${
                myDefault === myValue ? "gx-bg-orange gx-icon-white" : ""
              }`}
              style={{
                minHeight: "36px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              hoverable
              onClick={() =>
                // filterContext.updateParams({ [urlparamfield]: myValue })
                prepareURL2(myValue, [urlparamfield])
              }
            >
              <Tooltip title={item[labelfield]} placement="top">
                {item[labelfield]}
              </Tooltip>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default FilterRadioButton2;
