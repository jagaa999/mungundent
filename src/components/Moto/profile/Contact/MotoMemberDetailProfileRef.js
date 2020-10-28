import React from "react";
import { Card } from "antd";
import { contactList } from "routes/socialApps/Profile/data";

// title: 'Email',
// icon: 'email',
// desc: [<span className="gx-link" key={1}>kiley.brown@example.com</span>]

const MotoMemberDetailProfileRef = ({ myMemberDetail }) => {
  return (
    <Card title="Таны онцлог" className="gx-card-profile-sm">
      <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-email gx-fs-xxl gx-text-grey`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">
            Машиндаа тавьдаг анхаарал
          </span>
          <p className="gx-mb-0">{myMemberDetail.refattentionlabel}</p>
        </div>
      </div>

      <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-phone gx-fs-xxl gx-text-grey`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">
            Таны машины мэдлэг
          </span>
          <p className="gx-mb-0">{myMemberDetail.refknowledgelabel}</p>
        </div>
      </div>

      <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-phone gx-fs-xxl gx-text-grey`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">
            Таны автомашины өдрийн хэрэглээ
          </span>
          <p className="gx-mb-0">{myMemberDetail.refusagelabel}</p>
        </div>
      </div>
    </Card>
  );
};

export default MotoMemberDetailProfileRef;
