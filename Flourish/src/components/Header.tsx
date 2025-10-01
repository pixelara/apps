import React from 'react';
import { ageGroups } from '../data/ageGroups';
import { useApp } from '../hooks/useApp';

export const Header: React.FC = () => {
  const { userProfile, setUserProfile } = useApp();

  const currentAgeGroup = ageGroups.find(group => group.id === userProfile?.ageGroup);

  const handleChangeAgeGroup = () => {
    setUserProfile(null);
  };

  if (!userProfile?.ageGroup) {
    return null;
  }

  return (
    <header className="app-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <h1>🌸 Flourish</h1>
            <p>Holistic Life Management</p>
          </div>
          <div className="user-section">
            <div className="user-info">
              <span className="age-group-label">Your Stage:</span>
              <span className="age-group-name">{currentAgeGroup?.name}</span>
              <span className="age-range">({currentAgeGroup?.range})</span>
            </div>
            <button onClick={handleChangeAgeGroup} className="change-age-btn">
              Change
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};