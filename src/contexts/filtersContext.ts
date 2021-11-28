import {createContext} from 'react';
import { ContextData } from '../models/models';

export const FiltersContext = createContext<ContextData>({
    setActive: () => {},
    setPromo: () => {},
    setSearch: () => {}
});