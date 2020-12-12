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
        <h1 level={2} className="gx-font-weight-bold gx-mb-3 gx-text-white">{position1}</h1>
        <h3 level={3} className="gx-text-white">{position2}</h3>
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
                  <Link  to={element.link}><p className="gx-mb-2 gx-font-weight-bold gx-text-white" style={{fontSize: "22px", marginBottom: "1rem !important"}}>{element.title}</p></Link>
                  <div className="gx-d-flex gx-justify-content-left gx-align-items-center">
                    <p className="gx-mr-2" style={{fontSize: "11px", backgroundColor: '#db6e43', padding: '5px 7px'}}>{element.date}</p>
                    <p className="gx-mr-1" style={{fontSize: "11px"}}>{element.time}</p>
                    <p className="gx-mr-1" style={{fontSize: "11px"}}>at</p>
                    <p className="gx-font-weight-bold" style={{fontSize: "11px"}}>{element.location}</p>
                  </div>
                </div>
              </Col>
              )
          })}
        </Row>
      </div>
    )
  })
}

export default List01
