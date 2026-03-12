import React from 'react';
import { categories } from '../data/categories';
import { useGoals } from '../hooks/useGoals';
import { useApp } from '../hooks/useApp';

export const MyGoalsView: React.FC = () => {
  const { getAllGoals, toggleGoal, deleteGoal } = useGoals();
  const { setShowMyGoals, setSelectedCategory, setSelectedSubcategory } = useApp();

  const allGoals = getAllGoals();

  // Group by category + subcategory label
  const grouped: Record<string, { categoryName: string; subcategoryName: string; goals: typeof allGoals }> = {};
  for (const goal of allGoals) {
    const key = `${goal.categoryId}:${goal.subcategoryId}`;
    if (!grouped[key]) {
      const cat = categories.find(c => c.id === goal.categoryId);
      const sub = cat?.subcategories.find(s => s.id === goal.subcategoryId);
      grouped[key] = {
        categoryName: cat ? `${cat.icon} ${cat.name}` : goal.categoryId,
        subcategoryName: sub?.name ?? goal.subcategoryId,
        goals: [],
      };
    }
    grouped[key].goals.push(goal);
  }

  const handleNavigate = (categoryId: string, subcategoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
    setShowMyGoals(false);
  };

  return (
    <div className="my-goals-view">
      <div className="container">
        <div className="my-goals-header">
          <h1>★ My Goals</h1>
          <p>All your personal goals across every category</p>
          <p className="goals-storage-note">
            💾 Your goals are saved privately in your browser — no account needed, no data leaves your device.
            They'll persist across visits, but will be lost if you clear your browser's site data or browsing history.
          </p>
        </div>

        {allGoals.length === 0 ? (
          <div className="my-goals-empty">
            <p>You haven't added any personal goals yet.</p>
            <p>Open a subcategory and add goals in the <strong>My Goals</strong> section.</p>
            <button className="change-age-btn" onClick={() => setShowMyGoals(false)}>
              Browse Guidance
            </button>
          </div>
        ) : (
          <div className="my-goals-groups">
            {Object.entries(grouped).map(([key, group]) => {
              const [categoryId, subcategoryId] = key.split(':');
              return (
                <div key={key} className="goals-group">
                  <div className="goals-group-header">
                    <span className="goals-group-category">{group.categoryName}</span>
                    <span className="goals-group-sep">›</span>
                    <button
                      className="goals-group-sub-link"
                      onClick={() => handleNavigate(categoryId, subcategoryId)}
                    >
                      {group.subcategoryName}
                    </button>
                  </div>
                  <ul className="goals-list">
                    {group.goals.map(goal => (
                      <li key={goal.id} className={`goal-item${goal.completed ? ' completed' : ''}`}>
                        <button
                          className="goal-toggle"
                          onClick={() => toggleGoal(categoryId, subcategoryId, goal.id)}
                          aria-label={goal.completed ? 'Mark incomplete' : 'Mark complete'}
                        >
                          {goal.completed ? '✓' : '○'}
                        </button>
                        <span className="goal-text">{goal.text}</span>
                        <div className="goal-actions">
                          <button
                            className="goal-delete-btn"
                            onClick={() => deleteGoal(categoryId, subcategoryId, goal.id)}
                            aria-label="Delete goal"
                          >
                            ✕
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
