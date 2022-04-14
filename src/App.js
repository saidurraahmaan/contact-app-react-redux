import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import AddContact from "./components/AddContact";

const App = () => {
    return (
        <>
            <ToastContainer/>
            <Navbar/>
            <Routes>
                <Route path='/add' element={<AddContact/>}/>
                <Route path='/edit/:id' element={<>Edit compo</>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    );
};

export default App;