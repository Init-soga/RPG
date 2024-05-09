import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Ficha from './components/Ficha'
import khamzat from './data/khamzat.json'
import andrius from './data/andrius.json'
import qalinna from './data/qalinna.json'
import mizo from './data/mizo.json'
import kaioh from './data/kaioh.json'
import nivek from './data/nivek.json'
import rhoden from './data/rhoden.json'
import Personagens from './pages/Personagens'
import Skills from './components/Skills'

const rotas = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path='/personagens' element={<Personagens />} />
            <Route
              path='/personagens/andrius'
              element={<Ficha charData={andrius} />}
            ></Route>
            <Route
              path='/personagens/andrius/skills'
              element={<Skills charData={andrius} />}
            ></Route>
            <Route
              path='/personagens/khamzat'
              element={<Ficha charData={khamzat} />}
            ></Route>
            <Route
              path='/personagens/khamzat/skills'
              element={<Skills charData={khamzat} />}
            ></Route>
            <Route
              path='/personagens/mizo'
              element={<Ficha charData={mizo} />}
            ></Route>
            <Route
              path='/personagens/mizo/skills'
              element={<Skills charData={mizo} />}
            ></Route>
            <Route
              path='/personagens/kaioh'
              element={<Ficha charData={kaioh} />}
            ></Route>
            <Route
              path='/personagens/kaioh/skills'
              element={<Skills charData={kaioh} />}
            ></Route>
            <Route
              path='/personagens/nivek'
              element={<Ficha charData={nivek} />}
            ></Route>
            <Route
              path='/personagens/nivek/skills'
              element={<Skills charData={nivek} />}
            ></Route>
            <Route
              path='/personagens/qalinna'
              element={<Ficha charData={qalinna} />}
            ></Route>
            <Route
              path='/personagens/qalinna/skills'
              element={<Skills charData={qalinna} />}
            ></Route>
            <Route
              path='/personagens/rhoden'
              element={<Ficha charData={rhoden} />}
            ></Route>
            <Route
              path='/personagens/rhoden/skills'
              element={<Skills charData={rhoden} />}
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
