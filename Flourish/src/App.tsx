import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { useApp } from './hooks/useApp';
import { AgeSelector } from './components/AgeSelector';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { SubcategoryList } from './components/SubcategoryList';
import { GuidanceView } from './components/GuidanceView';
import './App.css';

const AppContent: React.FC = () => {
  const { userProfile, selectedSubcategory } = useApp();

  if (!userProfile?.ageGroup) {
    return <AgeSelector />;
  }

  return (
    <div className="app">
      <Header />
      <CategoryNav />
      {!selectedSubcategory ? <SubcategoryList /> : <GuidanceView />}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
