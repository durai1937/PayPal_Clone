import './App.css'
import LandingPage from './Components/Landing/LandingPage'
import Login from './Components/Login/Login'
import RootLayout from './Components/Layout/RootLayout'
import AccountSelection from './Components/AccountSelection/AccountSelection'
import {Route,useNavigate , Routes, BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import AccSecNav from './Components/Personal/AccSecNav'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<LandingPage/>} />
        <Route path='Login' element={<Login/>} />
        <Route path='AccountSelection' element={<AccountSelection/>} />
        <Route path='AccSecNav' element={<AccSecNav/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App
