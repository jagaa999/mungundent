/**
 * REACT imports
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ANTD imports
 */
import {
  Col,
  Typography,
  Row,

} from 'antd';


/**
 * helpers
 */
// position1: 'title',
// position2: 'description',
// position3: 'list',
// position4: 'moreFrom',
// position5: 'listProps',

const { Title } = Typography

const List01 = ({widgetconfigs, data}) => {

  return data.rows.map((item, index) => {

    const position1 = item[widgetconfigs.position1]
    const position2 = item[widgetconfigs.position2]
    const position3 = item[widgetconfigs.position3]
    const position4 = item[widgetconfigs.position4]
    const position5 = item[widgetconfigs.position5]
    const position6 = item[widgetconfigs.position6]

    return (
      <div {...position6}>
        <h1 level={2} className="gx-font-weight-bold gx-mb-3">{position1}</h1>
        <h3 level={3}>{position2}</h3>
        <hr style={{width: "250px"}} />
        <Row {...position5}>
          {position3.map((element, index) => {
            return (
              <Col
                span={24}
                className="gx-d-flex gx-justify-content-left gx-align-items-top gx-mb-4"
                key={index}
                >
                <img style={{height: "80px"}} src={element.cover}/>
                <div style={{width: "24em"}} className="gx-ml-4">
                  <h4 className="gx-mb-2">{element.title}</h4>
                  <div className="gx-d-flex gx-justify-content-left gx-align-items-center">
                    <p style={{fontSize: "11px"}}>{element.date}</p>
                    <p style={{fontSize: "11px"}}>|</p>
                    <p style={{fontSize: "11px"}}>{element.type}</p>
                  </div>
                  <p style={{fontSize: '12px', marginBottom: "5px !important"}}>{element.description}...</p>
                  <Link style={{width: "50px", fontSize: "12px", color: '#111', position: 'relative', top: "-5%"}} to={element.link}>Read more</Link>
                </div>
              </Col>
              )
          })}
        </Row>
        <Link className="gx-mt-4 gx-text-black" style={{fontSize: '8px'}} to={position4} >MORE FROM NEWS </Link>
      </div>
    )
  })
}

export default List01
