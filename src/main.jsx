import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import AddProduct from './components/Add-product.jsx';
import UpdateProduct from './components/Update-product.jsx';
import DeleteProduct from './components/Delete-product.jsx';
import SearchProduct from './components/Search-product.jsx';
import ErrorPage from './components/Error-page.jsx';
import SignIn from './UIs/Signin.jsx';
import SignUp from './UIs/Signup.jsx';
import ProtectedRoutes from './Portected-routes/index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/admin-panel" element={<App />} >
          <Route path="/admin-panel/add" element={<AddProduct />} />
          <Route path="/admin-panel/update" element={<UpdateProduct />} />
          <Route path="/admin-panel/delete" element={<DeleteProduct />} />
          <Route path="/admin-panel" element={<SearchProduct />} />
        </Route>
        {/* </Route> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={< SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)