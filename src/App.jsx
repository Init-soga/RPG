import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Fragmentos from './pages/Fragmentos'
import Layout from './pages/Layout'
import Ficha from './components/Ficha'
import khamzat from './data/khamzat.json'
import andrius from './data/andrius.json'
import qalinna from './data/qalinna.json'
import mizo from './data/mizo.json'
import kaioh from './data/kaioh.json'
import nivek from './data/nivek.json'
import rhoden from './data/rhoden.json'

const rotas = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path='/fragmentos' element={<Fragmentos />} />
            <Route
              path='/fragmentos/andrius'
              element={<Ficha charData={andrius} />}
            ></Route>
            <Route
              path='/fragmentos/khamzat'
              element={<Ficha charData={khamzat} />}
            ></Route>
            <Route
              path='/fragmentos/mizo'
              element={<Ficha charData={mizo} />}
            ></Route>
            <Route
              path='/fragmentos/kaioh'
              element={<Ficha charData={kaioh} />}
            ></Route>
            <Route
              path='/fragmentos/nivek'
              element={<Ficha charData={nivek} />}
            ></Route>
            <Route
              path='/fragmentos/qalinna'
              element={<Ficha charData={qalinna} />}
            ></Route>
            <Route
              path='/fragmentos/rhoden'
              element={<Ficha charData={rhoden} />}
            ></Route>
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
