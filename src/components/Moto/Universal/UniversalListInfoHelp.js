import React from "react";
import { Empty } from "antd";

const UniversalListInfoHelp = ({ mySettings }) => {
  const { menu } = mySettings;
  const myCapitalizeName = menu.charAt(0).toUpperCase() + menu.slice(1);

  const MyInfoComponent = React.lazy(() =>
    import(`../${myCapitalizeName}/${myCapitalizeName}ListInfo`).catch(() => ({
      default: () => (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span>Зөвлөмж алга</span>}
        ></Empty>
      ),
    }))
  );

  return <MyInfoComponent />;
};

export default UniversalListInfoHelp;
