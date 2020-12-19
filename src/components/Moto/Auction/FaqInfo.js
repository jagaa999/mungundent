import React from "react";
import { Link } from "react-router-dom";

import { Tabs, List, Collapse } from "antd";
import { faqList } from "content/auction/faqData";

const FaqInfo = () => {
  return (
    <div className="gx-mt-3">
      <div>Худалдан авахад сонирхолтой өвөрмөц, ховор машинуудын жагсаалт</div>
      <Tabs defaultActiveKey="1" centered className="gx-mt-3" size="small">
        {faqList.map((itemtab, index) => (
          <Tabs.TabPane tab={itemtab.title} key={itemtab.key || index}>
            <Collapse>
              {itemtab.answers.map((item, index) => (
                <Collapse.Panel
                  header={
                    <span className="gx-font-weight-semi-bold">
                      {item.title}
                    </span>
                  }
                  key={index}
                >
                  <p className="gx-ml-4">{item.answer}</p>
                </Collapse.Panel>
              ))}
            </Collapse>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default FaqInfo;
