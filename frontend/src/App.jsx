import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LayOut from './LayOut'
import Home from './Home'
import Insert from './Insert'
import Display from './Display'
import AddBook from './AddBook'
import EditBook from './EditBook'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<LayOut/>}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='insert' element={<Insert/>}/>
          <Route path='display' element={<Display/>}/>
          <Route path='addbook/:id' element={<AddBook/>}/>
          <Route path='editbook/:id' element={<EditBook/>}/>
         </Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App