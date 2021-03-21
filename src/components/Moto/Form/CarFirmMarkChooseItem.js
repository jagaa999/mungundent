import React, { useState, useContext, useEffect } from "react";
import MyIcon from "util/iconFunction";
import { Button, Tooltip, Space } from "antd";
import { loadDataview } from "util/axiosFunction";
import { isEmpty } from "lodash";
import FormSelect from "./FormSelect";

//   ####  #####   ##   #####  #####
//  #        #    #  #  #    #   #
//   ####    #   #    # #    #   #
//       #   #   ###### #####    #
//  #    #   #   #    # #   #    #
//   ####    #   #    # #    #   #
const CarFirmMarkChooseItem = ({
  myItem,
  carfirmmark,
  setCarfirmmark,
  index,
}) => {
  // metaListId="1586942860884102"
  // paging={{
  //   sortColumnNames: "firmname",
  //   sortType: "ASC",
  // }}
  // title="Фирм"
  // placeholder="Автомашины фирм"
  // urlparamfield="firmid"
  // labelfield="firmname"
  // valuefield="firmid"
  const [firmId, setFirmId] = useState("");

  const changeFirm = (e) => {
    setFirmId(e);
  };

  // console.log("carfirmmark", carfirmmark);

  return (
    <Space
      direction="horizontal"
      style={{ display: "flex", marginBottom: 8 }}
      align="baseline"
    >
      <FormSelect
        metaListId="1599822188399800"
        title=""
        placeholder="Фирмээ сонгоно уу"
        labelfield="firmname"
        valuefield="id"
        criteria={{}}
        paging={{
          sortColumnNames: {
            firmname: {
              sortType: "ASC",
            },
          },
        }}
        onChange={changeFirm}
        style={{ width: "170px" }}
      />

      {!isEmpty(firmId) && (
        <FormSelect
          metaListId="1586946725870325"
          title=""
          placeholder="Маркаа сонгоно уу"
          labelfield="markname"
          valuefield="markid"
          criteria={{
            firmid: {
              0: {
                operator: "=",
                operand: firmId,
              },
            },
          }}
          paging={{
            sortColumnNames: {
              markname: {
                sortType: "ASC",
              },
            },
          }}
          // onChange={changeFirm}
          style={{ width: "170px" }}
        />
      )}

      <Tooltip title="Талбарыг устгах">
        <MyIcon
          type="icontrash-alt-solid"
          className="moto-icon-1-3"
          onClick={() => {
            carfirmmark.splice(index, 1);
            setCarfirmmark([...carfirmmark]);
          }}
        />
      </Tooltip>
    </Space>
    // </>
  );
};

export default CarFirmMarkChooseItem;
