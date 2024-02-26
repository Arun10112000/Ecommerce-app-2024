import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/cart";
import toast from 'react-hot-toast';
import "../Style/SearchStyle.css";
const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();

  const navigate = useNavigate();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text">
          <h1 className="text-center">Search Resuts</h1>
          <h6 className="text-center">
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-10 search-products" >
            {values?.results.map((p) => (
              <div className="card m-2"  style={{ width: "250px", height:"370px" }}>
                <img
                  style={{height:"250px", width:"250px"}}
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-price"> ₹ {p.price}</p>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  {/* <button class="btn btn-primary ms-1" 
                  
                  >More Details</button> */}
                  <button
                    className="btn btn-info ms-1 bt"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  {/* <button class="btn btn-secondary ms-1">ADD TO CART</button> */}
                  <button className="btn btn-dark bt" onClick={() => {
                      setCart([...cart,p]);
                      localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                      toast.success("Item Added To Cart");
                      }}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
