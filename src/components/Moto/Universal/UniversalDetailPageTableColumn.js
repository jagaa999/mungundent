import React from "react";
import { Statistic } from "antd";
import { GetSpecData } from "util/getSpecData";

const UniversalDetailPageTableColumn = ({ myItem, myDetailSettings }) => {
  const { tableColumns } = myItem;
  const { headerSettings } = myDetailSettings;

  if (headerSettings.showTableColumns) {
    return (
      <div className="gx-d-flex gx-justify-content-center gx-align-items-center gx-mb-3">
        <div className="gx-ml-auto2 gx-d-inline-flex gx-vertical-align-middle">
          {tableColumns.map((item, index) => {
            const myItem = GetSpecData(item.field);
            return (
              <Statistic
                key={index}
                className="moto-detail-header-statistic gx-ml-5"
                title={myItem.label}
                value={item.value}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return "";
};

export default UniversalDetailPageTableColumn;
