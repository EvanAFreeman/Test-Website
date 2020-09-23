import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'

export const PublicRoute = ({ isAuthenticated, 
    //rest takes all the extra desrtuctured props not specifically destructured
    component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to='/dashboard' />
        ) : (
            <div>
            <Header/>
                <Component {...props}/>
            </div>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    //using !! prevents from returning undefined if not authenticated, flips to boolean
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);