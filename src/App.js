import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/Home';

const App = () => {
    return (
        <>
            <Route exact path="/" component={HomePage}/>
        </>
    );
};

export default App;