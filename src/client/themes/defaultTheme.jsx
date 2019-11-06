import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: 'rgb(46,204,113)'
        }
    },
    spacing: 4
})

export default defaultTheme