import { Route, Routes } from 'react-router-dom'
import { Home, Layouts, Page404, Register } from './page'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
