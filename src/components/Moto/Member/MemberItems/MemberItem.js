import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Avatar } from "antd";

const MemberItem = (props) => {
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

  const memberItem = props.memberItem[1];
  const imageMain = "https://www.moto.mn/" + memberItem.imagemain;

  if (memberItem.actiondata === 0) return null; //actiondata буюу Үйлдэл нь false байвал хоосон буцаана.

  // *Түлхүүр үгүүдийг өнгөөр ялгаж бичихэд хэрэглэнэ.
  let myTextColor = "gx-text-grey";
  switch (memberItem.actionname) {
    case "Таалагдлаа":
      myTextColor = "gx-text-orange";
      break;
    case "Жоорлох":
      myTextColor = "gx-text-success";
      break;
    default:
      myTextColor = "gx-text-grey";
      break;
  }

  return (
    <li className="gx-media">
      <Avatar
        className="gx-size-40 gx-mr-3"
        alt={memberItem.title}
        src={imageMain}
      />
      <div className="gx-media-body gx-align-self-center">
        <Link to={"/news/" + memberItem.recordid}>
          <p className="gx-fs-sm gx-mb-0">{memberItem.title}</p>
        </Link>
        {/* <Link to={"/news/" + newsid}>{title}</Link> */}

        {/* <i className="icon icon-chat gx-text-grey gx-pr-2" /> */}
        <span className={`gx-mr-2 ${myTextColor}`}>
          <small>{memberItem.actionname}</small>
        </span>
        <span className="gx-meta-date">
          <small>{memberItem.modifieddate}</small>
        </span>
      </div>
    </li>
  );
};

export default MemberItem;
