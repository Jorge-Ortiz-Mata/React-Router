import { useParams, Link } from 'react-router-dom';

const ProductPage = () => {
  const params = useParams();

  return(
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center my-5">Product Page</h1>
      <p>This is your product: {params.id}</p>
      <Link to=".." relative='path'>Go back</Link>
    </div>
  )
}

export default ProductPage;
