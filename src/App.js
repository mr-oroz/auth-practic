import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/auth/login";
import Header from "./components/header/header";
import Register from './components/auth/register';
import services from './server/services';
import Cookies from 'js-cookie'
const App = () => {
  const [user, setUser] = useState('')
  useEffect(() => {
      getMe()
  }, [])
  const getMe =  async() => {
    await services.getMe().then(res => {
        console.log('get me ', res)
        setUser(res.data.firstName)
    })
  }
  const logout = () => {
    setUser('')
    Cookies.remove('token')
  }
  console.log(user)
  return <div className="App">
      <Header logout={logout} user={user}/>
      <Routes>
          <Route path="/login" element={<Login getMe={getMe}/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
      {user}
  </div>
}

export default App;