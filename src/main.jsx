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
import ProtectedRoutes from './Portected-routes/ProtectedRoute';
import PublicRoute from './Portected-routes/PublicRoute.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-panel" element={<ProtectedRoutes><App /></ProtectedRoutes>} >
            <Route path="/admin-panel/add" element={<AddProduct />} />
            <Route path="/admin-panel/update" element={<UpdateProduct />} />
            <Route path="/admin-panel/delete" element={<DeleteProduct />} />
            <Route path="/admin-panel" element={<SearchProduct />} />
          </Route>

          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/" element={<PublicRoute>< SignIn /></PublicRoute>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode >,
)