import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './src/App';
import React from 'react';
import StartScreen from './src/components/StartScreen';
import Rules from './src/components/Rules';
import Game from './src/components/Game';
import wordService from './src/services/wordService';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <StartScreen />,
      },
      {
        path: 'rules',
        element: <Rules />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
