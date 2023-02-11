import logo from './logo.svg';
import { React } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import LoginScreen from './components/LoginScreen'
import './App.css';
import { AuthContextProvider } from './auth';
import { GlobalStoreContextProvider } from './store';

function App() {
  return (
        <BrowserRouter>
            <AuthContextProvider>
                <GlobalStoreContextProvider>              
                    <Routes>
                        <Route path="/login" exact element={<LoginScreen />} />
                    </Routes>
                </GlobalStoreContextProvider>              
            </AuthContextProvider>
        </BrowserRouter>
  );
}

export default App;
