import React from 'react';
import { categories } from '../data/categories';
import { useApp } from '../hooks/useApp';

export const CategoryNav: React.FC = () => {
  const { selectedCategory, setSelectedCategory, setSelectedSubcategory } = useApp();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('');
  };

  return (
    <nav className="category-nav">
      <div className="container">
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategorySelect(category.id)}
              style={{ '--category-color': category.color } as React.CSSProperties}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};