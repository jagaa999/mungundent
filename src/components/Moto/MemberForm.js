import React, { useState, useContext, useEffect } from "react";

import MemberForm1General from "./MemberForm1General";
import MemberFormContact from "./MemberFormContact";
import MemberFormAddress from "./MemberFormAddress";
import MemberFormOther from "./MemberFormOther";

import {
  Button,
  Card,
  message,
  Divider,
  Form,
  Input,
  Select,
  Steps,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { loadDataview } from "util/axiosFunction";
import MemberContext from "context/MemberContext";

const { Step } = Steps;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 17,
      offset: 7,
    },
  },
};

//  ####   ####  #    #  ####  #####
// #    # #    # ##   # #        #
// #      #    # # #  #  ####    #
// #      #    # #  # #      #   #
// #    # #    # #   ## #    #   #
//  ####   ####  #    #  ####    #

const MotocarForm = (props) => {
  const [form] = Form.useForm();
  const memberDetailContext = useContext(MemberContext);
  const memberItem = memberDetailContext.memberDetail.memberDetail;

  const [currentStep, setCurrentStep] = useState(0);

  const [mglBodyList, setMglBodyList] = useState({
    loading: false,
    mglBodyList: [],
  });
  const [mglFuelList, setMglFuelList] = useState({
    loading: false,
    mglFuelList: [],
  });
  const [countryList, setCountryList] = useState({
    loading: false,
    countryList: [],
  });

  const callFunctionAsync = async () => {
    setMglBodyList({ ...mglBodyList, loading: true });
    setMglBodyList({
      mglBodyList: await loadDataview({
        systemmetagroupid: "1599557926832",
      }),
      loading: false,
    });

    setMglFuelList({ ...mglFuelList, loading: true });
    setMglFuelList({
      mglFuelList: await loadDataview({
        systemmetagroupid: "1599557944149",
      }),
      loading: false,
    });

    setCountryList({ ...countryList, loading: true });
    setCountryList({
      countryList: await loadDataview({
        systemmetagroupid: "1464050695187",
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const stepList = [
    {
      title: "Гишүүн",
    },
    {
      title: "Холбогдох",
    },
    {
      title: "Хаяг",
    },
    {
      title: "Бусад",
    },
  ];

  const onStepChange = (current) => {
    setCurrentStep(current);
  };

  //  #####  #     # ######  #     # ### #######
  // #     # #     # #     # ##   ##  #     #
  // #       #     # #     # # # # #  #     #
  //  #####  #     # ######  #  #  #  #     #
  //       # #     # #     # #     #  #     #
  // #     # #     # #     # #     #  #     #
  //  #####   #####  ######  #     # ###    #

  const onFinish = (values) => {
    console.log("AFTER SUBMIT --------- ");
    console.table(values);

    memberDetailContext.saveMemberDetail(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    errorInfo.errorFields.map((errorItem) => {
      message.error(errorItem.errors[0]);
    });
  };

  console.log("memberItem FORM", memberItem);

  // ID
  // SYSTEM_USER_ID
  // NAME
  // REGISTRATION_NUMBER
  // EMAIL
  // PHONE_NUMBER1
  // PHONE_NUMBER2
  // PHONE_NUMBER3
  // BIRTH_DATE
  // GENDER
  // CREATED_DATE
  // CREATED_BY
  // FIREBASE_UID
  // FB_ID
  // GOOGLE_ID
  // PROVIDER_ID
  // IMAGEMAIN
  // IMAGEOTHER
  // SPEC_KNOWLEDGE
  // SPEC_USAGE
  // SPEC_ATTENTION

  // #####  ###### ##### #    # #####  #    #
  // #    # #        #   #    # #    # ##   #
  // #    # #####    #   #    # #    # # #  #
  // #####  #        #   #    # #####  #  # #
  // #   #  #        #   #    # #   #  #   ##
  // #    # ######   #    ####  #    # #    #

  return (
    <Card
      className="gx-card_old "
      style={{ backgroundColor: "#f0f0f0" }}
      title="Гишүүний мэдээлэл"
    >
      <Form
        {...formItemLayout}
        form={form}
        name="memberDetailForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={memberItem}
        scrollToFirstError={true}
        colon={false}
      >
        <Steps
          type="navigation"
          size="small"
          current={currentStep}
          onChange={onStepChange}
          className="site-navigation-steps"
        >
          {stepList.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="gx-mt-5">
          <div className={currentStep !== 0 ? "gx-d-none" : ""}>
            <MemberForm1General form={form} />
          </div>
          <div className={currentStep !== 1 ? "gx-d-none" : ""}>
            <MemberFormContact form={form} />
          </div>
          <div className={currentStep !== 2 ? "gx-d-none" : ""}>
            <MemberFormAddress form={form} />
          </div>
          <div className={currentStep !== 3 ? "gx-d-none" : ""}>
            <MemberFormOther form={form} />
          </div>
        </div>

        <Divider className="gx-my-5" />

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            icon={<PlusOutlined />}
          >
            Илгээх
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default MotocarForm;
