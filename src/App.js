import React from 'react';
import Article from './components/Article';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          Beautiful seconds
        </h1>
        <h6 className="app-baseline">
          Monthly pieces of life
        </h6>
        <section>
          <Article
            title={'October 2019'}
            youtubeId={'WFqmyB9ZGeg'}
          />
          <Article
            title={'September 2019'}
            youtubeId={'sNUHUjuufNo'}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
