import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const productsCollectionRef = collection(db, 'products');

    getDocs(productsCollectionRef).then((querySnapshot) => {
      const productsData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const product = {
          id: doc.id,
          ...data,
        };
        productsData.push(product);
      });
      setProducts(productsData);
    }).catch((err) => console.error(err));
  }, []);

  return { products };
};

export default useGetProducts;
