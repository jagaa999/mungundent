import React from "react";
import { Card, Table, Descriptions } from "antd";

const MotoMemberDetailBiography = ({ myMemberDetail }) => {
  console.log("DDDDDDDDDD", myMemberDetail);
  return (
    <Card title="Biography">
      <p>
        Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non
        maximus neque, ut finibus ex.
      </p>

      <Descriptions
        title="Ерөнхий"
        layout="horizontal"
        bordered
        size="small"
        column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        className="gx-mt-5"
      >
        {Object.keys(myMemberDetail).map((val, k) => {
          return (
            <Descriptions.Item label={val}>
              {myMemberDetail[val]}
            </Descriptions.Item>
          );
        })}
      </Descriptions>
    </Card>
  );
};

export default MotoMemberDetailBiography;
