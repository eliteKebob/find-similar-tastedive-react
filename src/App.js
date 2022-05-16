import { useState, useReducer } from "react"
import axios from "axios"
import Header from "./components/Header"
import TypeBar from "./components/TypeBar"
import SearchBar from "./components/SearchBar"
import Results from "./components/Results"
import Loading from "./components/Loading"
import { reducer } from "./reducer.js"

const initialState = {
  searchResults: "",
  loading: false,
  query: "",
  type: "everything",
  error: "",
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { searchResults, loading, error } = state
  const [type, setType] = useState("everything")
  const [query, setQuery] = useState("")

  const findSimilar = async () => {
    dispatch({ type: "FETCH_START" })
    try {
      let config = {
        method: "get",
        url: `https://rocky-wildwood-04444.herokuapp.com/https://tastedive.com/api/similar`,
        params: {
          q: `${query}`,
          type: `${type}`,
          limit: "12",
          info: "1",
          k: "436078-findsimi-17Y2JY9H",
        },
      }
      const response = await axios(config)
      if (response.data) {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data })
        console.log(response.data)
      }
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: "Network Error" })
      console.log(error)
    }
  }

  const handleClear = () => {
    dispatch({ type: "STATE_CLEAR" })
    setQuery("")
    setType("")
  }

  return (
    <>
      <Header />
      <TypeBar type={type} setType={setType} />
      <SearchBar
        query={query}
        setQuery={setQuery}
        findSimilar={findSimilar}
        loading={loading}
      />
      <div className="wrapper">
        {loading ? <Loading /> : ""}
        {error ? <p>{error}</p> : ""}
        {searchResults !== "" && (
          <button onClick={() => handleClear()}>Clear All</button>
        )}
        {searchResults !== "" ? <Results searchResults={searchResults} /> : ""}
      </div>
    </>
  )
}

export default App
