import React, { useEffect, useState } from "react";

import { Form, Input, InputNumber, Select, Radio, Divider } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";

const { Option } = Select;

const AutozarForm1Autocar = ({
  form,
  mglFirmList,
  // setMglFirmList,
  mglMarkList,
  setMglMarkList,
  mglBodyList,
  countryList,
  techTranstypeList,
  techDriveList,
}) => {
  const optionsDoor = [2, 3, 4, 5];
  const optionsSeat = [2, 4, 5, 7, 8, 10, 12];

  const mglFirmChange = async (value) => {
    console.log(`mglFirm changed selected ${value}`);

    if (value !== "") {
      setMglMarkList({ ...mglMarkList, loading: true });
      setMglMarkList({
        mglMarkList: await loadDataview({
          systemmetagroupid: "1602132873132213",
          criteria: {
            mglfirm: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              mglmark: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const [mglCar, setMglCar] = useState({
    loading: false,
    mglCar: {},
  });

  // ######  ####### ####### #     # ######  #     #
  // #     # #          #    #     # #     # ##    #
  // #     # #          #    #     # #     # # #   #
  // ######  #####      #    #     # ######  #  #  #
  // #   #   #          #    #     # #   #   #   # #
  // #    #  #          #    #     # #    #  #    ##
  // #     # #######    #     #####  #     # #     #
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
      <Form.Item
        name="mglfirm"
        hasFeedback
        label="Фирм"
        rules={[{ required: true, message: "Фирмээ сонгоно уу!" }]}
      >
        {/* <MotoSelect1
          loading={mglFirmList.loading}
          key="mglfirm"
          placeholder="Фирм"
          myList={mglFirmList.mglFirmList}
          valueName="mglfirm"
          valueLabel="mglfirm"
          onChange={mglFirmChange}
        /> */}
        <Select
          className="moto-select-firm"
          loading={mglFirmList.loading}
          showSearch
          allowClear
          placeholder="Фирм"
          optionFilterProp="children"
          onChange={mglFirmChange}
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
        >
          {mglFirmList.mglFirmList.map((item, index) => (
            <Option key={index} value={item.mglfirm}>
              {item.mglfirm}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/*
       #     #    #    ######  #    # 
       ##   ##   # #   #     # #   #  
       # # # #  #   #  #     # #  #   
       #  #  # #     # ######  ###    
       #     # ####### #   #   #  #   
       #     # #     # #    #  #   #  
       #     # #     # #     # #    #  */}
      <Form.Item
        name="mglmark"
        hasFeedback
        label="Марк"
        rules={[{ required: true, message: "Маркаа сонгоно уу!" }]}
      >
        <Select
          className="moto-select-firm"
          loading={mglMarkList.loading}
          showSearch
          allowClear
          placeholder="Марк"
          optionFilterProp="children"
          onChange={null}
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
        >
          {mglMarkList.mglMarkList.map((item, index) => (
            <Option key={index} value={item.mglmark}>
              {item.mglmark}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/* 
       ######  ####### ######  #     # 
       #     # #     # #     #  #   #  
       #     # #     # #     #   # #   
       ######  #     # #     #    #    
       #     # #     # #     #    #    
       #     # #     # #     #    #    
       ######  ####### ######     #    */}
      <Form.Item name="mglbody" hasFeedback label="Хийц">
        <Select
          className="moto-select-firm"
          loading={mglBodyList.loading}
          showSearch
          allowClear
          placeholder="Хийц"
          optionFilterProp="children"
          onChange={null}
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
        >
          {mglBodyList.mglBodyList.map((item, index) => (
            <Option key={index} value={item.mglbody}>
              {item.mglbody}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/*
       #####  ####### #       ####### ######  
      #     # #     # #       #     # #     # 
      #       #     # #       #     # #     # 
      #       #     # #       #     # ######  
      #       #     # #       #     # #   #   
      #     # #     # #       #     # #    #  
       #####  ####### ####### ####### #     # */}
      <Form.Item name="mglcoloroutside" hasFeedback label="Гадна өнгө">
        <Input />
      </Form.Item>
      {/*
       #####  ####### #     # #     # ####### ######  #     # 
      #     # #     # #     # ##    #    #    #     #  #   #  
      #       #     # #     # # #   #    #    #     #   # #   
      #       #     # #     # #  #  #    #    ######     #    
      #       #     # #     # #   # #    #    #   #      #    
      #     # #     # #     # #    ##    #    #    #     #    
       #####  #######  #####  #     #    #    #     #    #    */}
      <Form.Item name="mglcountryorigin" hasFeedback label="Үйлдвэрлэсэн улс">
        <Select
          className="moto-select-firm"
          loading={countryList.loading}
          showSearch
          allowClear
          placeholder="Үйлдвэрлэсэн улс"
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
        >
          {countryList.countryList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.countryname}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Divider className="gx-my-3" />

      <Form.Item
        name="mglengine2disp"
        hasFeedback
        label="Хөдөлгүүрийн cc"
        rules={[
          {
            type: "number",
            min: 100,
            max: 10000,
            message: "Багадаа 100, ихдээ 10,000",
          },
        ]}
      >
        <InputNumber className="gx-w-100" />
      </Form.Item>
      {/* <Form.Item name="body2ModelCodeFull" label="body2ModelCodeFull">
        <Input />
      </Form.Item> */}
      {/* <Form.Item name="modelCode" label="modelCode">
          <Input />
        </Form.Item> */}
      <Form.Item name="transtypeid" hasFeedback label="Хроп">
        <Radio.Group buttonStyle="solid" className="gx-w-100">
          {techTranstypeList.techTranstypeList.map((item, index) => (
            <Radio.Button key={index} value={item.id}>
              {item.transtypename}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="driveid" hasFeedback label="Хөтлөгч">
        <Select
          className="moto-select-firm"
          loading={techDriveList.loading}
          showSearch
          allowClear
          placeholder="Хөтлөгч"
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
        >
          {techDriveList.techDriveList.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.drivename}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="mgldoor" hasFeedback label="Хаалганы тоо">
        <Radio.Group buttonStyle="solid">
          {optionsDoor.map((item, index) => {
            return (
              <Radio.Button key={index} value={item}>
                {item}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="mglseat" hasFeedback label="Суудлын тоо">
        <Radio.Group buttonStyle="solid">
          {optionsSeat.map((item, index) => {
            return (
              <Radio.Button key={index} value={item}>
                {item}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default AutozarForm1Autocar;
