import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useGetProductsById = (id) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const documentRef = doc(db, 'products', id);

    getDoc(documentRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        const product = {
          id: snapshot.id,
          ...data,
        };

        setProducts(product);
      }
    }).catch((err) => console.error(err));
  }, []);
  return { products };
};

export default useGetProductsById;
