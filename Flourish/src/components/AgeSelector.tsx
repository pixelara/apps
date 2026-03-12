import React from 'react';
import { ageGroups } from '../data/ageGroups';
import { useApp } from '../hooks/useApp';

export const AgeSelector: React.FC = () => {
  const { userProfile, setUserProfile } = useApp();

  const handleAgeGroupSelect = (ageGroupId: string) => {
    setUserProfile({
      ageGroup: ageGroupId,
      preferences: userProfile?.preferences || []
    });
  };

  if (userProfile?.ageGroup) {
    return null;
  }

  return (
    <div className="age-selector">
      <div className="container">
        <div className="age-selector-logo">
          <span className="age-selector-logo-icon">🌸</span>
          <span className="age-selector-logo-name">WeFlourish</span>
        </div>
        <h1>Welcome to WeFlourish</h1>
        <p>Your holistic life management companion</p>
        <h2>Select Your Age Group</h2>
        <div className="age-groups">
          {ageGroups.map((group) => (
            <button
              key={group.id}
              className="age-group-card"
              onClick={() => handleAgeGroupSelect(group.id)}
            >
              <h3>{group.name}</h3>
              <p className="age-range">{group.range} years</p>
              <p className="description">{group.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};