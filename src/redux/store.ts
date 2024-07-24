import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Formslice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

// Exportez les types pour utilisation dans les composants
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
