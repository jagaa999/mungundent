/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner2 from './Banner2';
import Content13 from './Content13';
import Feature3 from './Feature3';
import Feature6 from './Feature6';
import Feature2 from './Feature2';
import Feature1 from './Feature1';
import Feature5 from './Feature5';
import Feature0 from './Feature0';
import Feature4 from './Feature4';
import Banner1 from './Banner1';
import Teams0 from './Teams0';

import {
  Banner20DataSource,
  Content130DataSource,
  Feature30DataSource,
  Feature61DataSource,
  Feature20DataSource,
  Feature10DataSource,
  Feature21DataSource,
  Content131DataSource,
  Feature50DataSource,
  Feature00DataSource,
  Feature40DataSource,
  Feature41DataSource,
  Banner10DataSource,
  Teams00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner2
        id="Banner2_0"
        key="Banner2_0"
        dataSource={Banner20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature3
        id="Feature3_0"
        key="Feature3_0"
        dataSource={Feature30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6
        id="Feature6_1"
        key="Feature6_1"
        dataSource={Feature61DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_1"
        key="Feature2_1"
        dataSource={Feature21DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_1"
        key="Content13_1"
        dataSource={Content131DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
        id="Feature5_0"
        key="Feature5_0"
        dataSource={Feature50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature0
        id="Feature0_0"
        key="Feature0_0"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Feature4_0"
        key="Feature4_0"
        dataSource={Feature40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Feature4_1"
        key="Feature4_1"
        dataSource={Feature41DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
