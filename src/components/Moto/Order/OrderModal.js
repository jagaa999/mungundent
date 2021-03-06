import React, { useEffect, useContext, useState } from "react";

import {
  Modal,
  Button,
  message,
  Spin,
  Avatar,
  Image,
  Divider,
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
} from "antd";
import MemberContext from "context/MemberContext";
import MyIcon from "util/iconFunction";
import moment from "moment";
import MotoSelect2 from "../Form/MotoSelect2";
import { loadDataview } from "util/axiosFunction";
import ProductContext from "context/ProductContext";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const { TextArea } = Input;
const { Option } = Select;

const formLayout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 15 },
};

const OrderModal = ({ order, isOrderModal }) => {
  const productContext = useContext(ProductContext);
  const memberContext = useContext(MemberContext);

  const [form] = Form.useForm();
  const [timerangeList, setTimerangeList] = useState({
    loading: false,
    timerangeList: [],
  });

  const callFunctionAsync = async () => {
    setTimerangeList({ ...timerangeList, loading: true });
    setTimerangeList({
      timerangeList: await loadDataview({
        systemmetagroupid: "1571915480228469",
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const clickOK = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        console.log("FFFFF", values);
        // onCreate(values);
        productContext.saveOrderProduct(values);
        isOrderModal(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    // <>
    //   {memberContext.state.isLogin ? (
    <>
      <Modal
        visible={order.isModal}
        onOk={(e) => {
          clickOK();
        }}
        onCancel={(e) => {
          isOrderModal(false);
        }}
        footer={[
          <Button
            key="cancel"
            type="text"
            onClick={(e) => {
              isOrderModal(false);
            }}
            className="gx-mr-1"
          >
            {/* <MyIcon type="icontrash-alt-solid" className="moto-icon-1-3" /> */}
            ??????????
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={(e) => {
              clickOK();
            }}
          >
            ????????????
          </Button>,
        ]}
        title="????????????????"
        z-index="5001"
        closeIcon={<MyIcon type="icontimes-solid" className="moto-icon-1-5" />}
      >
        <Form
          form={form}
          {...formLayout}
          layout="horizontal"
          name="error_modal"
          initialValues={{
            ...order.orderDetail,
            ordernumber: moment().format("YYYYMMDDHHmmss"),
            enddate: moment(),
          }}
        >
          <Form.Item name="ordernumber" label="?????????????????? ????????????">
            <Input disabled />
          </Form.Item>
          <Form.Item name="enddate" label="?????????? ?????????">
            <DatePicker
              className="gx-w-100"
              placeholder="???????? ??????????"
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item name="timerangeid" label="???????">
            <MotoSelect2
              loading={timerangeList.loading}
              key="timerangeid"
              placeholder="???????????? ??????????????"
              onChange={null}
              myList={timerangeList.timerangeList}
              valueName="id"
              valueLabel="name"
            />
          </Form.Item>
          <Form.Item name="total" label="??????">
            <Input />
          </Form.Item>
          <Form.Item name="itemid" label="itemid" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="unitamount" label="unitamount" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="linetotalamount" label="linetotalamount" hidden>
            <Input />
          </Form.Item>
        </Form>

        <ul className="gx-fs-sm gx-mt-4">
          <li>?????????????????? ?????????????? ???????????????? ????????????????????.</li>
          <li>???????????????? ?????????? ?????????????????? ??????????????.</li>
        </ul>
        <div className="gx-text-grey gx-fs-sm gx-font-weight-light">
          ???????????? ??????????.
        </div>
      </Modal>
    </>
    //   ) : (
    //     // <PleaseLogin />
    //     {sss = ()=>{memberContext.isModal(true)}}
    //   )}
    // </>
  );
};

export default OrderModal;
