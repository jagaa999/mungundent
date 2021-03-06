import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";

import { Avatar } from "antd";

import MemberContext from "context/MemberContext";

const MotoMemberDetailProfileHeader = ({ myMemberDetail }) => {
  const memberContext = useContext(MemberContext);
  const myCloudProfile = memberContext.state.memberCloudProfile;
  const myFirebaseProfile = memberContext.state.memberFirebaseProfile;

  // console.log("ОРЖ ИРСЭН ГИШҮҮНИЙ МЭДЭЭЛЭЛ", myProfile);
  // console.log("myCloudProfile", myCloudProfile);
  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar
                className="gx-size-90"
                alt="..."
                src={myFirebaseProfile.photoURL}
              />
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">
                {myCloudProfile.personname}
                {" ("}
                {myCloudProfile.positionname !== ""
                  ? myCloudProfile.positionname
                  : "Гишүүн"}
                )
              </h2>
              <p className="gx-mb-0 gx-fs-lg">
                ({myCloudProfile.username}) ({myCloudProfile.id})
              </p>
            </div>
          </div>
          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              {/* <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  2k+
                </span>
                <span className="gx-fs-sm">Followers</span>
              </li> */}
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  {Math.abs(myMemberDetail.birthdate.diff(moment(), "years"))}
                </span>
                <span className="gx-fs-sm">настай</span>
              </li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  {moment(myMemberDetail.createddate).format("YYYY-MM-DD")}
                </span>
                <span className="gx-fs-sm">хойш</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="gx-profile-banner-bottom">
          {/* <div className="gx-tab-list">
            <ul className="gx-navbar-nav">
              <li>
                <span className="gx-link">Timeline</span>
              </li>
              <li>
                <span className="gx-link">About</span>
              </li>
              <li>
                <span className="gx-link">Photos</span>
              </li>
              <li>
                <span className="gx-link">
                  Friends <span className="gx-fs-xs">287</span>
                </span>
              </li>
              <li>
                <span className="gx-link">More</span>
              </li>
            </ul>
          </div> */}

          <span className="gx-link gx-profile-setting ">
            <Link
              to={"/member/edit/" + myMemberDetail.systemuserid}
              className="gx-text-success"
            >
              <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle" />
              <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">
                Засах
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MotoMemberDetailProfileHeader;
