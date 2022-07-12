import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Admin, Register, Page404, Test, Home } from './page'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import setup from '@/locales/setup'
import { I18nextProvider } from 'react-i18next'
function App() {
  const location = useLocation()
  return (
    <I18nextProvider i18n={setup}>
      <div className="App">
        {!location.pathname.includes('register') && <Header></Header>}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/:slug" element={<Admin />} />
          <Route path="/admin/:slug/:opt" element={<Admin />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer></Footer>
      </div>
    </I18nextProvider>
  )
}

export default App
