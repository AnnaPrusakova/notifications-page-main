import React from 'react';
import styles from './App.module.scss';
import NotificationWrapper from './components/NotificationWrapper';

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <main>
          <NotificationWrapper/>
        </main>
      </header>
    </div>
  );
}

export default App;
