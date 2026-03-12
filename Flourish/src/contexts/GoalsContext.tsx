import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { GoalsMap, PersonalGoal } from '../types';
import { GoalsContext } from './GoalsContextDefinition';

const STORAGE_KEY = 'flourish_user_goals';

function loadGoals(): GoalsMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as GoalsMap) : {};
  } catch {
    return {};
  }
}

function saveGoals(map: GoalsMap): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // private browsing / storage full — silently ignore
  }
}

function makeKey(categoryId: string, subcategoryId: string): string {
  return `${categoryId}:${subcategoryId}`;
}

interface GoalsProviderProps {
  children: ReactNode;
}

export const GoalsProvider: React.FC<GoalsProviderProps> = ({ children }) => {
  const [goalsMap, setGoalsMap] = useState<GoalsMap>(loadGoals);

  useEffect(() => {
    saveGoals(goalsMap);
  }, [goalsMap]);

  const addGoal = (categoryId: string, subcategoryId: string, text: string) => {
    const key = makeKey(categoryId, subcategoryId);
    const goal: PersonalGoal = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    setGoalsMap(prev => ({
      ...prev,
      [key]: [...(prev[key] ?? []), goal],
    }));
  };

  const deleteGoal = (categoryId: string, subcategoryId: string, goalId: string) => {
    const key = makeKey(categoryId, subcategoryId);
    setGoalsMap(prev => ({
      ...prev,
      [key]: (prev[key] ?? []).filter(g => g.id !== goalId),
    }));
  };

  const toggleGoal = (categoryId: string, subcategoryId: string, goalId: string) => {
    const key = makeKey(categoryId, subcategoryId);
    setGoalsMap(prev => ({
      ...prev,
      [key]: (prev[key] ?? []).map(g =>
        g.id === goalId ? { ...g, completed: !g.completed } : g
      ),
    }));
  };

  const editGoal = (categoryId: string, subcategoryId: string, goalId: string, text: string) => {
    const key = makeKey(categoryId, subcategoryId);
    setGoalsMap(prev => ({
      ...prev,
      [key]: (prev[key] ?? []).map(g =>
        g.id === goalId ? { ...g, text: text.trim() } : g
      ),
    }));
  };

  const getGoalsForSubcategory = (categoryId: string, subcategoryId: string): PersonalGoal[] => {
    return goalsMap[makeKey(categoryId, subcategoryId)] ?? [];
  };

  const getAllGoals = () => {
    const result: Array<PersonalGoal & { categoryId: string; subcategoryId: string }> = [];
    for (const key of Object.keys(goalsMap)) {
      const [categoryId, subcategoryId] = key.split(':');
      for (const goal of goalsMap[key]) {
        result.push({ ...goal, categoryId, subcategoryId });
      }
    }
    return result;
  };

  return (
    <GoalsContext.Provider
      value={{ goalsMap, addGoal, deleteGoal, toggleGoal, editGoal, getGoalsForSubcategory, getAllGoals }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
