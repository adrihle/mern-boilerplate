import React from 'react'


const Title = ({ title }) => (
    <span 
        className='text-white mb-3 mt-3 mr-4 h2' 
        style={{ textShadow: '0.5px 0.5px gray', cursor: 'pointer' }} 
        onClick={() => console.log(title)}
    >
        {title}
    </span>
)

const SignChooser = (props) => (
    <div>
        <Title title='Sign In' signIn={props.signIn}/>
        <Title title='Sign Up' signIn={props.signIn}/>
    </div>
)

export default SignChooser