import { createContext } from 'react';
import type { GoalsContextType } from '../types';

export const GoalsContext = createContext<GoalsContextType | undefined>(undefined);
