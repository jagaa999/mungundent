import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import moment from "moment";
import accounting from "accounting";

import { Card, Alert, Badge } from "antd";

import AutozarDetail2General from "./Autozar/AutozarDetail2General";
import AutozarDetail2Zar from "./Autozar/AutozarDetail2Zar";
import AutozarDetailSeller from "./Autozar/AutozarDetailSeller";
import AutozarGoonet from "./Autozar/AutozarGoonet";

import AutozarContext from "context/AutozarContext";

const AutozarDetail2 = () => {
  const autozarContext = useContext(AutozarContext);
  const autozarItem = autozarContext.autozarDetail.autozarDetail || {};
  const htmlEntities = new Html5Entities();

  const [cardTabs, setCardTabs] = useState({
    key: "tab4",
  });

  const tabList = [
    {
      key: "tab1",
      tab: <span className="gx-fs-md">Автомашин</span>,
    },
    {
      key: "tab2",
      tab: <span className="gx-fs-md">Автозар</span>,
    },
    {
      key: "tab3",
      tab: <span className="gx-fs-md">Каталоги</span>,
    },
    {
      key: "tab4",
      tab: (
        <span className="gx-fs-md">
          Борлуулагч
          <Badge status="processing" className="gx-m-0 gx-ml-1" />
        </span>
      ),
    },
  ];

  const contentList = {
    tab1: <AutozarDetail2General autozarItem={autozarItem} />,
    tab2: <AutozarDetail2Zar autozarItem={autozarItem} />,
    tab3: <AutozarGoonet autozarItem={autozarItem} />,
    tab4: <AutozarDetailSeller autozarItem={autozarItem} />,
  };

  const onTabChange = (key, type) => {
    // console.log(key, type);
    setCardTabs({ ...cardTabs, [type]: key });
  };

  if (Object.keys(autozarItem).length !== 0) {
    const myImages = (autozarItem.IMAGES || "").split("#");

    return (
      <div key={autozarItem.id} className="gx-main-content autozar-detail">
        <Card
          className="moto-autozar-detail-card"
          style={{ width: "100%" }}
          title={
            <>
              {moment(autozarItem.mglyearmanufactured).format("YYYY")}{" "}
              {autozarItem.mglfirm} {autozarItem.mglmark}
            </>
          }
          extra={`Үнэ: ${accounting.formatMoney(
            autozarItem.financepricerr,
            "₮",
            0,
            "'"
          )}`}
          tabList={tabList}
          activeTabKey={cardTabs.key}
          onTabChange={(key) => {
            onTabChange(key, "key");
          }}
        >
          {contentList[cardTabs.key]}
        </Card>

        <Alert
          message="Зарын тухай нэмэлт мэдээлэл"
          description={autozarItem.description}
          type="info"
          showIcon
        />
      </div>
    );
  } else {
    return "";
  }
};

export default AutozarDetail2;

{
  /*

! CAR

imagemain: "storage/uploads/content/autozar/1587535124048720/2020/04/picture_1587535463.jpg"
imageother: ""
mglbody: "SUV"
mglcoloroutside: "Хар"
mglcountryorigin: "Япон"
mgldoor: "4"
mgldrivepos: "Баруун"
mglengine2disp: "2693"
mglfirm: "Toyota"
mglfuel: "Бензин"
mgllicensenumberfull: "2825УАА"
mgllicensenumbershow: ""
body2vinnumber: "TRN2150019334"
body2vinnumbershow: "1"
mglmark: "Hilux"
mglseat: "5"
mglyearimport: "2019-06-02"
mglyearmanufactured: "2007-01-01"

drive2drivename: "4WD (Full-time)"
drive2transtypename: "Автомат - AT"
driveid: "95798500"
transtypeiid: "1001"

autozarmilage: "115537"


! AUTOZAR

autozarconditionid: "1030"

autozarconditionname: "Монголд бага явсан"
id: "1587535609962815"
financecondition: "Бэлнээр ярина"
autozarleasing: ""
financepricerr: "39000000"


autozarinspection: "1"
autozarpenalty: "1"
autozartax: "1"

isactive: "1"
iscomment: "1"
isfeatured: "0"



createdby: "1587535124048720"
createddate: "2020-04-22 14:06:49"
modifiedby: "1587535124048720"
modifieddate: "2020-04-22 14:06:49"


! BODY

description: ""


! GOONET

firmid: "1011300000"
markid: "2391984227107543"
motocarid: "1587535609128123"
indexdate: "2019-06-01"
indeximage: "https://catalogphoto.goo-net.com/carphoto/10104114_201906.jpg"
goobody2door: "4"
goobody2modelcodefull: "QDF-GUN125"
goobody2seat: "5"
goocardate: "2019-06-01"
goocarid: "10121789"
goocartrim: "Z Black Rally Edition"
goodrive2transtypename: "Автомат - AT"
gooengine2code: "2GD-FTV"
gooengine2disp: "2393"
gooengine2fuelname: "Дизель"
gooengine2fueltank: "80"
gooengine2powerhp: "147.51"
goomainid: "201906_TOYOTA_HILUX"
goomodelcode: "GUN125"
goopricenewusd: "36841"
goountilnow: ""


! MEMBER

systemuserid: ""
memberprofilephoto: ""
memberuserfullname: ""
memberusername: ""
mobile1rr: "99031547"
mobile2: "99031547"
email: "khiddaa01@gmail.com"

memberfirebaseuid: ""
ownerid: "0"
memberpersonid: ""
*/
}
