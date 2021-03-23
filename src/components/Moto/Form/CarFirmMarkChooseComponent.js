import React, { useState, useContext, useEffect } from "react";
import MyIcon from "util/iconFunction";
import { Button, Tooltip, Space } from "antd";
import { loadDataview } from "util/axiosFunction";
import { isEmpty } from "lodash";
import FormSelect from "./FormSelect";
import CarFirmMarkChooseItem from "./CarFirmMarkChooseItem";

//   ####  #####   ##   #####  #####
//  #        #    #  #  #    #   #
//   ####    #   #    # #    #   #
//       #   #   ###### #####    #
//  #    #   #   #    # #   #    #
//   ####    #   #    # #    #   #
const CarFirmMarkChooseComponent = ({
  myItem,
  myCarFirmList,
  setMyCarFirmList,
}) => {
  // console.log("carfor", myCarFirmList);

  return (
    <>
      {myCarFirmList.map((item, index) => {
        return (
          <CarFirmMarkChooseItem
            item={item}
            myCarFirmList={myCarFirmList}
            setMyCarFirmList={setMyCarFirmList}
            index={index}
          />
        );
      })}

      <Button
        onClick={() => {
          setMyCarFirmList([...myCarFirmList, {}]);
        }}
      >
        Нэмэх
      </Button>
    </>
  );
};

export default CarFirmMarkChooseComponent;
