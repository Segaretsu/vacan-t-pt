import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Inicio } from './components/Inicio';

// Toast
import { ToastProvider } from 'react-toast-notifications'

export function RouterAPP() {
    return (
        <Router>
            <ToastProvider>
                <Switch>
                    <Route exact path='/'>
                        <Inicio />
                    </Route>
                </Switch>
            </ToastProvider>
        </Router>
    );
}