import React from 'react';
import { categories } from '../data/categories';
import { ageGroups } from '../data/ageGroups';
import { useApp } from '../hooks/useApp';

export const GuidanceView: React.FC = () => {
  const { selectedCategory, selectedSubcategory, userProfile } = useApp();

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentSubcategory = currentCategory?.subcategories.find(sub => sub.id === selectedSubcategory);
  const currentAgeGroup = ageGroups.find(group => group.id === userProfile?.ageGroup);
  const guidance = currentSubcategory?.ageSpecificGuidance.find(
    guide => guide.ageGroupId === userProfile?.ageGroup
  );

  if (!currentSubcategory || !guidance || !currentCategory || !currentAgeGroup) {
    return (
      <div className="guidance-view">
        <div className="container">
          <div className="placeholder">
            <h2>Select a category and subcategory to get personalized guidance</h2>
            <p>Choose from the options above to see age-specific recommendations tailored for you.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="guidance-view">
      <div className="container">
        <div className="guidance-header">
          <h1>{guidance.title}</h1>
          <div className="breadcrumb">
            <span className="category" style={{ color: currentCategory.color }}>
              {currentCategory.icon} {currentCategory.name}
            </span>
            <span className="separator">›</span>
            <span className="subcategory">{currentSubcategory.name}</span>
            <span className="separator">›</span>
            <span className="age-group">{currentAgeGroup.name} ({currentAgeGroup.range})</span>
          </div>
          <p className="description">{guidance.description}</p>
        </div>

        <div className="guidance-content">
          <section className="recommendations">
            <h2>Recommendations</h2>
            <ul>
              {guidance.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </section>

          {guidance.testsToRun && guidance.testsToRun.length > 0 && (
            <section className="tests">
              <h2>Recommended Tests & Screenings</h2>
              <ul>
                {guidance.testsToRun.map((test, index) => (
                  <li key={index}>{test}</li>
                ))}
              </ul>
            </section>
          )}

          {guidance.resources && guidance.resources.length > 0 && (
            <section className="resources">
              <h2>Additional Resources</h2>
              <div className="resource-list">
                {guidance.resources.map((resource, index) => (
                  <div key={index} className="resource-item">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    {resource.url && (
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Learn more →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};