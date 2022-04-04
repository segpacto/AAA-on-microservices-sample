
import './App.css';

import { WelcomePage } from './pages/welcome';
import { ProtectedPage } from './pages/protected';

import { PrivateRoute } from './helper/private-route';

import { AuthContextProvider } from './components/auth-context-provider';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route
                path="/protected"
                element={
                  <PrivateRoute>
                    <ProtectedPage />
                  </PrivateRoute>
                }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App;
