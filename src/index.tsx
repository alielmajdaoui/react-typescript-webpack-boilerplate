import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Info from './routes/Info';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="info" element={<Info />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
