import { Route, Routes } from 'react-router-dom'
import './globals.css'

import Homepage from './pages/Homepage'
import Detailpage from './pages/Detailpage'
import Layout from './components/Layout'

function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path=':id' element={<Detailpage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
