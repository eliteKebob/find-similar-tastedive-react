import loading from "../assets/loading.png"

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading" className="animated" />
      <p className="animated">Loading...</p>
    </div>
  )
}
export default Loading
