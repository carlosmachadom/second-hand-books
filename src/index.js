import React from "react";
import { createRoot } from 'react-dom/client';
import App from '@routes/App';

const appContainer = document.getElementById('app');
const root = createRoot(appContainer);

root.render(<App />)