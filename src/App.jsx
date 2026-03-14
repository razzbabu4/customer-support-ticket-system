import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <MainContent></MainContent>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default App;