import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    // AuthProvider is added after creation of AuthContext.js
    <AuthProvider>
    <div className="App">    
      <Login/>
    </div>
    </AuthProvider>
  );
}

export default App;
