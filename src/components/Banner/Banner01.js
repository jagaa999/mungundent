import React from 'react'
import { Link } from 'react-router-dom'

import {
    Row,
    Col
} from 'antd'

// position1: "title",
// position2: "backgroundProps",
// position3: "listProps"
// position4: "list",
// position5: 'leftprops',
// position6: 'rightprops',
// position7: 'mainProps'

const WidgetSection01 = ({widgetconfigs, data}) => {
    return data.rows.map((item, index) => {
        const position1 = item[widgetconfigs.position1]
        const position2 = item[widgetconfigs.position2]
        const position3 = item[widgetconfigs.position3]
        const position4 = item[widgetconfigs.position4]
        const position5 = item[widgetconfigs.position5]
        const position6 = item[widgetconfigs.position6]
        const position7 = item[widgetconfigs.position7]

        return (
            <>
                <div {...position7}>

                    <Row justify="center" gutter={[12, 12]}>
                        <Col {...position2}>
                            <div {...position5}>
                                {position1}
                            </div>
                        </Col>
                        <Col {...position6}>
                            <div>
                               { position4.map((item, index) => {
                                   return (
                                    <div>
                                        {item.title}
                                    </div>
                                   )
                               })}
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        )
  });
}

export default WidgetSection01
