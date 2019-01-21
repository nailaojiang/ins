import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Index from './pages/index'
import Home from './pages/home'
import Person from './pages/person'
import Login from './pages/login'
import NoMatch from './pages/nomatch'
import Explore from './pages/explore'
export default class IRouter extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/"  render={()=>
                            <Index>
                                <Switch>
                                    <Route path="/" exact component={Home}></Route>
                                    <Route path="/explore" component={Explore}></Route>
                                    <Route path="/person/:id" component={Person}></Route>
                                    <Route component={NoMatch} />
                                </Switch>
                            </Index>
                        }></Route>
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

