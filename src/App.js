import styles from './App.module.css';

const App = () => {
  return (
    <div className={`${styles.container} container mx-auto pt-4`}>
      <header className="text-center p-4">
        <h1 id="app-title" className="text-6xl">
          All Done
        </h1>
      </header>
    </div>
  );
};

export default App;
