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
// position2: 'highlight',
// position3: 'description',
// position4: 'image1',
// position5: 'image2',
// position6: 'link'

const { Title } = Typography

const Card01 = ({widgetconfigs, data}) => {

  return data.rows.map((item, index) => {

    const position1 = item[widgetconfigs.position1]
    const position2 = item[widgetconfigs.position2]
    const position3 = item[widgetconfigs.position3]
    const position4 = item[widgetconfigs.position4]
    const position5 = item[widgetconfigs.position5]
    const position6 = item[widgetconfigs.position6]
    const position7 = item[widgetconfigs.position7]
    const position8 = item[widgetconfigs.position8]
    const position9 = item[widgetconfigs.position9]
    const position10 = item[widgetconfigs.position10]

    return (
      <div {...position7}>
        <div className="gx-d-flex gx-justify-content-center gx-align-items-center" key={index}>
          <div {...position9}>
            <h1 className="gx-font-weight-bold gx-mb-3 ">
              {position1}
            </h1>
            <hr />
            <h5 className="gx-font-weight-bold gx-mb-3 ">
              {position2}
            </h5>
            <p >
              {position3}
            </p>
            <p>
              {position8}
            </p>
            <Link to={position6}>HOW TO APPLY</Link>
          </div>
          <div {...position10}>
            <img style={{height: 'auto', width: '350px' }} src={position5} />
            <img style={{position: 'relative', top: '-100px', right: '75px', width: '300px', border: '15px solid #fff'  }} src={position4} />
          </div>
          {/* <Col {...position9}>
          </Col>
          <Col {...position10}>
          </Col> */}
        </div>
      </div>
    )
  })
}

export default Card01
