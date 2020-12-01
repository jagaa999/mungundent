import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Modal,
  Avatar,
  Popover,
  Tooltip,
  Divider,
  Descriptions,
  Button,
  List,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  CloseCircleOutlined,
  SearchOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  ProfileOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import MemberContext from "context/MemberContext";
import SignIn from "../../../containers/SignIn";
import AvatarMember from "../Member/MemberAvatar";

const { Meta } = Card;

const MenuMember = () => {
  const memberContext = useContext(MemberContext);
  console.log("МИНИЙ ПРОФАЙЛ", memberContext.state);

  //    ###     #
  //   #   #   ##
  //  #     # # #
  //  #     #   #
  //  #     #   #
  //   #   #    #
  //    ###   #####

  const withMemberOptions = (
    <>
      <AvatarMember
        memberName={memberContext.state.memberFirebaseProfile.displayName}
        memberPhoto={memberContext.state.memberFirebaseProfile.photoURL}
        memberPosition="Гишүүнчлэл: Тодорхойгүй"
      />

      <Descriptions
        bordered
        size="small"
        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        className="moto-car-spec1"
      >
        <Descriptions.Item label="SysID">
          {memberContext.state.memberCloudUserSysId}
        </Descriptions.Item>
        <Descriptions.Item label="UID">
          {memberContext.state.memberUID}
        </Descriptions.Item>
      </Descriptions>

      <Link to={"/news/insert"}>
        <Button
          className="gx-mb-1 gx-mt-2 gx-btn-success"
          icon={<PlusOutlined />}
          type="text"
          size="small"
        >
          Нийтлэл
        </Button>
      </Link>

      <Link to={"/autozar/insert"}>
        <Button
          className="gx-mb-1 gx-mt-2 gx-btn-success gx-ml-3"
          icon={<PlusOutlined />}
          type="text"
          size="small"
        >
          Автозар
        </Button>
      </Link>

      {/* <Link to={"/motocar/insert"}>
        <Button
          className="gx-mb-1 gx-mt-2 gx-btn-success gx-ml-3"
          icon={<PlusOutlined />}
          type="text"
          size="small"
        >
          Машин
        </Button>
      </Link> */}
      <Link to={"/member/edit/" + memberContext.state.memberCloudUserSysId}>
        <Button
          className="gx-mb-1 gx-mt-2 gx-btn-success gx-ml-3"
          icon={<PlusOutlined />}
          type="text"
          size="small"
        >
          Анкет
        </Button>
      </Link>

      <Divider className="gx-mt-3 gx-mb-3" />
      <div className="gx-d-flex">
        <div>
          <Button
            icon={<HomeOutlined />}
            size="small"
            className="gx-btn-warning"
            disabled
          >
            Гарааш
          </Button>
          <Link to={"/member/" + memberContext.state.memberCloudUserSysId}>
            <Button
              icon={<UserOutlined />}
              size="small"
              className="gx-btn-warning"
            >
              Профайл
            </Button>
          </Link>
        </div>
        <div className="gx-ml-auto">
          <Button
            icon={<LogoutOutlined />}
            type="text"
            size="small"
            onClick={() => {
              memberContext.clearMemberProfile();
            }}
          >
            Гарах
          </Button>
        </div>
      </div>
    </>
  );

  // console.log("withMemberOptions", withMemberOptions);

  return memberContext.state.isLogin ? (
    <Popover
      // overlayClassName="gx-popover-horizantal"
      placement="bottomRight"
      content={withMemberOptions}
      trigger="click"
    >
      {memberContext.state.memberFirebaseProfile.photoURL !== null ? (
        <Avatar
          src={memberContext.state.memberFirebaseProfile.photoURL}
          className="gx-avatar gx-pointer"
          alt={memberContext.state.memberFirebaseProfile.photoURL}
          size={24}
        />
      ) : (
        <Avatar
          id="avatar-button"
          style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
          gap={2}
          className="gx-avatar gx-pointer"
        >
          {memberContext.state.memberFirebaseProfile.displayName !== null
            ? memberContext.state.memberFirebaseProfile.displayName.substring(
                0,
                3
              )
            : "Тодорхойгүй"}
        </Avatar>
      )}
    </Popover>
  ) : (
    <>
      <span
        className="gx-block gx-pointer"
        style={{ fontSize: "15px" }}
        onClick={() => {
          memberContext.isModal(true);
        }}
      >
        Нэвтрэх
      </span>
      <Modal
        title="Гишүүн нэвтрэх"
        visible={memberContext.state.isModal}
        onOk={(e) => {
          memberContext.isModal(false);
        }}
        onCancel={(e) => {
          memberContext.isModal(false);
        }}
        footer={null}
        header={null}
        width="700px"
        z-index="5000"
        closeIcon={<CloseCircleOutlined />}
      >
        <SignIn />
      </Modal>
      ;
    </>
  );
};

export default MenuMember;
