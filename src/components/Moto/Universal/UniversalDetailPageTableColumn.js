import React from "react";
import { Statistic } from "antd";
import { GetSpecData } from "util/getSpecData";

const UniversalDetailPageTableColumn = ({ myItem, myDetailSettings }) => {
  const { tableColumns } = myItem;
  const { headerSettings } = myDetailSettings;

  if (headerSettings.showTableColumns) {
    return (
      <div className="gx-d-flex gx-justify-content-center gx-align-items-center gx-mb-3 gx-mt-5">
        <div className="gx-ml-auto2 gx-d-inline-flex gx-vertical-align-middle">
          {tableColumns.map((item, index) => {
            const myTempItem = GetSpecData(item.field, myItem.mainData.menu);
            return (
              <div className="gx-ml-5" key={index}>
                <div className="gx-fs-sm gx-text-grey">{myTempItem.label}</div>
                <div>{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return "";
};

export default UniversalDetailPageTableColumn;
