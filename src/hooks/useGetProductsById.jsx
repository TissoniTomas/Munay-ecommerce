import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useGetProductsById = (id) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga

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
    }).catch((err) => console.error(err))
      .finally(() => {
        setLoading(false); // Después de la solicitud, ocultamos el indicador de carga
      });
  }, [id]);
  return { products, loading };
};

export default useGetProductsById;
