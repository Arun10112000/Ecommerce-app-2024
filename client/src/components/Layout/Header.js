import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import toast  from "react-hot-toast";
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import {Badge} from 'antd';

const Header = () => {
  const [auth,setAuth] = useAuth();
  const [cart,setCart] = useCart();
  const categories = useCategory();


  const handleLogout = () => {
    setAuth({
      ...auth,
       user:null,
       token:'',
    })
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 fixed-top">
        <div className="container-fluid"  
        style={{backgroundColor:"#2455f4", paddingTop:"8px", paddingBottom:"8px"}}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" style={{color: "white",
  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>
              🛒E-Shop
              {/* <img src="/images/flipkart.jpeg" style={{height:"50px", width:"180px"}} /> */}
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput/>
              <li className="nav-item">
                <NavLink to="/" className="nav-link " style={{margin:"0 10px", color:"white"}}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                  style={{color:"white"}}
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" 
                    to={"/categories"}
                    >
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                       to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" style={{color:"white"}}>
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" style={{color:"white"}}>
                    {/* <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" className="-dOa_b L_FVxe" style={{width:"24", height:"24"}} /> */}

                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", margin:"0 5px", color:"white" }}
                    
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu"
                    >
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                        
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
              
         
                <NavLink to="/cart" style={{margin:"0 10px"}} className="nav-link">
                  <Badge count={cart?.length} style={{marginLeft:"5px"}} showZero offset={[10, -5]}>
                    <span style={{color:"white", fontWeight:"500"}}>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" className="_1XmrCc" style={{width:"24", height:"24"}} />

                    Cart</span>
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;