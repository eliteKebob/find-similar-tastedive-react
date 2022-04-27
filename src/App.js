import { useState } from "react"
import axios from "axios"
import Header from "./components/Header"
import TypeBar from "./components/TypeBar"
import SearchBar from "./components/SearchBar"
import Results from "./components/Results"
import Loading from "./components/Loading"

function App() {
  const [type, setType] = useState("everything")
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState("")

  const findSimilar = async () => {
    setLoading(true)
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
        setLoading(false)
        setSearchResults(response.data)
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const handleClear = () => {
    setSearchResults("")
    setQuery("")
    setType("")
  }

  return (
    <>
      <Header />
      <TypeBar type={type} setType={setType} />
      <SearchBar query={query} setQuery={setQuery} findSimilar={findSimilar} />
      <div className="wrapper">
        {loading ? <Loading /> : ""}
        {searchResults !== "" ? (
          <button onClick={() => handleClear()}>Clear All</button>
        ) : (
          ""
        )}
        {searchResults !== "" ? <Results searchResults={searchResults} /> : ""}
      </div>
    </>
  )
}

export default App
