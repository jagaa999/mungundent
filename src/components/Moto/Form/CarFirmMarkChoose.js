import React, { useState, useContext, useEffect } from "react";
import MyIcon from "util/iconFunction";
import toBoolean from "util/booleanFunction";
import {
  Button,
  Card,
  Tooltip,
  Switch,
  Divider,
  Form,
  Input,
  Select,
  Modal,
  Radio,
  Space,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { loadDataview } from "util/axiosFunction";
import { changeConfirmLocale } from "antd/lib/modal/locale";

const myLayout = {
  wrapperCol: {
    span: 24,
  },
};

//   ####  #####   ##   #####  #####
//  #        #    #  #  #    #   #
//   ####    #   #    # #    #   #
//       #   #   ###### #####    #
//  #    #   #   #    # #   #    #
//   ####    #   #    # #    #   #
const CarFirmMarkChoose = ({ form, myItem, tailFormItemLayout }) => {
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
  const [firmList, setFirmList] = useState({
    loading: false,
    firmList: [],
    chosenOne: {},
  });

  const [markList, setMarkList] = useState({
    loading: false,
    markList: [],
    chosenOne: {},
  });

  const callFunctionAsync = async () => {
    setFirmList({ ...firmList, loading: true });
    setFirmList({
      ...firmList,
      firmList: await loadDataview({
        systemmetagroupid: "1586942860884102",
        paging: {
          sortColumnNames: {
            firmname: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
    console.log("FFFFFFFFF", form);
  }, []);

  const changeFirm = async (e) => {
    const myId = e.split("~")[0];

    setMarkList({ ...markList, loading: true });
    setMarkList({
      ...markList,
      markList: await loadDataview({
        systemmetagroupid: "1586946725870325",
        criteria: {
          firmid: {
            0: {
              operator: "=",
              operand: myId,
            },
          },
        },
        paging: {
          sortColumnNames: {
            markname: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });
  };

  //  #####  ###### ##### #    # #####  #    #
  //  #    # #        #   #    # #    # ##   #
  //  #    # #####    #   #    # #    # # #  #
  //  #####  #        #   #    # #####  #  # #
  //  #   #  #        #   #    # #   #  #   ##
  //  #    # ######   #    ####  #    # #    #
  return (
    <Form.List name="carfirmmark">
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => {
            return (
              // <>
              <Space
                key={field.key}
                direction="horizontal"
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...field}
                  {...myLayout}
                  name={[field.name, "firm"]}
                  fieldKey={[field.fieldKey, "firm"]}
                  rules={[{ required: true, message: "Фирмээ сонгоно уу" }]}
                >
                  <Select
                    loading={firmList.loading}
                    showSearch
                    placeholder="Фирм"
                    style={{ width: "170px" }}
                    optionFilterProp="children"
                    onChange={changeFirm}
                    filterOption={(input, option) => {
                      if (option.value) {
                        return (
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        );
                      } else {
                        return false;
                      }
                    }}
                  >
                    {firmList.firmList.map((item, index) => (
                      <Select.Option
                        key={index}
                        value={`${item.firmid}~${item.firmname}`}
                      >
                        {item.firmname}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  {...field}
                  {...myLayout}
                  name={[field.name, "mark"]}
                  fieldKey={[field.fieldKey, "mark"]}
                >
                  <Select
                    loading={markList.loading}
                    showSearch
                    placeholder="Фирм"
                    style={{ width: "170px" }}
                    optionFilterProp="children"
                    // onChange={}
                    filterOption={(input, option) => {
                      if (option.value) {
                        return (
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        );
                      } else {
                        return false;
                      }
                    }}
                  >
                    {markList.markList.map((item, index) => (
                      <Select.Option
                        key={index}
                        value={`${item.markid}~${item.markname}`}
                      >
                        {item.markname}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* <Form.Item
                  {...field}
                  {...myLayout}
                  name={[field.name, "last"]}
                  fieldKey={[field.fieldKey, "last"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item> */}
                {/* <Form.Item
                    {...field}
                    name={[field.name, "id"]}
                    fieldKey={[field.fieldKey, "id"]}
                  >
                    <Input hidden />
                  </Form.Item> */}
                {/* <Form.Item name="srctablename" label="srctablename">
                    <Input defaultValue="ECM_NEWS" />
                  </Form.Item>
                  <Form.Item name="srcrecordid" label="srcrecordid">
                    <Input defaultValue={myItem.newsid || ""} />
                  </Form.Item>
                  <Form.Item name="trgtablename" label="trgtablename">
                    <Input defaultValue="MOTO_GOO_CARS_REF_FIRM" />
                  </Form.Item>
                  <Form.Item name="trgrecordid" label="trgrecordid">
                    <Input />
                  </Form.Item>
                  <Form.Item name="text1" label="text1">
                    <Input />
                  </Form.Item> */}
                {/* <MinusCircleOutlined onClick={() => remove(field.name)} /> */}
                <Tooltip title="Талбарыг устгах">
                  <MyIcon
                    type="icontrash-alt-solid"
                    className="moto-icon-1-3"
                    onClick={() => remove(field.name)}
                  />
                </Tooltip>
              </Space>
              // </>
            );
          })}
          <Form.Item {...myLayout}>
            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
              Талбар нэмэх
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default CarFirmMarkChoose;
