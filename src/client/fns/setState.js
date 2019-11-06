export function jsonStateAssign (input, event, state, setState){
    return new Promise (resolve => {
        return resolve(setState({...state, [input]: event.target.value}))
    })
}

export function singleStateAssign (event, setState){
    return new Promise (resolve => {
        return resolve(setState(event.target.value))
    })
}