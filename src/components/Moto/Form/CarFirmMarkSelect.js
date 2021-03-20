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
} from "antd";

import { loadDataview } from "util/axiosFunction";

const formItemLayout = {
  labelCol: {
    xs: { span: 0 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};

//   ####  #####   ##   #####  #####
//  #        #    #  #  #    #   #
//   ####    #   #    # #    #   #
//       #   #   ###### #####    #
//  #    #   #   #    # #   #    #
//   ####    #   #    # #    #   #
const CarFirmMarkSelect = ({
  modalVisible,
  onSpecModalCreate,
  onCancel,
  carFirmList,
  setCarFirmList,
  myItem,
}) => {
  const [form] = Form.useForm();

  const sendValues = (values) => {
    const myObject = {
      // ...values,
      id: "",
      srctablename: "ECM_NEWS",
      srcrecordid: myItem.newsid,
      trgtablename: "MOTO_GOO_CARS_REF_FIRM",
      trgrecordid: firmList.chosenOne.firmid,
      text1: firmList.chosenOne.firmname,
    };
    onSpecModalCreate(myObject);
  };

  // console.log("myTempBodymyTempBody", myTempBody);

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

  // console.log("firmList", firmList);
  // const onFinish = (values) => {};

  //  #####  ###### ##### #    # #####  #    #
  //  #    # #        #   #    # #    # ##   #
  //  #    # #####    #   #    # #    # # #  #
  //  #####  #        #   #    # #####  #  # #
  //  #   #  #        #   #    # #   #  #   ##
  //  #    # ######   #    ####  #    # #    #
  return (
    <Modal
      visible={modalVisible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            sendValues(values);
            // onSpecModalCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item name="firmid" hasFeedback label="Фирм">
          <Select
            loading={firmList.loading}
            showSearch
            placeholder="Фирм"
            optionFilterProp="children"
            onChange={(value) =>
              setFirmList({
                ...firmList,
                chosenOne: firmList.firmList[value],
              })
            }
            filterOption={(input, option) => {
              if (option.value) {
                return (
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                );
              } else {
                return false;
              }
            }}
          >
            {firmList.firmList.map((item, index) => (
              <Select.Option key={index} value={index}>
                {item.firmname}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CarFirmMarkSelect;
