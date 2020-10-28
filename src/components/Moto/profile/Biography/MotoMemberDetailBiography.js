import React from "react";
import { Card, Table, Descriptions } from "antd";

const MotoMemberDetailBiography = ({ myMemberDetail }) => {
  console.log("DDDDDDDDDD", myMemberDetail);
  return (
    <Card title="Таны тухай">
      <p>{myMemberDetail.bio}</p>
    </Card>
  );
};

export default MotoMemberDetailBiography;
