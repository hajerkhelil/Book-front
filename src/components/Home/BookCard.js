import React from "react";
import { useDispatch } from "react-redux";
import { getbook } from "../../redux/actions/bookactions";
import "../../Style/BookCard.css";
import { Link, useNavigate } from 'react-router-dom';

function BookCard({ book }) {
  const dispatch = useDispatch();
const navigate=useNavigate()

  return (
    <div className="container d-flex justify-content-center mt-100">
    <div className="row">
      <div className="col-md-3">
        <div className="product-wrapper mb-45 text-center">
          <div className="product-img">
            {" "}
            <a href=" " data-abc="true">    
              {" "}
              <img src={book.images} alt="" />{" "}
            </a>
            <div className="product-action">
              <div className="product-action-style">
                {" "}

                <a   onClick={()=>{dispatch(getbook(book._id))   ; navigate('/BookDetails') }}>
                  {" "}
                  bty
                  {/* <i className="fa fa-plus" />{" "} */}
                </a>{" "}

                <a href=" ">
                  {" "}
                  <i className="fa fa-heart" />{" "}
                </a>{" "}

                <a href=" ">
                  {" "}
                  <i className="fa fa-shopping-cart" />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
  );
}

export default BookCard;
