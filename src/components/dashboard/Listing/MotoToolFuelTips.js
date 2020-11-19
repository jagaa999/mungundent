import React from "react";

import WidgetHeader from "components/WidgetHeader/index";
import MotoSmartHomeCard2 from "components/Widgets/MotoSmartHomeCard2";
import { Row, Col } from "antd";

const userImageList = [
  {
    image:
      "https://images.unsplash.com/photo-1534078362425-387ae9668c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Би хэт түрэмгий яваад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579704949178-2b4335c8fda7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Би байнга түгжрэлд явж байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556783151-c6d5e7d296bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Нормальдаж зогсдог билүү?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549462728-4b410e59143f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Өвөл өглөө машинаа халаахын тулд асаалттай орхидог билүү?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567725925744-08e40388f113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Би сайн шатахуун хийж байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579445668832-329a98bdff57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Дутуу шахаад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553076489-80b7a25a948b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Багаажинд маань хэрэггүй баахан ачаа байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573999680045-27ef0ab84f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Дугуй маань шалчгар яваад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579278420945-896e4135068c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хэт хүйтэнд мотор даараад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551952237-954a0e68786c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc:
      "Бараг явахгүй болохоор хайбрид машины маань батерей цэнэг сайн авахгүй байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1602198313109-a3b74e092bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Үргэлж дүүрэн хүнтэй явдаг билүү?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542377281-73d08e3a10aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Тоормос маань зуурчихсан юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511711890176-b3a26e4fb6d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Шатахуун труп хаа нэгтээ дуслаад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc: "Моторт ямар нэгэн доголдол байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564162880232-a7521c1d5689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Машины компьютер буруу ажиллаад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525841508523-2aebc593a6b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Агаар шүүгч бөглөрчихсөн юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529454516905-415953c10f97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Эйр кондишн буюу агааржуулагч байнга ажиллаад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Цахилгаан их хэрэглэдэг ямар нэгэн юм байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хол замд хэт хурдлаад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хол замд дан салхины өөдөөс явсан уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531342627655-673320198dc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хол замд дандаа өгсөөд байсан юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
];

const MotoToolFuelTips = () => {
  return (
    <>
      <WidgetHeader
        styleName="gx-flex-row gx-mt-5"
        title="Шатахуун зарцуулах шалтгаанууд"
        // extra={
        //   <span>
        //     Go to agents list{" "}
        //     <i className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle" />
        //   </span>
        // }
      />

      <Row className="gx-d-flex">
        {userImageList.map((item, index) => (
          <Col
            key={index}
            xl={4}
            lg={6}
            md={6}
            sm={8}
            xs={12}
            className="gx-mb-5"
          >
            <MotoSmartHomeCard2 item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MotoToolFuelTips;
