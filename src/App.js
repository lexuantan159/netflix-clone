import React from 'react';
import { Route, Routes} from "react-router-dom";
import  Navbar  from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { publicRoutes} from "./routes";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          {publicRoutes.map( (route, index) => {
            if(route.path === '/account')
              return <Route key={index} path={route.path} element={<ProtectedRoute> <route.component/> </ProtectedRoute>}/>
            else 
              return <Route key={index} path={route.path} element={<route.component/>}/>
            })
          }
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
