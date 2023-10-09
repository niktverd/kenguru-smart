import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/features/app/components/App';

const rootNode = document.createElement('div');

document.body.appendChild(rootNode);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootNode
);
