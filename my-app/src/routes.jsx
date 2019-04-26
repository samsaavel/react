import React from 'react';

import {
    BrowserRouter, Route, Link

} from 'react-router-dom';

import { Hello } from './hello-world/hello-world';

export const routes = (
    <BrowserRouter>
        <Route key="hello" path="/" component={Hello} />
    </BrowserRouter>
);