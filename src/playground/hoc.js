//Higher order component (HOC) is a component that renders another component
//THe goal is to reuse code by using 
//render hijacking, prop manipulation and abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>

);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        //spread operator can take the key value pairs and pass down as props
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? 
                <WrappedComponent {...props}/> : 'Please log in to view'}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details' />, document.getElementById('app'))