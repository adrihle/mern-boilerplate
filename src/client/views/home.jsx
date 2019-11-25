import React, { useEffect } from 'react'
import { Typography as Title } from '@material-ui/core'
import Table from '../components/data/table'
import { userTableOptions } from '../options/tables'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../redux/actions/load-users-action'

export default function (){
    const dispatch = useDispatch()
    const users = useSelector(state => state.loadUsers)

    useEffect(() => {
        dispatch(loadUser())
    },[])

    return (
        <div>
            <Title color='textPrimary' variant='h3'>Home page</Title>
            <Table id='usertable' options={userTableOptions} data={users.success && users.users.data}/>
        </div>
    )
}