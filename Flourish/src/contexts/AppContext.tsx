import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { UserProfile } from '../types';
import { AppContext } from './AppContextDefinition';

const AGE_GROUP_KEY = 'flourish_age_group';

function loadAgeGroup(): UserProfile | null {
  try {
    const id = localStorage.getItem(AGE_GROUP_KEY);
    return id ? { ageGroup: id, preferences: [] } : null;
  } catch {
    return null;
  }
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(loadAgeGroup);
  const [selectedCategory, setSelectedCategory] = useState<string>('health');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [showMyGoals, setShowMyGoals] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (userProfile?.ageGroup) {
        localStorage.setItem(AGE_GROUP_KEY, userProfile.ageGroup);
      } else {
        localStorage.removeItem(AGE_GROUP_KEY);
      }
    } catch {
      // private browsing — ignore
    }
  }, [userProfile]);

  const setUserProfile = (profile: UserProfile | null) => {
    setUserProfileState(profile);
    setShowMyGoals(false);
  };

  return (
    <AppContext.Provider
      value={{
        userProfile,
        setUserProfile,
        selectedCategory,
        setSelectedCategory,
        selectedSubcategory,
        setSelectedSubcategory,
        showMyGoals,
        setShowMyGoals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
