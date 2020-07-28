import React, { useContext } from "react";
import toBoolean from "util/booleanFunction";
import { PageHeader, Button, Descriptions, Statistic } from "antd";
import {
  WarningTwoTone,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import NewsButtonPanel from "components/Moto/Button/NewsButtonPanel";
import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

const NewsDetailHeader = (props) => {
  console.log("props--------", props);

  const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
      <Descriptions.Item label="Association">
        <a>421421</a>
      </Descriptions.Item>
      <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
      <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
      <Descriptions.Item label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  );

  const extraContent = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        justifyContent: "flex-end",
      }}
    >
      <Statistic
        title="Үзсэн"
        value="2500"
        style={{
          marginRight: 32,
        }}
      />
      <Statistic title="Price" prefix="$" value={568.08} />
    </div>
  );

  const Content = ({ children, extra }) => {
    return (
      <div className="content" style={{ display: "flex" }}>
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
      </div>
    );
  };

  return (
    <>
      <h1
        className={
          toBoolean(props.headerElements.isfeatured) ? "gx-text-success" : ""
        }
      >
        {props.headerElements.title}
        {toBoolean(props.headerElements.isfeatured) && <FeaturedTag />}
        {!toBoolean(props.headerElements.isactive) && <ActiveTag />}
      </h1>

      {/* <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      >
        <Content extra={extraContent}>{renderContent()}</Content>
      </PageHeader> */}

      {/* <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          // onBack={() => window.history.back()}
          title={props.headerElements.title}
          tags={["dsfds", "sdfsd fds fsd"]}
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        ></PageHeader>
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Association">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Time">
            2017-01-10
          </Descriptions.Item>
          <Descriptions.Item label="Effective Time">
            2017-10-10
          </Descriptions.Item>
          <Descriptions.Item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </div> */}
    </>
  );
};

export default NewsDetailHeader;
