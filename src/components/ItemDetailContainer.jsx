import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.jsx';
import EcommerceCard from './EcommerceCard.jsx';

const URL = 'https://dummyjson.com/products/';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetch(URL, id);

  const getProductId = () => {
    console.log(id);
  };
  console.log(product);
  if (loading) {
    return <p className='text-center text-2xl dark:text-white'>Loading...</p>;
  }
  return (
    <div className='flex justify-center items-center mt-5'>

     <EcommerceCard
     product={product}
     getProductId={getProductId}
     />
     </div>
  );
};

export default ItemDetailContainer;
