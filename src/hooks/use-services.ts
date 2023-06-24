import { useContext } from 'react';
import { ServicesContext } from '../services/context';
import type Services from '../services/services';

const useServices = (): Services | undefined => useContext(ServicesContext);
export default useServices;
