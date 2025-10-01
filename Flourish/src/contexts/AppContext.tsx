import React, { useState } from 'react';
import type { ReactNode } from 'react';
import type { UserProfile } from '../types';
import { AppContext } from './AppContextDefinition';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('health');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');

  return (
    <AppContext.Provider
      value={{
        userProfile,
        setUserProfile,
        selectedCategory,
        setSelectedCategory,
        selectedSubcategory,
        setSelectedSubcategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};