import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'

import { Zoom } from 'react-reveal'

export default function ({ children }) {
    const [current, setCurrent] = useState(0)
    const onChange = (event, newValue) => setCurrent(newValue)

    return (
        <div>
            <Tabs
                centered={true}
                value={current}
                indicatorColor="primary"
                textColor='primary'
                onChange={onChange}
            >
                {
                    children.map((child, i) => {
                        return (
                            <Tab label={child.props.label} key={i} id='tab'/>
                        )
                    })
                }
            </Tabs>
            {
                children.map((child, i) => {
                    return (
                        <div
                            role='tabpanel'
                            hidden={current !== i}
                            key={i}
                        >
                            {i===0 ? <Zoom left>{child}</Zoom> : <Zoom right>{child}</Zoom>}        
                        </div>
                    )

                })
            }
        </div>
    )
}
