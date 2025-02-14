import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
    
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]);
   

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600' >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> 
        </div>
    
    </div>
  )
}

export default LatestCollection