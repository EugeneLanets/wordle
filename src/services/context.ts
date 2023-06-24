import React from 'react';
import type Services from './services';

export const ServicesContext = React.createContext<Services | undefined>(
  undefined
);
