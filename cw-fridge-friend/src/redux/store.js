import {applyMiddleware, combineReducers, createStore} from "redux";
import { persistReducer, persistStore } from "redux-persist";

// Instead of importing AsyncStorage from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "./reducers";

const persistConfig = {
  key: "primary",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  userReducer: persistReducer(persistConfig, userReducer),
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(Store);

// export default { Store, persistor };
