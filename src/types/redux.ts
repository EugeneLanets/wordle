import type services from '../services';

export type RootState = ReturnType<typeof services.redux.getState>;
export type AppDispatch = typeof services.redux.dispatch;
