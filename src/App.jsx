// import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Users from './pages/Users';
import ErrorPage from './pages/ErrorPage';
import Task from './pages/Task';
import UserInfo from './pages/UserInfo';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Users/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/:userId' element={<UserInfo/>}/>

        <Route path='*' element={<ErrorPage/>}/>
      </Route>

    </Routes>
  )
}

export default App

