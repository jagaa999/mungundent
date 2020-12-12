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
    Divider,
    Typography,
    Row,
    Input,

} from 'antd';


/**
 * helpers
 */
// position1: 'logo',
// position2: 'main',
// position3: 'links',
// position4: 'logoProps',
// position5: 'mainProps',
// position6: 'linkProps',
// position7: 'containerProps',
// position8: 'footerText'

const { Title } = Typography
const { Search } = Input

const Footer01 = ({widgetconfigs, data}) => {

return data.rows.map((item, index) => {
const position1 = item[widgetconfigs.position1]
const position2 = item[widgetconfigs.position2]
const position3 = item[widgetconfigs.position3]
const position4 = item[widgetconfigs.position4]
const position5 = item[widgetconfigs.position5]
const position6 = item[widgetconfigs.position6]
const position7 = item[widgetconfigs.position7]
const position8 = item[widgetconfigs.position8]

return (
    <div>
    <Row {...position7}>
        <Col {...position5}>
        <div {...position4}>
            <img src={position1.src} alt={position1.alt} />
        </div>
        <div style={{position: 'relative', top: "-15%"}} >
            <h3 className="gx-text-white gx-mb-3">
            {position2.title}
            </h3>
            <div style={{fontSize: '14px', fontWeight: '200', marginBottom: '5px !important'}} className="gx-d-flex">
            <span>{position2.state}</span>
            <span className="gx-ml-2">•</span>
            <span className="gx-ml-2">{position2.address}</span>
            </div>
            <div style={{fontSize: '14px', fontWeight: '200'}} className="gx-d-flex">
            <p className="gx-mr-2">{position2.phone}</p>
            <p className="gx-mr-2">•</p>
            <p>{position2.timetable}</p>
            </div>
            <div>
            <Search
                placeholder="I am looking for"
                allowClear
                enterButton="Search"
                size="large"
            />
            </div>
        </div>
        </Col>
        <Col {...position6}>
        <Row>
            {position3.map((element, index) => {
            return (
                <Col xs={24} sm={24} md={8} lg={8} xl={8}  key={index}>
                <h5 className="gx-text-white">
                    {element.title}
                </h5>
                <hr style={{ marginTop: "5px", color: "#fff", height: "2px"}} />
                {/* <Divider className="" style={{marginTop: "5px !important", height: "2px"}} /> */}
                <div>
                    {element.links.map((link, index) => {
                    return (
                        <Link key={index} to={link.to}><span style={{color: "#fff", fontWeight: "100", display: 'block', marginBottom: "5px"}}>{link.title}</span></Link>
                    )
                    })}
                </div>
                </Col>
                )
            })}
        </Row>
        </Col>
    </Row>
    </div>
)

})
}

export default Footer01
