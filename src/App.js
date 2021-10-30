import styles from './App.module.css';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className={`${styles.container} container mx-auto pt-4`}>
      <header className="text-center p-4">
        <h1 id="app-title" className="text-6xl">
          All Done
        </h1>
      </header>
      <main>
        <Todo />
      </main>
    </div>
  );
};

export default App;
