import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type Services from '../services';

// export const index = configureStore({
//   reducer,
// });
//
// export type RootState = ReturnType<typeof index.getState>;
// export type AppDispatch = typeof index.dispatch;

export default function configureRedux(
  services: Services,
  config = {}
): ToolkitStore {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            services,
          },
        },
      }),
  });
}
