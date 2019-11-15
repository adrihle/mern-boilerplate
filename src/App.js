import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

//importing components
import Form from './client/views/Login'
import Greetins from './client/views/greetins'
import NavBar from './client/components/navigation/navbar'

//general styles
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './client/themes/defaultTheme'

//pose settings
import { PoseGroup } from 'react-pose'
import { RouteContainer } from './client/pose/defaultPose'

//importing routes
import { signUp, greetins } from './Routes'

const history = createBrowserHistory()

export default function App() {

  useEffect(() => {
    history.push(signUp)
  }, [])

  return (
    <ThemeProvider theme={theme}>
        <div className='template'>
        <Router history={history}>
          <NavBar />
          <Route render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch>
                  <Route exact path={signUp} component={Form} />
                  <Route path={greetins} component={Greetins} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )} />
        </Router>
          
        </div>
    </ThemeProvider>
  )
}
