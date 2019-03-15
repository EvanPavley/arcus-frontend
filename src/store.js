import { createStore } from 'redux';
import colorPalletReducer from './reducers/colorPalletReducer';

const store = createStore(colorPalletReducer)

export default store;
