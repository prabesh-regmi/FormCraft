import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import App from "./App.jsx";
import "./index.css";
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>
);
