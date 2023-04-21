import { Link } from "react-router-dom";

const About = () => {

  return(
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center my-5">About Page</h1>
      <ul className="flex flex-col gap-5">
        <li className="underline font-semibold text-sm">
          <Link to="/products/1">
            Product 01
          </Link>
        </li>
        <li className="underline font-semibold text-sm">
          <Link to="/products/2">
            Product 02
          </Link>
        </li>
        <li className="underline font-semibold text-sm">
          <Link to="/products/3">
            Product 03
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default About;
