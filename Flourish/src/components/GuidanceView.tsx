import React, { useState, useRef } from 'react';
import { categories } from '../data/categories';
import { ageGroups } from '../data/ageGroups';
import { useApp } from '../hooks/useApp';
import { useGoals } from '../hooks/useGoals';

export const GuidanceView: React.FC = () => {
  const { selectedCategory, selectedSubcategory, userProfile } = useApp();
  const { getGoalsForSubcategory, addGoal, deleteGoal, toggleGoal, editGoal } = useGoals();

  const [newGoalText, setNewGoalText] = useState('');
  const [editingGoalId, setEditingGoalId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentSubcategory = currentCategory?.subcategories.find(sub => sub.id === selectedSubcategory);
  const currentAgeGroup = ageGroups.find(group => group.id === userProfile?.ageGroup);
  const guidance = currentSubcategory?.ageSpecificGuidance.find(
    guide => guide.ageGroupId === userProfile?.ageGroup
  );

  const goals = getGoalsForSubcategory(selectedCategory, selectedSubcategory);

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    addGoal(selectedCategory, selectedSubcategory, newGoalText);
    setNewGoalText('');
  };

  const handleStartEdit = (goalId: string, currentText: string) => {
    setEditingGoalId(goalId);
    setEditText(currentText);
    setTimeout(() => editInputRef.current?.focus(), 0);
  };

  const handleCommitEdit = () => {
    if (editingGoalId && editText.trim()) {
      editGoal(selectedCategory, selectedSubcategory, editingGoalId, editText);
    }
    setEditingGoalId(null);
    setEditText('');
  };

  const handleEditKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCommitEdit();
    if (e.key === 'Escape') {
      setEditingGoalId(null);
      setEditText('');
    }
  };

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
              <h2>Recommended Tests &amp; Screenings</h2>
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

          <section className="personal-goals">
            <h2>★ My Goals</h2>

            {goals.length === 0 && (
              <p className="goals-empty">No personal goals yet. Add one below!</p>
            )}

            <ul className="goals-list">
              {goals.map(goal => (
                <li key={goal.id} className={`goal-item${goal.completed ? ' completed' : ''}`}>
                  <button
                    className="goal-toggle"
                    onClick={() => toggleGoal(selectedCategory, selectedSubcategory, goal.id)}
                    aria-label={goal.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {goal.completed ? '✓' : '○'}
                  </button>

                  {editingGoalId === goal.id ? (
                    <input
                      ref={editInputRef}
                      className="goal-edit-input"
                      value={editText}
                      onChange={e => setEditText(e.target.value)}
                      onBlur={handleCommitEdit}
                      onKeyDown={handleEditKeyDown}
                      maxLength={200}
                    />
                  ) : (
                    <span
                      className="goal-text"
                      onDoubleClick={() => handleStartEdit(goal.id, goal.text)}
                    >
                      {goal.text}
                    </span>
                  )}

                  <div className="goal-actions">
                    <button
                      className="goal-edit-btn"
                      onClick={() => handleStartEdit(goal.id, goal.text)}
                      aria-label="Edit goal"
                    >
                      ✏️
                    </button>
                    <button
                      className="goal-delete-btn"
                      onClick={() => deleteGoal(selectedCategory, selectedSubcategory, goal.id)}
                      aria-label="Delete goal"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <form className="add-goal-form" onSubmit={handleAddGoal}>
              <input
                className="add-goal-input"
                type="text"
                placeholder="Add your own goal..."
                value={newGoalText}
                onChange={e => setNewGoalText(e.target.value)}
                maxLength={200}
              />
              <button type="submit" className="add-goal-btn" disabled={!newGoalText.trim()}>
                Add Goal
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
