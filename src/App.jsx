import { NavLink, Outlet } from 'react-router'
import './App.css'
import ProductCard from './components/Product-card'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let cleanFn = async () => {
      let response = await fetch("http://localhost:3000/get-products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      let data = response;
      setData(data)
    }

    // return () => cleanFn();
  }, [])
  console.log(data);

  return (
    <>
      <div className="nav-con">
        <nav>
          <div className="msg">Welcome Admin [user name]</div>
        </nav>
      </div>
      <div className="opreations">
        <NavLink to="add"><button style={{ backgroundColor: "#0ec90e" }}>Add</button></NavLink>
        <NavLink to="update"><button style={{ backgroundColor: "#5f5fe7" }}>Update</button></NavLink>
        <NavLink to="delete"><button style={{ backgroundColor: "#ff4141" }}>Delete</button></NavLink>
        <NavLink to="/"><button style={{ backgroundColor: "rgb(94 86 86 / 71%)" }}>Search</button></NavLink>
      </div>
      <div className="con">
        <div className="op-action">
          <Outlet />
        </div>
        <div className="get-result">
          <center><h1>Products List</h1></center>
          <br />
          <div className={data.length > 0 ? "products" : ""}>
            {data.length > 0 ?
              data.map((items) => {
                return (<ProductCard key={items.id} proId={items.id} proName={items.productname} proPrice={items.productprice} />
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
