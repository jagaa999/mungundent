import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import {
  Button,
  Card,
  Badge,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Menu,
  Checkbox,
  Switch,
  message,
  Affix,
  Divider,
  Spin,
  Avatar,
  Statistic,
  Modal,
} from "antd";

import {
  WarningTwoTone,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  EditOutlined,
} from "@ant-design/icons";

import ErrorReportModal from "components/Moto/Error/ErrorReportModal";

import NewsDetailContext from "context/NewsDetailContext";
import MemberItemsContext from "context/MemberItemsContext";

const NewsButtonPanel = (props) => {
  const newsDetailContext = useContext(NewsDetailContext);
  const memberItemsContext = useContext(MemberItemsContext);
  const newsItem = newsDetailContext.state.newsDetail;

  const [showErrorReportModal, setShowErrorReportModal] = useState(false);

  // console.log(newsItem);
  const actionSave = (actionname) => {
    const myValues = {
      id: "",
      tablename: "ECM_NEWS",
      recordid: newsItem.newsid || "",
      actionname: actionname || "Таалагдлаа",
      actiondata: "1",
      description: newsItem.title,
    };

    memberItemsContext.saveMemberItem(myValues);
  };

  const actionDelete = (id) => {
    memberItemsContext.deleteMemberItem(id);
  };

  const actionMine = (event, actionname, id) => {
    // console.log("actionSave - e: ", event);
    // console.log("actionSave - actionname: ", actionname);
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
    // console.log("memberItemsContext.state.memberItems", myItem);
    if (myItem.recordid === newsItem.newsid) {
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
    <Menu>
      <Menu.Item key="Таалагдлаа">
        <Checkbox
          checked={myIsLike.checked}
          onChange={(e) => actionMine(e, "Таалагдлаа", myIsLike.id)}
        >
          Таалагдлаа
        </Checkbox>
      </Menu.Item>

      <Menu.Item key="Жоорлох">
        <Checkbox
          checked={myIsSave.checked}
          onChange={(e) => actionMine(e, "Жоорлох", myIsSave.id)}
        >
          Жоорлох
        </Checkbox>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item
        key="Алдаатай"
        onClick={() => {
          setShowErrorReportModal(true);
        }}
      >
        <WarningTwoTone twoToneColor="#eb2f96" /> Алдаа мэдэгдэх
      </Menu.Item>
    </Menu>
  );

  const menuOwnerActions = () => (
    <Menu>
      <Menu.Item key="Дээшлүүлэх" onClick={newsDetailContext.upPublishedDate}>
        <ArrowUpOutlined /> Дээшлүүлэх
      </Menu.Item>

      <Menu.Item key="Спонсор">
        <Checkbox
          checked={toBoolean(newsItem.isfeatured)}
          onChange={newsDetailContext.toggleIsFeatured}
        >
          Спонсор
        </Checkbox>
      </Menu.Item>

      <Menu.Item key="Идэвхтэй">
        <Checkbox
          checked={toBoolean(newsItem.isactive)}
          onChange={newsDetailContext.toggleIsActive}
        >
          Идэвхтэй
        </Checkbox>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key="Засах">
        <Link to={"/news/edit/" + newsItem.newsid}>
          <EditOutlined /> Засах
        </Link>
      </Menu.Item>

      <Menu.Item key="Устгах" onClick={handleMenuClick} danger disabled>
        <DeleteOutlined /> Устгах
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log(e);
  }

  // console.log("props", props);

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
      <Dropdown
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
      </Dropdown>

      <ErrorReportModal
        showErrorReportModal={showErrorReportModal}
        setShowErrorReportModal={setShowErrorReportModal}
        item={props.item}
      />
    </div>
  );
};

export default NewsButtonPanel;
