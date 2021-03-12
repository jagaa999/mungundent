import React from "react";
import { Empty } from "antd";

const UniversalListInfoHelp = ({ mySettings }) => {
  const { menu } = mySettings;
  const myCapitalizeName = menu.charAt(0).toUpperCase() + menu.slice(1);

  const MyInfoComponent = React.lazy(() =>
    import(`../${myCapitalizeName}/${myCapitalizeName}ListInfo`).catch(() => ({
      default: () => (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Зөвлөмж алга"
        ></Empty>
      ),
    }))
  );

  return <MyInfoComponent />;
};

export default UniversalListInfoHelp;
