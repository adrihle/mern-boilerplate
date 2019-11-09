import React from 'react'
import useForm from 'react-hook-form'


export default function ({ schema, children, onSubmit }) {
    const methods = useForm({ validationSchema: schema })
    const { handleSubmit } = methods

    return (
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            {Array.isArray(children)
                ? children.map(child => {
                    return child.props.name
                        ?
                        <div key={child.props.name} id='text'>{React.createElement(
                            child.type, {
                            ...{
                                ...child.props,
                                register: methods.register,
                                errors: methods.errors,
                                key: child.props.name
                            }
                        })}
                        </div>
                        : child
                }) : children
            }
        </form>
    )
}