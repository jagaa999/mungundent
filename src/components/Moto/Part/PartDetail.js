import React, { useContext, useEffect } from "react";

import { Card, Tabs, Button, List, Image } from "antd";
import ProductDetailGeneral from "../Product/ProductDetailGeneral";
import { isEmpty } from "lodash";
import OrderButton from "../Order/OrderButton";
import UniversalContext from "../../../context/UniversalContext";
import FilterContext from "../../../context/FilterContext";
import PartDetailTabListAxios from "./PartDetailTabListAxios";

// const PartDetail = ({ myDetailContext }) => {
const PartDetail = () => {
  const universalContext = useContext(UniversalContext);
  const filterContext = useContext(FilterContext);

  const myDetail = universalContext.universalDetail.mainDetail;
  if (isEmpty(myDetail)) return "";

  return (
    <div>
      {/* sdfdsfdsf dsf dsf dsf dsf
      {myDetail.mainData.title.value} */}
      <Tabs
        type="line"
        tabPosition="top"
        centered={true}
        className="moto-product-detail-tab"
      >
        <Tabs.TabPane tab="Атрибут" key="1">
          <Card>
            <PartDetailTabListAxios
              systemmetagroupid="16147434609241"
              criteria={{
                criteriaDataSupplierArticleNumber:
                  myDetail.datasupplierarticlenumber,
              }}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.displaytitle}
                    description={
                      <span className="gx-text-grey gx-fs-sm">
                        {item.description}
                      </span>
                    }
                  />
                  <div>{item.displayvalue}</div>
                </List.Item>
              )}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Зураг" key="2">
          <Card>
            <PartDetailTabListAxios
              systemmetagroupid="16147434611821"
              criteria={{
                dataSupplierArticleNumber: myDetail.datasupplierarticlenumber,
              }}
              renderItem={(item) => {
                const ddname = item.picturename.substring(
                  0,
                  item.picturename.lastIndexOf(".")
                );
                const ddextension = item.picturename
                  .substring(item.picturename.lastIndexOf(".") + 1)
                  .toLowerCase();

                const myFileName = `${ddname}.${ddextension}`;

                return (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={
                        <Image
                          height={50}
                          style={{ width: "auto" }}
                          src={`https://cloudapi.moto.mn/storage/uploads/partimage/${item.supplierid}/${myFileName}`}
                        />
                      }
                      title={item.description}
                      description={
                        <span className="gx-text-grey gx-fs-sm">
                          {item.documenttype}
                        </span>
                      }
                    />
                    <div>
                      ({item.supplierid}){" "}
                      {item.documentname !== ""
                        ? item.documentname
                        : item.picturename}{" "}
                    </div>
                  </List.Item>
                );
              }}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Таарах хөдөлгүүр" key="3">
          <Card>
            <PartDetailTabListAxios
              systemmetagroupid="16147434614461"
              criteria={{
                criteriaDataSupplierArticleNumber:
                  myDetail.datasupplierarticlenumber,
              }}
              renderItem={(item) => (
                <List.Item actions={[item.capacity, item.fueltype, item.power]}>
                  <List.Item.Meta title={item.fulldescription} />
                </List.Item>
              )}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="OEM кросс" key="4">
          <Card>
            <PartDetailTabListAxios
              systemmetagroupid="16147434602201"
              criteria={{
                criteriaDataSupplierArticleNumber:
                  myDetail.datasupplierarticlenumber,
              }}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.oenbr} />
                  <div>{item.description}</div>
                </List.Item>
              )}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Replace" key="5">
          <Card>
            <PartDetailTabListAxios
              systemmetagroupid="16147434616561"
              criteria={{
                criteriaDataSupplierArticleNumber:
                  myDetail.datasupplierarticlenumber,
              }}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.replacenbr} />
                  <div>{item.description}</div>
                </List.Item>
              )}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Борлуулагч" key="6">
          <Card>{/* <AutozarDetailSeller myItem={myItem} /> */}</Card>
        </Tabs.TabPane>
      </Tabs>
    </div>
    // <div key={myItem.id} className="gx-main-content2 autozar-detail">
    //   <div className="card-container">

    //   </div>
    //   <div className="gx-my-5">
    //     <OrderButton myItem={myItem} />
    //   </div>
    // </div>
  );
};

export default PartDetail;
