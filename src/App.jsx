import './App.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Fragmentos from './pages/Fragmentos'
import Layout from './pages/Layout'
import Ficha from './components/Ficha'

const rotas = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path='/fragmentos' element={<Fragmentos />} />
            <Route path='/fragmentos/:name' element={<Ficha />}></Route>
          </Route>
        </Routes>
      </HashRouter>
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
