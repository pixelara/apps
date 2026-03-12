import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { GoalsProvider } from './contexts/GoalsContext';
import { useApp } from './hooks/useApp';
import { AgeSelector } from './components/AgeSelector';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { SubcategoryList } from './components/SubcategoryList';
import { GuidanceView } from './components/GuidanceView';
import { MyGoalsView } from './components/MyGoalsView';
import './App.css';

const AppContent: React.FC = () => {
  const { userProfile, selectedSubcategory, showMyGoals } = useApp();

  if (!userProfile?.ageGroup) {
    return <AgeSelector />;
  }

  if (showMyGoals) {
    return (
      <div className="app">
        <Header />
        <MyGoalsView />
      </div>
    );
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
      <GoalsProvider>
        <AppContent />
      </GoalsProvider>
    </AppProvider>
  );
}

export default App;
