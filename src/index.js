import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'
import { rootReducer } from './services/store'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';




 
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

 root.render(
	<Provider store={store}>
		<App/>
		</Provider>
	);





