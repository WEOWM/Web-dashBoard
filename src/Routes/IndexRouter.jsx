import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Default from '../Layout/Default'
import DashBoard from '../Pages/DashBoard'

const IndexRouter = () => {
  return (
    <div >
        <Routes>
            <Route path='/'element={<Default/>}>
              <Route path='/dashboard' element={<DashBoard/>}/>
            </Route>
        </Routes>
      
    </div>
  )
}

export default IndexRouter
