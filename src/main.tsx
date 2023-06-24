import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import { Provider } from 'react-redux';
import services from './services';
import { ServicesContext } from './services/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={services.redux}>
      <ServicesContext.Provider value={services}>
        <App />
      </ServicesContext.Provider>
    </Provider>
  </React.StrictMode>
);
