import React, { useEffect, useContext } from "react";
import { Col, Row, Button, Switch, Select, PageHeader, Card } from "antd";
import CarCatalogListContext from "context/CarCatalogListContext";
import FilterContext from "context/FilterContext";
const { Option } = Select;

const CarCatalogFilter = () => {
  const carCatalogListContext = useContext(CarCatalogListContext);
  const filterContext = useContext(FilterContext);

  // useEffect(() => {
  //   carCatalogListContext.loadCarFirmList();
  // }, []);

  return (
    <>
      {/*
       ####### ### ######  #     # 
       #        #  #     # ##   ## 
       #        #  #     # # # # # 
       #####    #  ######  #  #  # 
       #        #  #   #   #     # 
       #        #  #    #  #     # 
       #       ### #     # #     #  */}
      <Select
        className="moto-select-firm gx-w-100 gx-my-2"
        showSearch
        allowClear
        placeholder="Фирм"
        optionFilterProp="children"
        onChange={(value) =>
          filterContext.updateParams({
            carcatalogfirmid: value,
          })
        }
        filterOption={(input, option) => {
          if (option.value) {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          } else {
            return false;
          }
        }}
        defaultValue={filterContext.state.filterList?.carcatalogfirmid || ""}
      >
        {carCatalogListContext.carFirmList.carFirmList.map((item, index) => (
          // count: "3"
          // firmcountrymon: "Англи"
          // firmname: "Aston Martin"
          // firmtype: "Passenger"
          // id: "1040100000"
          // special: "0"
          <Option key={index} value={item.id}>
            {item.firmname}
          </Option>
        ))}
      </Select>
      {/*
      #     #    #    ######  #    # 
      ##   ##   # #   #     # #   #  
      # # # #  #   #  #     # #  #   
      #  #  # #     # ######  ###    
      #     # ####### #   #   #  #   
      #     # #     # #    #  #   #  
      #     # #     # #     # #    #  */}
      <Select
        className="moto-select-firm gx-w-100 gx-my-2"
        showSearch
        allowClear
        placeholder="Марк"
        optionFilterProp="children"
        onChange={(value) =>
          filterContext.updateParams({
            carcatalogmarkid: value,
          })
        }
        filterOption={(input, option) => {
          if (option.value) {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          } else {
            return false;
          }
        }}
        defaultValue={filterContext.state.filterList?.carcatalogmarkid || ""}
      >
        {carCatalogListContext.carMarkList.carMarkList.map((item, index) => (
          // count: "3"
          // firmname: "Bmw"
          // id: "1020300000"
          // markid: "6037338451216753"
          // markname: "M Roadster"
          <Option key={index} value={item.markid}>
            {item.markname}
          </Option>
        ))}
      </Select>
      {/*
      ### #     # ######  ####### #     # 
       #  ##    # #     # #        #   #  
       #  # #   # #     # #         # #   
       #  #  #  # #     # #####      #    
       #  #   # # #     # #         # #   
       #  #    ## #     # #        #   #  
      ### #     # ######  ####### #     #  */}
      <Select
        className="moto-select-firm gx-w-100 gx-my-2"
        showSearch
        allowClear
        placeholder="Цуврал"
        optionFilterProp="children"
        onChange={(value) =>
          filterContext.updateParams({
            carcatalogindexid: value,
          })
        }
        filterOption={(input, option) => {
          if (option.value) {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          } else {
            return false;
          }
        }}
        defaultValue={filterContext.state.filterList?.carcatalogindexid || ""}
      >
        {carCatalogListContext.carIndexList.carIndexList.map((item, index) => (
          // count: "25"
          // desceng: "Tradition of BMW some upper-mid"
          // descmon: "BMW уламжлал зарим нь дээд, ду"
          // firmid: "1020300000"
          // firmname: "Bmw"
          // maindate: "2019-01-01"
          // maindate2: "2019-01"
          // mainid: "201901_BMW_5_SERIES"
          // mainimg: "https://catalogphoto.goo-net.com/carphoto/20151502_201901c.jpg"
          // markid: "6464819816495469"
          // markname: "5 Series"
          // url: "https://www.goo-net.com/catalog/BMW/5_SERIES/"
          <Option key={index} value={item.mainid}>
            {item.markname} {item.maindate2}
          </Option>
        ))}
      </Select>

      {/*
      ####### ######  ### ####### ### ####### #     # 
      #       #     #  #     #     #  #     # ##    # 
      #       #     #  #     #     #  #     # # #   # 
      #####   #     #  #     #     #  #     # #  #  # 
      #       #     #  #     #     #  #     # #   # # 
      #       #     #  #     #     #  #     # #    ## 
      ####### ######  ###    #    ### ####### #     # */}
      <Select
        className="moto-select-firm gx-w-100 gx-my-2"
        showSearch
        allowClear
        placeholder="Цуврал"
        optionFilterProp="children"
        onChange={(value) =>
          filterContext.updateParams({
            carcatalogeditionid: value,
          })
        }
        filterOption={(input, option) => {
          if (option.value) {
            return (
              option.children.toLowerCase().editionOf(input.toLowerCase()) >= 0
            );
          } else {
            return false;
          }
        }}
        defaultValue={filterContext.state.filterList?.carcatalogeditionid || ""}
      >
        {carCatalogListContext.carEditionList.carEditionList.map(
          (item, edition) => (
            // body2bodyname: "Сэдан"
            // body2door: "4"
            // body2modelcodefull: "ABA-NE30"
            // body2seat: "5"
            // cardate: "2005-05"
            // cartrim: "530I"
            // drive2drivename: "RWD (FR)"
            // drive2transmissionfull: "AT - 6"
            // engine2code: "N52B30A"
            // engine2disp: "2996"
            // envi2fuel10mode: "9"
            // id: "10029095"
            // mainid: "200509_BMW_5_SERIES"
            // mainimg: "https://catalogphoto.goo-net.com/carphoto/20151502_200509.jpg"
            // modelcode: "NE30"
            // pricenewusd: "66774"
            // untilnow: ""
            <Option key={edition} value={item.id}>
              {item.cartrim}
            </Option>
          )
        )}
      </Select>
    </>
  );
};

export default CarCatalogFilter;
