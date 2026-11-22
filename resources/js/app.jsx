import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <main className="fp-welcome d-flex align-items-center">
            <div className="container py-5">
                <div className="text-primary mb-4">
                    <i className="fa-solid fa-code me-2" aria-hidden="true" />
                    fpwebdesigns
                </div>

                <h1 className="display-2 fw-bold">
                    Your vision.<br />
                    Built without <span>limits.</span>
                </h1>

                <p className="lead mt-4">
                    Tu negocio tiene su propia identidad.
                    Tu web también debería tenerla.
                </p>
            </div>
        </main>
    );
}

createRoot(document.getElementById('root')).render(<App />);
