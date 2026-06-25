import { Routes, Route } from "react-router-dom"

import Register from "../pages/Register/Register"
import Categories from "../pages/Categories/Categories"
import Dashboard from "../pages/Dashboard/Dashboard"

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path="/categories" element={<Categories />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default AppRoutes