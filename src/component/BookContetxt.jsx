import { createContext, useState } from "react";
import { books } from "../data";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [data, setData] = useState(books);
  const [searchBook, setSearchBook] = useState([]);

  const getShelves = data.reduce(
    (acc, curr) => (acc.includes(curr.shelves) ? acc : [...acc, curr.shelves]),
    []
  );

  const addToShelves = (bookId, event) => {
    const newShelves = event;
    const updatedShelves = data.map((book) =>
      book.id === bookId ? { ...book, shelves: newShelves } : book
    );
    setData(updatedShelves);
  };

  const values = {
    data,
    setData,
    searchBook,
    setSearchBook,
    getShelves,
    addToShelves,
  };

  return (
    <>
      {" "}
      <BookContext.Provider value={values}>
        {" "}
        {children}{" "}
      </BookContext.Provider>{" "}
    </>
  );
};
