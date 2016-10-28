import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appointments from './appointment';

const rootReducer = combineReducers({appointments, routing: routerReducer });

export default rootReducer;