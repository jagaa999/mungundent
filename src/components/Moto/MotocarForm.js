import React, { useState, useContext, useEffect } from "react";

import EditorJs from "react-editor-js";

// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EDITOR_JS_TOOLS } from "./editorjsConfig";
import NewsEditor from "./NewsEditor";
import ImageUpload from "./Image/ImageUpload";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import toBoolean from "util/booleanFunction";

import MotocarForm1General from "./MotocarForm1General";
import MotocarFormTech from "./MotocarFormTech";
import MotocarFormThecar from "./MotocarFormThecar";
import MotocarFormSpec from "./MotocarFormSpec";

import {
  Button,
  Card,
  Tooltip,
  Checkbox,
  Switch,
  message,
  Divider,
  Spin,
  Form,
  Input,
  Select,
  Steps,
} from "antd";

import {
  PlusOutlined,
  CloudUploadOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import NewsButtonPanel from "components/Moto/Button/NewsButtonPanel";

import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

import LogsContext from "context/LogsContext";
import MemberCard02 from "./MemberCard02";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import MotocarContext from "context/MotocarContext";

const { Option, OptGroup } = Select;
const { TextArea } = Input;
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
const forItemLayoutSame = {
  labelCol: {
    xs: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 17 },
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

const MotocarForm = () => {
  const [form] = Form.useForm();
  const motocarDetailContext = useContext(MotocarContext);
  const motocarItem = motocarDetailContext.motocarDetail.motocarDetail;

  const [currentStep, setCurrentStep] = useState(0);

  const [mglFirmList, setMglFirmList] = useState({
    loading: false,
    mglFirmList: [],
  });
  const [mglMarkList, setMglMarkList] = useState({
    loading: false,
    mglMarkList: [],
  });
  const [mglBodyList, setMglBodyList] = useState({
    loading: false,
    mglBodyList: [],
  });
  const [mglFuelList, setMglFuelList] = useState({
    loading: false,
    mglFuelList: [],
  });
  const [techTranstypeList, setTechTranstypeList] = useState({
    loading: false,
    techTranstypeList: [],
  });
  const [techDriveList, setTechDriveList] = useState({
    loading: false,
    techDriveList: [],
  });

  // * axios-оор ERP-аас дуудна.
  const callFunctionAsync = async () => {
    setMglFirmList({ ...mglFirmList, loading: true });
    setMglFirmList({
      mglFirmList: await loadDataview({
        systemmetagroupid: "1602132741145717",
        paging: {
          sortColumnNames: {
            mglfirm: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });

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

    setTechTranstypeList({ ...techTranstypeList, loading: true });
    setTechTranstypeList({
      techTranstypeList: await loadDataview({
        systemmetagroupid: "1586958774748911",
      }),
      loading: false,
    });

    setTechDriveList({ ...techDriveList, loading: true });
    setTechDriveList({
      techDriveList: await loadDataview({
        systemmetagroupid: "1586958538229243",
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const [myImages, setMyImages] = useState([]);
  const [imageTags, setImageTags] = useState("");
  const [myBody, setMyBody] = useState("");

  const stepList = [
    {
      title: "Ерөнхий",
    },
    {
      title: "Үзүүлэлт",
    },
    {
      title: "Бусад",
    },
    // {
    //   title: "Gootech",
    // },
  ];

  const titleOnChange = (text) => {
    // console.log("dsfdsfsd", text.target.value);
    setImageTags(text.target.value);
  };

  const onStepChange = (current) => {
    // console.log("onStepChange:", current);
    setCurrentStep(current);
  };

  const onFinish = (values) => {
    console.log("AFTER SUBMIT --------- ");
    console.table(values);

    // values.body = htmlEntities.decode(myBody);
    // values.body = myBody;
    // values.images = myImages;
    // motocarDetailContext.saveMotocarDetail(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // console.log("Failed:", errorInfo.errorFields);
    errorInfo.errorFields.map((errorItem) => {
      message.error(errorItem.errors[0]);
    });
  };

  // const onFieldsChange = (changedFields, allFields) => {
  //   console.log("onFieldsChange onFieldsChange ", changedFields);
  // };
  // const onValuesChange = (changedValues, allValues) => {
  //   console.log("onValuesChange onValuesChange ", changedValues);
  // };

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
      title="Автомашины мэдээлэл"
    >
      <Form
        {...formItemLayout}
        form={form}
        name="motocarDetailForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // onFieldsChange={onFieldsChange}
        // onValuesChange={onValuesChange}
        initialValues={{
          motocarid: motocarItem ? motocarItem.motocarid : "",
          newstypeid: motocarItem ? motocarItem.newstypeid : null,
          vehicletype: "passenger",
          newssourceid: motocarItem ? motocarItem.newssourceid : null,
          isactive: true,
          isfeatured: motocarItem ? toBoolean(motocarItem.isfeatured) : false,
          iscomment: motocarItem ? toBoolean(motocarItem.iscomment) : true,
          driverPosId: false,
        }}
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
        <div className="gx-mt-4">
          <div className={currentStep !== 0 ? "gx-d-none" : ""}>
            <MotocarForm1General
              form={form}
              mglFirmList={mglFirmList}
              setMglFirmList={setMglFirmList}
              mglMarkList={mglMarkList}
              setMglMarkList={setMglMarkList}
              mglBodyList={mglBodyList}
              mglFuelList={mglFuelList}
            />
          </div>
          <div className={currentStep !== 1 ? "gx-d-none" : ""}>
            <MotocarFormThecar
              form={form}
              techTranstypeList={techTranstypeList}
              techDriveList={techDriveList}
            />
          </div>
          <div className={currentStep !== 2 ? "gx-d-none" : ""}>
            <MotocarFormSpec
              form={form}
              myImages={myImages}
              setMyImages={setMyImages}
            />
          </div>
          <div className={currentStep !== 3 ? "gx-d-none" : ""}>
            {/* <MotocarFormTech form={form} /> */}
          </div>
        </div>

        <Divider dashed orientation="center" plain>
          Тохиргоо
        </Divider>

        <Form.Item
          name="isactive"
          label="Идэвхтэй?"
          valuePropName="checked"
          {...forItemLayoutSame}
        >
          <Switch />
        </Form.Item>

        <Divider dashed orientation="center" plain>
          Таны үйлдэл
        </Divider>

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
