import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
;

export default function PrivateRoute({ component: Component, ...rest }) {

    const { user } = useContext(UserContext)

    return (
        <>
            <Route {...rest} render={props => {
                return user ? <Component {...props} /> : <Redirect to="/login" />
            }} >
            </Route>
        </>
    )
}
