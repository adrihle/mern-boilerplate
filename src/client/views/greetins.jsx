import React from 'react'

//redux
import { useSelector } from 'react-redux'

//styles
import { Typography as Text } from '@material-ui/core'

export default function (){
    const state = useSelector(state => state.signIn)

    return (
        <div>
            {state.login ?
                <Text variant='h4' color='textPrimary'>Welcome {state.user.email}</Text>
                :
                <Text variant='h5' color='textPrimary'>{state.message}</Text>
            }
        </div>
    )
}