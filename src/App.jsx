import { NavLink, Outlet } from 'react-router'
import './App.css'
import ProductCard from './components/Product-card'

function App() {

  let results = [
    {
      id: "1",
      name: "aaaa",
      price: "300"
    },
    {
      id: "122",
      name: "a3333333aaa",
      price: "30044"
    },
    {
      id: "4444441",
      name: "aaaa4444444",
      price: "3004444444"
    },
  ];

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
          <div className="prodcts">
            {results.length > 0 ?
              results.map((items) => {
                return (<ProductCard key={items.id} proId={items.id} proName={items.name} proPrice={items.price} />
                )
              }) : <h1>no products</h1>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
