import React from "react";
import { Avatar } from "antd";

const MemberItem = ({ memberItem }) => {
  // actiondata: "1"
  // actionname: "Таалагдлаа"
  // id: "1577322982856239"
  // imagemain: "storage/uploads/content/news/1493006644797290/2017/11/71282742.jpg"
  // memberid: "1502764251361501"
  // modifieddate: "2019-12-26 09:16:23"
  // recordid: "1510540386534073"
  // spec1: "Сонирхолтой зургууд"
  // spec2: "“Land Cruiser автомашины төрөлх нутаг” гэж яригддаг Yoshiwara үйлдвэрийн тухай танилцуулгыг хүргүүлж..."
  // title: "Land Cruiser-ийн төрсөн нутаг"
  // typeid: "205"

  // image: "https://via.placeholder.com/150",
  // title: "Alex Brown has shared Martin Guptil's post",
  // time: "5:18 PM",
  // icon: "chat gx-text-grey",

  console.log("memberItem//////////////", memberItem[1]);

  const { icon, image, title, time } = memberItem;
  return (
    <li className="gx-media">
      <Avatar
        className="gx-size-40 gx-mr-3"
        alt={memberItem[1].imagemain}
        src={memberItem[1].imagemain}
      />
      <div className="gx-media-body gx-align-self-center">
        <p className="gx-fs-sm gx-mb-0">{memberItem[1].title}</p>
        <i className="icon icon-chat gx-text-grey gx-pr-2" />
        <span className="gx-meta-date">
          <small>{memberItem[1].modifieddate}</small>
        </span>
      </div>
    </li>
  );
};

export default MemberItem;
