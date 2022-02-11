

import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import Carousel from 'react-bootstrap/Carousel'


function BookList() {
  const books = useSelector((state) => state.bookReducer.books);
  
  
  return (
    <div>
      <Carousel>
      {books.map((book) => (
        <Carousel.Item>
        <BookCard  book={book}  key={book._id} ></BookCard>
        </Carousel.Item>
      ))}
      </Carousel>
    </div>
  );
}

export default BookList;