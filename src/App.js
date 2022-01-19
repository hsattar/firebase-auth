import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./components.js/Index"
import Register from "./components.js/Register"
import Login from "./components.js/Login"
import { AuthProvider } from './contexts/AuthContext'

export default function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={ <Index /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/login' element={ <Login /> }/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}