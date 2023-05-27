import Container from '@mui/material/Container'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { useDispatch} from 'react-redux'
import { Header } from './components'
import { AddPost, FullPost, Home, Login, Registration, HM } from './pages'
import { fetchAuthMe} from './redux/slices/auth'

function App() {
const dispatch = useDispatch() 

React.useEffect(() => {
  dispatch(fetchAuthMe())
}, [])

  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/test' element={ <HM/> }/>
          <Route path='/test1' element={ <HM/> }/>
          <Route path='/posts/:id' element={ <FullPost/> }/>
          <Route path='/posts/:id/edit' element={ <AddPost/> }/>
          <Route path='/add-post' element={ <AddPost/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/register' element={ <Registration/> }/>
        </Routes>
      </Container>
    </>
  )
}

export default App
