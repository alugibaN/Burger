import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'
import { rootReducer } from './services/store'
import { createStore, applyMiddleware, Action, ActionCreator } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { socketMiddleware } from './services/Middleware/socketMiddleware';



const wsUrl = 'wss://norma.nomoreparties.space/orders';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLLIElement);
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsUrl))))

 root.render(
	<Provider store={store}>
		< BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
	);





