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
import {
  PlusOutlined,
  UploadOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
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

const MotocarForm = (prps) => {
  const [form] = Form.useForm();
  const memberDetailContext = useContext(MemberContext);
  const memberItem = memberDetailContext.memberDetail.memberDetail;

  const [currentStep, setCurrentStep] = useState(0);

  const [refAttention, setRefAttention] = useState({
    loading: false,
    refAttention: [],
  });
  const [refKnowledge, setRefKnowledge] = useState({
    loading: false,
    refKnowledge: [],
  });
  const [refUsage, setRefUsage] = useState({
    loading: false,
    refUsage: [],
  });

  const [addressHomeCity, setAddressHomeCity] = useState({
    loading: false,
    addressHomeCity: [],
  });
  const [addressHomeDistrict, setAddressHomeDistrict] = useState({
    loading: false,
    addressHomeDistrict: [],
  });
  const [addressHomeStreet, setAddressHomeStreet] = useState({
    loading: false,
    addressHomeStreet: [],
  });

  const [addressWorkCity, setAddressWorkCity] = useState({
    loading: false,
    addressWorkCity: [],
  });
  const [addressWorkDistrict, setAddressWorkDistrict] = useState({
    loading: false,
    addressWorkDistrict: [],
  });
  const [addressWorkStreet, setAddressWorkStreet] = useState({
    loading: false,
    addressWorkStreet: [],
  });

  const callFunctionAsync = async () => {
    setRefAttention({ ...refAttention, loading: true });
    setRefAttention({
      refAttention: await loadDataview({
        systemmetagroupid: "1599558685611",
      }),
      loading: false,
    });

    setRefKnowledge({ ...refKnowledge, loading: true });
    setRefKnowledge({
      refKnowledge: await loadDataview({
        systemmetagroupid: "1599558685529",
      }),
      loading: false,
    });

    setRefUsage({ ...refUsage, loading: true });
    setRefUsage({
      refUsage: await loadDataview({
        systemmetagroupid: "1599558685568",
      }),
      loading: false,
    });

    setAddressHomeCity({ ...addressHomeCity, loading: true });
    setAddressHomeCity({
      addressHomeCity: await loadDataview({
        systemmetagroupid: "144436142534122",
        paging: {
          sortColumnNames: {
            city_code: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });

    setAddressWorkCity({ ...addressWorkCity, loading: true });
    setAddressWorkCity({
      addressWorkCity: await loadDataview({
        systemmetagroupid: "144436142534122",
        paging: {
          sortColumnNames: {
            city_code: {
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

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
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
            <MemberForm1General
              form={form}
              imagemainFileList={memberItem.imagemainFileList || []}
              imageotherFileList={memberItem.imageotherFileList || []}
            />
          </div>
          <div className={currentStep !== 1 ? "gx-d-none" : ""}>
            <MemberFormContact form={form} />
          </div>
          <div className={currentStep !== 2 ? "gx-d-none" : ""}>
            <MemberFormAddress
              form={form}
              addressHomeCity={addressHomeCity}
              addressHomeDistrict={addressHomeDistrict}
              setAddressHomeDistrict={setAddressHomeDistrict}
              addressHomeStreet={addressHomeStreet}
              setAddressHomeStreet={setAddressHomeStreet}
              addressWorkCity={addressWorkCity}
              addressWorkDistrict={addressWorkDistrict}
              setAddressWorkDistrict={setAddressWorkDistrict}
              addressWorkStreet={addressWorkStreet}
              setAddressWorkStreet={setAddressWorkStreet}
            />
          </div>
          <div className={currentStep !== 3 ? "gx-d-none" : ""}>
            <MemberFormOther
              form={form}
              refAttention={refAttention}
              refKnowledge={refKnowledge}
              refUsage={refUsage}
            />
          </div>
        </div>

        <Divider className="gx-my-5" />

        <div className="gx-float-right">
          {currentStep > 0 && (
            <Button onClick={prevStep} size="large" icon={<LeftOutlined />}>
              Өмнөх
            </Button>
          )}

          {currentStep < stepList.length - 1 && (
            <Button onClick={nextStep} size="large" icon={<RightOutlined />}>
              Дараах
            </Button>
          )}

          {currentStep === stepList.length - 1 && (
            <Form.Item noStyle={true}>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                icon={<UploadOutlined />}
              >
                Илгээх
              </Button>
            </Form.Item>
          )}
        </div>
      </Form>
    </Card>
  );
};

export default MotocarForm;
