import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Mengimpor 'thunk' sebagai named export
import rootReducer from './store/Reducers/RootReducer'; // Import rootReducer yang sudah kita buat
import App from './App';
import './styles/style.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
