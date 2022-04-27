const TypeBar = ({ type, setType }) => {
  return (
    <div className="type-bar">
      <div className="types">
        <span
          className={type === "everything" ? "selected-type" : ""}
          onClick={() => setType("everything")}
        >
          Everything
        </span>
        <span
          className={type === "movies" ? "selected-type" : ""}
          onClick={() => setType("movies")}
        >
          Movies
        </span>
        <span
          className={type === "music" ? "selected-type" : ""}
          onClick={() => setType("music")}
        >
          Music
        </span>
        <span
          className={type === "shows" ? "selected-type" : ""}
          onClick={() => setType("shows")}
        >
          TV Shows
        </span>
        <span
          className={type === "books" ? "selected-type" : ""}
          onClick={() => setType("books")}
        >
          Books
        </span>
        <span
          className={type === "authors" ? "selected-type" : ""}
          onClick={() => setType("authors")}
        >
          Authors
        </span>
        <span
          className={type === "games" ? "selected-type" : ""}
          onClick={() => setType("games")}
        >
          Games
        </span>
        <span
          className={type === "podcasts" ? "selected-type" : ""}
          onClick={() => setType("podcasts")}
        >
          Podcasts
        </span>
      </div>
    </div>
  )
}
export default TypeBar
