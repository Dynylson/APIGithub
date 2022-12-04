import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import RepositoriesPage from './pages/RepositoriesPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/repositories' element={<RepositoriesPage />} />
      <Route path='/' element={<MainPage />} />
    </Routes>
  )
}
