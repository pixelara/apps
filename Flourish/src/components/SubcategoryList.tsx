import React from 'react';
import { categories } from '../data/categories';
import { useApp } from '../hooks/useApp';

export const SubcategoryList: React.FC = () => {
  const { selectedCategory, selectedSubcategory, setSelectedSubcategory } = useApp();

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  if (!currentCategory) {
    return null;
  }

  return (
    <div className="subcategory-list">
      <div className="container">
        <h2>{currentCategory.name} Categories</h2>
        <div className="subcategories">
          {currentCategory.subcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              className={`subcategory-card ${selectedSubcategory === subcategory.id ? 'active' : ''}`}
              onClick={() => setSelectedSubcategory(subcategory.id)}
              style={{ '--category-color': currentCategory.color } as React.CSSProperties}
            >
              <h3>{subcategory.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};