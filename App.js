import React from 'react';
import Navigation from './components/shared/navigation';
import {FavProvider} from './context/favoContext';

const App = () => {
  return (
    <FavProvider>
      <Navigation />
    </FavProvider>
  );
};

export default App;
