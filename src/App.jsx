import { NavLink, Outlet, useNavigate } from 'react-router'
import './App.css'
import ProductCard from './components/Product-card'
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './redux/slices/productsDataSlice';

function App() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const userEmail = window.localStorage.getItem("userEmail");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoader(true)
      const response = await fetch("http://localhost:3000/get", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userEmail })
      })
      const data = await response.json();
      dispatch(setProducts(data));
      setLoader(false)
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      {loader && <Loader />}
      <div className="nav-con">
        <nav>
          <div className="msg1">Welcome Admin [ {userEmail} ]</div>
          <pre>       </pre>
          <div className="msg" onClick={
            () => {
              window.localStorage.removeItem("token")
              window.localStorage.removeItem("userEmail")
              navigate("/")
            }
          }>SignOut</div>
        </nav>
      </div>
      <div className="opreations">
        <NavLink end className={({ isActive }) => isActive ? "active" : ""} to="add"><button style={{ backgroundColor: "#0ec90e" }}>Add</button></NavLink>
        <NavLink end className={({ isActive }) => isActive ? "active" : ""} to="update"><button style={{ backgroundColor: "#5f5fe7" }}>Update</button></NavLink>
        <NavLink end className={({ isActive }) => isActive ? "active" : ""} to="delete"><button style={{ backgroundColor: "#ff4141" }}>Delete</button></NavLink>
        <NavLink end className={({ isActive }) => isActive ? "active" : ""} to="/admin-panel"><button style={{ backgroundColor: "rgb(94 86 86 / 71%)" }}>Search</button></NavLink>
      </div>
      <div className="con">
        <div className="op-action">
          <Outlet />
        </div>
        <div className="get-result">
          <center><h1>Products List</h1></center>
          <br />
          <div className={products.length > 0 ? "products" : ""}>
            {products.length > 0 ?
              products.map((items) => {
                return (<ProductCard
                  key={items.id}
                  proId={items.id}
                  proName={items.productname}
                  proPrice={items.productprice}
                  imgSrc={items.productpicurl}
                />
                )
              }) : <div className="no-products">
                <h1>No Products Found</h1>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App