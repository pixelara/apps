export interface AgeGroup {
  id: string;
  name: string;
  range: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  ageSpecificGuidance: AgeSpecificGuidance[];
}

export interface AgeSpecificGuidance {
  ageGroupId: string;
  title: string;
  description: string;
  recommendations: string[];
  testsToRun?: string[];
  resources?: Resource[];
}

export interface Resource {
  title: string;
  url?: string;
  description: string;
}

export interface UserProfile {
  ageGroup: string;
  preferences: string[];
}

export interface PersonalGoal {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type GoalsMap = Record<string, PersonalGoal[]>;

export interface GoalsContextType {
  goalsMap: GoalsMap;
  addGoal: (categoryId: string, subcategoryId: string, text: string) => void;
  deleteGoal: (categoryId: string, subcategoryId: string, goalId: string) => void;
  toggleGoal: (categoryId: string, subcategoryId: string, goalId: string) => void;
  editGoal: (categoryId: string, subcategoryId: string, goalId: string, text: string) => void;
  getGoalsForSubcategory: (categoryId: string, subcategoryId: string) => PersonalGoal[];
  getAllGoals: () => Array<PersonalGoal & { categoryId: string; subcategoryId: string }>;
}