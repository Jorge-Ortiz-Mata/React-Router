import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about')
  }

  return(
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center my-5">Home Page</h1>
      <button className="border bg-gray-300 text-sm font-bold p-2 rounded" onClick={handleClick}>Navigate</button>
    </div>
  )
}

export default Home;
