import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <div>Hello World!</div>
            <div>
                <Link to="/info">Go to Info page!</Link>
            </div>
        </div>
    );
};

export default App;
