import { FaWikipediaW } from "react-icons/fa"
import SimilarResult from "./SimilarResult"

const Results = ({ searchResults }) => {
  return (
    <div className="results">
      <div className="main-result">
        {searchResults?.Similar?.Info.length < 1 ? (
          <h1>No Results, Try Again</h1>
        ) : (
          ""
        )}
        <div className="mr-info">
          <div className="mr-title">
            <h2>{searchResults?.Similar?.Info[0]?.Name}</h2>
            <span>{searchResults?.Similar?.Info[0]?.Type}</span>
          </div>
          <p>{searchResults?.Similar?.Info[0]?.wTeaser}</p>
          <div className="mr-wiki">
            <FaWikipediaW />{" "}
            <a href={searchResults?.Similar?.Info[0]?.wUrl}>
              {searchResults?.Similar?.Info[0]?.Name} Wikipedia
            </a>
          </div>
        </div>
        <div className="mr-video">
          <iframe
            width="480"
            height="270"
            src={searchResults?.Similar?.Info[0]?.yUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h1>You might also like these</h1>
      {searchResults?.Similar?.Results?.length < 1 ? (
        <h1>No Results, Try Again</h1>
      ) : (
        ""
      )}
      <div className="similar-results">
        {searchResults?.Similar?.Results?.map((result, idx) => (
          <SimilarResult result={result} key={idx} />
        ))}
      </div>
    </div>
  )
}
export default Results
