import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type Services from '../services';

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
