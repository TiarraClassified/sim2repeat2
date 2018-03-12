import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Start from './components/Start';

export default function Routes (){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/register' component={Register}/>
            <Route path='/start' component={Start}/>
        </Switch>
    )
}