import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Empty } from "antd";

import { prepareTitle } from "../../../util/config";
// import AutozarDetail from "../../../components/Moto/AutozarDetail";
import AutozarDetail2 from "../../../components/Moto/AutozarDetail2";
import UniversalDetail from "../../../components/Moto/UniversalDetail";
import { prepareAutozarDetailSettings } from "util/specData/prepareSpecsAutozar";
import { UniversalDetailMeta } from "util/prepareMeta";

import { CommentListStore } from "../../../context/CommentContext";
import { LogsStore } from "../../../context/LogsContext";
import UniversalContext from "../../../context/UniversalContext";
import MemberContext from "../../../context/MemberContext";
import FilterContext from "../../../context/FilterContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";

const UniversalDetailPage = () => {
  const { id } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const universalContext = useContext(UniversalContext);
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  useEffect(() => {
    if (id !== 0) {
      universalContext.loadUniversalDetail(id);
    }
  }, [id, memberContext.state.memberCloudUserSysId]);

  const myMenu = filterContext.urlSetting.menu; //part гэсэн үгийг авна
  const myCapitalizeMenu = myMenu.charAt(0).toUpperCase() + myMenu.slice(1); //Part гэсэн үг гарч ирнэ
  const MyDetailComponent = React.lazy(() =>
    import(
      `components/Moto/${myCapitalizeMenu}/${myCapitalizeMenu}Detail`
    ).catch(() => ({
      default: () => (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span>Дэлгэрэнгүй мэдээлэл алга</span>}
        ></Empty>
      ),
    }))
  );

  return (
    <>
      {universalContext.universalDetail.loading ? (
        <LoadingDetail />
      ) : (
        <>
          <CommentListStore>
            <LogsStore>
              <UniversalDetailMeta
                meta={
                  filterContext.urlSetting.contextSetting
                    .myUniversalDetailSetting.meta
                }
                myItem={universalContext.universalDetail.mainDetail}
              />
              <UniversalDetail
                myDetailContext={universalContext}
                myDetailContextDetail={universalContext.universalDetail}
                myDetailContextDetailDetail={
                  universalContext.universalDetail.mainDetail
                }
                myDetailSettings={
                  filterContext.urlSetting.contextSetting
                    .myUniversalDetailSetting
                }
              />

              <MyDetailComponent />

              {/* <AutozarDetail2 myDetailContext={universalContext} /> */}
            </LogsStore>
          </CommentListStore>
        </>
      )}
    </>
  );
};

export default UniversalDetailPage;
