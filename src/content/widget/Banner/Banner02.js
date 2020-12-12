import React from 'react'

/**
 * helpers
 */
// position1: 'title',
// position2: 'titleProps',
// position3: 'backgroundProps'

const Banner02 = ({widgetconfigs, data}) => {
  return data.rows.map((item, index) => {
    const position1 = item[widgetconfigs.position1]
    const position2 = item[widgetconfigs.position2]
    const position3 = item[widgetconfigs.position3]
    const position4 = item[widgetconfigs.position4]

    return (
      <div {...position3}>
        <div {...position2}>
          {position1}
        </div>
      </div>
    )
  })
}

export default Banner02;
