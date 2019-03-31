import { createStore } from 'redux';
import colorPalletReducer from './colorPalletReducer';

const store = createStore(colorPalletReducer)

export default store;
