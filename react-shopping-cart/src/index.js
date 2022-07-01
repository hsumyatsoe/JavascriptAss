import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import store from "./stores";
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faXmark, faCartShopping, faChevronLeft, faTags } from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';

library.add(fas, faHeart, faXmark, faCartShopping, faChevronLeft, faTags)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      	<App />
    </Provider>
  </React.StrictMode>
);