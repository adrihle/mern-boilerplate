import posed from 'react-pose'

export const RouteContainer = posed.div({
    enter:{
        opacity: 1, delay: 100, beforeChildren: true
    },
    exit: {
        opacity: 0
    }
})

export const ChildContainer = posed.div({
    enter: { 
        staggerChildren: 50 
    },
    exit: { 
        staggerChildren: 50
    }
})

export const ListElement = posed.div({
    enter: { 
        y: 0, opacity: 1 
    },
    exit: { 
        y: 100, opacity: 0
    }
})