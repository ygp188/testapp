import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
