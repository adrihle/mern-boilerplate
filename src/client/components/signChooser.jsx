import React, { useState, useEffect } from 'react'

//redux dependencies
import { useDispatch, useSelector } from 'react-redux'
import signMode from '../../redux/actions/sign-choose'

//importing components
import { Tabs, Tab } from '@material-ui/core'

//styles dependencies
import { ThemeProvider } from '@material-ui/core/styles'
import  defaultTheme  from '../themes/defaultTheme'


export default function SignChooser() {
    const focusTab = useSelector(state => state.signMode)
    const [selected, setSelected] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        if (focusTab){
            setSelected(0)
        }else {
            setSelected(1)
        }
    },[focusTab])

    //event input required for component
    const onChange = (event, newSelected) => {
        setSelected(newSelected)
        dispatch(signMode())
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Tabs
                centered={true}
                value={selected}
                indicatorColor="primary"
                textColor='primary'
                onChange={onChange}
            >
                <Tab id='tab' label='Sign In'/>
                <Tab id='tab' label='Sign Up' />
            </Tabs>
        </ThemeProvider>
    )
}
