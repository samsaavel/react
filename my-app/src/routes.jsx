import React from 'react';

import {
    BrowserRouter, Route, Link, Switch

} from 'react-router-dom';

import { Hello } from './hello-world/hello-world';

export const routes = (
    <BrowserRouter>
        <Switch>
            <Route key="hello" path="/" component={Hello} />
        </Switch>
    </BrowserRouter>
);