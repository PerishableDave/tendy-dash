import React from 'react';
import { QuotesContainer } from './store';
import logo from './logo.svg';
import './App.css';

import TickerGrid from './components/TickerGrid';

function App() {
  return (
    <div className="App">
      <QuotesContainer.Provider>
        <TickerGrid />
      </QuotesContainer.Provider>
    </div>
  );
}

export default App;
