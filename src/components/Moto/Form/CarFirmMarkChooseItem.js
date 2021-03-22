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
  item, // 0: {firm: "1060200000~Alfa Romeo", mark: undefined}
  myItem,
  carfirmmark,
  setCarfirmmark,
  index,
}) => {
  const myFirmTemp = item?.firm || "";
  const myIdFirm = myFirmTemp?.split("~")[0] || undefined;
  const myTextFirm = myFirmTemp?.split("~")[1] || undefined;
  const myMarkTemp = item?.mark || "";
  const myIdMark = myMarkTemp?.split("~")[0] || undefined;
  const myTextMark = myMarkTemp?.split("~")[1] || undefined;

  // console.log("myIdFirm", myIdFirm);
  // console.log("myTextFirm", myTextFirm);

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
  // const [firmId, setFirmId] = useState(myIdFirm);

  const changeFirm = (e) => {
    // setFirmId(e);
    // setCarfirmmark([...carfirmmark]);
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
        value={myIdFirm}
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

      {!isEmpty(myIdFirm) && (
        <FormSelect
          metaListId="1586946725870325"
          title=""
          placeholder="Маркаа сонгоно уу"
          labelfield="markname"
          valuefield="markid"
          value={myIdMark}
          criteria={{
            firmid: {
              0: {
                operator: "=",
                operand: myIdFirm,
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

      <Tooltip title="Талбарыг устгах" placement="right">
        <MyIcon
          type="icontrash-alt-solid"
          className="moto-icon-1-3"
          onClick={() => {
            // console.log("index", index);
            // carfirmmark.splice(index, 1);
            carfirmmark.splice(0, 1);
            setCarfirmmark([...carfirmmark]);
          }}
        />
        {index}
      </Tooltip>
    </Space>
    // </>
  );
};

export default CarFirmMarkChooseItem;
