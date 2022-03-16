import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import Info from './app/routes/Info';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
