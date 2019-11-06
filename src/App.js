import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

//importing components
import Form from './client/components/Form'
import Greetings from './client/components/Greetings'

//pose settings
import { PoseGroup } from 'react-pose'
import { RouteContainer } from './client/pose/defaultPose'

//importing routes
import { signUp, greetins } from './Routes'

const history = createBrowserHistory()

export default function App (){

  useEffect(() => {
    history.push(signUp)
  },[])

  return (
    <div className='text-center'>
    <Router history={history}>
      <Route render={({ location }) => (
        <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch>
                <Route exact path={signUp} component={Form} />
                <Route path={greetins} component={Greetings}/>
              </Switch>
            </RouteContainer>
        </PoseGroup>
      )} />
    </Router>
  </div>
  )
}
