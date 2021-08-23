import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navibar from './components/Navibar';
import Places from './components/Places';
import './App.css';
import Footor from "./components/Footor";

function App() {
    useEffect(() => {
        document.title = "MyHelsinki";
    });

    return (
        <Router>
            <Navibar/>
            <Places/>
            <Footor/>
        </Router>
    );
}

export default App;
