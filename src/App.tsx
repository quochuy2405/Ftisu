import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Admin, Register, Page404, Test, Home } from './page'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import setup from '@/locales/setup'
import { I18nextProvider } from 'react-i18next'
import Team from '@/page/Team'
import { RouteItem } from '@/components/Interface/app'
import { routers } from '@/routers'

const showContentMenus = (routes: Array<RouteItem>) => {
  var result = null
  if (routes.length) {
    result = routes.map((value, key) => {
      return <Route path={value.path} element={value.element} key={key}></Route>
    })
  }
  return <Routes>{result}</Routes>
}

function App() {
  // const location = useLocation()
  return (
    <>
      <I18nextProvider i18n={setup}>
        <div className="App">
          {routers.find((e) => e.path === location.pathname)?.header && <Header></Header>}
          {showContentMenus(routers)}
          {/* 
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header></Header>
                  <Home></Home>
                </>
              }
            ></Route>
            <Route path="/register" element={<Register />} />
            <Route
              path="/team"
              element={
                <>
                  <Header></Header>
                  <Home></Home>
                </>
              }
            />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/:slug" element={<Admin />} />
            <Route path="/admin/:slug/:opt" element={<Admin />} />
            <Route path="" element={<Page404 />} />
          </Routes> */}
          <Footer></Footer>
        </div>
      </I18nextProvider>
    </>
  )
}

export default App
