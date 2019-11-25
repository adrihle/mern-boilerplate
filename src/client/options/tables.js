import React from 'react'
import { UserAvatar } from '../components/form/components'

//options for users table
const generateColumns = (title, field, render, type) => {
    return { title, field, render, type }
}

export const userTableOptions = {
    title: 'Users Table',
    columns: [
        generateColumns(
            'Avatar',
            'imgUrl',
            rowData => <UserAvatar id='avatar-table' navbar alt='avatar' url={rowData.userData.url} />),
        generateColumns('Email', 'email'),
        generateColumns('UserName', 'userData.username')
    ],
    detailPanel: rowData => <UserAvatar id='avatar-table' navbar alt='avatar' url={rowData.userData.url} />,
    style: { 
        backgroundColor: '#42424280', 
        margin: '1.5em', 
        padding: '0em 0.5em' },
    options: {
        headerStyle: {
            background: 'none',
            textAlign: 'center'
        },
        padding: 'dense'
    },
    actions: [
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.userData.username)
        },
        {
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => alert("You want to delete " + rowData.userData.username)
        }
    ],
    editable: {
        onRowUpdate: (newData, oldData) => alert('edited')
    }
}
