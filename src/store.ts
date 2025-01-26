import { configureStore, createSlice } from '@reduxjs/toolkit';
import { AppState } from './AppState';

const initialState: AppState = {
  decisionTemplates: [],
};

const state = createSlice({
  name: 'state',
  initialState: initialState,
  reducers: {
    addDecisionTemplate(state, action) {
      state.decisionTemplates.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: state.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const stateActions = state.actions;
export default store;
