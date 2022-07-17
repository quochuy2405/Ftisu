import { Route, Routes } from 'react-router-dom'
import { Home, Layouts, Page404, Register, Test } from './page'

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
