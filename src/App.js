import styles from './App.module.css';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className={`${styles.container} container mx-auto pt-4`}>
      <header className="text-center mt-8 mb-6">
        <h1 id="app-title" className="text-5xl">
          All Done
        </h1>
      </header>
      <main className="p-4">
        <TodoList />
      </main>
    </div>
  );
};

export default App;
