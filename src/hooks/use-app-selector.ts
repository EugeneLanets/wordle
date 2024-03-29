import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import { type RootState } from '../types/redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
