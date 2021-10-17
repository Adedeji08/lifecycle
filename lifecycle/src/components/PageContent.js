import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Discussion from './Discussion';
import Rules from './Rules';
import Workflow from './Workflow';


export default function() {
    return(
        <div>
        <Switch>
            <Route exact path='/' component={Discussion} />
            <Route exact path='/Rules' component={Rules} />
            <Route exact path='/Workflow' component={Workflow} />       
        </Switch>
        </div>
    );  
}