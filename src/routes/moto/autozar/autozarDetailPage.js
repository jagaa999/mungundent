import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { prepareTitle } from "../../../util/config";
// import AutozarDetail from "../../../components/Moto/AutozarDetail";
import AutozarDetail2 from "../../../components/Moto/AutozarDetail2";
import UniversalDetail from "../../../components/Moto/UniversalDetail";
import { prepareAutozarDetailSettings } from "util/prepareSpecsAutozar";
import { UniversalDetailMeta } from "util/prepareMeta";

import { CommentListStore } from "../../../context/CommentContext";
import { LogsStore } from "../../../context/LogsContext";
import AutozarContext from "../../../context/AutozarContext";
import MemberContext from "../../../context/MemberContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";

const AutozarDetailPage = () => {
  const { id } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const autozarContext = useContext(AutozarContext);
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (id !== 0) {
      autozarContext.loadAutozarDetail(id);
    }
  }, [id, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {autozarContext.autozarDetail.loading ? (
        <LoadingDetail />
      ) : (
        <>
          <CommentListStore>
            <LogsStore>
              <UniversalDetailMeta
                meta={prepareAutozarDetailSettings.meta}
                myItem={autozarContext.autozarDetail.autozarDetail}
              />
              <UniversalDetail
                myDetailContext={autozarContext}
                myDetailContextDetail={autozarContext.autozarDetail}
                myDetailContextDetailDetail={
                  autozarContext.autozarDetail.autozarDetail
                }
                myDetailSettings={prepareAutozarDetailSettings}
              />
              <AutozarDetail2 myDetailContext={autozarContext} />
            </LogsStore>
          </CommentListStore>
        </>
      )}
    </>
  );
};

export default AutozarDetailPage;
