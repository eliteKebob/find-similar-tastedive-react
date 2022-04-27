const SimilarResult = ({ result }) => {
  return (
    <div className="similar-result">
      <h3>{result?.Name}</h3>
      <span>{result?.Type}</span>
      <iframe
        width="360"
        height="200"
        src={result?.yUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <a href={result?.wUrl}>{result?.Name} Wikipedia</a>
    </div>
  )
}
export default SimilarResult
