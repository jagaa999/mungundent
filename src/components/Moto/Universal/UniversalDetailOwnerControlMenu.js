import React from "react";
import { Link } from "react-router-dom";

import { Button, Dropdown, Menu, Checkbox, message } from "antd";
import {
  WarningTwoTone,
  UserOutlined,
  SettingOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  EditOutlined,
} from "@ant-design/icons";

import MyIcon from "util/iconFunction";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";

const UniversalDetailOwnerControlMenu = ({
  myUniversalItem,
  myDetailSettings,
  myClassName,
  myStyle,
}) => {
  const { mainData, ownerButtons } = myUniversalItem;
  // const { headerSettings } = myDetailSettings;

  console.log("ownerButtons", ownerButtons);

  const menuOwnerActions = () => (
    <Menu>
      {ownerButtons.map((item, index) => {
        return item.menuItem;
      })}
      {/* <Menu.Item
        key="Дээшлүүлэх"
        // onClick={newsDetailContext.upPublishedDate}
      >
        <ArrowUpOutlined /> Дээшлүүлэх
      </Menu.Item>

      <Menu.Item key="Спонсор">
        <Checkbox
        // checked={myUniversalItem.isfeatured}
        // onChange={newsDetailContext.toggleIsFeatured}
        // Энэ функцийг prepareJSON-оос явуулна.
        >
          Спонсор
        </Checkbox>
      </Menu.Item>

      <Menu.Item key="Идэвхтэй">
        <Checkbox
        // checked={myUniversalItem.isactive}
        // onChange={newsDetailContext.toggleIsActive}
        >
          Идэвхтэй
        </Checkbox>
      </Menu.Item> */}

      <Menu.Divider />

      <Menu.Item key="Засах">
        <Link to={mainData.link}>
          <EditOutlined /> Засах
        </Link>
      </Menu.Item>

      <Menu.Item
        key="Устгах"
        // onClick={handleMenuClick}
        danger
        disabled
      >
        <DeleteOutlined /> Устгах
      </Menu.Item>
    </Menu>
  );

  return (
    // {(newsDetailPublisherId === memberSysId ||
    //   memberSysId === "1598935351417") && (
    <Dropdown
      key="owner_action_button"
      overlay={menuOwnerActions}
      // placement="bottomRight"
      trigger={["click"]}
      // visible="true"
      arrow
    >
      <Button
        type="default"
        icon={<MyIcon type="iconellipsis-v-solid" className="moto-icon-1-3" />}
        className={myClassName}
        style={myStyle}
      ></Button>
    </Dropdown>
    // )}
  );
};

export default UniversalDetailOwnerControlMenu;
