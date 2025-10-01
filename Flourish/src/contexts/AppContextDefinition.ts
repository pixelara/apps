import { createContext } from 'react';
import type { UserProfile } from '../types';

export interface AppContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSubcategory: string;
  setSelectedSubcategory: (subcategory: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);