import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about')
  }

  return(
    <>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <button className="border bg-gray-300 text-sm font-bold p-2 rounded" onClick={handleClick}>Navigate</button>
    </>
  )
}

export default Home;
