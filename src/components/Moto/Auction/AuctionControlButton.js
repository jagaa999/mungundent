import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import { Button, Dropdown, Menu, Checkbox, message, Switch } from "antd";
import MyIcon from "util/iconFunction";
import { UserOutlined } from "@ant-design/icons";
import { Html5Entities } from "html-entities";

import ErrorReportModal from "components/Moto/Error/ErrorReportModal";

import AuctionContext from "context/AuctionContext";
import MemberContext from "context/MemberContext";
import MemberItemsContext from "context/MemberItemsContext";
import CompareContext from "context/CompareContext";

const AuctionControlButton = ({ auctionItem, tableName }) => {
  const htmlEntities = new Html5Entities();

  const auctionDetailContext = useContext(AuctionContext);
  const compareContext = useContext(CompareContext);
  const memberContext = useContext(MemberContext);
  const memberItemsContext = useContext(MemberItemsContext);
  // const auctionItem = auctionDetailContext.auctionDetail.auctionDetail;

  const [showErrorReportModal, setShowErrorReportModal] = useState(false);

  // console.log(auctionItem);
  const actionSave = (actionname) => {
    const myImages = auctionItem.IMAGES.split("#");

    const myValues = {
      id: "",

      tablename: "MOTO_AUCTION",
      recordid: auctionItem.ID || "",
      actionname: actionname || "Таалагдлаа",
      actiondata: "1",
      description: `${auctionItem.YEAR} ${htmlEntities.decode(
        auctionItem.MARKA_NAME
      )} ${htmlEntities.decode(auctionItem.MODEL_NAME)}`,
      mainimg: myImages[1],
    };

    memberItemsContext.saveMemberItem(myValues);
  };

  const actionDelete = (id) => {
    memberItemsContext.deleteMemberItem(id);
  };

  const actionMine = (event, actionname, id) => {
    const isChecked = event.target.checked || false;

    if (isChecked) {
      actionSave(actionname);
    } else {
      actionDelete(id);
    }
  };

  let myIsLike = {
    id: null,
    checked: false,
  };
  let myIsSave = {
    id: null,
    checked: false,
  };

  Object.keys(memberItemsContext.state.memberItems).map((item, index) => {
    const myItem = memberItemsContext.state.memberItems[index];
    if (myItem.recordid === auctionItem.ID && myItem.tablename === tableName) {
      switch (myItem.actionname) {
        case "Таалагдлаа":
          myIsLike.id = myItem.id;
          myIsLike.checked = true;
          break;
        case "Жоорлох":
          myIsSave.id = myItem.id;
          myIsSave.checked = true;
          break;
        default:
          break;
      }
    }
  });

  const menuMemberActions = () => (
    <Menu
    // selectable={true}
    // selectedKeys={["compare", "box"]}
    >
      <Menu.Item
        key="compare"
        onClick={(e) => compareContext.addItem(auctionItem, "auction")}
        icon={<MyIcon type="iconcrosshairs" />}
      >
        Харьцуулах
      </Menu.Item>

      <Menu.Item
        key="love"
        onClick={(e) => actionMine(e, "Таалагдлаа", myIsLike.id)}
        icon={<MyIcon type="iconlove" />}
        selected={true}
      >
        {/* <Checkbox
          checked={myIsLike.checked}
          icon={<MyIcon type="iconlov" />}
        > */}
        Таалагдлаа
        {/* </Checkbox> */}
      </Menu.Item>

      <Menu.Item
        key="box"
        onClick={(e) => actionMine(e, "Жоорлох", myIsSave.id)}
        icon={<MyIcon type="iconbox" />}
      >
        {/* <Checkbox
          checked={myIsSave.checked}
          
        > */}
        Жоорлох
        {/* </Checkbox> */}
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item
        key="error"
        onClick={() => {
          setShowErrorReportModal(true);
        }}
        icon={<MyIcon type="iconrecycle" className="gx-text-danger" />}
      >
        {/* <MyIcon type="iconrecycle" className="moto-icon-1-3 gx-text-danger" />{" "} */}
        Алдаа мэдэгдэх
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="moto-detail-buttons">
      <Dropdown
        key="member_action_button"
        overlay={menuMemberActions}
        placement="bottomRight"
        trigger={["click"]}
        arrow
      >
        <Button>
          <UserOutlined />
        </Button>
      </Dropdown>
      {/* Энд нэвтэрсэн хэрэглэгч нь тухайн нийтлэлийн эзэн мөн эсэхийг шалгана. Биш
      бол гаргахгүй. */}

      {/* <Dropdown
        key="owner_action_button"
        overlay={menuOwnerActions}
        placement="bottomRight"
        trigger={["click"]}
        // visible="true"
        arrow
      >
        <Button type="primary">
          <SettingOutlined />
        </Button>
      </Dropdown> */}

      <ErrorReportModal
        showErrorReportModal={showErrorReportModal}
        setShowErrorReportModal={setShowErrorReportModal}
        item={auctionItem}
        tableName="MOTO_AUCTION"
        idField="ID"
      />
    </div>
  );
};

export default AuctionControlButton;
