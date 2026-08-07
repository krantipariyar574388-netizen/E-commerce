import { Link } from "react-router";

const Nav = () => {
  return (
    <nav style = {{ display : "flex", gap : "10px", justifyContent : "center"}}>
        <Link to="/">
            <span>Home</span>
        </Link>
        <Link to="/about">
            <span>About</span>
        </Link>
        <Link to="/product">
            <span>Product</span>
        </Link>
        <Link to="/contact">
            <span>Contact</span>
        </Link>
    </nav>
  )
}

export default Nav;