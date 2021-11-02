import react from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
import Form from '../form/form';


export default function Routes() {
    return (
        <div>

            <Switch>
                <Route exact path="/" ><Form /></Route>
                <Route exact path="/dashboard" ><Dashboard /></Route>
            </Switch>

        </div>
    );
}