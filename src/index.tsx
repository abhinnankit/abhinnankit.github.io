import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './index.scss';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element is missing');
}

createRoot(rootElement).render(
    <StrictMode>
        <ParticlesProvider init={loadSlim}>
            <App />
        </ParticlesProvider>
    </StrictMode>
);
