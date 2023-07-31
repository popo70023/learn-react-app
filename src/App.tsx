import './App.css';
import AppRouters from './app-router';
import Dashboard from './layout/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Dashboard/>
      <AppRouters />
    </div>
  );
}

export default App;
