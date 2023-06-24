import { type AppDispatch } from '../types/redux';
import { useDispatch } from 'react-redux';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
