import React, { useEffect, useState } from "react";

import { Form, Input, Select, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import "moment/locale/mn";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const MemberFormAddress = ({
  form,
  addressHomeCity,
  addressHomeDistrict,
  setAddressHomeDistrict,
  addressHomeStreet,
  setAddressHomeStreet,

  addressWorkCity,
  addressWorkDistrict,
  setAddressWorkDistrict,
  addressWorkStreet,
  setAddressWorkStreet,
}) => {
  // console.log("addressHomeCityaddressHomeCity", addressHomeCity);
  // console.log("addressHomeDistrictaddressHomeDistrict", addressHomeDistrict);
  // console.log("addressHomeStreetaddressHomeStreet", addressHomeStreet);

  const addressHomeCityChange = async (value) => {
    console.log(`addressHomeCityChange changed selected ${value}`);

    if (value !== "") {
      setAddressHomeDistrict({ ...addressHomeDistrict, loading: true });
      setAddressHomeDistrict({
        addressHomeDistrict: await loadDataview({
          systemmetagroupid: "144436175673444",
          criteria: {
            cityid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              code: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  console.log(addressHomeDistrict);

  const addressHomeDistrictChange = async (value) => {
    console.log(`addressHomeDistrictChange changed selected ${value}`);

    if (value !== "") {
      setAddressHomeStreet({ ...addressHomeStreet, loading: true });
      setAddressHomeStreet({
        addressHomeStreet: await loadDataview({
          systemmetagroupid: "144436196690182",
          criteria: {
            districtid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              name: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const addressWorkCityChange = async (value) => {
    console.log(`addressWorkCityChange changed selected ${value}`);

    if (value !== "") {
      setAddressWorkDistrict({ ...addressWorkDistrict, loading: true });
      setAddressWorkDistrict({
        addressWorkDistrict: await loadDataview({
          systemmetagroupid: "144436175673444",
          criteria: {
            cityid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              code: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const addressWorkDistrictChange = async (value) => {
    console.log(`addressWorkDistrictChange changed selected ${value}`);

    if (value !== "") {
      setAddressWorkStreet({ ...addressWorkStreet, loading: true });
      setAddressWorkStreet({
        addressWorkStreet: await loadDataview({
          systemmetagroupid: "144436196690182",
          criteria: {
            districtid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              name: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  return (
    <>
      <h3>Гэрийн хаяг</h3>
      <Form.Item name="homecity" hasFeedback label="Хот, аймаг">
        <Select
          className="moto-select-firm"
          autoComplete="dontshow"
          loading={addressHomeCity.loading}
          showSearch
          allowClear
          placeholder="Хот/Аймаг"
          onChange={addressHomeCityChange}
          optionFilterProp="children"
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
          {addressHomeCity.addressHomeCity.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="homedistrict" hasFeedback label="Дүүрэг, сум">
        <Select
          className="moto-select-firm"
          autoComplete="dontshow"
          loading={addressHomeDistrict.loading}
          showSearch
          allowClear
          placeholder="Дүүрэг/Сум"
          optionFilterProp="children"
          onChange={addressHomeDistrictChange}
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
          {addressHomeDistrict.addressHomeDistrict.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="homestreet" hasFeedback label="Хороо, баг">
        <Select
          className="moto-select-firm"
          autoComplete="dontshow"
          loading={addressHomeStreet.loading}
          showSearch
          allowClear
          placeholder="Хороо/Баг"
          optionFilterProp="children"
          // onChange={addressHomeStreetChange}
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
          {addressHomeStreet.addressHomeStreet.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="homeaddress" hasFeedback label="Дэлгэрэнгүй">
        <TextArea
          placeholder="Хаягийг тань олоход тустай бүхнийг бичиж болно."
          autoSize
        />
      </Form.Item>

      <Divider className="gx-my-5" />

      <h3>Ажлын хаяг</h3>

      <Form.Item name="workcity" hasFeedback label="Хот, аймаг">
        <Select
          className="moto-select-firm"
          autoComplete="dontshow"
          loading={addressWorkCity.loading}
          showSearch
          allowClear
          placeholder="Хот/Аймаг"
          optionFilterProp="children"
          onChange={addressWorkCityChange}
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
          {addressWorkCity.addressWorkCity.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="workdistrict" hasFeedback label="Дүүрэг, сум">
        <Select
          className="moto-select-firm"
          autoComplete="dontshow"
          loading={addressWorkDistrict.loading}
          showSearch
          allowClear
          placeholder="Дүүрэг/Сум"
          optionFilterProp="children"
          onChange={addressWorkDistrictChange}
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
          {addressWorkDistrict.addressWorkDistrict.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="workstreet" hasFeedback label="Хороо, баг">
        <Select
          className="moto-select-firm"
          autoComplete="dontshow"
          loading={addressWorkStreet.loading}
          showSearch
          allowClear
          placeholder="Хороо/Баг"
          optionFilterProp="children"
          // onChange={addressWorkStreetChange}
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
          {addressWorkStreet.addressWorkStreet.map((item, index) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="workaddress" hasFeedback label="Дэлгэрэнгүй">
        <TextArea
          placeholder="Хаягийг тань олоход тустай бүхнийг бичиж болно."
          autoSize
        />
      </Form.Item>
    </>
  );
};

export default MemberFormAddress;
