import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  )
}
