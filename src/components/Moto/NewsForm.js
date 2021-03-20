import React, { useState, useContext, useEffect } from "react";

import NewsEditor from "./NewsEditor";
import ImageUpload from "./Image/ImageUpload";
import MyIcon from "util/iconFunction";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
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
} from "antd";

import { loadDataview } from "util/axiosFunction";
import NewsContext from "context/NewsContext";
import ImageCrop1 from "./Image/ImageCrop1";
import CarFirmMarkChoose from "./Form/CarFirmMarkChoose";
import { isEmpty } from "lodash";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const prepareCarFirmMark = (values) => {
  // carfirmlist":{4 items
  //   "0": {
  //   id:"1487833859399"
  //   srctablename:"ECM_NEWS"
  //   srcrecordid:"16150271791671"
  //   trgtablename:"MOTO_GOO_CARS_REF_FIRM"
  //   trgrecordid:"1021400000"
  //   text1:"Volkswagen"
  //   }
  // }

  // carmarklist:{
  //   "0": {
  //   id:"1487833859400",
  //   srctablename:"ECM_NEWS",
  //   srcrecordid:"16150271791671",
  //   trgtablename:"MOTO_GOO_CARS_REF_MARK",
  //   trgrecordid:"6464819816495469",
  //   text1:"5 Series",
  //   }
  // }

  //   carfirmmark: Array(2)
  // 0: {firm: "1060200000 ~ Alfa Romeo", mark: undefined}
  // 1: {firm: "1011300000 ~ Toyota", mark: "7151525444091293~Alphard Hybrid"}

  const carFirmList = [];
  const carMarkList = [];

  const myList = values.carfirmmark || [];

  myList.map((item, index) => {
    console.log("eeeeeee", item);

    const myFirmTemp = item.firm || "";
    const myIdFirm = myFirmTemp.split("~")[0];
    const myTextFirm = myFirmTemp.split("~")[1];
    console.log(myIdFirm, "         ------------      ", myTextFirm);
    if (!isEmpty(myIdFirm)) {
      const myFirm = {
        id: "",
        srctablename: "ECM_NEWS",
        srcrecordid: values.newsid || "",
        trgtablename: "MOTO_GOO_CARS_REF_FIRM",
        trgrecordid: myIdFirm,
        text1: myTextFirm,
      };
      carFirmList.push(myFirm);
    }

    const myMarkTemp = item.mark || "";
    const myIdMark = myMarkTemp.split("~")[0];
    const myTextMark = myMarkTemp.split("~")[1];
    console.log(myIdMark, "         ------------      ", myTextMark);
    if (!isEmpty(myIdMark)) {
      const myMark = {
        id: "",
        srctablename: "ECM_NEWS",
        srcrecordid: values.newsid || "",
        trgtablename: "MOTO_GOO_CARS_REF_MARK",
        trgrecordid: myIdMark,
        text1: myTextMark,
      };
      carMarkList.push(myMark);
    }

    // console.log("DDDDDDDD", myFirm);
  });

  values.carFirmList = carFirmList;
  values.carMarkList = carMarkList;

  // values.remove("carfirmmark");
  delete values["carfirmmark"];

  return values;
};

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

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log("blur");
}

function handleFocus() {
  console.log("focus");
}

//   ####  #####   ##   #####  #####
//  #        #    #  #  #    #   #
//   ####    #   #    # #    #   #
//       #   #   ###### #####    #
//  #    #   #   #    # #   #    #
//   ####    #   #    # #    #   #
const NewsForm = () => {
  const [form] = Form.useForm();
  const newsDetailContext = useContext(NewsContext);
  const newsItem = newsDetailContext.newsDetail.mainDetail;
  const [imageTags, setImageTags] = useState("");

  const titleOnChange = (text) => {
    // console.log("dsfdsfsd", text.target.value);
    setImageTags(text.target.value);
  };

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох
  let myTempBody;

  try {
    myTempBody = htmlEntities.decode(newsItem.body);
  } catch (e) {
    myTempBody = "";
  }

  let myOutputBody = {};
  if (myTempBody !== "") {
    if (myTempBody.indexOf('"blocks"') !== -1) {
      try {
        myOutputBody = JSON.parse(myTempBody);
      } catch (e) {
        myOutputBody = {};
      }
    } else {
      myOutputBody = {};
    }
  }

  // console.log("myTempBodymyTempBody", myTempBody);
  const [myBody, setMyBody] = useState(myOutputBody);
  const [myImages, setMyImages] = useState([]);

  const [newsType, setNewsType] = useState({
    loading: false,
    newsTypes: [],
  });
  const [newsSource, setNewsSource] = useState({
    loading: false,
    newsSources: [],
  });

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callFunctionAsync = async () => {
    setNewsType({ ...newsType, loading: true });
    setNewsType({
      newsTypes: await loadDataview({
        systemmetagroupid: "1587100905303413",
        paging: {
          sortColumnNames: {
            newstypeid: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });

    setNewsSource({ ...newsSource, loading: true });
    setNewsSource({
      newsSources: await loadDataview({
        systemmetagroupid: "1585046479054",
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
    // form.title.focus();
    // console.log("FFFFFFFFF", form);
  }, []);

  //  ###### # #    # #  ####  #    #
  //  #      # ##   # # #      #    #
  //  #####  # # #  # #  ####  ######
  //  #      # #  # # #      # #    #
  //  #      # #   ## # #    # #    #
  //  #      # #    # #  ####  #    #
  const onFinish = (values) => {
    // values.body = htmlEntities.decode(myBody);
    values.body = myBody;
    values.images = myImages;
    console.log("MY Last Form Finish", values);
    values = prepareCarFirmMark(values);
    console.log("AFTER PREPARE", values);

    newsDetailContext.saveNewsDetail(values);
  };

  const normFileBody = (e) => {
    console.log("Editorjs хүлээн авсан нь:", e);

    setMyBody(e);
    return e;
  };

  // const normFileImages = (e) => {
  //   console.log("Editorjs хүлээн авсан images:", e);

  //   setMyImages(e);
  //   return e;
  // };

  let myNewsType = newsType.newsTypes;
  myNewsType.map((item, index) => {
    if (item.newstypeid < 199) {
      myNewsType[index].optgroup = "Мэдээ";
    } else {
      myNewsType[index].optgroup = "Нийтлэл";
    }
  });

  const handleFormValuesChange = (changedValues, allValues) => {
    console.log("handleFormValuesChange ажиллалаа", changedValues, allValues);
  };

  // console.log("newsItem: ", newsItem);

  // console.log("newsItem.carfirmlist", newsItem.carfirmlist);

  //  #####  ###### ##### #    # #####  #    #
  //  #    # #        #   #    # #    # ##   #
  //  #    # #####    #   #    # #    # # #  #
  //  #####  #        #   #    # #####  #  # #
  //  #   #  #        #   #    # #   #  #   ##
  //  #    # ######   #    ####  #    # #    #
  return (
    <Card
      className="gx-card_old "
      style={{ backgroundColor: "#f0f0f0" }}
      title="Нийтлэлийн тохиргоо"
    >
      <Form
        {...formItemLayout}
        form={form}
        name="newsDetailForm"
        onFinish={onFinish}
        onValuesChange={handleFormValuesChange}
        initialValues={{
          newsid: newsItem.newsid || "",
          title: newsItem.title || "",
          newstypeid: newsItem.newstypeid || null,
          newssourceid: newsItem.newssourceid || null,
          isactive: newsItem.isactive ? toBoolean(newsItem.isactive) : true,
          iscomment: newsItem.iscomment ? toBoolean(newsItem.iscomment) : true,
          isfeatured: newsItem.isfeatured
            ? toBoolean(newsItem.isfeatured)
            : false,
          // description: newsItem ? newsItem.description : "",
          // carfirmmark: Object.values(newsItem.carfirmlist || {}),
          carfirmmark: [
            {
              firm: "1030400000~Kia",
            },
            {
              firm: "1030300000~Hyundai",
            },
            {
              firm: "1030400000~Kia",
            },
          ],
        }}
        scrollToFirstError={true}
        colon={false}
      >
        {/*                                             
         ####    ##   #####  ###### # #####  #    # 
        #    #  #  #  #    # #      # #    # ##  ## 
        #      #    # #    # #####  # #    # # ## # 
        #      ###### #####  #      # #####  #    # 
        #    # #    # #   #  #      # #   #  #    # 
         ####  #    # #    # #      # #    # #    # */}

        <Form.Item {...formItemLayout} label="Холбоотой фирм, марк">
          <CarFirmMarkChoose
            myItem={newsItem}
            tailFormItemLayout={tailFormItemLayout}
            {...tailFormItemLayout}
            form={form}
            onValuesChange={form.onValuesChange}
          />
        </Form.Item>

        {/* <Divider /> */}

        {/*
        ##### # ##### #      ###### 
          #   #   #   #      #      
          #   #   #   #      #####  
          #   #   #   #      #      
          #   #   #   #      #      
          #   #   #   ###### ###### */}
        <Form.Item name="newsid" label="ID дугаар" hidden={true}>
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="title"
          label={
            <span>
              Гарчиг&nbsp;
              <Tooltip title="Нийтлэлийн утга санааг бүрэн төлөөлөхүйцээр өгөөрэй.">
                {/* <QuestionCircleOutlined /> */}
                <MyIcon type="iconhelp" />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Гарчгаа бичнэ үү!",
              whitespace: true,
            },
          ]}
        >
          <TextArea placeholder="Гарчиг" autoSize onChange={titleOnChange} />
        </Form.Item>

        <Form.Item
          name="newstypeid"
          hasFeedback
          label="Төрөл"
          rules={[{ required: true, message: "Төрлөө сонгоно уу!" }]}
        >
          <Select
            loading={newsType.loading}
            showSearch
            placeholder="Төрөл"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
            {myNewsType
              .filter(
                (v, i, a) => a.findIndex((t) => t.optgroup === v.optgroup) === i
              )
              .map((item, index) => (
                <OptGroup label={item.optgroup} key={index}>
                  {myNewsType.map((option) => {
                    if (item.optgroup === option.optgroup) {
                      return (
                        <Option
                          key={option.newstypeid}
                          value={option.newstypeid}
                        >
                          {option.newstypename}
                        </Option>
                      );
                    }
                  })}
                </OptGroup>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="newssourceid"
          label="Эх сурвалж"
          rules={[{ required: true, message: "Эх сурвалжийг сонгоно уу!" }]}
        >
          <Select
            loading={newsSource.loading}
            showSearch
            placeholder="Эх сурвалж"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
            {newsSource.newsSources
              .filter(
                (v, i, a) =>
                  a.findIndex((t) => t.newssourcetype === v.newssourcetype) ===
                  i
              )
              .map((item, index) => (
                <OptGroup label={item.newssourcetype} key={index}>
                  {newsSource.newsSources.map((option) => {
                    if (item.newssourcetype === option.newssourcetype) {
                      return (
                        <Option
                          key={option.newssourceid}
                          value={option.newssourceid}
                        >
                          {option.newssourcename}
                        </Option>
                      );
                    }
                  })}
                </OptGroup>
              ))}
          </Select>
        </Form.Item>
        {/* <Form.Item name="description" label="Товчлол">
          <TextArea rows={4} placeholder="Товчлолоо бичнэ үү" />
        </Form.Item> */}
        {/* <Form.Item name="publishedDate" label="Нийтлэх огноо">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item> */}
        <Form.Item name="imgurl" label="Зураг" valuePropName="fileList">
          <ImageCrop1 imagemainFileList={newsItem.imagemainFileList || []} />
        </Form.Item>

        <Form.Item
          name="tempbody"
          label="Нийтлэл"
          // initialValue={newsItem ? newsItem.body : ""}
          getValueFromEvent={normFileBody}
          rules={[{ type: "array" }]}
        >
          <Card bordered={false}>
            <NewsEditor
              normFile={normFileBody}
              newsBody={newsItem ? newsItem.body : {}}
            />
          </Card>
        </Form.Item>
        <Form.Item
          name="isactive"
          label="Идэвхтэй?"
          valuePropName="checked"
          hidden={true}
        >
          <Switch name="switchisactive" defaultChecked />
        </Form.Item>
        <Form.Item name="isfeatured" label="Спонсор?" valuePropName="checked">
          <Switch
            name="switchisfeatured"
            defaultChecked
            checkedChildren="Спонсор"
            unCheckedChildren="Энгийн"
          />
        </Form.Item>
        <Form.Item
          name="iscomment"
          label="Коммент?"
          valuePropName="checked"
          hidden={true}
        >
          <Switch name="switchiscomment" defaultChecked />
        </Form.Item>

        <Divider />

        {/* 
        "id":string"1487833859399"
        "srctablename":string"ECM_NEWS"
        "srcrecordid":string"16150271791671"
        "trgtablename":string"MOTO_GOO_CARS_REF_FIRM"
        "trgrecordid":string"1021400000"
        "text1":string"Volkswagen" */}
        {/* const [carFirmList, setCarFirmList] = useState([]); */}

        {/* <CarFirmMarkSelect
          myItem={newsItem}
          carFirmList={carFirmList}
          setCarFirmList={setCarFirmList}
        /> */}

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            // className="gx-btn-success"
            icon={<MyIcon type="iconplus-solid" />}
          >
            Илгээх
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default NewsForm;
