import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { authReducer } from './auth';
import { storage } from '@/storage';
import { authService } from '@/services';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const middlewares = [authService.middleware];

if (__DEV__) {
  const reduxFlipperMiddleware = require('redux-flipper').default;
  middlewares.push(reduxFlipperMiddleware());
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware(getDefaultMiddleware) {
    const defaultMiddlewareOptions = {
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    };

    return getDefaultMiddleware(defaultMiddlewareOptions).concat(middlewares);
  },
});

export const persistor = persistStore(store);
