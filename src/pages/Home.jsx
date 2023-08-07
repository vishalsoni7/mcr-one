import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../component/BookContetxt";

export const Home = () => {
  const { getShelves, addToShelves, data } = useContext(BookContext);

  return (
    <div>
      <h2>
        <NavLink className="link" to="/search">
          Click to Search
        </NavLink>
      </h2>

      <div>
        {getShelves?.map((shelve) => (
          <div key={shelve}>
            <h2> {shelve} </h2>
            <div className="content-div">
              {data.map(
                (book) =>
                  book.shelves === shelve && (
                    <div key={book.id} className="content-inner-div">
                      <div className="img-div">
                        <img src={book.image} alt={book.shelves} />{" "}
                        <select
                          onChange={(e) =>
                            addToShelves(book.id, e.target.value)
                          }
                        >
                          {getShelves.map((s) => (
                            <option key={s}> {s} </option>
                          ))}
                        </select>
                      </div>
                      <b> {book.title} </b>
                      <b className="author"> {book.author} </b>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
