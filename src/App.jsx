import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <MainContent></MainContent>
            <ToastContainer />
        </div>
    );
};

export default App;