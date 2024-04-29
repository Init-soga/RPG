import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Fragmentos from './pages/Fragmentos'
import Layout from './pages/Layout'
import Ficha from './components/Ficha'
import khamzat from './data/khamzat.json'
import andrius from './data/andrius.json'
import qalinna from './data/qalinna.json'

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
              element={
                <Ficha
                  name={andrius.name}
                  title={andrius.title}
                  bioTitle={andrius.bioTitle}
                  charBio={andrius.khamzatBio}
                  charSpeach={andrius.khamzatSpeach}
                  splashUrl={andrius.splashUrl}
                  roleName={andrius.roleName}
                  roleUrl={andrius.roleUrl}
                  regionName={andrius.regionName}
                  regionUrl={andrius.regionUrl}
                  relatedName1={andrius.relatedName1}
                  relatedName2={andrius.relatedName2}
                  relatedName3={andrius.relatedName3}
                  relatedSplash1={andrius.relatedSplash1}
                  relatedSplash2={andrius.relatedSplash2}
                  relatedSplash3={andrius.relatedSplash3}
                />
              }
            ></Route>
            <Route
              path='/fragmentos/khamzat'
              element={
                <Ficha
                  name={khamzat.name}
                  title={khamzat.title}
                  bioTitle={khamzat.bioTitle}
                  charBio={khamzat.khamzatBio}
                  charSpeach={khamzat.khamzatSpeach}
                  splashUrl={khamzat.splashUrl}
                  roleName={khamzat.roleName}
                  roleUrl={khamzat.roleUrl}
                  regionName={khamzat.regionName}
                  regionUrl={khamzat.regionUrl}
                  relatedName1={khamzat.relatedName1}
                  relatedName2={khamzat.relatedName2}
                  relatedName3={khamzat.relatedName3}
                  relatedSplash1={khamzat.relatedSplash1}
                  relatedSplash2={khamzat.relatedSplash2}
                  relatedSplash3={khamzat.relatedSplash3}
                />
              }
            ></Route>
            <Route
              path='/fragmentos/qalinna'
              element={
                <Ficha
                  name={qalinna.name}
                  title={qalinna.title}
                  bioTitle={qalinna.bioTitle}
                  charBio={qalinna.khamzatBio}
                  charSpeach={qalinna.khamzatSpeach}
                  splashUrl={qalinna.splashUrl}
                  roleName={qalinna.roleName}
                  roleUrl={qalinna.roleUrl}
                  regionName={qalinna.regionName}
                  regionUrl={qalinna.regionUrl}
                  relatedName1={qalinna.relatedName1}
                  relatedName2={qalinna.relatedName2}
                  relatedName3={qalinna.relatedName3}
                  relatedSplash1={qalinna.relatedSplash1}
                  relatedSplash2={qalinna.relatedSplash2}
                  relatedSplash3={qalinna.relatedSplash3}
                />
              }
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
