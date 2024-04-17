import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fragmentos from './pages/Fragmentos'
import Layout from './pages/Layout'

const rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path='/fragmentos' element={<Fragmentos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function App () {
  return (
    <>
      <div>{rotas()}</div>
    </>
  )
}

export default App
