/**
 * @file This file is the entry point for your project.
 */

import React from "react";
import { createRoot } from "react-dom/client";

/**
 * @returns The root component of the application.
 */
const App: React.FC = () => {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
};

const root = createRoot(document.getElementById("root") ?? document.body);
root.render(<App />);
