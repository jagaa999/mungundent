import React, { useState, useEffect } from "react";
import { Empty } from "antd";
import { GoogleSpreadsheet } from "google-spreadsheet";

const HomePage = () => {
  const [myDoc, setMyDoc] = useState(null);

  const callSheet = async () => {
    const doc = new GoogleSpreadsheet(
      "1HDVUR53AGFJPI6kc1KUe-dZqZONI9DKb9-iciyJt5s4"
    );
    await doc.useApiKey("AIzaSyC0fPD7-kCcTj_N4ks6kVbWZvdTgxnSK00");
    await doc.loadInfo();
    setMyDoc(doc);
  };

  useEffect(() => {
    callSheet();
  }, []);

  const mySheets = myDoc?.sheetsByIndex || [];

  return (
    <>
      {mySheets.map((item, index) => {
        const mySheetName = item.title;
        if (mySheetName.substring(0, 1) !== "*") {
          const MyInfoComponent = React.lazy(() =>
            import(`./${mySheetName}`).catch(() => ({
              default: () => (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="Харуулах юмгүй"
                ></Empty>
              ),
            }))
          );

          return <MyInfoComponent doc={myDoc} sheetName={mySheetName} />;
        }
      })}
    </>
  );
};

export default HomePage;
