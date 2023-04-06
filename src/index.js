import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </HashRouter >
);

// Вместо BrowserRouter используется HashRouter, чтобы обойти баг с путями
// на netlify 'https://sprightly-bombolone-fede56.netlify.app/sign-in' при
// перезагрузке страницы с роутом netlify выкидывает 404 ошибку

/*
<HashRouter> is for use in web browsers when the URL should not (or cannot)
be sent to the server for some reason. This may happen in some shared hosting
scenarios where you do not have full control over the server.
In these situations, <HashRouter> makes it possible to store the current location
in the hash portion of the current URL, so it is never sent to the server.
*/