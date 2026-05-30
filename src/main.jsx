import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/app.css';
import { HelmetProvider as SEOProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SEOProvider>
            <App />
        </SEOProvider>
    </React.StrictMode>,
)