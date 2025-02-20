import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/index.tsx';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <BrowserRouter>
        <ContextProvider>
            <App />
        </ContextProvider>
    </BrowserRouter>
    // </React.StrictMode>
);
