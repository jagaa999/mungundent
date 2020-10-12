import React, { useState, useContext, useEffect } from "react";

import NewsEditor from "./NewsEditor";
import ImageUpload from "./Image/ImageUpload";

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

import { PlusOutlined, QuestionCircleOutlined } from "@ant-design/icons";

import { loadDataview } from "util/axiosFunction";
import NewsDetailContext from "context/NewsDetailContext";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

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

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log("blur");
}

function handleFocus() {
  console.log("focus");
}

const NewsForm = () => {
  const [form] = Form.useForm();
  const newsDetailContext = useContext(NewsDetailContext);
  const newsItem = newsDetailContext.state.newsDetail;
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
  }, []);

  const onFinish = (values) => {
    // values.body = htmlEntities.decode(myBody);
    values.body = myBody;
    values.images = myImages;
    newsDetailContext.saveNewsDetail(values);
  };

  const saveButton = () => {
    console.log("Save button clicked");
  };

  const normFileBody = (e) => {
    console.log("Editorjs хүлээн авсан нь:", e);

    setMyBody(e);
    return e;
  };

  const normFileImages = (e) => {
    console.log("Editorjs хүлээн авсан images:", e);

    setMyImages(e);
    return e;
  };

  let myNewsType = newsType.newsTypes;
  myNewsType.map((item, index) => {
    if (item.newstypeid < 199) {
      myNewsType[index].optgroup = "Мэдээ";
    } else {
      myNewsType[index].optgroup = "Нийтлэл";
    }
  });

  // ######  ####### ####### #     # ######  #     #
  // #     # #          #    #     # #     # ##    #
  // #     # #          #    #     # #     # # #   #
  // ######  #####      #    #     # ######  #  #  #
  // #   #   #          #    #     # #   #   #   # #
  // #    #  #          #    #     # #    #  #    ##
  // #     # #######    #     #####  #     # #     #

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
        initialValues={{
          newsid: newsItem ? newsItem.newsid : "",
          title: newsItem ? newsItem.title : "",
          newstypeid: newsItem ? newsItem.newstypeid : null,
          newssourceid: newsItem ? newsItem.newssourceid : null,
          isactive: newsItem ? toBoolean(newsItem.isactive) : true,
          isfeatured: newsItem ? toBoolean(newsItem.isfeatured) : false,
          iscomment: newsItem ? toBoolean(newsItem.iscomment) : true,
          // description: newsItem ? newsItem.description : "",
        }}
        scrollToFirstError={true}
        colon={false}
      >
        {/*
        ####### ### ####### #       ####### 
            #     #     #    #       #       
            #     #     #    #       #       
            #     #     #    #       #####   
            #     #     #    #       #       
            #     #     #    #       #       
            #    ###    #    ####### #######  */}
        <Form.Item
          {...forItemLayoutSame}
          name="newsid"
          label="ID дугаар"
          hidden={true}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="title"
          label={
            <span>
              Гарчиг&nbsp;
              <Tooltip title="Нийтлэлийн утга санааг бүрэн төлөөлөхүйцээр өгөөрэй.">
                <QuestionCircleOutlined />
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
          <TextArea
            placeholder="Гарчгаа бичнэ үү"
            autoSize
            onChange={titleOnChange}
          />
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
            placeholder="Төрлөө сонгоно уу"
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
            placeholder="Эх сурвалжийг сонгоно уу!"
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
            {/* {newsSource.newsSources.map((item) => (
              <Option key={item.newssourceid} value={item.newssourceid}>
                {item.newssourcename}
              </Option>
            ))} */}

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
        <Form.Item
          name="tempimages"
          label="Зураг"
          // rules={[{ required: true, message: "Зургаа заавал оруулна уу!" }]}
        >
          <ImageUpload
            normFile={normFileImages}
            newsImageMain={newsItem ? newsItem.imagemain : ""}
            imageTags={imageTags}
          />
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
        <Divider dashed orientation="center" plain>
          Тохиргоо
        </Divider>
        <Form.Item
          name="isactive"
          label="Идэвхтэй?"
          valuePropName="checked"
          {...forItemLayoutSame}
        >
          <Switch name="switchisactive" defaultChecked />
        </Form.Item>
        <Form.Item
          name="isfeatured"
          label="Спонсор?"
          valuePropName="checked"
          {...forItemLayoutSame}
        >
          <Switch name="switchisfeatured" defaultChecked />
        </Form.Item>
        <Form.Item
          name="iscomment"
          label="Коммент?"
          valuePropName="checked"
          {...forItemLayoutSame}
        >
          <Switch name="switchiscomment" defaultChecked />
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

export default NewsForm;
