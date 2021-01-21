import React, { lazy } from "react";
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
  myDetailContext,
  myUniversalItem,
  myDetailSettings,
  myClassName,
  myStyle,
}) => {
  const { mainData, ownerButtons } = myUniversalItem;
  // const { headerSettings } = myDetailSettings;

  // const myContext = await import('context/newsContext');
  // const myContext = lazy(() => import(myDetailSettings.contextName));

  console.log("ownerButtons", ownerButtons);
  console.log("myContext FFFFFFFFFFFFFFF", myDetailContext);
  console.log("myContext toggleIsFeatured", myDetailContext.toggleIsFeatured);

  const menuOwnerActions = () => (
    <Menu>
      {ownerButtons.map((item, index) => {
        let myItem = { ...item.menuItem };

        //Дан цэс байх үед
        if (myItem?.props?.onClick) {
          myItem = {
            ...item.menuItem,
            props: {
              ...myItem.props,
              // onClick: myDetailContext.upPublishedDate,
              onClick: myDetailContext[myItem.props.onClick],
            },
          };
        }

        //Checkbox байх үед
        if (myItem?.props?.children?.props?.onChange) {
          // console.log(
          //   "myItem.props.onChange 88888888",
          //   myItem.props.children.props.onClick
          // );
          myItem = {
            ...item.menuItem,
            props: {
              ...myItem.props,
              children: {
                ...myItem.props.children,
                props: {
                  ...myItem.props.children.props,
                  // checked: myUniversalItem.isfeatured,
                  checked: myUniversalItem[myItem.props.children.props.checked],
                  // onChange: myDetailContext.toggleIsFeatured,
                  onChange:
                    myDetailContext[myItem.props.children.props.onChange],
                },
              },
            },
          };
        }

        console.log("item SDSSSSSSSSSSSS", myItem);

        return myItem;
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
