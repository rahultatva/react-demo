import React from 'react';
import './App.css';
import UsersList from './../UsersList';
import Header from './../../components/Header';

/*
 * App Component
 */
const App = ()=> {
    return (
        <div className="App">
            <Header />
            <UsersList />
        </div>
    );
}

export default App;
