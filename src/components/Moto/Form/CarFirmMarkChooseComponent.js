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
  carfirmmark,
  setCarfirmmark,
}) => {
  console.log("carfor", carfirmmark);
  return (
    <>
      {carfirmmark.map((item, index) => {
        return (
          <CarFirmMarkChooseItem
            item={item}
            myItem={myItem}
            carfirmmark={carfirmmark}
            setCarfirmmark={setCarfirmmark}
            index={index}
          />
        );
      })}

      <Button
        onClick={() => {
          setCarfirmmark([...carfirmmark, {}]);
        }}
      >
        Нэмэх
      </Button>
    </>
  );
};

export default CarFirmMarkChooseComponent;
