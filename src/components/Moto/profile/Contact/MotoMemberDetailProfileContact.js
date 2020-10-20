import React from "react";
import { Card } from "antd";
import { contactList } from "routes/socialApps/Profile/data";

// title: 'Email',
// icon: 'email',
// desc: [<span className="gx-link" key={1}>kiley.brown@example.com</span>]

const Contact = ({ myMemberDetail }) => {
  return (
    <Card title="Contact" className="gx-card-profile-sm">
      <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-email gx-fs-xxl gx-text-grey`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">Имэйл</span>
          <p className="gx-mb-0">{myMemberDetail.email}</p>
        </div>
      </div>

      <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-phone gx-fs-xxl gx-text-grey`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">Утас 1</span>
          <p className="gx-mb-0">{myMemberDetail.phonenumber1}</p>
        </div>
      </div>

      <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon icon-phone gx-fs-xxl gx-text-grey`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm">Утас 2</span>
          <p className="gx-mb-0">{myMemberDetail.phonenumber2}</p>
        </div>
      </div>

      {contactList.map((data, index) => (
        <div
          key={index}
          className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list"
        >
          <div className="gx-mr-3">
            <i className={`icon icon-${data.icon} gx-fs-xxl gx-text-grey`} />
          </div>
          <div className="gx-media-body">
            <span className="gx-mb-0 gx-text-grey gx-fs-sm">{data.title}</span>
            <p className="gx-mb-0">{data.desc}</p>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Contact;
