import React from 'react';
import { Routes, Route } from 'react-router-dom';

/**
 * [{
 *  path: '/',
 *  element: HomePage,
 *  exact: true,
 * }]
 */
const routes = [];

export const RouterComponent = () => (
    <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.element />}
            />
        ))}
    </Routes>
)