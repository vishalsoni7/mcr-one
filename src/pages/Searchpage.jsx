import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../component/BookContetxt";

export const Search = () => {
  const { searchBook, data, getShelves, setSearchBook, addToShelves } =
    useContext(BookContext);

  const handleSearch = (e) => {
    const searchedInput = e.target.value;
    const filterBooks = data.filter(({ title }) =>
      title.toLowerCase().includes(searchedInput)
    );
    searchedInput === "" ? setSearchBook() : setSearchBook(filterBooks);
  };

  return (
    <div>
      <h2>
        <NavLink className="link" to="/">
          Go to Shelves{" "}
        </NavLink>{" "}
      </h2>
      <input type="text" onChange={handleSearch} />

      <div className="content-div">
        {searchBook?.map((book) => (
          <div key={book.id} className="content-inner-div">
            <div className="img-div">
              <img src={book.image} alt={book.shelves} />{" "}
              <select onChange={(e) => addToShelves(book.id, e.target.value)}>
                {getShelves.map((s) => (
                  <option> {s} </option>
                ))}
              </select>
            </div>
            <b> {book.title} </b>
            <b className="author"> {book.author} </b>
          </div>
        ))}
      </div>
    </div>
  );
};
