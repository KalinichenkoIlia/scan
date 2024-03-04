import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import './styles/fonts/Inter/static/Inter-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);