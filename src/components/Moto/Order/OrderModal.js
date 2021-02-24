import React, { useEffect, useContext } from "react";

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
} from "antd";
import MemberContext from "context/MemberContext";
import MyIcon from "util/iconFunction";

const { TextArea } = Input;
const { Option } = Select;

const formLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

const OrderModal = ({ order, isOrderModal }) => {
  const [form] = Form.useForm();
  // const memberContext = useContext(MemberContext);

  const clickOK = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        console.log("FFFFF", values);
        // onCreate(values);
        isOrderModal(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
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
            <MyIcon type="icontrash-alt-solid" className="moto-icon-1-3" />
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={(e) => {
              clickOK();
            }}
          >
            Илгээх
          </Button>,
        ]}
        title="Захиалга"
        z-index="5001"
        closeIcon={<MyIcon type="icontimes-solid" className="moto-icon-1-5" />}
      >
        <Form
          form={form}
          {...formLayout}
          layout="horizontal"
          name="error_modal"
          initialValues={
            {
              // recordId: props.recordid,
              // title: item?.mainData?.title?.value || "",
              // modifier: "public",
            }
          }
        >
          <Form.Item name="recordId" label="ID">
            <Input />
          </Form.Item>

          <Form.Item name="title" label="Гарчиг">
            <Input />
          </Form.Item>

          <Form.Item
            name="errorList"
            label="Алдаа"
            rules={[
              {
                required: true,
                message: "Алдааны төрлүүдээс заавал сонгох ёстой",
              },
            ]}
          >
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Алдааг сонгоно уу"
              // onChange={handleErrorChange}
            >
              <Option key="dd">dfddg</Option>
              <Option key="dddd">rrrtty</Option>
            </Select>
          </Form.Item>

          <Form.Item name="description" label="Тайлбар">
            <TextArea
              rows={4}
              autoSize={true}
              placeholder="Алдааны талаар боломжоороо дэлгэрэнгүй бичихийг хүсье."
            />
          </Form.Item>
        </Form>

        <ul className="gx-fs-sm">
          <li>Бүртгүүлэхэд үнэгүй.</li>
          <li>Facebook, Google-ийн аль нэг бүртгэлээр нэвтэрнэ.</li>
        </ul>
        <div className="gx-text-grey gx-fs-sm gx-font-weight-light">
          Гишүүний бүртгэлийг юунд ашиглах вэ? Таны уншсан, харсан мэдээлэлд
          үндэсэлж, илүү зөв мэдээллийг танд харуулдаг болгоход ашиглана. Гишүүн
          болсноор Moto.mn-ийн{" "}
          <a href="/static/privacy" target="_blank">
            нууцлалын бодлого
          </a>{" "}
          ба{" "}
          <a href="/static/privacy" target="_blank">
            үйлчилгээний нөхцөлийг
          </a>{" "}
          зөвшөөрсөнд тооцно.
        </div>
        {/* <OrderDetailForm orderDetail={order.orderDetail} /> */}
      </Modal>
    </>
  );
};

export default OrderModal;
