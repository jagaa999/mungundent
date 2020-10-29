import React from "react";

import Aux from "util/Auxiliary.js";
import WidgetHeader from "components/WidgetHeader/index";

const userImageList = [
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Би хэт түрэмгий яваад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Би байнга түгжрэлд явж байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Нормальдаж зогсдог билүү?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Өвөл өглөө машинаа халаахын тулд асаалттай орхидог билүү?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Би сайн шатахуун хийж байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Дутуу шахаад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Багаажинд маань хэрэггүй баахан ачаа байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Дугуй маань шалчгар яваад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хэт хүйтэнд мотор даараад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc:
      "Бараг явахгүй болохоор хайбрид машины маань батерей цэнэг сайн авахгүй байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Үргэлж дүүрэн хүнтэй явдаг билүү?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Тоормос маань зуурчихсан юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Шатахуун труп хаа нэгтээ дуслаад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Моторт ямар нэгэн доголдол байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Машины компьютер буруу ажиллаад байгаа юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Агаар шүүгч бөглөрчихсөн юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Эйр кондишн буюу агааржуулагч байнга ажиллаад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Цахилгаан их хэрэглэдэг ямар нэгэн юм байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хол замд хэт хурдлаад байна уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хол замд дан салхины өөдөөс явсан уу?",
    rating: "5.0",
    deals: "Аюултай",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600255294405-5ff8de62b359?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=500&q=60",
    desc: "Хол замд дандаа өгсөөд байсан юм биш биз?",
    rating: "5.0",
    deals: "Аюултай",
  },
];

const MotoToolFuelTips = () => {
  return (
    <>
      <WidgetHeader
        styleName="gx-flex-row"
        title="Шатахуун зарцуулах шалтгаанууд"
        // extra={
        //   <span>
        //     Go to agents list{" "}
        //     <i className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle" />
        //   </span>
        // }
      />
      <ul className="gx-agents-list">
        {userImageList.map((user, index) => (
          <li key={index}>
            <div className="gx-profileon gx-pointer">
              <div className="gx-profileon-thumb">
                <img alt="..." src={user.image} className="gx-rounded-lg" />
              </div>
              <div className="gx-profileon-content" style={{ top: 0 }}>
                <p className="gx-fs-sm gx-text-truncate">
                  <i className={`icon icon-star gx-text-orange gx-pr-1`} />{" "}
                  {user.rating} <span className="gx-px-sm-1">|</span>{" "}
                  {user.deals}
                </p>
                <h5 className="gx-mt-2" style={{ lineHeight: 1.7 }}>
                  {user.desc}
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MotoToolFuelTips;
