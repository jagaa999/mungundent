import React from "react";
import { Card, Pagination } from "antd";

const More = () => {
  return (
    <Card className="gx-card" title="More Pagination">
      <Pagination current={150} total={4542} />
    </Card>
  );
};

export default More;
