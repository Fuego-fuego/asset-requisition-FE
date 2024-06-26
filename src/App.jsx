import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Authentications components Routes 
import Login from './components/Auth/Login.jsx'
import SignUp from './components/Auth/SignUp.jsx'
// All users shared components Routes
import LogoIndexPage from './components/SharedComponents/LogoIndexPage.jsx'
// Admin SuperAdmin Shared Components Routes
import AddAssets from './components/SharedComponents/AddAsset.jsx'
import AllAssets from './components/SharedComponents/AllAssets.jsx'
import Requests from './components/SharedComponents/Requests.jsx'
// SuperAdmin components Routes
import Accounts from './components/SuperAdmin/Accounts.jsx'
import SuperAdminAccountDetails from './components/SuperAdmin/SuperAdminAccountDetails.jsx'
import SuperAdminPage from './components/SuperAdmin/SuperAdminPage.jsx'   
// Admin components Routes
import AdminPage from './components/Admin/AdminPage'
import AdminAccountDetails from './components/Admin/AdminAccountDetails.jsx'
// Employee components Routes
import EmployeePage from './components/Employee/EmployeePage.jsx'
import EmployeeAssets from './components/Employee/EmployeeAssets.jsx'
import EmployeeAccountDetails from './components/Employee/EmployeeAccountDetails.jsx'
import EmployeeRequests from './components/Employee/EmployeeRequests.jsx'


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* a)Auth
        b)Admin & SuperAdmin shared pages*/}
        <Route path="/" element={<Login/>}/>
        {/* Auth */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={ <SignUp/>}/>

        {/* Super Admin */}
        <Route path="/super-admin" element={<SuperAdminPage/>}>
          <Route index element={<LogoIndexPage />}/>
          <Route path="super-admin-account-details" element={<SuperAdminAccountDetails/>}/>
          {/* Admin & SuperAdmin shared pages */}
          <Route path="add-asset" element={<AddAssets/>}/>
          <Route path="assets" element={<AllAssets/>}/>
          <Route path="requests" element={<Requests/>}/>
          <Route path="accounts" element={<Accounts/>}/>
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<AdminPage/>}>
          <Route index element={<LogoIndexPage/>}/>
          <Route path="account-details" element={<AdminAccountDetails/>}/>
          {/* Admin & SuperAdmin shared pages */}
          <Route path="add-asset" element={<AddAssets/>}/>
          <Route path="assets" element={<AllAssets/>}/>
          <Route path="requests" element={<Requests/>}/>
        </Route>
        {/* Employee */}
        <Route path="/employee" element={<EmployeePage/>}>
          <Route index element={<LogoIndexPage/>}/>
          <Route path="account-details" element={<EmployeeAccountDetails/>}/>
          <Route path="assets" element={<EmployeeAssets/>}/>
          <Route path="requests" element={<EmployeeRequests/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
