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