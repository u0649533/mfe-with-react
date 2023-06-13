import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




// mount function to start uop app
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    );
};

// if we are in dev and in isolation all mount immediately

if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}


// we run thru container we export mount funion

export {mount};