import { Route, Routes } from 'react-router-dom'
import { Home, Layouts, Page404, Register } from './page'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin/2" element={<Register />} />
        </Route>
        <Route element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
