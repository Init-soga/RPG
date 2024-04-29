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
              path='/fragmentos/mizo'
              element={
                <Ficha
                  name={mizo.name}
                  title={mizo.title}
                  bioTitle={mizo.bioTitle}
                  charBio={mizo.khamzatBio}
                  charSpeach={mizo.khamzatSpeach}
                  splashUrl={mizo.splashUrl}
                  roleName={mizo.roleName}
                  roleUrl={mizo.roleUrl}
                  regionName={mizo.regionName}
                  regionUrl={mizo.regionUrl}
                  relatedName1={mizo.relatedName1}
                  relatedName2={mizo.relatedName2}
                  relatedName3={mizo.relatedName3}
                  relatedSplash1={mizo.relatedSplash1}
                  relatedSplash2={mizo.relatedSplash2}
                  relatedSplash3={mizo.relatedSplash3}
                />
              }
            ></Route>
            <Route
              path='/fragmentos/kaioh'
              element={
                <Ficha
                  name={kaioh.name}
                  title={kaioh.title}
                  bioTitle={kaioh.bioTitle}
                  charBio={kaioh.khamzatBio}
                  charSpeach={kaioh.khamzatSpeach}
                  splashUrl={kaioh.splashUrl}
                  roleName={kaioh.roleName}
                  roleUrl={kaioh.roleUrl}
                  regionName={kaioh.regionName}
                  regionUrl={kaioh.regionUrl}
                  relatedName1={kaioh.relatedName1}
                  relatedName2={kaioh.relatedName2}
                  relatedName3={kaioh.relatedName3}
                  relatedSplash1={kaioh.relatedSplash1}
                  relatedSplash2={kaioh.relatedSplash2}
                  relatedSplash3={kaioh.relatedSplash3}
                />
              }
            ></Route>
            <Route
              path='/fragmentos/nivek'
              element={
                <Ficha
                  name={nivek.name}
                  title={nivek.title}
                  bioTitle={nivek.bioTitle}
                  charBio={nivek.khamzatBio}
                  charSpeach={nivek.khamzatSpeach}
                  splashUrl={nivek.splashUrl}
                  roleName={nivek.roleName}
                  roleUrl={nivek.roleUrl}
                  regionName={nivek.regionName}
                  regionUrl={nivek.regionUrl}
                  relatedName1={nivek.relatedName1}
                  relatedName2={nivek.relatedName2}
                  relatedName3={nivek.relatedName3}
                  relatedSplash1={nivek.relatedSplash1}
                  relatedSplash2={nivek.relatedSplash2}
                  relatedSplash3={nivek.relatedSplash3}
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
            <Route
              path='/fragmentos/rhoden'
              element={
                <Ficha
                  name={rhoden.name}
                  title={rhoden.title}
                  bioTitle={rhoden.bioTitle}
                  charBio={rhoden.khamzatBio}
                  charSpeach={rhoden.khamzatSpeach}
                  splashUrl={rhoden.splashUrl}
                  roleName={rhoden.roleName}
                  roleUrl={rhoden.roleUrl}
                  regionName={rhoden.regionName}
                  regionUrl={rhoden.regionUrl}
                  relatedName1={rhoden.relatedName1}
                  relatedName2={rhoden.relatedName2}
                  relatedName3={rhoden.relatedName3}
                  relatedSplash1={rhoden.relatedSplash1}
                  relatedSplash2={rhoden.relatedSplash2}
                  relatedSplash3={rhoden.relatedSplash3}
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
